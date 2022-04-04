import styles from './index.less';
import Iconfont from '@/components/Iconfont';
import { Upload, message, Spin, Modal, Menu, Dropdown, Button, Form, Input } from 'antd';
import { Channel } from '@/utils/cluster/fileImport';
import Card from '../Card';
import { connect } from 'dva';
import { Cluster } from '@nftstorage/ipfs-cluster';
import { IPFS_URL_ADD, CLUSTER_URL_PINS } from '@/utils/cluster/config';
import Contract, { client } from '@/utils/contract';
import { useState } from 'react';
import { cidToSid } from '@/utils/common';
import { create } from 'ipfs-http-client';
import { checkFileType } from '@/utils/files/sylEncryption';
import all from 'it-all';
import axios from 'axios';
import file from '@/pages/menu/file';

interface Props {
  title: string;
  reloadTable?: Function;
  setFileModelDisplay: Function;
  setFileDownloadStatus: Function;
  floderType?: string;
}

const ImportFiles: React.FC<Props> = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [inputNodeType, setInputNodeType] = useState(0);
  const [isShowAddNodeModal, setIsShowAddNodeModal] = useState(false);
  const [addNodeConfirmLoading, setAddNodeConfirmLoading] = useState(false);
  const [addNodeFormMessage,setAddNodeFormMessage] = useState({
    nodeName:'',
    nodeAddress:''
  })
  let { contract, getID } = Contract;
  let filesInput: any;

  const change = async (e: any) => {
    console.log(e);

    const files = filesInput.files;
    const onStoredChunk = (chunkSize: any) => {
      props.dispatch({
        type: 'fileModelInfo/save',
        state: {
          fileModelDisplay: 'open',
          fileDownloadStatus: {
            progress: (chunkSize / files[0].size) * 100,
            fileName: files[0].name,
            filesize: files[0].size,
            type: 'Parsing',
          },
        },
      });
    };
    if (files.length === 0) {
      message.warning('Select File To Upload!');
      return;
    }
    if (loading) return;
    try {
      // props.setFileModelDisplay(true);
      props.dispatch({
        type: 'fileModelInfo/save',
        state: {
          fileModelDisplay: 'open',
          fileDownloadStatus: {
            progress: 0,
            fileName: files[0].name,
            filesize: files[0].size,
            type: 'Parsing',
          },
        },
      });
      let cid = '';
      if (inputNodeType == 1) {
        cid = await client.put(files, { onStoredChunk });
        console.log(cid);
      } else if (inputNodeType == 2) {
        const IPFSClient = create({ url: IPFS_URL_ADD });
        const cluster = new Cluster(CLUSTER_URL_PINS);
        const IPFSCid = await IPFSClient.add({ content: files[0] });
        cid = IPFSCid.cid.toString();
      }

      let type = [];
      if (props.floderType === 'newFloder') {
        type = [checkFileType(files[0].name), props.title];
      } else {
        type = [checkFileType(files[0].name)];
      }
      const tableObj = {
        cid: cid,
        file_name: files[0].name,
        file_size: files[0].size,
        file_type: files[0].type,
        file_owner_folder: type,
      };

      props.dispatch({
        type: 'fileModelInfo/save',
        state: {
          fileModelDisplay: 'open',
        },
      });
      await contract.store(tableObj);
      props.dispatch({
        type: 'fileModelInfo/save',
        state: {
          fileDownloadStatus: {
            progress: 100,
            fileName: files[0].name,
            filesize: files[0].size,
            type: 'Success',
            initObj: {
              ...tableObj,
              created: new Date().getTime() + '000000',
            },
          },
        },
      });
      props.reloadTable();
    } catch (error: any) {
      console.log(error);

      if (error.Error == 'filesRepetition') {
        message.warning('Files exist on the blockchain,Do Not Upload Again!');
      } else {
        message.error('Error');
      }
      props.dispatch({
        type: 'fileModelInfo/save',
        state: {
          fileDownloadStatus: {
            progress: 100,
            fileName: files[0].name,
            filesize: files[0].size,
            initObj: null,
            type: 'Error',
          },
        },
      });
    }
  };
  const addNodeMessageOK = async ()=>{
    setAddNodeConfirmLoading(true)
    setAddNodeConfirmLoading(false)
    setIsShowAddNodeModal(false)
    setAddNodeFormMessage({
      nodeName:'',
      nodeAddress:''
    })
  }
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          setInputNodeType(1);
          filesInput.click();
        }}
      >
        WEB3 Node
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setInputNodeType(2);
          filesInput.click();
        }}
      >
        IPFS Node
      </Menu.Item>
      <Menu.Item onClick={() => setIsShowAddNodeModal(true)}>
        Add node{' '}
        <Iconfont type="icon-daoruwenjian1" size={16} color="rgba(255, 255, 255, 0.8)"></Iconfont>
      </Menu.Item>
    </Menu>
  );
  return (
    <Card
      borderAnimation={true}
      className={styles.card}
      background="linear-gradient(178deg, rgb(22, 23, 25) 0%, rgb(32, 38, 42) 100%)"
      defaultBorder={false}
    >
      {/* <Upload {...uploadProps} maxCount={1} showUploadList={false} onChange={change}> */}
      <Modal
        title="Add user-defined Node"
        visible={isShowAddNodeModal}
        onOk={addNodeMessageOK}
        onCancel={() => setIsShowAddNodeModal(false)}
        confirmLoading={addNodeConfirmLoading}
        cancelText='Cancel'
        okText='OK'
      >
        <div className={styles.addMessageModal}>
         <div className={styles.addMessageModalList}>
            <span>Node Name:</span>
            <input onChange={(e)=>{
              setAddNodeFormMessage({
                ...addNodeFormMessage,
                nodeName:e.target.value
              })
            }} type="text" />
         </div>
         <div className={styles.addMessageModalList}>
            <span>Node Address:</span>
            <input type="text" onChange={(e)=>setAddNodeFormMessage({
              ...addNodeFormMessage,
              nodeAddress:e.target.value
            })} />
         </div>
         
        </div>
      </Modal>
      <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
        <Button>
          <Iconfont type="icon-daoruwenjian1" size={16} color="rgba(255, 255, 255, 0.8)"></Iconfont>
          UPload
        </Button>
      </Dropdown>
      {/* <div
        className={styles.ImportButton}
        onClick={() => {
          // filesInput.click();
          setIsShowImportChooseModal(true);
        }}
      >
        <div className={styles.addIconBox}>
          <Iconfont type="icon-daoruwenjian1" size={16} color="rgba(255, 255, 255, 0.8)"></Iconfont>
        </div>
        <Spin spinning={false} size="small">
          <div className={styles.title}>Upload</div>
        </Spin>
      </div> */}
      {/* </Upload> */}
      <input
        type="file"
        onChange={change}
        className={styles.displayNone}
        ref={(el) => {
          filesInput = el;
        }}
      />
    </Card>
  );
};
function mapStateToProps(state: any) {
  const { token } = state.globalTop;
  return {
    // dispatch,
    token,
  };
}
export default connect(mapStateToProps)(ImportFiles);
