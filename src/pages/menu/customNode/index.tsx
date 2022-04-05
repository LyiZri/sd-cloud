import styles from './index.less';
import { connect } from 'dva';
import { Card, Switch, message } from 'antd';
import { useState, useEffect } from 'react';
import { create } from 'ipfs-http-client';
import Contract from '@/utils/contract';
interface Props {}

const Page: React.FC<Props> = (props) => {
  const { contract, getID } = Contract;
  const [userNodeList, setUserNodeList] = useState([
    {
      node_name: 'first node',
      custom_node: 'http://122.114.19.250:8000/api/v0/add',
    },
    {
      node_name: 'second node',
      custom_node: 'http://122.114.188.250:25001/api/v0/add',
    },
    {
      node_name: 'third node',
      custom_node: 'http://133.144.23.250:25001/api/v0/add',
    },
  ]);
  const [userNodeInfo, setUserNodeInfo] = useState({
    node_name: '',
    custom_node: '',
    pubilc_node: false,
  });
  const [checkStatus, setCheckStatus] = useState({
    isCheck: false,
    checked: 0,
  });
  useEffect(() => {
    (async () => {
      const data = JSON.parse(await contract.view_account({ did: `did:near:${getID}` }));
      console.log(data);
      setUserNodeList([
        ...userNodeList,
        {
          node_name: data.account.account_custom_node_name,
          custom_node: data.account.account_custom_node,
        },
      ]);
    })();
  }, []);
  const addNode = async () => {
    if (checkStatus.checked !== 1) {
      message.warning('Be sure to pass the node test');
      return;
    }
    if (userNodeInfo.node_name == '' || userNodeInfo.custom_node == '') {
      message.warning('Please complete the form information');
      return;
    }
    setCheckStatus({
      ...checkStatus,
      isCheck: true,
    });
    try {
      await contract.save_account_custom_node({
        node_name: userNodeInfo.node_name,
        custom_node: userNodeInfo.custom_node,
      });
      setUserNodeList([
        ...userNodeList,
        {
          node_name: userNodeInfo.node_name,
          custom_node: userNodeInfo.custom_node,
        },
      ]);
      setCheckStatus({
        isCheck: false,
        checked: 1,
      });
    } catch (error) {
      setCheckStatus({
        isCheck: false,
        checked: 2,
      });
    }
  };
  const checkNode = async () => {
    setCheckStatus({
      ...checkStatus,
      isCheck: true,
    });
    try {
      const IPFSClient = create({ url: userNodeInfo.custom_node });
      const IPFSCid = await IPFSClient.add('hello world');
      setCheckStatus({
        isCheck: false,
        checked: 1,
      });
    } catch (error) {
      setTimeout(() => {
        setCheckStatus({
          isCheck: false,
          checked: 2,
        });
      }, 1000);
    }
  };
  return (
    <div className={styles.customNode}>
      <div className={styles.leftList}>
        <Card title="Node Address List" bordered={false} style={{ width: 500, height: '600px' }}>
          <ul style={{ height: '500px', overflowY: 'auto' }}>
            {userNodeList.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <div>
                    <p>
                      <span className={styles.title}>Node Name:</span>
                      <span className={styles.context}>{item.node_name}</span>
                    </p>
                    <p>
                      <span className={styles.title}>Custom Node:</span>
                      <span className={styles.context}>{item.custom_node}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
      <div className={styles.rightForm}>
        <Card
          title="Custom node"
          extra={
            <button onClick={addNode} className={styles.addButton}>
              ADD
            </button>
          }
          bordered={false}
          style={{ width: 500, minHeight: '600px' }}
        >
          <div className={styles.form}>
            <div className={styles.inputBox}>
              <span className={styles.title}>Node Name :</span>
              <input
                type="text"
                onChange={(e) => {
                  setUserNodeInfo({
                    ...userNodeInfo,
                    node_name: e.target.value,
                  });
                }}
              />
            </div>
            <div className={styles.inputBox}>
              <span className={styles.title}>Custom Node :</span>
              <input
                type="text"
                onChange={(e) => {
                  setUserNodeInfo({
                    ...userNodeInfo,
                    custom_node: e.target.value,
                  });
                }}
              />
            </div>
            <div className={styles.inputBox}>
              <span className={styles.title}>Public node</span>
              <Switch
                onChange={(e) => {
                  setUserNodeInfo({
                    ...userNodeInfo,
                    pubilc_node: e,
                  });
                }}
              />
            </div>
            <div className={styles.checkedBox}>
              {!checkStatus.isCheck && checkStatus.checked == 0 && (
                <span onClick={checkNode}>CHECK</span>
              )}
              {!checkStatus.isCheck && checkStatus.checked == 1 && (
                <span style={{ color: 'rgb(0,184,196)' }}>SUCCESS</span>
              )}
              {!checkStatus.isCheck && checkStatus.checked == 2 && (
                <span onClick={checkNode} style={{ color: 'rgb(253.53.53)' }}>
                  ERROR
                </span>
              )}
              {checkStatus.isCheck && (
                <img
                  src="https://images.twgreatdaily.com/images/image/Rzs/Rzswym4BMH2_cNUgOL09.jpg"
                  alt=""
                />
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

function mapStateToProps(state: any) {
  const { token } = state.globalTop;
  return {
    token,
  };
}

let connectName = connect(mapStateToProps)(Page);
// connectName.wrappers = ['@/auth/login'];

export default connectName;
