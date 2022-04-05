import styles from './index.less';
import { connect } from 'dva';
import { useState, useEffect } from 'react';
import './index.scss';
interface Props {}

const Page: React.FC<Props> = (props) => {
  const [windowHeight, setWindowHeight] = useState(969);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    console.log(window.innerHeight);
  }, [window.innerHeight]);

  return (
    <div className={styles.Web3Item} style={{ height: windowHeight }}>
      <div className={styles.Intro}>
        <div className={styles.titleBox}>
          Web3<div> Storage</div>
        </div>
      </div>
        <div className={styles.firstIntro}>
          <p >The <span>Easiest Way</span>  to store data on the <span>Decentralized Web</span> .</p>
          <p><span>SDCloud</span> offers a simple <span>Web3 Storage</span>  interface that allows users and developers to take advantage of the vast array of decentralized storage provided by the <span>Filecoin Network</span> .</p>
        </div>
        <div className={styles.secondIntro}>
          <p>The unique economics of <span>Filecoin</span> allow <span>SDCloud</span>  to be completely free to use, while still ensuring that storage providers have a <span>Strong Incentive</span>  to preserve user data for the long term.</p>
        </div>
      <div className="container">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          height="99vh"
          viewBox="0 0 2000 1200"
          enable-background="new 0 0 2000 1200"
          xmlSpace="preserve"
        >
          <g>
            <line
              fill="none"
              stroke="#FF4D6B"
              stroke-width="3.4927"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              x1="355"
              y1="952"
              x2="1430.3"
              y2="315.4"
            />
          </g>
          <g>
            <g>
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="-26"
                y1="616"
                x2="2010"
                y2="616"
              >
                <stop offset="0" style={{ stopColor: '#202333' }} />
                <stop offset="1" style={{ stopColor: '#5C1B99' }} />
              </linearGradient>
              <linearGradient
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="-101.1755"
                y1="174.3284"
                x2="2085.1755"
                y2="1057.6716"
              >
                <stop offset="0" style={{ stopColor: '#202333' }} />
                <stop offset="1" style={{ stopColor: '#5C6399' }} />
              </linearGradient>

              <rect
                x="-26"
                y="-10"
                display="none"
                fill="url(#SVGID_1_)"
                stroke="url(#SVGID_2_)"
                stroke-miterlimit="10"
                width="2036"
                height="1252"
              />

              <linearGradient
                id="SVGID_3_"
                gradientUnits="userSpaceOnUse"
                x1="195.6219"
                y1="293.0284"
                x2="1744.3668"
                y2="918.762"
                gradientTransform="matrix(1 0 0 -1 0 1200)"
              >
                <stop offset="0" style={{ stopColor: '#202333' }} />
                <stop offset="1" style={{ stopColor: '#5C6399' }} />
              </linearGradient>
              <path
                display="none"
                opacity="0.75"
                fill="url(#SVGID_3_)"
                enable-background="new    "
                d="M498.7,1044.2l1.6,2.6l-4.3,2.6
			l-1.6-2.6L498.7,1044.2z M486.7,1051.6l1.6,2.6l4.3-2.6l-1.6-2.6L486.7,1051.6z M479.1,1056.3l1.6,2.6l4.3-2.6l-1.6-2.6
			L479.1,1056.3z M517.4,1032.7l1.6,2.6l4.3-2.6l-1.6-2.6L517.4,1032.7z M509.8,1037.4l1.6,2.6l4.3-2.6l-1.6-2.6L509.8,1037.4z
			 M502.1,1042.1l1.6,2.6l4.3-2.6l-1.6-2.6L502.1,1042.1z M540.5,1018.4l1.6,2.6l4.3-2.6l-1.6-2.6L540.5,1018.4z M532.8,1023.2
			l1.6,2.6l4.3-2.6l-1.6-2.6L532.8,1023.2z M525.1,1027.9l1.6,2.6l4.3-2.6l-1.6-2.6L525.1,1027.9z M563.5,1004.2l1.6,2.6l4.3-2.6
			l-1.6-2.6L563.5,1004.2z M555.8,1009l1.6,2.6l4.3-2.6l-1.6-2.6L555.8,1009z M548.2,1013.7l1.6,2.6l4.3-2.6l-1.6-2.6L548.2,1013.7z
			 M586.6,990l1.6,2.6l4.3-2.6l-1.6-2.6L586.6,990z M578.9,994.8l1.6,2.6l4.3-2.6l-1.6-2.6L578.9,994.8z M571.2,999.5l1.6,2.6
			l4.3-2.6l-1.6-2.6L571.2,999.5z M609.6,975.8l1.6,2.6l4.3-2.6l-1.6-2.6L609.6,975.8z M601.9,980.5l1.6,2.6l4.3-2.6l-1.6-2.6
			L601.9,980.5z M594.3,985.3l1.6,2.6l4.3-2.6l-1.6-2.6L594.3,985.3z M632.6,961.6l1.6,2.6l4.3-2.6l-1.6-2.6L632.6,961.6z
			 M625,966.3l1.6,2.6l4.3-2.6l-1.6-2.6L625,966.3z M617.3,971.1l1.6,2.6l4.3-2.6l-1.6-2.6L617.3,971.1z M655.7,947.4l1.6,2.6
			l4.3-2.6l-1.6-2.6L655.7,947.4z M648,952.1l1.6,2.6l4.3-2.6l-1.6-2.6L648,952.1z M640.4,956.8l1.6,2.6l4.3-2.6l-1.6-2.6
			L640.4,956.8z M678.7,933.2l1.6,2.6l4.3-2.6l-1.6-2.6L678.7,933.2z M671.1,937.9l1.6,2.6l4.3-2.6l-1.6-2.6L671.1,937.9z
			 M663.4,942.6l1.6,2.6l4.3-2.6l-1.6-2.6L663.4,942.6z M701.8,919l1.6,2.6l4.3-2.6l-1.6-2.6L701.8,919z M694.1,923.7l1.6,2.6
			l4.3-2.6l-1.6-2.6L694.1,923.7z M686.5,928.4l1.6,2.6l4.3-2.6l-1.6-2.6L686.5,928.4z M724.8,904.8l1.6,2.6l4.3-2.6l-1.6-2.6
			L724.8,904.8z M717.2,909.5l1.6,2.6l4.3-2.6l-1.6-2.6L717.2,909.5z M709.5,914.2l1.6,2.6l4.3-2.6l-1.6-2.6L709.5,914.2z
			 M747.9,890.6l1.6,2.6l4.3-2.6l-1.6-2.6L747.9,890.6z M740.2,895.3l1.6,2.6l4.3-2.6l-1.6-2.6L740.2,895.3z M732.5,900l1.6,2.6
			l4.3-2.6l-1.6-2.6L732.5,900z M770.9,876.4l1.6,2.6l4.3-2.6l-1.6-2.6L770.9,876.4z M763.2,881.1l1.6,2.6l4.3-2.6l-1.6-2.6
			L763.2,881.1z M755.6,885.8l1.6,2.6l4.3-2.6l-1.6-2.6L755.6,885.8z M794,862.1l1.6,2.6l4.3-2.6l-1.6-2.6L794,862.1z M786.3,866.9
			l1.6,2.6l4.3-2.6l-1.6-2.6L786.3,866.9z M778.6,871.6l1.6,2.6l4.3-2.6l-1.6-2.6L778.6,871.6z M817,847.9l1.6,2.6l4.3-2.6l-1.6-2.6
			L817,847.9z M809.3,852.7l1.6,2.6l4.3-2.6l-1.6-2.6L809.3,852.7z M801.7,857.4l1.6,2.6l4.3-2.6l-1.6-2.6L801.7,857.4z M840,833.7
			l1.6,2.6l4.3-2.6l-1.6-2.6L840,833.7z M832.4,838.5l1.6,2.6l4.3-2.6l-1.6-2.6L832.4,838.5z M824.7,843.2l1.6,2.6l4.3-2.6l-1.6-2.6
			L824.7,843.2z M863.1,819.5l1.6,2.6l4.3-2.6l-1.6-2.6L863.1,819.5z M855.4,824.2l1.6,2.6l4.3-2.6l-1.6-2.6L855.4,824.2z
			 M847.8,829l1.6,2.6l4.3-2.6l-1.6-2.6L847.8,829z M886.1,805.3l1.6,2.6l4.3-2.6l-1.6-2.6L886.1,805.3z M878.5,810l1.6,2.6l4.3-2.6
			l-1.6-2.6L878.5,810z M870.8,814.8l1.6,2.6l4.3-2.6l-1.6-2.6L870.8,814.8z M909.2,791.1l1.6,2.6l4.3-2.6l-1.6-2.6L909.2,791.1z
			 M901.5,795.8l1.6,2.6l4.3-2.6l-1.6-2.6L901.5,795.8z M893.9,800.5l1.6,2.6l4.3-2.6l-1.6-2.6L893.9,800.5z M932.2,776.9l1.6,2.6
			l4.3-2.6l-1.6-2.6L932.2,776.9z M924.5,781.6l1.6,2.6l4.3-2.6l-1.6-2.6L924.5,781.6z M916.9,786.3l1.6,2.6l4.3-2.6l-1.6-2.6
			L916.9,786.3z M955.3,762.7l1.6,2.6l4.3-2.6l-1.6-2.6L955.3,762.7z M947.6,767.4l1.6,2.6l4.3-2.6l-1.6-2.6L947.6,767.4z
			 M939.9,772.1l1.6,2.6l4.3-2.6l-1.6-2.6L939.9,772.1z M978.3,748.5l1.6,2.6l4.3-2.6l-1.6-2.6L978.3,748.5z M970.6,753.2l1.6,2.6
			l4.3-2.6l-1.6-2.6L970.6,753.2z M963,757.9l1.6,2.6l4.3-2.6l-1.6-2.6L963,757.9z M1001.4,734.3l1.6,2.6l4.3-2.6l-1.6-2.6
			L1001.4,734.3z M993.7,739l1.6,2.6l4.3-2.6l-1.6-2.6L993.7,739z M986,743.7l1.6,2.6l4.3-2.6l-1.6-2.6L986,743.7z M1024.4,720.1
			l1.6,2.6l4.3-2.6l-1.6-2.6L1024.4,720.1z M1016.7,724.8l1.6,2.6l4.3-2.6l-1.6-2.6L1016.7,724.8z M1009.1,729.5l1.6,2.6l4.3-2.6
			l-1.6-2.6L1009.1,729.5z M1047.4,705.8l1.6,2.6l4.3-2.6l-1.6-2.6L1047.4,705.8z M1039.8,710.6l1.6,2.6l4.3-2.6l-1.6-2.6
			L1039.8,710.6z M1032.1,715.3l1.6,2.6l4.3-2.6l-1.6-2.6L1032.1,715.3z M1070.5,691.6l1.6,2.6l4.3-2.6l-1.6-2.6L1070.5,691.6z
			 M1062.8,696.4l1.6,2.6l4.3-2.6l-1.6-2.6L1062.8,696.4z M1055.2,701.1l1.6,2.6l4.3-2.6l-1.6-2.6L1055.2,701.1z M1093.5,677.4
			l1.6,2.6l4.3-2.6l-1.6-2.6L1093.5,677.4z M1085.9,682.2l1.6,2.6l4.3-2.6l-1.6-2.6L1085.9,682.2z M1078.2,686.9l1.6,2.6l4.3-2.6
			l-1.6-2.6L1078.2,686.9z M1116.6,663.2l1.6,2.6l4.3-2.6l-1.6-2.6L1116.6,663.2z M1108.9,667.9l1.6,2.6l4.3-2.6l-1.6-2.6
			L1108.9,667.9z M1101.3,672.7l1.6,2.6l4.3-2.6l-1.6-2.6L1101.3,672.7z M1139.6,649l1.6,2.6l4.3-2.6l-1.6-2.6L1139.6,649z
			 M1131.9,653.7l1.6,2.6l4.3-2.6l-1.6-2.6L1131.9,653.7z M1124.3,658.5l1.6,2.6l4.3-2.6l-1.6-2.6L1124.3,658.5z M1162.7,634.8
			l1.6,2.6l4.3-2.6l-1.6-2.6L1162.7,634.8z M1155,639.5l1.6,2.6l4.3-2.6l-1.6-2.6L1155,639.5z M1147.3,644.2l1.6,2.6l4.3-2.6
			l-1.6-2.6L1147.3,644.2z M1185.7,620.6l1.6,2.6l4.3-2.6l-1.6-2.6L1185.7,620.6z M1178,625.3l1.6,2.6l4.3-2.6l-1.6-2.6L1178,625.3z
			 M1170.4,630l1.6,2.6l4.3-2.6l-1.6-2.6L1170.4,630z M1208.8,606.4l1.6,2.6l4.3-2.6l-1.6-2.6L1208.8,606.4z M1201.1,611.1l1.6,2.6
			l4.3-2.6l-1.6-2.6L1201.1,611.1z M1193.4,615.8l1.6,2.6l4.3-2.6l-1.6-2.6L1193.4,615.8z M1231.8,592.2l1.6,2.6l4.3-2.6l-1.6-2.6
			L1231.8,592.2z M1224.1,596.9l1.6,2.6l4.3-2.6l-1.6-2.6L1224.1,596.9z M1216.5,601.6l1.6,2.6l4.3-2.6l-1.6-2.6L1216.5,601.6z
			 M1254.8,578l1.6,2.6l4.3-2.6l-1.6-2.6L1254.8,578z M1247.2,582.7l1.6,2.6l4.3-2.6l-1.6-2.6L1247.2,582.7z M1239.5,587.4l1.6,2.6
			l4.3-2.6l-1.6-2.6L1239.5,587.4z M1277.9,563.8l1.6,2.6l4.3-2.6l-1.6-2.6L1277.9,563.8z M1270.2,568.5l1.6,2.6l4.3-2.6l-1.6-2.6
			L1270.2,568.5z M1262.6,573.2l1.6,2.6l4.3-2.6l-1.6-2.6L1262.6,573.2z M1300.9,549.5l1.6,2.6l4.3-2.6l-1.6-2.6L1300.9,549.5z
			 M1293.3,554.3l1.6,2.6l4.3-2.6l-1.6-2.6L1293.3,554.3z M1285.6,559l1.6,2.6l4.3-2.6l-1.6-2.6L1285.6,559z M1324,535.3l1.6,2.6
			l4.3-2.6l-1.6-2.6L1324,535.3z M1316.3,540.1l1.6,2.6l4.3-2.6l-1.6-2.6L1316.3,540.1z M1308.7,544.8l1.6,2.6l4.3-2.6l-1.6-2.6
			L1308.7,544.8z M1347,521.1l1.6,2.6l4.3-2.6l-1.6-2.6L1347,521.1z M1339.4,525.9l1.6,2.6l4.3-2.6l-1.6-2.6L1339.4,525.9z
			 M1331.7,530.6l1.6,2.6l4.3-2.6l-1.6-2.6L1331.7,530.6z M1370.1,506.9l1.6,2.6l4.3-2.6l-1.6-2.6L1370.1,506.9z M1362.4,511.6
			l1.6,2.6l4.3-2.6l-1.6-2.6L1362.4,511.6z M1354.7,516.4l1.6,2.6l4.3-2.6l-1.6-2.6L1354.7,516.4z M1393.1,492.7l1.6,2.6l4.3-2.6
			l-1.6-2.6L1393.1,492.7z M1385.4,497.4l1.6,2.6l4.3-2.6l-1.6-2.6L1385.4,497.4z M1377.8,502.2l1.6,2.6l4.3-2.6l-1.6-2.6
			L1377.8,502.2z M1416.2,478.5l1.6,2.6l4.3-2.6l-1.6-2.6L1416.2,478.5z M1408.5,483.2l1.6,2.6l4.3-2.6l-1.6-2.6L1408.5,483.2z
			 M1400.8,487.9l1.6,2.6l4.3-2.6l-1.6-2.6L1400.8,487.9z M1439.2,464.3l1.6,2.6l4.3-2.6l-1.6-2.6L1439.2,464.3z M1431.5,469
			l1.6,2.6l4.3-2.6l-1.6-2.6L1431.5,469z M1423.9,473.7l1.6,2.6l4.3-2.6l-1.6-2.6L1423.9,473.7z M1462.2,450.1l1.6,2.6l4.3-2.6
			l-1.6-2.6L1462.2,450.1z M1454.6,454.8l1.6,2.6l4.3-2.6l-1.6-2.6L1454.6,454.8z M1446.9,459.5l1.6,2.6l4.3-2.6l-1.6-2.6
			L1446.9,459.5z M1485.3,435.9l1.6,2.6l4.3-2.6l-1.6-2.6L1485.3,435.9z M1477.6,440.6l1.6,2.6l4.3-2.6l-1.6-2.6L1477.6,440.6z
			 M1470,445.3l1.6,2.6l4.3-2.6l-1.6-2.6L1470,445.3z M1508.3,421.7l1.6,2.6l4.3-2.6l-1.6-2.6L1508.3,421.7z M1500.7,426.4l1.6,2.6
			l4.3-2.6l-1.6-2.6L1500.7,426.4z M1493,431.1l1.6,2.6l4.3-2.6l-1.6-2.6L1493,431.1z M1531.4,407.5l1.6,2.6l4.3-2.6l-1.6-2.6
			L1531.4,407.5z M1523.7,412.2l1.6,2.6l4.3-2.6l-1.6-2.6L1523.7,412.2z M1516.1,416.9l1.6,2.6l4.3-2.6l-1.6-2.6L1516.1,416.9z
			 M1554.4,393.2l1.6,2.6l4.3-2.6l-1.6-2.6L1554.4,393.2z M1546.8,398l1.6,2.6l4.3-2.6l-1.6-2.6L1546.8,398z M1539.1,402.7l1.6,2.6
			l4.3-2.6l-1.6-2.6L1539.1,402.7z M1577.5,379l1.6,2.6l4.3-2.6l-1.6-2.6L1577.5,379z M1569.8,383.8l1.6,2.6l4.3-2.6l-1.6-2.6
			L1569.8,383.8z M1562.1,388.5l1.6,2.6l4.3-2.6l-1.6-2.6L1562.1,388.5z M1600.5,364.8l1.6,2.6l4.3-2.6l-1.6-2.6L1600.5,364.8z
			 M1592.8,369.6l1.6,2.6l4.3-2.6l-1.6-2.6L1592.8,369.6z M1585.2,374.3l1.6,2.6l4.3-2.6l-1.6-2.6L1585.2,374.3z M1623.6,350.6
			l1.6,2.6l4.3-2.6l-1.6-2.6L1623.6,350.6z M1615.9,355.3l1.6,2.6l4.3-2.6l-1.6-2.6L1615.9,355.3z M1608.2,360.1l1.6,2.6l4.3-2.6
			l-1.6-2.6L1608.2,360.1z M1646.6,336.4l1.6,2.6l4.3-2.6l-1.6-2.6L1646.6,336.4z M1638.9,341.1l1.6,2.6l4.3-2.6l-1.6-2.6
			L1638.9,341.1z M1631.3,345.9l1.6,2.6l4.3-2.6l-1.6-2.6L1631.3,345.9z M1669.6,322.2l1.6,2.6l4.3-2.6l-1.6-2.6L1669.6,322.2z
			 M1662,326.9l1.6,2.6l4.3-2.6l-1.6-2.6L1662,326.9z M1654.3,331.6l1.6,2.6l4.3-2.6l-1.6-2.6L1654.3,331.6z M1692.7,308l1.6,2.6
			l4.3-2.6l-1.6-2.6L1692.7,308z M1685,312.7l1.6,2.6l4.3-2.6l-1.6-2.6L1685,312.7z M1677.4,317.4l1.6,2.6l4.3-2.6l-1.6-2.6
			L1677.4,317.4z M1715.7,293.8l1.6,2.6l4.3-2.6l-1.6-2.6L1715.7,293.8z M1708.1,298.5l1.6,2.6l4.3-2.6l-1.6-2.6L1708.1,298.5z
			 M1700.4,303.2l1.6,2.6l4.3-2.6l-1.6-2.6L1700.4,303.2z M1706.9,255.8l1.7-2.4l-3.9-2.8l-1.7,2.4L1706.9,255.8z M1713.9,260.8
			l1.7-2.4l-3.9-2.8l-1.7,2.4L1713.9,260.8z M1720.9,265.7l1.7-2.4l-3.9-2.8l-1.7,2.4L1720.9,265.7z M1685.8,240.9l1.7-2.4l-3.9-2.8
			l-1.7,2.4L1685.8,240.9z M1692.8,245.9l1.7-2.4l-3.9-2.8l-1.7,2.4L1692.8,245.9z M1699.8,250.8l1.7-2.4l-3.9-2.8l-1.7,2.4
			L1699.8,250.8z M1664.8,226l1.7-2.4l-3.9-2.8l-1.7,2.4L1664.8,226z M1671.8,230.9l1.7-2.4l-3.9-2.8l-1.7,2.4L1671.8,230.9z
			 M1678.8,235.9l1.7-2.4l-3.9-2.8l-1.7,2.4L1678.8,235.9z M1643.7,211l1.7-2.4l-3.9-2.8l-1.7,2.4L1643.7,211z M1650.7,216l1.7-2.4
			l-3.9-2.8l-1.7,2.4L1650.7,216z M1657.7,221l1.7-2.4l-3.9-2.8l-1.7,2.4L1657.7,221z M1622.7,196.1l1.7-2.4l-3.9-2.8l-1.7,2.4
			L1622.7,196.1z M1629.7,201.1l1.7-2.4l-3.9-2.8l-1.7,2.4L1629.7,201.1z M1636.7,206l1.7-2.4l-3.9-2.8l-1.7,2.4L1636.7,206z
			 M1601.6,181.2l1.7-2.4l-3.9-2.8l-1.7,2.4L1601.6,181.2z M1608.6,186.2l1.7-2.4l-3.9-2.8l-1.7,2.4L1608.6,186.2z M1615.6,191.1
			l1.7-2.4l-3.9-2.8l-1.7,2.4L1615.6,191.1z M1580.6,166.3l1.7-2.4l-3.9-2.8l-1.7,2.4L1580.6,166.3z M1587.6,171.2l1.7-2.4l-3.9-2.8
			l-1.7,2.4L1587.6,171.2z M1594.6,176.2l1.7-2.4l-3.9-2.8l-1.7,2.4L1594.6,176.2z M1559.5,151.4l1.7-2.4l-3.9-2.8l-1.7,2.4
			L1559.5,151.4z M1566.5,156.3l1.7-2.4l-3.9-2.8l-1.7,2.4L1566.5,156.3z M1573.5,161.3l1.7-2.4l-3.9-2.8l-1.7,2.4L1573.5,161.3z
			 M1538.5,136.4l1.7-2.4l-3.9-2.8l-1.7,2.4L1538.5,136.4z M1545.5,141.4l1.7-2.4l-3.9-2.8l-1.7,2.4L1545.5,141.4z M1552.5,146.4
			l1.7-2.4l-3.9-2.8l-1.7,2.4L1552.5,146.4z M1517.4,121.5l1.7-2.4l-3.9-2.8l-1.7,2.4L1517.4,121.5z M1524.4,126.5l1.7-2.4l-3.9-2.8
			l-1.7,2.4L1524.4,126.5z M1531.4,131.4l1.7-2.4l-3.9-2.8l-1.7,2.4L1531.4,131.4z M1479.5,127.4l-1.5-2.6l-4.3,2.6l1.5,2.6
			L1479.5,127.4z M1487.2,122.8l-1.5-2.6l-4.3,2.6l1.5,2.6L1487.2,122.8z M1495,118.1l-1.5-2.6l-4.3,2.6l1.5,2.6L1495,118.1z
			 M1456.2,141.4l-1.5-2.6l-4.3,2.6l1.5,2.6L1456.2,141.4z M1463.9,136.7l-1.5-2.6l-4.3,2.6l1.5,2.6L1463.9,136.7z M1471.7,132.1
			l-1.5-2.6l-4.3,2.6l1.5,2.6L1471.7,132.1z M1432.9,155.4l-1.5-2.6l-4.3,2.6l1.5,2.6L1432.9,155.4z M1440.7,150.7l-1.5-2.6
			l-4.3,2.6l1.5,2.6L1440.7,150.7z M1448.4,146.1l-1.5-2.6l-4.3,2.6l1.5,2.6L1448.4,146.1z M1409.6,169.4l-1.5-2.6l-4.3,2.6l1.5,2.6
			L1409.6,169.4z M1417.4,164.7l-1.5-2.6l-4.3,2.6l1.5,2.6L1417.4,164.7z M1425.1,160.1l-1.5-2.6l-4.3,2.6l1.5,2.6L1425.1,160.1z
			 M1386.3,183.3l-1.5-2.6l-4.3,2.6l1.5,2.6L1386.3,183.3z M1394.1,178.7l-1.5-2.6l-4.3,2.6l1.5,2.6L1394.1,178.7z M1401.8,174.1
			l-1.5-2.6l-4.3,2.6l1.5,2.6L1401.8,174.1z M1363.1,197.3l-1.5-2.6l-4.3,2.6l1.5,2.6L1363.1,197.3z M1370.8,192.7l-1.5-2.6
			l-4.3,2.6l1.5,2.6L1370.8,192.7z M1378.5,188l-1.5-2.6l-4.3,2.6l1.5,2.6L1378.5,188z M1339.8,211.3l-1.5-2.6l-4.3,2.6l1.5,2.6
			L1339.8,211.3z M1347.5,206.7l-1.5-2.6l-4.3,2.6l1.5,2.6L1347.5,206.7z M1355.3,202l-1.5-2.6l-4.3,2.6l1.5,2.6L1355.3,202z
			 M1316.5,225.3l-1.5-2.6l-4.3,2.6l1.5,2.6L1316.5,225.3z M1324.2,220.6l-1.5-2.6l-4.3,2.6l1.5,2.6L1324.2,220.6z M1332,216
			l-1.5-2.6l-4.3,2.6l1.5,2.6L1332,216z M1293.2,239.3l-1.5-2.6l-4.3,2.6l1.5,2.6L1293.2,239.3z M1301,234.6l-1.5-2.6l-4.3,2.6
			l1.5,2.6L1301,234.6z M1308.7,230l-1.5-2.6l-4.3,2.6l1.5,2.6L1308.7,230z M1269.9,253.3l-1.5-2.6l-4.3,2.6l1.5,2.6L1269.9,253.3z
			 M1277.7,248.6l-1.5-2.6l-4.3,2.6l1.5,2.6L1277.7,248.6z M1285.4,244l-1.5-2.6l-4.3,2.6l1.5,2.6L1285.4,244z M1246.6,267.2
			l-1.5-2.6l-4.3,2.6l1.5,2.6L1246.6,267.2z M1254.4,262.6l-1.5-2.6l-4.3,2.6l1.5,2.6L1254.4,262.6z M1262.1,257.9l-1.5-2.6
			l-4.3,2.6l1.5,2.6L1262.1,257.9z M1223.4,281.2l-1.5-2.6l-4.3,2.6l1.5,2.6L1223.4,281.2z M1231.1,276.6l-1.5-2.6l-4.3,2.6l1.5,2.6
			L1231.1,276.6z M1238.8,271.9l-1.5-2.6l-4.3,2.6l1.5,2.6L1238.8,271.9z M1200.1,295.2l-1.5-2.6l-4.3,2.6l1.5,2.6L1200.1,295.2z
			 M1207.8,290.6l-1.5-2.6l-4.3,2.6l1.5,2.6L1207.8,290.6z M1215.6,285.9l-1.5-2.6l-4.3,2.6l1.5,2.6L1215.6,285.9z M1176.8,309.2
			l-1.5-2.6l-4.3,2.6l1.5,2.6L1176.8,309.2z M1184.5,304.5l-1.5-2.6l-4.3,2.6l1.5,2.6L1184.5,304.5z M1192.3,299.9l-1.5-2.6
			l-4.3,2.6l1.5,2.6L1192.3,299.9z M1153.5,323.2l-1.5-2.6l-4.3,2.6l1.5,2.6L1153.5,323.2z M1161.3,318.5l-1.5-2.6l-4.3,2.6l1.5,2.6
			L1161.3,318.5z M1169,313.9l-1.5-2.6l-4.3,2.6l1.5,2.6L1169,313.9z M1130.2,337.2l-1.5-2.6l-4.3,2.6l1.5,2.6L1130.2,337.2z
			 M1138,332.5l-1.5-2.6l-4.3,2.6l1.5,2.6L1138,332.5z M1145.7,327.9l-1.5-2.6l-4.3,2.6l1.5,2.6L1145.7,327.9z M1106.9,351.1
			l-1.5-2.6l-4.3,2.6l1.5,2.6L1106.9,351.1z M1114.7,346.5l-1.5-2.6l-4.3,2.6l1.5,2.6L1114.7,346.5z M1122.4,341.8l-1.5-2.6
			l-4.3,2.6l1.5,2.6L1122.4,341.8z M1083.7,365.1l-1.5-2.6l-4.3,2.6l1.5,2.6L1083.7,365.1z M1091.4,360.5l-1.5-2.6l-4.3,2.6l1.5,2.6
			L1091.4,360.5z M1099.1,355.8l-1.5-2.6l-4.3,2.6l1.5,2.6L1099.1,355.8z M1060.4,379.1l-1.5-2.6l-4.3,2.6l1.5,2.6L1060.4,379.1z
			 M1068.1,374.4l-1.5-2.6l-4.3,2.6l1.5,2.6L1068.1,374.4z M1075.9,369.8l-1.5-2.6l-4.3,2.6l1.5,2.6L1075.9,369.8z M1037.1,393.1
			l-1.5-2.6l-4.3,2.6l1.5,2.6L1037.1,393.1z M1044.8,388.4l-1.5-2.6l-4.3,2.6l1.5,2.6L1044.8,388.4z M1052.6,383.8l-1.5-2.6
			l-4.3,2.6l1.5,2.6L1052.6,383.8z M1013.8,407.1l-1.5-2.6l-4.3,2.6l1.5,2.6L1013.8,407.1z M1021.6,402.4l-1.5-2.6l-4.3,2.6l1.5,2.6
			L1021.6,402.4z M1029.3,397.8l-1.5-2.6l-4.3,2.6l1.5,2.6L1029.3,397.8z M990.5,421l-1.5-2.6l-4.3,2.6l1.5,2.6L990.5,421z
			 M998.3,416.4l-1.5-2.6l-4.3,2.6l1.5,2.6L998.3,416.4z M1006,411.8l-1.5-2.6l-4.3,2.6l1.5,2.6L1006,411.8z M967.2,435l-1.5-2.6
			l-4.3,2.6l1.5,2.6L967.2,435z M975,430.4l-1.5-2.6l-4.3,2.6l1.5,2.6L975,430.4z M982.7,425.7l-1.5-2.6l-4.3,2.6l1.5,2.6
			L982.7,425.7z M944,449l-1.5-2.6l-4.3,2.6l1.5,2.6L944,449z M951.7,444.4l-1.5-2.6l-4.3,2.6l1.5,2.6L951.7,444.4z M959.4,439.7
			l-1.5-2.6l-4.3,2.6l1.5,2.6L959.4,439.7z M920.7,463l-1.5-2.6l-4.3,2.6l1.5,2.6L920.7,463z M928.4,458.3l-1.5-2.6l-4.3,2.6
			l1.5,2.6L928.4,458.3z M936.2,453.7l-1.5-2.6l-4.3,2.6l1.5,2.6L936.2,453.7z M897.4,477l-1.5-2.6l-4.3,2.6l1.5,2.6L897.4,477z
			 M905.1,472.3l-1.5-2.6l-4.3,2.6l1.5,2.6L905.1,472.3z M912.9,467.7l-1.5-2.6l-4.3,2.6l1.5,2.6L912.9,467.7z M874.1,491l-1.5-2.6
			l-4.3,2.6l1.5,2.6L874.1,491z M881.9,486.3l-1.5-2.6l-4.3,2.6l1.5,2.6L881.9,486.3z M889.6,481.7l-1.5-2.6l-4.3,2.6l1.5,2.6
			L889.6,481.7z M850.8,504.9l-1.5-2.6L845,505l1.5,2.6L850.8,504.9z M858.6,500.3l-1.5-2.6l-4.3,2.6l1.5,2.6L858.6,500.3z
			 M866.3,495.6l-1.5-2.6l-4.3,2.6l1.5,2.6L866.3,495.6z M827.5,518.9l-1.5-2.6l-4.3,2.6l1.5,2.6L827.5,518.9z M835.3,514.3
			l-1.5-2.6l-4.3,2.6l1.5,2.6L835.3,514.3z M843,509.6l-1.5-2.6l-4.3,2.6l1.5,2.6L843,509.6z M804.3,532.9l-1.5-2.6l-4.3,2.6
			l1.5,2.6L804.3,532.9z M812,528.3l-1.5-2.6l-4.3,2.6l1.5,2.6L812,528.3z M819.7,523.6l-1.5-2.6l-4.3,2.6l1.5,2.6L819.7,523.6z
			 M781,546.9l-1.5-2.6l-4.3,2.6l1.5,2.6L781,546.9z M788.7,542.2l-1.5-2.6l-4.3,2.6l1.5,2.6L788.7,542.2z M796.5,537.6l-1.5-2.6
			l-4.3,2.6l1.5,2.6L796.5,537.6z M757.7,560.9l-1.5-2.6l-4.3,2.6l1.5,2.6L757.7,560.9z M765.4,556.2l-1.5-2.6l-4.3,2.6l1.5,2.6
			L765.4,556.2z M773.2,551.6l-1.5-2.6l-4.3,2.6l1.5,2.6L773.2,551.6z M734.4,574.9l-1.5-2.6l-4.3,2.6l1.5,2.6L734.4,574.9z
			 M742.2,570.2l-1.5-2.6l-4.3,2.6l1.5,2.6L742.2,570.2z M749.9,565.6l-1.5-2.6l-4.3,2.6l1.5,2.6L749.9,565.6z M711.1,588.8
			l-1.5-2.6l-4.3,2.6l1.5,2.6L711.1,588.8z M718.9,584.2l-1.5-2.6l-4.3,2.6l1.5,2.6L718.9,584.2z M726.6,579.5l-1.5-2.6l-4.3,2.6
			l1.5,2.6L726.6,579.5z M687.8,602.8l-1.5-2.6l-4.3,2.6l1.5,2.6L687.8,602.8z M695.6,598.2l-1.5-2.6l-4.3,2.6l1.5,2.6L695.6,598.2z
			 M703.3,593.5l-1.5-2.6l-4.3,2.6l1.5,2.6L703.3,593.5z M664.6,616.8l-1.5-2.6l-4.3,2.6l1.5,2.6L664.6,616.8z M672.3,612.1
			l-1.5-2.6l-4.3,2.6l1.5,2.6L672.3,612.1z M680,607.5l-1.5-2.6l-4.3,2.6l1.5,2.6L680,607.5z M641.3,630.8l-1.5-2.6l-4.3,2.6
			l1.5,2.6L641.3,630.8z M649,626.1l-1.5-2.6l-4.3,2.6l1.5,2.6L649,626.1z M656.8,621.5l-1.5-2.6l-4.3,2.6l1.5,2.6L656.8,621.5z
			 M618,644.8l-1.5-2.6l-4.3,2.6l1.5,2.6L618,644.8z M625.7,640.1l-1.5-2.6l-4.3,2.6l1.5,2.6L625.7,640.1z M633.5,635.5l-1.5-2.6
			l-4.3,2.6l1.5,2.6L633.5,635.5z M594.7,658.8l-1.5-2.6l-4.3,2.6l1.5,2.6L594.7,658.8z M602.5,654.1l-1.5-2.6l-4.3,2.6l1.5,2.6
			L602.5,654.1z M610.2,649.5l-1.5-2.6l-4.3,2.6l1.5,2.6L610.2,649.5z M571.4,672.7l-1.5-2.6l-4.3,2.6l1.5,2.6L571.4,672.7z
			 M579.2,668.1l-1.5-2.6l-4.3,2.6l1.5,2.6L579.2,668.1z M586.9,663.4l-1.5-2.6l-4.3,2.6l1.5,2.6L586.9,663.4z M548.1,686.7
			l-1.5-2.6l-4.3,2.6l1.5,2.6L548.1,686.7z M555.9,682.1l-1.5-2.6l-4.3,2.6l1.5,2.6L555.9,682.1z M563.6,677.4l-1.5-2.6l-4.3,2.6
			l1.5,2.6L563.6,677.4z M524.9,700.7l-1.5-2.6l-4.3,2.6l1.5,2.6L524.9,700.7z M532.6,696l-1.5-2.6l-4.3,2.6l1.5,2.6L532.6,696z
			 M540.3,691.4l-1.5-2.6l-4.3,2.6l1.5,2.6L540.3,691.4z M501.6,714.7l-1.5-2.6l-4.3,2.6l1.5,2.6L501.6,714.7z M509.3,710l-1.5-2.6
			l-4.3,2.6l1.5,2.6L509.3,710z M517.1,705.4l-1.5-2.6l-4.3,2.6l1.5,2.6L517.1,705.4z M478.3,728.7l-1.5-2.6l-4.3,2.6l1.5,2.6
			L478.3,728.7z M486,724l-1.5-2.6l-4.3,2.6l1.5,2.6L486,724z M493.8,719.4l-1.5-2.6l-4.3,2.6l1.5,2.6L493.8,719.4z M455,742.6
			l-1.5-2.6l-4.3,2.6l1.5,2.6L455,742.6z M462.8,738l-1.5-2.6l-4.3,2.6l1.5,2.6L462.8,738z M470.5,733.3l-1.5-2.6l-4.3,2.6l1.5,2.6
			L470.5,733.3z M431.7,756.6l-1.5-2.6l-4.3,2.6l1.5,2.6L431.7,756.6z M439.5,752l-1.5-2.6l-4.3,2.6l1.5,2.6L439.5,752z
			 M447.2,747.3l-1.5-2.6l-4.3,2.6l1.5,2.6L447.2,747.3z M408.4,770.6l-1.5-2.6l-4.3,2.6l1.5,2.6L408.4,770.6z M416.2,766l-1.5-2.6
			l-4.3,2.6l1.5,2.6L416.2,766z M423.9,761.3l-1.5-2.6l-4.3,2.6l1.5,2.6L423.9,761.3z M385.2,784.6l-1.5-2.6l-4.3,2.6l1.5,2.6
			L385.2,784.6z M392.9,779.9l-1.5-2.6L387,780l1.5,2.6L392.9,779.9z M400.6,775.3l-1.5-2.6l-4.3,2.6l1.5,2.6L400.6,775.3z
			 M361.9,798.6l-1.5-2.6l-4.3,2.6l1.5,2.6L361.9,798.6z M369.6,793.9l-1.5-2.6l-4.3,2.6l1.5,2.6L369.6,793.9z M377.4,789.3
			l-1.5-2.6l-4.3,2.6l1.5,2.6L377.4,789.3z M338.6,812.6l-1.5-2.6l-4.3,2.6l1.5,2.6L338.6,812.6z M346.3,807.9l-1.5-2.6l-4.3,2.6
			l1.5,2.6L346.3,807.9z M354.1,803.3l-1.5-2.6l-4.3,2.6l1.5,2.6L354.1,803.3z M315.3,826.5l-1.5-2.6l-4.3,2.6l1.5,2.6L315.3,826.5z
			 M323.1,821.9l-1.5-2.6l-4.3,2.6l1.5,2.6L323.1,821.9z M330.8,817.2l-1.5-2.6l-4.3,2.6l1.5,2.6L330.8,817.2z M292,840.5l-1.5-2.6
			l-4.3,2.6l1.5,2.6L292,840.5z M299.8,835.9l-1.5-2.6l-4.3,2.6l1.5,2.6L299.8,835.9z M307.5,831.2l-1.5-2.6l-4.3,2.6l1.5,2.6
			L307.5,831.2z M268.7,854.5l-1.5-2.6l-4.3,2.6l1.5,2.6L268.7,854.5z M276.5,849.8l-1.5-2.6l-4.3,2.6l1.5,2.6L276.5,849.8z
			 M284.2,845.2l-1.5-2.6l-4.3,2.6l1.5,2.6L284.2,845.2z M245.5,868.5l-1.5-2.6l-4.3,2.6l1.5,2.6L245.5,868.5z M253.2,863.8
			l-1.5-2.6l-4.3,2.6l1.5,2.6L253.2,863.8z M260.9,859.2l-1.5-2.6l-4.3,2.6l1.5,2.6L260.9,859.2z M222.2,882.5l-1.5-2.6l-4.3,2.6
			l1.5,2.6L222.2,882.5z M229.9,877.8l-1.5-2.6l-4.3,2.6l1.5,2.6L229.9,877.8z M237.7,873.2l-1.5-2.6l-4.3,2.6l1.5,2.6L237.7,873.2z
			 M232.8,919.9l-1.5,2.6l4.2,2.5l1.5-2.6L232.8,919.9z M225.3,915.5l-1.5,2.6l4.2,2.5l1.5-2.6L225.3,915.5z M217.9,911l-1.5,2.6
			l4.2,2.5l1.5-2.6L217.9,911z M255.2,933.3l-1.5,2.6l4.2,2.5l1.5-2.6L255.2,933.3z M247.7,928.9l-1.5,2.6l4.2,2.5l1.5-2.6
			L247.7,928.9z M240.3,924.4l-1.5,2.6l4.2,2.5l1.5-2.6L240.3,924.4z M277.6,946.8l-1.5,2.6l4.2,2.5l1.5-2.6L277.6,946.8z
			 M270.2,942.3l-1.5,2.6l4.2,2.5l1.5-2.6L270.2,942.3z M262.7,937.8l-1.5,2.6l4.2,2.5l1.5-2.6L262.7,937.8z M300,960.2l-1.5,2.6
			l4.2,2.5l1.5-2.6L300,960.2z M292.6,955.7l-1.5,2.6l4.2,2.5l1.5-2.6L292.6,955.7z M285.1,951.2l-1.5,2.6l4.2,2.5l1.5-2.6
			L285.1,951.2z M322.5,973.6l-1.5,2.6l4.2,2.5l1.5-2.6L322.5,973.6z M315,969.1l-1.5,2.6l4.2,2.5l1.5-2.6L315,969.1z M307.6,964.7
			l-1.5,2.6l4.2,2.5l1.5-2.6L307.6,964.7z M344.9,987l-1.5,2.6l4.2,2.5l1.5-2.6L344.9,987z M337.4,982.5l-1.5,2.6l4.2,2.5l1.5-2.6
			L337.4,982.5z M330,978.1l-1.5,2.6l4.2,2.5l1.5-2.6L330,978.1z M367.3,1000.4l-1.5,2.6l4.2,2.5l1.5-2.6L367.3,1000.4z
			 M359.9,995.9l-1.5,2.6l4.2,2.5l1.5-2.6L359.9,995.9z M352.4,991.5l-1.5,2.6l4.2,2.5l1.5-2.6L352.4,991.5z M389.7,1013.8l-1.5,2.6
			l4.2,2.5l1.5-2.6L389.7,1013.8z M382.3,1009.3l-1.5,2.6l4.2,2.5l1.5-2.6L382.3,1009.3z M374.8,1004.9l-1.5,2.6l4.2,2.5l1.5-2.6
			L374.8,1004.9z M412.2,1027.2l-1.5,2.6l4.2,2.5l1.5-2.6L412.2,1027.2z M404.7,1022.7l-1.5,2.6l4.2,2.5l1.5-2.6L404.7,1022.7z
			 M397.3,1018.3l-1.5,2.6l4.2,2.5l1.5-2.6L397.3,1018.3z M434.6,1040.6l-1.5,2.6l4.2,2.5l1.5-2.6L434.6,1040.6z M427.1,1036.1
			l-1.5,2.6l4.2,2.5l1.5-2.6L427.1,1036.1z M419.7,1031.7l-1.5,2.6l4.2,2.5l1.5-2.6L419.7,1031.7z M457,1054l-1.5,2.6l4.2,2.5
			l1.5-2.6L457,1054z M449.6,1049.5l-1.5,2.6l4.2,2.5l1.5-2.6L449.6,1049.5z M442.1,1045.1l-1.5,2.6l4.2,2.5l1.5-2.6L442.1,1045.1z
			 M1732,286.5l-1.6-2.6l-6.4,4l1.6,2.6L1732,286.5z M1743.5,279.2c-0.2-0.1-0.4-0.3-0.7-0.5c-0.6-0.4-1.3-1-2.1-1.5
			c-1.5-1.1-3.1-2.2-3.1-2.2l-1.7,2.4c0,0,0.6,0.4,1.2,0.9c0.3,0.2,0.6,0.4,0.8,0.6l0.1,0.1l0,0l0,0l0,0c0,0,0,0.1,0.1,0.1
			c0,0,0,0.1,0,0.1l-2.6,1.6l1.6,2.6l6.4-4C1743.6,279.3,1743.6,279.3,1743.5,279.2z M1726.5,267.1l-1.7,2.4l6.2,4.4l1.7-2.4
			L1726.5,267.1z M1509.5,113.1l-1.7,2.5l2.7,1.9l1.7-2.5L1509.5,113.1z M1504.6,109.8c-0.1,0-0.2,0.1-0.3,0.2
			c-0.3,0.2-0.6,0.4-1,0.6c-0.7,0.4-1.4,0.8-1.4,0.8l1.5,2.6c0,0,0.3-0.2,0.6-0.3c0.1-0.1,0.3-0.2,0.4-0.2l0,0l0,0l0,0l0,0
			c0,0,0-0.1,0.1-0.1c0,0,0-0.1,0-0.1l1.1,0.8l1.7-2.5l-2.7-1.9C1504.7,109.7,1504.7,109.7,1504.6,109.8z M1496.9,114.5l1.5,2.6
			l2.8-1.7l-1.5-2.6L1496.9,114.5z M204.8,890.2l1.6,2.6l7.2-4.3l-1.6-2.6L204.8,890.2z M192.1,898.1c0.2,0.1,0.5,0.3,0.8,0.5
			c0.7,0.4,1.6,0.9,2.5,1.5c1.8,1.1,3.6,2.1,3.6,2.1l1.5-2.6c0,0-0.7-0.4-1.4-0.9c-0.4-0.2-0.7-0.4-1-0.6l-0.1-0.1l0,0l0,0l0,0
			c0,0,0-0.1-0.1-0.1c0,0,0-0.1,0-0.1l2.9-1.7l-1.6-2.6l-7.2,4.3C192,897.9,192,898,192.1,898.1z M211.8,909.9l1.5-2.6l-7.2-4.3
			l-1.5,2.6L211.8,909.9z M465.3,1061.7l1.5-2.6l-2.6-1.6l-1.5,2.6L465.3,1061.7z M470.1,1064.3c0.1,0,0.2-0.1,0.3-0.2
			c0.2-0.1,0.6-0.3,0.9-0.5c0.6-0.4,1.3-0.8,1.3-0.8l-1.6-2.6c0,0-0.3,0.2-0.5,0.3c-0.1,0.1-0.3,0.2-0.4,0.2l0,0l0,0l0,0l0,0
			c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1l-1-0.6l-1.5,2.6l2.6,1.6C470,1064.5,470.1,1064.4,470.1,1064.3z M477.3,1059.9l-1.6-2.6
			l-2.6,1.6l1.6,2.6L477.3,1059.9z"
              />
              <g display="none">
                <image
                  display="inline"
                  overflow="visible"
                  opacity="0.2"
                  enable-background="new    "
                  width="69"
                  height="65"
                  xlinkHref="data:image/png;base64,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
SUVORK5CYII="
                  transform="matrix(0.9846 0 0 0.9846 841.9875 782.9567)"
                ></image>
                <g display="inline">
                  <linearGradient
                    id="SVGID_4_"
                    gradientUnits="userSpaceOnUse"
                    x1="867.5721"
                    y1="380.1925"
                    x2="884.255"
                    y2="390.742"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.8387" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_4_)"
                    points="885.7,812.1 882.3,806.6 865.6,817.3 868.9,822.9 				"
                  />
                </g>
              </g>
              <g display="none">
                <image
                  display="inline"
                  overflow="visible"
                  opacity="0.2"
                  enable-background="new    "
                  width="69"
                  height="65"
                  xlinkHref="data:image/png;base64,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"
                  transform="matrix(0.9846 0 0 0.9846 1355.9874 147.9566)"
                ></image>
                <g display="inline">
                  <linearGradient
                    id="SVGID_5_"
                    gradientUnits="userSpaceOnUse"
                    x1="2580.2009"
                    y1="-73.9323"
                    x2="2596.884"
                    y2="-63.3828"
                    gradientTransform="matrix(-1 0 0 1 3977.885 248.3313)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.8387" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_5_)"
                    points="1379.6,182.1 1382.9,187.6 1399.7,176.9 1396.3,171.4 				"
                  />
                </g>
              </g>
              <g display="none">
                <image
                  display="inline"
                  overflow="visible"
                  opacity="0.2"
                  enable-background="new    "
                  width="69"
                  height="65"
                  xlinkHref="data:image/png;base64,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
3jXbAAAAAElFTkSuQmCC"
                  transform="matrix(0.9846 0 0 0.9846 211.9874 896.9567)"
                ></image>
                <g display="inline">
                  <linearGradient
                    id="SVGID_6_"
                    gradientUnits="userSpaceOnUse"
                    x1="1912.1555"
                    y1="121.5306"
                    x2="1928.7924"
                    y2="132.0509"
                    gradientTransform="matrix(0.4223 0.9064 0.9064 -0.4223 -680.2463 -758.597)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.8387" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_6_)"
                    points="252.1,936.5 255.6,931.1 238.9,920.4 235.4,925.8 				"
                  />
                </g>
              </g>
              <linearGradient
                id="linepath_1_"
                gradientUnits="userSpaceOnUse"
                x1="415.4998"
                y1="357.141"
                x2="1526.2567"
                y2="805.9159"
              >
                <stop offset="0" style={{ stopColor: '#202333' }} />
                <stop offset="1" style={{ stopColor: '#5C6399' }} />
              </linearGradient>
              <polygon
                id="linepath"
                fill="none"
                stroke="url(#linepath_1_)"
                stroke-miterlimit="10"
                points="197.9,898.1 1501.2,115.4 
			1738.2,279.2 474.7,1061.5 		"
              />
            </g>
            <polygon fill="#202333" points="1345,596.3 1426,646 1510,597.3 1428,548 		" />
            <g id="purplebg" opacity="0.65">
              <polygon fill="#202333" points="1585,596.3 1666,646 1750,597.3 1668,548 		" />
              <polygon fill="#202333" points="1464,527.3 1545,577 1629,528.3 1547,479 		" />
              <polygon fill="#202333" points="1047,224.3 1128,274 1212,225.3 1130,176 		" />

              <polygon fill="#202333" points="1720,524.3 1801,574 1885,525.3 1803,476 		" />
              <polygon fill="#202333" points="1831,596.3 1912,646 1996,597.3 1914,548 		" />
              <path
                fill="#202333"
                d="M1680.3,496.1l0.8,1.3l-2.1,1.2l-0.8-1.3L1680.3,496.1z M1674.3,499.6l0.8,1.3l2.1-1.2l-0.8-1.3
			L1674.3,499.6z M1670.5,501.8l0.8,1.3l2.1-1.2l-0.8-1.3L1670.5,501.8z M1689.7,490.7l0.8,1.3l2.1-1.2l-0.8-1.3L1689.7,490.7z
			 M1685.8,492.9l0.8,1.3l2.1-1.2l-0.8-1.3L1685.8,492.9z M1682,495.1l0.8,1.3l2.1-1.2l-0.8-1.3L1682,495.1z M1701.2,484l0.8,1.3
			l2.1-1.2l-0.8-1.3L1701.2,484z M1697.3,486.2l0.8,1.3l2.1-1.2l-0.8-1.3L1697.3,486.2z M1693.5,488.4l0.8,1.3l2.1-1.2l-0.8-1.3
			L1693.5,488.4z M1712.7,477.3l0.8,1.3l2.1-1.2l-0.8-1.3L1712.7,477.3z M1708.9,479.5l0.8,1.3l2.1-1.2l-0.8-1.3L1708.9,479.5z
			 M1705,481.8l0.8,1.3l2.1-1.2l-0.8-1.3L1705,481.8z M1724.2,470.6l0.8,1.3l2.1-1.2l-0.8-1.3L1724.2,470.6z M1720.4,472.9l0.8,1.3
			l2.1-1.2l-0.8-1.3L1720.4,472.9z M1716.6,475.1l0.8,1.3l2.1-1.2l-0.8-1.3L1716.6,475.1z M1735.8,464l0.8,1.3l2.1-1.2l-0.8-1.3
			L1735.8,464z M1731.9,466.2l0.8,1.3l2.1-1.2l-0.8-1.3L1731.9,466.2z M1728.1,468.4l0.8,1.3l2.1-1.2l-0.8-1.3L1728.1,468.4z
			 M1730.5,445.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1730.5,445.2z M1734.3,447.5l0.8-1.3l-2.1-1.3l-0.8,1.3L1734.3,447.5z M1738,449.7
			l0.8-1.3l-2.1-1.3l-0.8,1.3L1738,449.7z M1719.3,438.5l0.8-1.3l-2.1-1.3l-0.8,1.3L1719.3,438.5z M1723.1,440.7l0.8-1.3l-2.1-1.3
			l-0.8,1.3L1723.1,440.7z M1726.8,443l0.8-1.3l-2.1-1.3l-0.8,1.3L1726.8,443z M1708.1,431.7l0.8-1.3l-2.1-1.3l-0.8,1.3
			L1708.1,431.7z M1711.8,434l0.8-1.3l-2.1-1.3l-0.8,1.3L1711.8,434z M1715.6,436.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1715.6,436.2z
			 M1696.9,425l0.8-1.3l-2.1-1.3l-0.8,1.3L1696.9,425z M1700.6,427.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1700.6,427.2z M1704.3,429.5
			l0.8-1.3l-2.1-1.3l-0.8,1.3L1704.3,429.5z M1685.7,418.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1685.7,418.2z M1689.4,420.5l0.8-1.3l-2.1-1.3
			l-0.8,1.3L1689.4,420.5z M1693.1,422.7l0.8-1.3l-2.1-1.3l-0.8,1.3L1693.1,422.7z M1674.4,411.5l0.8-1.3l-2.1-1.3l-0.8,1.3
			L1674.4,411.5z M1678.2,413.7l0.8-1.3l-2.1-1.3l-0.8,1.3L1678.2,413.7z M1681.9,416l0.8-1.3l-2.1-1.3l-0.8,1.3L1681.9,416z
			 M1656,414.6l-0.8-1.3l-2.1,1.2l0.8,1.3L1656,414.6z M1659.8,412.4l-0.8-1.3l-2.1,1.2l0.8,1.3L1659.8,412.4z M1663.6,410.2
			l-0.8-1.3l-2.1,1.2l0.8,1.3L1663.6,410.2z M1644.6,421.2l-0.8-1.3l-2.1,1.2l0.8,1.3L1644.6,421.2z M1648.4,419l-0.8-1.3l-2.1,1.2
			l0.8,1.3L1648.4,419z M1652.2,416.8l-0.8-1.3l-2.1,1.2l0.8,1.3L1652.2,416.8z M1633.2,427.9l-0.8-1.3l-2.1,1.2l0.8,1.3
			L1633.2,427.9z M1637,425.7l-0.8-1.3l-2.1,1.2l0.8,1.3L1637,425.7z M1640.8,423.5l-0.8-1.3l-2.1,1.2l0.8,1.3L1640.8,423.5z
			 M1621.8,434.5l-0.8-1.3l-2.1,1.2l0.8,1.3L1621.8,434.5z M1625.6,432.3l-0.8-1.3l-2.1,1.2l0.8,1.3L1625.6,432.3z M1629.4,430.1
			l-0.8-1.3l-2.1,1.2l0.8,1.3L1629.4,430.1z M1610.5,441.1l-0.8-1.3l-2.1,1.2l0.8,1.3L1610.5,441.1z M1614.2,438.9l-0.8-1.3
			l-2.1,1.2l0.8,1.3L1614.2,438.9z M1618,436.7l-0.8-1.3l-2.1,1.2l0.8,1.3L1618,436.7z M1599.1,447.8l-0.8-1.3l-2.1,1.2l0.8,1.3
			L1599.1,447.8z M1602.9,445.5l-0.8-1.3l-2.1,1.2l0.8,1.3L1602.9,445.5z M1606.6,443.3l-0.8-1.3l-2.1,1.2l0.8,1.3L1606.6,443.3z
			 M1604.2,466.5l-0.8,1.3l2.1,1.3l0.8-1.3L1604.2,466.5z M1600.5,464.2l-0.8,1.3l2.1,1.3l0.8-1.3L1600.5,464.2z M1596.8,462
			l-0.8,1.3l2.1,1.3l0.8-1.3L1596.8,462z M1615.3,473.3l-0.8,1.3l2.1,1.3l0.8-1.3L1615.3,473.3z M1611.6,471l-0.8,1.3l2.1,1.3
			l0.8-1.3L1611.6,471z M1607.9,468.8l-0.8,1.3l2.1,1.3l0.8-1.3L1607.9,468.8z M1626.3,480.1l-0.8,1.3l2.1,1.3l0.8-1.3L1626.3,480.1
			z M1622.7,477.8l-0.8,1.3l2.1,1.3l0.8-1.3L1622.7,477.8z M1619,475.5l-0.8,1.3l2.1,1.3l0.8-1.3L1619,475.5z M1637.4,486.9
			l-0.8,1.3l2.1,1.3l0.8-1.3L1637.4,486.9z M1633.7,484.6l-0.8,1.3l2.1,1.3l0.8-1.3L1633.7,484.6z M1630.1,482.3l-0.8,1.3l2.1,1.3
			l0.8-1.3L1630.1,482.3z M1648.5,493.7l-0.8,1.3l2.1,1.3l0.8-1.3L1648.5,493.7z M1644.8,491.4l-0.8,1.3l2.1,1.3l0.8-1.3
			L1644.8,491.4z M1641.1,489.1l-0.8,1.3l2.1,1.3l0.8-1.3L1641.1,489.1z M1659.6,500.4l-0.8,1.3l2.1,1.3l0.8-1.3L1659.6,500.4z
			 M1655.9,498.2l-0.8,1.3l2.1,1.3l0.8-1.3L1655.9,498.2z M1652.2,495.9l-0.8,1.3l2.1,1.3l0.8-1.3L1652.2,495.9z M1744.5,460.3
			l-0.8-1.3l-3.7,2.1l0.8,1.3L1744.5,460.3z M1751,456.3c-0.1-0.1-0.2-0.1-0.4-0.2c-0.3-0.2-0.8-0.5-1.2-0.8
			c-0.9-0.5-1.8-1.1-1.8-1.1l-0.8,1.3c0,0,0.4,0.2,0.7,0.4c0.2,0.1,0.4,0.2,0.5,0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0
			l-1.5,0.8l0.8,1.3L1751,456.3C1751.1,456.4,1751.1,456.4,1751,456.3z M1741,450.3l-0.8,1.3l3.6,2.2l0.8-1.3L1741,450.3z
			 M1670.3,407.7l-0.8,1.3l1.3,0.8l0.8-1.3L1670.3,407.7z M1668,406.4c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.3,0.2-0.4,0.3
			c-0.3,0.2-0.6,0.4-0.6,0.4l0.8,1.3c0,0,0.1-0.1,0.3-0.1c0.1,0,0.1-0.1,0.2-0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.5,0.3
			l0.8-1.3L1668,406.4C1668.1,406.3,1668,406.3,1668,406.4z M1664.5,408.4l0.8,1.3l1.3-0.7l-0.8-1.3L1664.5,408.4z M1590.4,451.4
			l0.8,1.3l3.6-2.1l-0.8-1.3L1590.4,451.4z M1584,455.3c0.1,0.1,0.2,0.1,0.4,0.2c0.3,0.2,0.8,0.5,1.2,0.8c0.9,0.5,1.8,1.1,1.8,1.1
			l0.8-1.3c0,0-0.4-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.5-0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l1.4-0.8l-0.8-1.3L1584,455.3
			C1583.9,455.2,1583.9,455.3,1584,455.3z M1593.8,461.4l0.8-1.3l-3.6-2.2l-0.8,1.3L1593.8,461.4z M1663.7,504.3l0.8-1.3l-1.3-0.8
			l-0.8,1.3L1663.7,504.3z M1666,505.6c0,0,0.1,0,0.1-0.1c0.1-0.1,0.3-0.2,0.4-0.3c0.3-0.2,0.6-0.4,0.6-0.4l-0.8-1.3
			c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.5-0.3l-0.8,1.3L1666,505.6
			C1665.9,505.7,1666,505.7,1666,505.6z M1669.5,503.6l-0.8-1.3l-1.3,0.7l0.8,1.3L1669.5,503.6z"
              />
              <path
                fill="#202333"
                d="M1021.3,196.1l0.8,1.3l-2.1,1.2l-0.8-1.3L1021.3,196.1z M1015.3,199.6l0.8,1.3l2.1-1.2l-0.8-1.3
			L1015.3,199.6z M1011.5,201.8l0.8,1.3l2.1-1.2l-0.8-1.3L1011.5,201.8z M1030.7,190.7l0.8,1.3l2.1-1.2l-0.8-1.3L1030.7,190.7z
			 M1026.8,192.9l0.8,1.3l2.1-1.2l-0.8-1.3L1026.8,192.9z M1023,195.1l0.8,1.3l2.1-1.2l-0.8-1.3L1023,195.1z M1042.2,184l0.8,1.3
			l2.1-1.2l-0.8-1.3L1042.2,184z M1038.3,186.2l0.8,1.3l2.1-1.2l-0.8-1.3L1038.3,186.2z M1034.5,188.4l0.8,1.3l2.1-1.2l-0.8-1.3
			L1034.5,188.4z M1053.7,177.3l0.8,1.3l2.1-1.2l-0.8-1.3L1053.7,177.3z M1049.9,179.5l0.8,1.3l2.1-1.2l-0.8-1.3L1049.9,179.5z
			 M1046,181.8l0.8,1.3l2.1-1.2l-0.8-1.3L1046,181.8z M1065.2,170.6l0.8,1.3l2.1-1.2l-0.8-1.3L1065.2,170.6z M1061.4,172.9l0.8,1.3
			l2.1-1.2l-0.8-1.3L1061.4,172.9z M1057.6,175.1l0.8,1.3l2.1-1.2l-0.8-1.3L1057.6,175.1z M1076.7,164l0.8,1.3l2.1-1.2l-0.8-1.3
			L1076.7,164z M1072.9,166.2l0.8,1.3l2.1-1.2l-0.8-1.3L1072.9,166.2z M1069.1,168.4l0.8,1.3l2.1-1.2l-0.8-1.3L1069.1,168.4z
			 M1071.5,145.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1071.5,145.2z M1075.3,147.5l0.8-1.3l-2.1-1.3l-0.8,1.3L1075.3,147.5z M1079,149.7
			l0.8-1.3l-2.1-1.3l-0.8,1.3L1079,149.7z M1060.3,138.5l0.8-1.3l-2.1-1.3l-0.8,1.3L1060.3,138.5z M1064,140.7l0.8-1.3l-2.1-1.3
			l-0.8,1.3L1064,140.7z M1067.8,143l0.8-1.3l-2.1-1.3l-0.8,1.3L1067.8,143z M1049.1,131.7l0.8-1.3l-2.1-1.3l-0.8,1.3L1049.1,131.7z
			 M1052.8,134l0.8-1.3l-2.1-1.3l-0.8,1.3L1052.8,134z M1056.6,136.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1056.6,136.2z M1037.9,125l0.8-1.3
			l-2.1-1.3l-0.8,1.3L1037.9,125z M1041.6,127.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1041.6,127.2z M1045.3,129.5l0.8-1.3l-2.1-1.3l-0.8,1.3
			L1045.3,129.5z M1026.7,118.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1026.7,118.2z M1030.4,120.5l0.8-1.3l-2.1-1.3l-0.8,1.3L1030.4,120.5z
			 M1034.1,122.7l0.8-1.3l-2.1-1.3l-0.8,1.3L1034.1,122.7z M1015.4,111.5l0.8-1.3l-2.1-1.3l-0.8,1.3L1015.4,111.5z M1019.2,113.7
			l0.8-1.3l-2.1-1.3l-0.8,1.3L1019.2,113.7z M1022.9,116l0.8-1.3l-2.1-1.3l-0.8,1.3L1022.9,116z M997,114.6l-0.8-1.3l-2.1,1.2
			l0.8,1.3L997,114.6z M1000.8,112.4l-0.8-1.3l-2.1,1.2l0.8,1.3L1000.8,112.4z M1004.6,110.2l-0.8-1.3l-2.1,1.2l0.8,1.3
			L1004.6,110.2z M985.6,121.2l-0.8-1.3l-2.1,1.2l0.8,1.3L985.6,121.2z M989.4,119l-0.8-1.3l-2.1,1.2l0.8,1.3L989.4,119z
			 M993.2,116.8l-0.8-1.3l-2.1,1.2l0.8,1.3L993.2,116.8z M974.2,127.9l-0.8-1.3l-2.1,1.2l0.8,1.3L974.2,127.9z M978,125.7l-0.8-1.3
			l-2.1,1.2l0.8,1.3L978,125.7z M981.8,123.5l-0.8-1.3l-2.1,1.2l0.8,1.3L981.8,123.5z M962.8,134.5l-0.8-1.3l-2.1,1.2l0.8,1.3
			L962.8,134.5z M966.6,132.3l-0.8-1.3l-2.1,1.2l0.8,1.3L966.6,132.3z M970.4,130.1l-0.8-1.3l-2.1,1.2l0.8,1.3L970.4,130.1z
			 M951.4,141.1l-0.8-1.3l-2.1,1.2l0.8,1.3L951.4,141.1z M955.2,138.9l-0.8-1.3l-2.1,1.2l0.8,1.3L955.2,138.9z M959,136.7l-0.8-1.3
			l-2.1,1.2l0.8,1.3L959,136.7z M940.1,147.8l-0.8-1.3l-2.1,1.2l0.8,1.3L940.1,147.8z M943.9,145.5l-0.8-1.3l-2.1,1.2l0.8,1.3
			L943.9,145.5z M947.6,143.3l-0.8-1.3l-2.1,1.2l0.8,1.3L947.6,143.3z M945.2,166.5l-0.8,1.3l2.1,1.3l0.8-1.3L945.2,166.5z
			 M941.5,164.2l-0.8,1.3l2.1,1.3l0.8-1.3L941.5,164.2z M937.8,162l-0.8,1.3l2.1,1.3l0.8-1.3L937.8,162z M956.3,173.3l-0.8,1.3
			l2.1,1.3l0.8-1.3L956.3,173.3z M952.6,171l-0.8,1.3l2.1,1.3l0.8-1.3L952.6,171z M948.9,168.8l-0.8,1.3l2.1,1.3l0.8-1.3
			L948.9,168.8z M967.3,180.1l-0.8,1.3l2.1,1.3l0.8-1.3L967.3,180.1z M963.7,177.8l-0.8,1.3l2.1,1.3l0.8-1.3L963.7,177.8z
			 M960,175.5l-0.8,1.3l2.1,1.3l0.8-1.3L960,175.5z M978.4,186.9l-0.8,1.3l2.1,1.3l0.8-1.3L978.4,186.9z M974.7,184.6l-0.8,1.3
			l2.1,1.3l0.8-1.3L974.7,184.6z M971.1,182.3l-0.8,1.3l2.1,1.3l0.8-1.3L971.1,182.3z M989.5,193.7l-0.8,1.3l2.1,1.3l0.8-1.3
			L989.5,193.7z M985.8,191.4l-0.8,1.3l2.1,1.3l0.8-1.3L985.8,191.4z M982.1,189.1l-0.8,1.3l2.1,1.3l0.8-1.3L982.1,189.1z
			 M1000.6,200.4l-0.8,1.3l2.1,1.3l0.8-1.3L1000.6,200.4z M996.9,198.2l-0.8,1.3l2.1,1.3l0.8-1.3L996.9,198.2z M993.2,195.9
			l-0.8,1.3l2.1,1.3l0.8-1.3L993.2,195.9z M1085.5,160.3l-0.8-1.3l-3.7,2.1l0.8,1.3L1085.5,160.3z M1092,156.3
			c-0.1-0.1-0.2-0.1-0.4-0.2c-0.3-0.2-0.8-0.5-1.2-0.8c-0.9-0.5-1.8-1.1-1.8-1.1l-0.8,1.3c0,0,0.4,0.2,0.7,0.4
			c0.2,0.1,0.4,0.2,0.5,0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-1.5,0.8l0.8,1.3L1092,156.3
			C1092.1,156.4,1092.1,156.4,1092,156.3z M1082,150.3l-0.8,1.3l3.6,2.2l0.8-1.3L1082,150.3z M1011.3,107.7l-0.8,1.3l1.3,0.8
			l0.8-1.3L1011.3,107.7z M1009,106.4c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.3,0.2-0.6,0.4-0.6,0.4l0.8,1.3
			c0,0,0.1-0.1,0.3-0.1c0.1,0,0.1-0.1,0.2-0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.5,0.3l0.8-1.3L1009,106.4
			C1009.1,106.3,1009,106.3,1009,106.4z M1005.5,108.4l0.8,1.3l1.3-0.7l-0.8-1.3L1005.5,108.4z M931.4,151.4l0.8,1.3l3.6-2.1
			l-0.8-1.3L931.4,151.4z M925,155.3c0.1,0.1,0.2,0.1,0.4,0.2c0.3,0.2,0.8,0.5,1.2,0.8c0.9,0.5,1.8,1.1,1.8,1.1l0.8-1.3
			c0,0-0.4-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.5-0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l1.4-0.8l-0.8-1.3L925,155.3
			C924.9,155.2,924.9,155.3,925,155.3z M934.8,161.4l0.8-1.3l-3.6-2.2l-0.8,1.3L934.8,161.4z M1004.6,204.3l0.8-1.3l-1.3-0.8
			l-0.8,1.3L1004.6,204.3z M1007,205.6c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.3-0.2,0.4-0.3c0.3-0.2,0.6-0.4,0.6-0.4l-0.8-1.3
			c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.5-0.3l-0.8,1.3L1007,205.6
			C1006.9,205.7,1007,205.7,1007,205.6z M1010.5,203.6l-0.8-1.3l-1.3,0.7l0.8,1.3L1010.5,203.6z"
              />
              <polygon fill="#202333" points="881,1022.3 962,1072 1046,1023.3 964,974 		" />
              <path
                fill="#202333"
                d="M855.3,994.1l0.8,1.3l-2.1,1.2l-0.8-1.3L855.3,994.1z M849.3,997.6l0.8,1.3l2.1-1.2l-0.8-1.3L849.3,997.6z
			 M845.5,999.8l0.8,1.3l2.1-1.2l-0.8-1.3L845.5,999.8z M864.7,988.7l0.8,1.3l2.1-1.2l-0.8-1.3L864.7,988.7z M860.8,990.9l0.8,1.3
			l2.1-1.2l-0.8-1.3L860.8,990.9z M857,993.1l0.8,1.3l2.1-1.2l-0.8-1.3L857,993.1z M876.2,982l0.8,1.3l2.1-1.2l-0.8-1.3L876.2,982z
			 M872.3,984.2l0.8,1.3l2.1-1.2l-0.8-1.3L872.3,984.2z M868.5,986.4l0.8,1.3l2.1-1.2l-0.8-1.3L868.5,986.4z M887.7,975.3l0.8,1.3
			l2.1-1.2l-0.8-1.3L887.7,975.3z M883.9,977.5l0.8,1.3l2.1-1.2l-0.8-1.3L883.9,977.5z M880,979.8l0.8,1.3l2.1-1.2l-0.8-1.3
			L880,979.8z M899.2,968.7l0.8,1.3l2.1-1.2l-0.8-1.3L899.2,968.7z M895.4,970.9l0.8,1.3l2.1-1.2l-0.8-1.3L895.4,970.9z
			 M891.6,973.1l0.8,1.3l2.1-1.2l-0.8-1.3L891.6,973.1z M910.7,962l0.8,1.3l2.1-1.2l-0.8-1.3L910.7,962z M906.9,964.2l0.8,1.3
			l2.1-1.2l-0.8-1.3L906.9,964.2z M903.1,966.4l0.8,1.3l2.1-1.2l-0.8-1.3L903.1,966.4z M905.5,943.2l0.8-1.3l-2.1-1.3l-0.8,1.3
			L905.5,943.2z M909.3,945.5l0.8-1.3L908,943l-0.8,1.3L909.3,945.5z M913,947.7l0.8-1.3l-2.1-1.3l-0.8,1.3L913,947.7z M894.3,936.5
			l0.8-1.3L893,934l-0.8,1.3L894.3,936.5z M898,938.7l0.8-1.3l-2.1-1.3l-0.8,1.3L898,938.7z M901.8,941l0.8-1.3l-2.1-1.3l-0.8,1.3
			L901.8,941z M883.1,929.7l0.8-1.3l-2.1-1.3l-0.8,1.3L883.1,929.7z M886.8,932l0.8-1.3l-2.1-1.3l-0.8,1.3L886.8,932z M890.6,934.2
			l0.8-1.3l-2.1-1.3l-0.8,1.3L890.6,934.2z M871.9,923l0.8-1.3l-2.1-1.3l-0.8,1.3L871.9,923z M875.6,925.2l0.8-1.3l-2.1-1.3
			l-0.8,1.3L875.6,925.2z M879.3,927.5l0.8-1.3l-2.1-1.3l-0.8,1.3L879.3,927.5z M860.7,916.2l0.8-1.3l-2.1-1.3l-0.8,1.3L860.7,916.2
			z M864.4,918.5l0.8-1.3l-2.1-1.3l-0.8,1.3L864.4,918.5z M868.1,920.7l0.8-1.3l-2.1-1.3l-0.8,1.3L868.1,920.7z M849.4,909.5
			l0.8-1.3l-2.1-1.3l-0.8,1.3L849.4,909.5z M853.2,911.7l0.8-1.3l-2.1-1.3l-0.8,1.3L853.2,911.7z M856.9,914l0.8-1.3l-2.1-1.3
			l-0.8,1.3L856.9,914z M831,912.6l-0.8-1.3l-2.1,1.2l0.8,1.3L831,912.6z M834.8,910.4l-0.8-1.3l-2.1,1.2l0.8,1.3L834.8,910.4z
			 M838.6,908.2l-0.8-1.3l-2.1,1.2l0.8,1.3L838.6,908.2z M819.6,919.2l-0.8-1.3l-2.1,1.2l0.8,1.3L819.6,919.2z M823.4,917l-0.8-1.3
			l-2.1,1.2l0.8,1.3L823.4,917z M827.2,914.8l-0.8-1.3l-2.1,1.2l0.8,1.3L827.2,914.8z M808.2,925.9l-0.8-1.3l-2.1,1.2l0.8,1.3
			L808.2,925.9z M812,923.7l-0.8-1.3l-2.1,1.2l0.8,1.3L812,923.7z M815.8,921.5l-0.8-1.3l-2.1,1.2l0.8,1.3L815.8,921.5z
			 M796.8,932.5l-0.8-1.3l-2.1,1.2l0.8,1.3L796.8,932.5z M800.6,930.3l-0.8-1.3l-2.1,1.2l0.8,1.3L800.6,930.3z M804.4,928.1
			l-0.8-1.3l-2.1,1.2l0.8,1.3L804.4,928.1z M785.4,939.1l-0.8-1.3l-2.1,1.2l0.8,1.3L785.4,939.1z M789.2,936.9l-0.8-1.3l-2.1,1.2
			l0.8,1.3L789.2,936.9z M793,934.7l-0.8-1.3l-2.1,1.2l0.8,1.3L793,934.7z M774.1,945.8l-0.8-1.3l-2.1,1.2l0.8,1.3L774.1,945.8z
			 M777.9,943.5l-0.8-1.3l-2.1,1.2l0.8,1.3L777.9,943.5z M781.6,941.3l-0.8-1.3l-2.1,1.2l0.8,1.3L781.6,941.3z M779.2,964.5
			l-0.8,1.3l2.1,1.3l0.8-1.3L779.2,964.5z M775.5,962.2l-0.8,1.3l2.1,1.3l0.8-1.3L775.5,962.2z M771.8,960l-0.8,1.3l2.1,1.3l0.8-1.3
			L771.8,960z M790.3,971.3l-0.8,1.3l2.1,1.3l0.8-1.3L790.3,971.3z M786.6,969l-0.8,1.3l2.1,1.3l0.8-1.3L786.6,969z M782.9,966.8
			l-0.8,1.3l2.1,1.3l0.8-1.3L782.9,966.8z M801.3,978.1l-0.8,1.3l2.1,1.3l0.8-1.3L801.3,978.1z M797.7,975.8l-0.8,1.3l2.1,1.3
			l0.8-1.3L797.7,975.8z M794,973.5l-0.8,1.3l2.1,1.3l0.8-1.3L794,973.5z M812.4,984.9l-0.8,1.3l2.1,1.3l0.8-1.3L812.4,984.9z
			 M808.7,982.6l-0.8,1.3l2.1,1.3l0.8-1.3L808.7,982.6z M805.1,980.3l-0.8,1.3l2.1,1.3l0.8-1.3L805.1,980.3z M823.5,991.7l-0.8,1.3
			l2.1,1.3l0.8-1.3L823.5,991.7z M819.8,989.4l-0.8,1.3l2.1,1.3l0.8-1.3L819.8,989.4z M816.1,987.1l-0.8,1.3l2.1,1.3l0.8-1.3
			L816.1,987.1z M834.6,998.4l-0.8,1.3l2.1,1.3l0.8-1.3L834.6,998.4z M830.9,996.2l-0.8,1.3l2.1,1.3l0.8-1.3L830.9,996.2z
			 M827.2,993.9l-0.8,1.3l2.1,1.3l0.8-1.3L827.2,993.9z M919.5,958.3l-0.8-1.3l-3.7,2.1l0.8,1.3L919.5,958.3z M926,954.3
			c-0.1-0.1-0.2-0.1-0.4-0.2c-0.3-0.2-0.8-0.5-1.2-0.8c-0.9-0.5-1.8-1.1-1.8-1.1l-0.8,1.3c0,0,0.4,0.2,0.7,0.4
			c0.2,0.1,0.4,0.2,0.5,0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-1.5,0.8l0.8,1.3L926,954.3C926.1,954.4,926.1,954.4,926,954.3
			z M916,948.3l-0.8,1.3l3.6,2.2l0.8-1.3L916,948.3z M845.3,905.7l-0.8,1.3l1.3,0.8l0.8-1.3L845.3,905.7z M843,904.4
			c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.3,0.2-0.6,0.4-0.6,0.4l0.8,1.3c0,0,0.1-0.1,0.3-0.1c0.1,0,0.1-0.1,0.2-0.1l0,0
			l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.5,0.3l0.8-1.3L843,904.4C843.1,904.3,843,904.3,843,904.4z M839.5,906.4l0.8,1.3l1.3-0.7
			l-0.8-1.3L839.5,906.4z M765.4,949.4l0.8,1.3l3.6-2.1l-0.8-1.3L765.4,949.4z M759,953.3c0.1,0.1,0.2,0.1,0.4,0.2
			c0.3,0.2,0.8,0.5,1.2,0.8c0.9,0.5,1.8,1.1,1.8,1.1l0.8-1.3c0,0-0.4-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.5-0.3l0,0l0,0l0,0l0,0
			c0,0,0,0,0,0c0,0,0,0,0,0l1.4-0.8l-0.8-1.3L759,953.3C758.9,953.2,758.9,953.3,759,953.3z M768.8,959.4l0.8-1.3l-3.6-2.2l-0.8,1.3
			L768.8,959.4z M838.6,1002.3l0.8-1.3l-1.3-0.8l-0.8,1.3L838.6,1002.3z M841,1003.6c0,0,0.1,0,0.1-0.1c0.1-0.1,0.3-0.2,0.4-0.3
			c0.3-0.2,0.6-0.4,0.6-0.4l-0.8-1.3c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.5-0.3
			l-0.8,1.3L841,1003.6C840.9,1003.7,841,1003.7,841,1003.6z M844.5,1001.6l-0.8-1.3l-1.3,0.7l0.8,1.3L844.5,1001.6z"
              />
              <path
                fill="#202333"
                d="M841.3,1136.1l0.8,1.3l-2.1,1.2l-0.8-1.3L841.3,1136.1z M835.3,1139.6l0.8,1.3l2.1-1.2l-0.8-1.3
			L835.3,1139.6z M831.5,1141.8l0.8,1.3l2.1-1.2l-0.8-1.3L831.5,1141.8z M850.7,1130.7l0.8,1.3l2.1-1.2l-0.8-1.3L850.7,1130.7z
			 M846.8,1132.9l0.8,1.3l2.1-1.2l-0.8-1.3L846.8,1132.9z M843,1135.1l0.8,1.3l2.1-1.2l-0.8-1.3L843,1135.1z M862.2,1124l0.8,1.3
			l2.1-1.2l-0.8-1.3L862.2,1124z M858.3,1126.2l0.8,1.3l2.1-1.2l-0.8-1.3L858.3,1126.2z M854.5,1128.4l0.8,1.3l2.1-1.2l-0.8-1.3
			L854.5,1128.4z M873.7,1117.3l0.8,1.3l2.1-1.2l-0.8-1.3L873.7,1117.3z M869.9,1119.5l0.8,1.3l2.1-1.2l-0.8-1.3L869.9,1119.5z
			 M866,1121.8l0.8,1.3l2.1-1.2l-0.8-1.3L866,1121.8z M885.2,1110.7l0.8,1.3l2.1-1.2l-0.8-1.3L885.2,1110.7z M881.4,1112.9l0.8,1.3
			l2.1-1.2l-0.8-1.3L881.4,1112.9z M877.6,1115.1l0.8,1.3l2.1-1.2l-0.8-1.3L877.6,1115.1z M896.7,1104l0.8,1.3l2.1-1.2l-0.8-1.3
			L896.7,1104z M892.9,1106.2l0.8,1.3l2.1-1.2l-0.8-1.3L892.9,1106.2z M889.1,1108.4l0.8,1.3l2.1-1.2l-0.8-1.3L889.1,1108.4z
			 M891.5,1085.2l0.8-1.3l-2.1-1.3l-0.8,1.3L891.5,1085.2z M895.3,1087.5l0.8-1.3l-2.1-1.3l-0.8,1.3L895.3,1087.5z M899,1089.7
			l0.8-1.3l-2.1-1.3l-0.8,1.3L899,1089.7z M880.3,1078.5l0.8-1.3l-2.1-1.3l-0.8,1.3L880.3,1078.5z M884,1080.7l0.8-1.3l-2.1-1.3
			l-0.8,1.3L884,1080.7z M887.8,1083l0.8-1.3l-2.1-1.3l-0.8,1.3L887.8,1083z M869.1,1071.7l0.8-1.3l-2.1-1.3l-0.8,1.3L869.1,1071.7z
			 M872.8,1074l0.8-1.3l-2.1-1.3l-0.8,1.3L872.8,1074z M876.6,1076.2l0.8-1.3l-2.1-1.3l-0.8,1.3L876.6,1076.2z M857.9,1065l0.8-1.3
			l-2.1-1.3l-0.8,1.3L857.9,1065z M861.6,1067.2l0.8-1.3l-2.1-1.3l-0.8,1.3L861.6,1067.2z M865.3,1069.5l0.8-1.3l-2.1-1.3l-0.8,1.3
			L865.3,1069.5z M846.7,1058.2l0.8-1.3l-2.1-1.3l-0.8,1.3L846.7,1058.2z M850.4,1060.5l0.8-1.3l-2.1-1.3l-0.8,1.3L850.4,1060.5z
			 M854.1,1062.7l0.8-1.3l-2.1-1.3l-0.8,1.3L854.1,1062.7z M835.4,1051.5l0.8-1.3l-2.1-1.3l-0.8,1.3L835.4,1051.5z M839.2,1053.7
			l0.8-1.3l-2.1-1.3l-0.8,1.3L839.2,1053.7z M842.9,1056l0.8-1.3l-2.1-1.3l-0.8,1.3L842.9,1056z M817,1054.6l-0.8-1.3l-2.1,1.2
			l0.8,1.3L817,1054.6z M820.8,1052.4l-0.8-1.3l-2.1,1.2l0.8,1.3L820.8,1052.4z M824.6,1050.2l-0.8-1.3l-2.1,1.2l0.8,1.3
			L824.6,1050.2z M805.6,1061.2l-0.8-1.3l-2.1,1.2l0.8,1.3L805.6,1061.2z M809.4,1059l-0.8-1.3l-2.1,1.2l0.8,1.3L809.4,1059z
			 M813.2,1056.8l-0.8-1.3l-2.1,1.2l0.8,1.3L813.2,1056.8z M794.2,1067.9l-0.8-1.3l-2.1,1.2l0.8,1.3L794.2,1067.9z M798,1065.7
			l-0.8-1.3l-2.1,1.2l0.8,1.3L798,1065.7z M801.8,1063.5l-0.8-1.3l-2.1,1.2l0.8,1.3L801.8,1063.5z M782.8,1074.5l-0.8-1.3l-2.1,1.2
			l0.8,1.3L782.8,1074.5z M786.6,1072.3l-0.8-1.3l-2.1,1.2l0.8,1.3L786.6,1072.3z M790.4,1070.1l-0.8-1.3l-2.1,1.2l0.8,1.3
			L790.4,1070.1z M771.4,1081.1l-0.8-1.3l-2.1,1.2l0.8,1.3L771.4,1081.1z M775.2,1078.9l-0.8-1.3l-2.1,1.2l0.8,1.3L775.2,1078.9z
			 M779,1076.7l-0.8-1.3l-2.1,1.2l0.8,1.3L779,1076.7z M760.1,1087.8l-0.8-1.3l-2.1,1.2l0.8,1.3L760.1,1087.8z M763.9,1085.5
			l-0.8-1.3l-2.1,1.2l0.8,1.3L763.9,1085.5z M767.6,1083.3l-0.8-1.3l-2.1,1.2l0.8,1.3L767.6,1083.3z M765.2,1106.5l-0.8,1.3l2.1,1.3
			l0.8-1.3L765.2,1106.5z M761.5,1104.2l-0.8,1.3l2.1,1.3l0.8-1.3L761.5,1104.2z M757.8,1102l-0.8,1.3l2.1,1.3l0.8-1.3L757.8,1102z
			 M776.3,1113.3l-0.8,1.3l2.1,1.3l0.8-1.3L776.3,1113.3z M772.6,1111l-0.8,1.3l2.1,1.3l0.8-1.3L772.6,1111z M768.9,1108.8l-0.8,1.3
			l2.1,1.3l0.8-1.3L768.9,1108.8z M787.3,1120.1l-0.8,1.3l2.1,1.3l0.8-1.3L787.3,1120.1z M783.7,1117.8l-0.8,1.3l2.1,1.3l0.8-1.3
			L783.7,1117.8z M780,1115.5l-0.8,1.3l2.1,1.3l0.8-1.3L780,1115.5z M798.4,1126.9l-0.8,1.3l2.1,1.3l0.8-1.3L798.4,1126.9z
			 M794.7,1124.6l-0.8,1.3l2.1,1.3l0.8-1.3L794.7,1124.6z M791.1,1122.3l-0.8,1.3l2.1,1.3l0.8-1.3L791.1,1122.3z M809.5,1133.7
			l-0.8,1.3l2.1,1.3l0.8-1.3L809.5,1133.7z M805.8,1131.4l-0.8,1.3l2.1,1.3l0.8-1.3L805.8,1131.4z M802.1,1129.1l-0.8,1.3l2.1,1.3
			l0.8-1.3L802.1,1129.1z M820.6,1140.4l-0.8,1.3l2.1,1.3l0.8-1.3L820.6,1140.4z M816.9,1138.2l-0.8,1.3l2.1,1.3l0.8-1.3
			L816.9,1138.2z M813.2,1135.9l-0.8,1.3l2.1,1.3l0.8-1.3L813.2,1135.9z M905.5,1100.3l-0.8-1.3l-3.7,2.1l0.8,1.3L905.5,1100.3z
			 M912,1096.3c-0.1-0.1-0.2-0.1-0.4-0.2c-0.3-0.2-0.8-0.5-1.2-0.8c-0.9-0.5-1.8-1.1-1.8-1.1l-0.8,1.3c0,0,0.4,0.2,0.7,0.4
			c0.2,0.1,0.4,0.2,0.5,0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-1.5,0.8l0.8,1.3L912,1096.3
			C912.1,1096.4,912.1,1096.4,912,1096.3z M902,1090.3l-0.8,1.3l3.6,2.2l0.8-1.3L902,1090.3z M831.3,1047.7l-0.8,1.3l1.3,0.8
			l0.8-1.3L831.3,1047.7z M829,1046.4c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.3,0.2-0.6,0.4-0.6,0.4l0.8,1.3
			c0,0,0.1-0.1,0.3-0.1c0.1,0,0.1-0.1,0.2-0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.5,0.3l0.8-1.3L829,1046.4
			C829.1,1046.3,829,1046.3,829,1046.4z M825.5,1048.4l0.8,1.3l1.3-0.7l-0.8-1.3L825.5,1048.4z M751.4,1091.4l0.8,1.3l3.6-2.1
			l-0.8-1.3L751.4,1091.4z M745,1095.3c0.1,0.1,0.2,0.1,0.4,0.2c0.3,0.2,0.8,0.5,1.2,0.8c0.9,0.5,1.8,1.1,1.8,1.1l0.8-1.3
			c0,0-0.4-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.5-0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l1.4-0.8l-0.8-1.3L745,1095.3
			C744.9,1095.2,744.9,1095.3,745,1095.3z M754.8,1101.4l0.8-1.3l-3.6-2.2l-0.8,1.3L754.8,1101.4z M824.6,1144.3l0.8-1.3l-1.3-0.8
			l-0.8,1.3L824.6,1144.3z M827,1145.6c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.3-0.2,0.4-0.3c0.3-0.2,0.6-0.4,0.6-0.4l-0.8-1.3
			c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.5-0.3l-0.8,1.3L827,1145.6
			C826.9,1145.7,827,1145.7,827,1145.6z M830.5,1143.6l-0.8-1.3l-1.3,0.7l0.8,1.3L830.5,1143.6z"
              />
              <path
                fill="#202333"
                d="M1559.3,998.1l0.8,1.3l-2.1,1.2l-0.8-1.3L1559.3,998.1z M1553.3,1001.6l0.8,1.3l2.1-1.2l-0.8-1.3
			L1553.3,1001.6z M1549.5,1003.8l0.8,1.3l2.1-1.2l-0.8-1.3L1549.5,1003.8z M1568.7,992.7l0.8,1.3l2.1-1.2l-0.8-1.3L1568.7,992.7z
			 M1564.8,994.9l0.8,1.3l2.1-1.2l-0.8-1.3L1564.8,994.9z M1561,997.1l0.8,1.3l2.1-1.2l-0.8-1.3L1561,997.1z M1580.2,986l0.8,1.3
			l2.1-1.2l-0.8-1.3L1580.2,986z M1576.3,988.2l0.8,1.3l2.1-1.2l-0.8-1.3L1576.3,988.2z M1572.5,990.4l0.8,1.3l2.1-1.2l-0.8-1.3
			L1572.5,990.4z M1591.7,979.3l0.8,1.3l2.1-1.2l-0.8-1.3L1591.7,979.3z M1587.9,981.5l0.8,1.3l2.1-1.2l-0.8-1.3L1587.9,981.5z
			 M1584,983.8l0.8,1.3l2.1-1.2l-0.8-1.3L1584,983.8z M1603.2,972.7l0.8,1.3l2.1-1.2l-0.8-1.3L1603.2,972.7z M1599.4,974.9l0.8,1.3
			l2.1-1.2l-0.8-1.3L1599.4,974.9z M1595.6,977.1l0.8,1.3l2.1-1.2l-0.8-1.3L1595.6,977.1z M1614.7,966l0.8,1.3l2.1-1.2l-0.8-1.3
			L1614.7,966z M1610.9,968.2l0.8,1.3l2.1-1.2l-0.8-1.3L1610.9,968.2z M1607.1,970.4l0.8,1.3l2.1-1.2l-0.8-1.3L1607.1,970.4z
			 M1609.5,947.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1609.5,947.2z M1613.3,949.5l0.8-1.3l-2.1-1.3l-0.8,1.3L1613.3,949.5z M1617,951.7
			l0.8-1.3l-2.1-1.3l-0.8,1.3L1617,951.7z M1598.3,940.5l0.8-1.3l-2.1-1.3l-0.8,1.3L1598.3,940.5z M1602,942.7l0.8-1.3l-2.1-1.3
			l-0.8,1.3L1602,942.7z M1605.8,945l0.8-1.3l-2.1-1.3l-0.8,1.3L1605.8,945z M1587.1,933.7l0.8-1.3l-2.1-1.3l-0.8,1.3L1587.1,933.7z
			 M1590.8,936l0.8-1.3l-2.1-1.3l-0.8,1.3L1590.8,936z M1594.6,938.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1594.6,938.2z M1575.9,927l0.8-1.3
			l-2.1-1.3l-0.8,1.3L1575.9,927z M1579.6,929.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1579.6,929.2z M1583.3,931.5l0.8-1.3l-2.1-1.3l-0.8,1.3
			L1583.3,931.5z M1564.7,920.2l0.8-1.3l-2.1-1.3l-0.8,1.3L1564.7,920.2z M1568.4,922.5l0.8-1.3l-2.1-1.3l-0.8,1.3L1568.4,922.5z
			 M1572.1,924.7l0.8-1.3l-2.1-1.3l-0.8,1.3L1572.1,924.7z M1553.4,913.5l0.8-1.3l-2.1-1.3l-0.8,1.3L1553.4,913.5z M1557.2,915.7
			l0.8-1.3l-2.1-1.3l-0.8,1.3L1557.2,915.7z M1560.9,918l0.8-1.3l-2.1-1.3l-0.8,1.3L1560.9,918z M1535,916.6l-0.8-1.3l-2.1,1.2
			l0.8,1.3L1535,916.6z M1538.8,914.4l-0.8-1.3l-2.1,1.2l0.8,1.3L1538.8,914.4z M1542.6,912.2l-0.8-1.3l-2.1,1.2l0.8,1.3
			L1542.6,912.2z M1523.6,923.2l-0.8-1.3l-2.1,1.2l0.8,1.3L1523.6,923.2z M1527.4,921l-0.8-1.3l-2.1,1.2l0.8,1.3L1527.4,921z
			 M1531.2,918.8l-0.8-1.3l-2.1,1.2l0.8,1.3L1531.2,918.8z M1512.2,929.9l-0.8-1.3l-2.1,1.2l0.8,1.3L1512.2,929.9z M1516,927.7
			l-0.8-1.3l-2.1,1.2l0.8,1.3L1516,927.7z M1519.8,925.5l-0.8-1.3l-2.1,1.2l0.8,1.3L1519.8,925.5z M1500.8,936.5l-0.8-1.3l-2.1,1.2
			l0.8,1.3L1500.8,936.5z M1504.6,934.3l-0.8-1.3l-2.1,1.2l0.8,1.3L1504.6,934.3z M1508.4,932.1l-0.8-1.3l-2.1,1.2l0.8,1.3
			L1508.4,932.1z M1489.4,943.1l-0.8-1.3l-2.1,1.2l0.8,1.3L1489.4,943.1z M1493.2,940.9l-0.8-1.3l-2.1,1.2l0.8,1.3L1493.2,940.9z
			 M1497,938.7l-0.8-1.3l-2.1,1.2l0.8,1.3L1497,938.7z M1478.1,949.8l-0.8-1.3l-2.1,1.2l0.8,1.3L1478.1,949.8z M1481.9,947.5
			l-0.8-1.3l-2.1,1.2l0.8,1.3L1481.9,947.5z M1485.6,945.3l-0.8-1.3l-2.1,1.2l0.8,1.3L1485.6,945.3z M1483.2,968.5l-0.8,1.3l2.1,1.3
			l0.8-1.3L1483.2,968.5z M1479.5,966.2l-0.8,1.3l2.1,1.3l0.8-1.3L1479.5,966.2z M1475.8,964l-0.8,1.3l2.1,1.3l0.8-1.3L1475.8,964z
			 M1494.3,975.3l-0.8,1.3l2.1,1.3l0.8-1.3L1494.3,975.3z M1490.6,973l-0.8,1.3l2.1,1.3l0.8-1.3L1490.6,973z M1486.9,970.8l-0.8,1.3
			l2.1,1.3l0.8-1.3L1486.9,970.8z M1505.3,982.1l-0.8,1.3l2.1,1.3l0.8-1.3L1505.3,982.1z M1501.7,979.8l-0.8,1.3l2.1,1.3l0.8-1.3
			L1501.7,979.8z M1498,977.5l-0.8,1.3l2.1,1.3l0.8-1.3L1498,977.5z M1516.4,988.9l-0.8,1.3l2.1,1.3l0.8-1.3L1516.4,988.9z
			 M1512.7,986.6l-0.8,1.3l2.1,1.3l0.8-1.3L1512.7,986.6z M1509.1,984.3l-0.8,1.3l2.1,1.3l0.8-1.3L1509.1,984.3z M1527.5,995.7
			l-0.8,1.3l2.1,1.3l0.8-1.3L1527.5,995.7z M1523.8,993.4l-0.8,1.3l2.1,1.3l0.8-1.3L1523.8,993.4z M1520.1,991.1l-0.8,1.3l2.1,1.3
			l0.8-1.3L1520.1,991.1z M1538.6,1002.4l-0.8,1.3l2.1,1.3l0.8-1.3L1538.6,1002.4z M1534.9,1000.2l-0.8,1.3l2.1,1.3l0.8-1.3
			L1534.9,1000.2z M1531.2,997.9l-0.8,1.3l2.1,1.3l0.8-1.3L1531.2,997.9z M1623.5,962.3l-0.8-1.3l-3.7,2.1l0.8,1.3L1623.5,962.3z
			 M1630,958.3c-0.1-0.1-0.2-0.1-0.4-0.2c-0.3-0.2-0.8-0.5-1.2-0.8c-0.9-0.5-1.8-1.1-1.8-1.1l-0.8,1.3c0,0,0.4,0.2,0.7,0.4
			c0.2,0.1,0.4,0.2,0.5,0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-1.5,0.8l0.8,1.3L1630,958.3
			C1630.1,958.4,1630.1,958.4,1630,958.3z M1620,952.3l-0.8,1.3l3.6,2.2l0.8-1.3L1620,952.3z M1549.3,909.7l-0.8,1.3l1.3,0.8
			l0.8-1.3L1549.3,909.7z M1547,908.4c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.3,0.2-0.6,0.4-0.6,0.4l0.8,1.3
			c0,0,0.1-0.1,0.3-0.1c0.1,0,0.1-0.1,0.2-0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.5,0.3l0.8-1.3L1547,908.4
			C1547.1,908.3,1547,908.3,1547,908.4z M1543.5,910.4l0.8,1.3l1.3-0.7l-0.8-1.3L1543.5,910.4z M1469.4,953.4l0.8,1.3l3.6-2.1
			l-0.8-1.3L1469.4,953.4z M1463,957.3c0.1,0.1,0.2,0.1,0.4,0.2c0.3,0.2,0.8,0.5,1.2,0.8c0.9,0.5,1.8,1.1,1.8,1.1l0.8-1.3
			c0,0-0.4-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.5-0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l1.4-0.8l-0.8-1.3L1463,957.3
			C1462.9,957.2,1462.9,957.3,1463,957.3z M1472.8,963.4l0.8-1.3l-3.6-2.2l-0.8,1.3L1472.8,963.4z M1542.6,1006.3l0.8-1.3l-1.3-0.8
			l-0.8,1.3L1542.6,1006.3z M1545,1007.6c0,0,0.1,0,0.1-0.1c0.1-0.1,0.3-0.2,0.4-0.3c0.3-0.2,0.6-0.4,0.6-0.4l-0.8-1.3
			c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.5-0.3l-0.8,1.3L1545,1007.6
			C1544.9,1007.7,1545,1007.7,1545,1007.6z M1548.5,1005.6l-0.8-1.3l-1.3,0.7l0.8,1.3L1548.5,1005.6z"
              />
              <polygon fill="#202333" points="1720,386.3 1801,436 1885,387.3 1803,338 		" />
              <polygon fill="#202333" points="261,599.3 342,649 426,600.3 344,551 		" />
              <polygon fill="#202333" points="140,530.3 221,580 305,531.3 223,482 		" />
              <polygon fill="#202333" points="21,597.3 102,647 186,598.3 104,549 		" />
              <path
                fill="#202333"
                d="M356.3,499.1l0.8,1.3l-2.1,1.2l-0.8-1.3L356.3,499.1z M350.3,502.6l0.8,1.3l2.1-1.2l-0.8-1.3L350.3,502.6z
			 M346.5,504.8l0.8,1.3l2.1-1.2l-0.8-1.3L346.5,504.8z M365.7,493.7l0.8,1.3l2.1-1.2l-0.8-1.3L365.7,493.7z M361.8,495.9l0.8,1.3
			l2.1-1.2l-0.8-1.3L361.8,495.9z M358,498.1l0.8,1.3l2.1-1.2l-0.8-1.3L358,498.1z M377.2,487l0.8,1.3l2.1-1.2l-0.8-1.3L377.2,487z
			 M373.3,489.2l0.8,1.3l2.1-1.2l-0.8-1.3L373.3,489.2z M369.5,491.4l0.8,1.3l2.1-1.2l-0.8-1.3L369.5,491.4z M388.7,480.3l0.8,1.3
			l2.1-1.2l-0.8-1.3L388.7,480.3z M384.9,482.5l0.8,1.3l2.1-1.2l-0.8-1.3L384.9,482.5z M381,484.8l0.8,1.3l2.1-1.2l-0.8-1.3
			L381,484.8z M400.2,473.6l0.8,1.3l2.1-1.2l-0.8-1.3L400.2,473.6z M396.4,475.9l0.8,1.3l2.1-1.2l-0.8-1.3L396.4,475.9z
			 M392.6,478.1l0.8,1.3l2.1-1.2l-0.8-1.3L392.6,478.1z M411.8,467l0.8,1.3l2.1-1.2l-0.8-1.3L411.8,467z M407.9,469.2l0.8,1.3
			l2.1-1.2l-0.8-1.3L407.9,469.2z M404.1,471.4l0.8,1.3l2.1-1.2l-0.8-1.3L404.1,471.4z M406.5,448.2l0.8-1.3l-2.1-1.3l-0.8,1.3
			L406.5,448.2z M410.3,450.5l0.8-1.3L409,448l-0.8,1.3L410.3,450.5z M414,452.7l0.8-1.3l-2.1-1.3l-0.8,1.3L414,452.7z M395.3,441.5
			l0.8-1.3L394,439l-0.8,1.3L395.3,441.5z M399.1,443.7l0.8-1.3l-2.1-1.3l-0.8,1.3L399.1,443.7z M402.8,446l0.8-1.3l-2.1-1.3
			l-0.8,1.3L402.8,446z M384.1,434.7l0.8-1.3l-2.1-1.3l-0.8,1.3L384.1,434.7z M387.8,437l0.8-1.3l-2.1-1.3l-0.8,1.3L387.8,437z
			 M391.6,439.2l0.8-1.3l-2.1-1.3l-0.8,1.3L391.6,439.2z M372.9,428l0.8-1.3l-2.1-1.3l-0.8,1.3L372.9,428z M376.6,430.2l0.8-1.3
			l-2.1-1.3l-0.8,1.3L376.6,430.2z M380.3,432.5l0.8-1.3l-2.1-1.3l-0.8,1.3L380.3,432.5z M361.7,421.2l0.8-1.3l-2.1-1.3l-0.8,1.3
			L361.7,421.2z M365.4,423.5l0.8-1.3l-2.1-1.3l-0.8,1.3L365.4,423.5z M369.1,425.7l0.8-1.3l-2.1-1.3l-0.8,1.3L369.1,425.7z
			 M350.4,414.5l0.8-1.3l-2.1-1.3l-0.8,1.3L350.4,414.5z M354.2,416.7l0.8-1.3l-2.1-1.3l-0.8,1.3L354.2,416.7z M357.9,419l0.8-1.3
			l-2.1-1.3l-0.8,1.3L357.9,419z M332,417.6l-0.8-1.3l-2.1,1.2l0.8,1.3L332,417.6z M335.8,415.4l-0.8-1.3l-2.1,1.2l0.8,1.3
			L335.8,415.4z M339.6,413.2l-0.8-1.3l-2.1,1.2l0.8,1.3L339.6,413.2z M320.6,424.2l-0.8-1.3l-2.1,1.2l0.8,1.3L320.6,424.2z
			 M324.4,422l-0.8-1.3l-2.1,1.2l0.8,1.3L324.4,422z M328.2,419.8l-0.8-1.3l-2.1,1.2l0.8,1.3L328.2,419.8z M309.2,430.9l-0.8-1.3
			l-2.1,1.2l0.8,1.3L309.2,430.9z M313,428.7l-0.8-1.3l-2.1,1.2l0.8,1.3L313,428.7z M316.8,426.5l-0.8-1.3l-2.1,1.2l0.8,1.3
			L316.8,426.5z M297.8,437.5l-0.8-1.3l-2.1,1.2l0.8,1.3L297.8,437.5z M301.6,435.3l-0.8-1.3l-2.1,1.2l0.8,1.3L301.6,435.3z
			 M305.4,433.1l-0.8-1.3l-2.1,1.2l0.8,1.3L305.4,433.1z M286.5,444.1l-0.8-1.3l-2.1,1.2l0.8,1.3L286.5,444.1z M290.2,441.9
			l-0.8-1.3l-2.1,1.2l0.8,1.3L290.2,441.9z M294,439.7l-0.8-1.3l-2.1,1.2l0.8,1.3L294,439.7z M275.1,450.8l-0.8-1.3l-2.1,1.2
			l0.8,1.3L275.1,450.8z M278.9,448.5l-0.8-1.3l-2.1,1.2l0.8,1.3L278.9,448.5z M282.6,446.3l-0.8-1.3l-2.1,1.2l0.8,1.3L282.6,446.3z
			 M280.2,469.5l-0.8,1.3l2.1,1.3l0.8-1.3L280.2,469.5z M276.5,467.2l-0.8,1.3l2.1,1.3l0.8-1.3L276.5,467.2z M272.8,465l-0.8,1.3
			l2.1,1.3l0.8-1.3L272.8,465z M291.3,476.3l-0.8,1.3l2.1,1.3l0.8-1.3L291.3,476.3z M287.6,474l-0.8,1.3l2.1,1.3l0.8-1.3L287.6,474z
			 M283.9,471.8l-0.8,1.3l2.1,1.3l0.8-1.3L283.9,471.8z M302.3,483.1l-0.8,1.3l2.1,1.3l0.8-1.3L302.3,483.1z M298.7,480.8l-0.8,1.3
			l2.1,1.3l0.8-1.3L298.7,480.8z M295,478.5l-0.8,1.3l2.1,1.3l0.8-1.3L295,478.5z M313.4,489.9l-0.8,1.3l2.1,1.3l0.8-1.3
			L313.4,489.9z M309.7,487.6l-0.8,1.3l2.1,1.3l0.8-1.3L309.7,487.6z M306.1,485.3l-0.8,1.3l2.1,1.3l0.8-1.3L306.1,485.3z
			 M324.5,496.7l-0.8,1.3l2.1,1.3l0.8-1.3L324.5,496.7z M320.8,494.4l-0.8,1.3l2.1,1.3l0.8-1.3L320.8,494.4z M317.1,492.1l-0.8,1.3
			l2.1,1.3l0.8-1.3L317.1,492.1z M335.6,503.4l-0.8,1.3l2.1,1.3l0.8-1.3L335.6,503.4z M331.9,501.2l-0.8,1.3l2.1,1.3l0.8-1.3
			L331.9,501.2z M328.2,498.9l-0.8,1.3l2.1,1.3l0.8-1.3L328.2,498.9z M420.5,463.3l-0.8-1.3l-3.7,2.1l0.8,1.3L420.5,463.3z
			 M427,459.3c-0.1-0.1-0.2-0.1-0.4-0.2c-0.3-0.2-0.8-0.5-1.2-0.8c-0.9-0.5-1.8-1.1-1.8-1.1l-0.8,1.3c0,0,0.4,0.2,0.7,0.4
			c0.2,0.1,0.4,0.2,0.5,0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-1.5,0.8l0.8,1.3L427,459.3C427.1,459.4,427.1,459.4,427,459.3
			z M417,453.3l-0.8,1.3l3.6,2.2l0.8-1.3L417,453.3z M346.3,410.7l-0.8,1.3l1.3,0.8l0.8-1.3L346.3,410.7z M344,409.4
			c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.3,0.2-0.6,0.4-0.6,0.4l0.8,1.3c0,0,0.1-0.1,0.3-0.1c0.1,0,0.1-0.1,0.2-0.1l0,0
			l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.5,0.3l0.8-1.3L344,409.4C344.1,409.3,344,409.3,344,409.4z M340.5,411.4l0.8,1.3l1.3-0.7
			l-0.8-1.3L340.5,411.4z M266.4,454.4l0.8,1.3l3.6-2.1l-0.8-1.3L266.4,454.4z M260,458.3c0.1,0.1,0.2,0.1,0.4,0.2
			c0.3,0.2,0.8,0.5,1.2,0.8c0.9,0.5,1.8,1.1,1.8,1.1l0.8-1.3c0,0-0.4-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.5-0.3l0,0l0,0l0,0l0,0
			c0,0,0,0,0,0c0,0,0,0,0,0l1.4-0.8l-0.8-1.3L260,458.3C259.9,458.2,259.9,458.3,260,458.3z M269.8,464.4l0.8-1.3l-3.6-2.2l-0.8,1.3
			L269.8,464.4z M339.6,507.3l0.8-1.3l-1.3-0.8l-0.8,1.3L339.6,507.3z M342,508.6c0,0,0.1,0,0.1-0.1c0.1-0.1,0.3-0.2,0.4-0.3
			c0.3-0.2,0.6-0.4,0.6-0.4l-0.8-1.3c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.5-0.3
			l-0.8,1.3L342,508.6C341.9,508.7,342,508.7,342,508.6z M345.5,506.6l-0.8-1.3l-1.3,0.7l0.8,1.3L345.5,506.6z"
              />
              <path
                fill="#202333"
                d="M235.3,714.1l0.8,1.3l-2.1,1.2l-0.8-1.3L235.3,714.1z M229.3,717.6l0.8,1.3l2.1-1.2l-0.8-1.3L229.3,717.6z
			 M225.5,719.8l0.8,1.3l2.1-1.2l-0.8-1.3L225.5,719.8z M244.7,708.7l0.8,1.3l2.1-1.2l-0.8-1.3L244.7,708.7z M240.8,710.9l0.8,1.3
			l2.1-1.2l-0.8-1.3L240.8,710.9z M237,713.1l0.8,1.3l2.1-1.2l-0.8-1.3L237,713.1z M256.2,702l0.8,1.3l2.1-1.2l-0.8-1.3L256.2,702z
			 M252.3,704.2l0.8,1.3l2.1-1.2l-0.8-1.3L252.3,704.2z M248.5,706.4l0.8,1.3l2.1-1.2l-0.8-1.3L248.5,706.4z M267.7,695.3l0.8,1.3
			l2.1-1.2l-0.8-1.3L267.7,695.3z M263.9,697.5l0.8,1.3l2.1-1.2l-0.8-1.3L263.9,697.5z M260,699.8l0.8,1.3l2.1-1.2l-0.8-1.3
			L260,699.8z M279.2,688.7l0.8,1.3l2.1-1.2l-0.8-1.3L279.2,688.7z M275.4,690.9l0.8,1.3l2.1-1.2l-0.8-1.3L275.4,690.9z
			 M271.6,693.1l0.8,1.3l2.1-1.2l-0.8-1.3L271.6,693.1z M290.8,682l0.8,1.3l2.1-1.2l-0.8-1.3L290.8,682z M286.9,684.2l0.8,1.3
			l2.1-1.2l-0.8-1.3L286.9,684.2z M283.1,686.4l0.8,1.3l2.1-1.2l-0.8-1.3L283.1,686.4z M285.5,663.2l0.8-1.3l-2.1-1.3l-0.8,1.3
			L285.5,663.2z M289.3,665.5l0.8-1.3L288,663l-0.8,1.3L289.3,665.5z M293,667.7l0.8-1.3l-2.1-1.3l-0.8,1.3L293,667.7z M274.3,656.5
			l0.8-1.3L273,654l-0.8,1.3L274.3,656.5z M278.1,658.7l0.8-1.3l-2.1-1.3l-0.8,1.3L278.1,658.7z M281.8,661l0.8-1.3l-2.1-1.3
			l-0.8,1.3L281.8,661z M263.1,649.7l0.8-1.3l-2.1-1.3l-0.8,1.3L263.1,649.7z M266.8,652l0.8-1.3l-2.1-1.3l-0.8,1.3L266.8,652z
			 M270.6,654.2l0.8-1.3l-2.1-1.3l-0.8,1.3L270.6,654.2z M251.9,643l0.8-1.3l-2.1-1.3l-0.8,1.3L251.9,643z M255.6,645.2l0.8-1.3
			l-2.1-1.3l-0.8,1.3L255.6,645.2z M259.3,647.5l0.8-1.3l-2.1-1.3l-0.8,1.3L259.3,647.5z M240.7,636.2l0.8-1.3l-2.1-1.3l-0.8,1.3
			L240.7,636.2z M244.4,638.5l0.8-1.3l-2.1-1.3l-0.8,1.3L244.4,638.5z M248.1,640.7l0.8-1.3l-2.1-1.3l-0.8,1.3L248.1,640.7z
			 M229.4,629.5l0.8-1.3l-2.1-1.3l-0.8,1.3L229.4,629.5z M233.2,631.7l0.8-1.3l-2.1-1.3l-0.8,1.3L233.2,631.7z M236.9,634l0.8-1.3
			l-2.1-1.3l-0.8,1.3L236.9,634z M211,632.6l-0.8-1.3l-2.1,1.2l0.8,1.3L211,632.6z M214.8,630.4l-0.8-1.3l-2.1,1.2l0.8,1.3
			L214.8,630.4z M218.6,628.2l-0.8-1.3l-2.1,1.2l0.8,1.3L218.6,628.2z M199.6,639.2l-0.8-1.3l-2.1,1.2l0.8,1.3L199.6,639.2z
			 M203.4,637l-0.8-1.3l-2.1,1.2l0.8,1.3L203.4,637z M207.2,634.8l-0.8-1.3l-2.1,1.2l0.8,1.3L207.2,634.8z M188.2,645.9l-0.8-1.3
			l-2.1,1.2l0.8,1.3L188.2,645.9z M192,643.7l-0.8-1.3l-2.1,1.2l0.8,1.3L192,643.7z M195.8,641.5l-0.8-1.3l-2.1,1.2l0.8,1.3
			L195.8,641.5z M176.8,652.5l-0.8-1.3l-2.1,1.2l0.8,1.3L176.8,652.5z M180.6,650.3l-0.8-1.3l-2.1,1.2l0.8,1.3L180.6,650.3z
			 M184.4,648.1l-0.8-1.3l-2.1,1.2l0.8,1.3L184.4,648.1z M165.5,659.1l-0.8-1.3l-2.1,1.2l0.8,1.3L165.5,659.1z M169.2,656.9
			l-0.8-1.3l-2.1,1.2l0.8,1.3L169.2,656.9z M173,654.7l-0.8-1.3l-2.1,1.2l0.8,1.3L173,654.7z M154.1,665.8l-0.8-1.3l-2.1,1.2
			l0.8,1.3L154.1,665.8z M157.9,663.5l-0.8-1.3l-2.1,1.2l0.8,1.3L157.9,663.5z M161.6,661.3l-0.8-1.3l-2.1,1.2l0.8,1.3L161.6,661.3z
			 M159.2,684.5l-0.8,1.3l2.1,1.3l0.8-1.3L159.2,684.5z M155.5,682.2l-0.8,1.3l2.1,1.3l0.8-1.3L155.5,682.2z M151.8,680l-0.8,1.3
			l2.1,1.3l0.8-1.3L151.8,680z M170.3,691.3l-0.8,1.3l2.1,1.3l0.8-1.3L170.3,691.3z M166.6,689l-0.8,1.3l2.1,1.3l0.8-1.3L166.6,689z
			 M162.9,686.8l-0.8,1.3l2.1,1.3l0.8-1.3L162.9,686.8z M181.3,698.1l-0.8,1.3l2.1,1.3l0.8-1.3L181.3,698.1z M177.7,695.8l-0.8,1.3
			l2.1,1.3l0.8-1.3L177.7,695.8z M174,693.5l-0.8,1.3l2.1,1.3l0.8-1.3L174,693.5z M192.4,704.9l-0.8,1.3l2.1,1.3l0.8-1.3
			L192.4,704.9z M188.7,702.6l-0.8,1.3l2.1,1.3l0.8-1.3L188.7,702.6z M185.1,700.3l-0.8,1.3l2.1,1.3l0.8-1.3L185.1,700.3z
			 M203.5,711.7l-0.8,1.3l2.1,1.3l0.8-1.3L203.5,711.7z M199.8,709.4l-0.8,1.3l2.1,1.3l0.8-1.3L199.8,709.4z M196.1,707.1l-0.8,1.3
			l2.1,1.3l0.8-1.3L196.1,707.1z M214.6,718.4l-0.8,1.3l2.1,1.3l0.8-1.3L214.6,718.4z M210.9,716.2l-0.8,1.3l2.1,1.3l0.8-1.3
			L210.9,716.2z M207.2,713.9l-0.8,1.3l2.1,1.3l0.8-1.3L207.2,713.9z M299.5,678.3l-0.8-1.3l-3.7,2.1l0.8,1.3L299.5,678.3z
			 M306,674.3c-0.1-0.1-0.2-0.1-0.4-0.2c-0.3-0.2-0.8-0.5-1.2-0.8c-0.9-0.5-1.8-1.1-1.8-1.1l-0.8,1.3c0,0,0.4,0.2,0.7,0.4
			c0.2,0.1,0.4,0.2,0.5,0.3l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-1.5,0.8l0.8,1.3L306,674.3C306.1,674.4,306.1,674.4,306,674.3
			z M296,668.3l-0.8,1.3l3.6,2.2l0.8-1.3L296,668.3z M225.3,625.7l-0.8,1.3l1.3,0.8l0.8-1.3L225.3,625.7z M223,624.4
			c0,0-0.1,0-0.1,0.1c-0.1,0.1-0.3,0.2-0.4,0.3c-0.3,0.2-0.6,0.4-0.6,0.4l0.8,1.3c0,0,0.1-0.1,0.3-0.1c0.1,0,0.1-0.1,0.2-0.1l0,0
			l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.5,0.3l0.8-1.3L223,624.4C223.1,624.3,223,624.3,223,624.4z M219.5,626.4l0.8,1.3l1.3-0.7
			l-0.8-1.3L219.5,626.4z M145.4,669.4l0.8,1.3l3.6-2.1l-0.8-1.3L145.4,669.4z M139,673.3c0.1,0.1,0.2,0.1,0.4,0.2
			c0.3,0.2,0.8,0.5,1.2,0.8c0.9,0.5,1.8,1.1,1.8,1.1l0.8-1.3c0,0-0.4-0.2-0.7-0.4c-0.2-0.1-0.4-0.2-0.5-0.3l0,0l0,0l0,0l0,0
			c0,0,0,0,0,0c0,0,0,0,0,0l1.4-0.8l-0.8-1.3L139,673.3C138.9,673.2,138.9,673.3,139,673.3z M148.8,679.4l0.8-1.3l-3.6-2.2l-0.8,1.3
			L148.8,679.4z M218.6,722.3l0.8-1.3l-1.3-0.8l-0.8,1.3L218.6,722.3z M221,723.6c0,0,0.1,0,0.1-0.1c0.1-0.1,0.3-0.2,0.4-0.3
			c0.3-0.2,0.6-0.4,0.6-0.4l-0.8-1.3c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.5-0.3
			l-0.8,1.3L221,723.6C220.9,723.7,221,723.7,221,723.6z M224.5,721.6l-0.8-1.3l-1.3,0.7l0.8,1.3L224.5,721.6z"
              />
              <polygon fill="#202333" points="134,382.3 215,432 299,383.3 217,334 		" />
              <polygon fill="#202333" points="390,530.3 471,580 555,531.3 473,482 		" />
              <polygon fill="#202333" points="390,386.3 471,436 555,387.3 473,338 		" />
            </g>
            <g id="d-appswrapper">
              <g id="d-app">
                <g>
                  <linearGradient
                    id="SVGID_7_"
                    gradientUnits="userSpaceOnUse"
                    x1="596.2948"
                    y1="1492.3506"
                    x2="531.7549"
                    y2="1455.0885"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#808080' }} />
                    <stop offset="0.2627" style={{ stopColor: '#6F6F6F' }} />
                    <stop offset="0.7192" style={{ stopColor: '#575757' }} />
                    <stop offset="1" style={{ stopColor: '#4E4E4E' }} />
                  </linearGradient>
                  <path
                    fill="url(#SVGID_7_)"
                    d="M612.3,427.9c-0.1-0.8-3.3,0.2-3.3,0.2v1.3l0.1-0.1l-48.9-28c0,0-4.5-3.1-10.6,0.6l-48.8,28
					c0,0-0.7,0.1-0.7,0.3V429c0,0-2.7-1-2.8-0.2c-0.4,2.3-0.1,1.9,0,3.5c0,1.1,0.8,2.3,3.1,3.5l47.5,27.5c0,0,7.1,3.9,14.6,0
					L610,435c0,0,2.3-1.4,2.5-3.4C612.8,430,612.7,430.1,612.3,427.9z"
                  />

                  <linearGradient
                    id="SVGID_8_"
                    gradientUnits="userSpaceOnUse"
                    x1="536.1459"
                    y1="1498.0173"
                    x2="577.0236"
                    y2="1439.6381"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#9A9A9A' }} />
                    <stop offset="0.3122" style={{ stopColor: '#9F9F9F' }} />
                    <stop offset="0.7197" style={{ stopColor: '#B0B0B0' }} />
                    <stop offset="1" style={{ stopColor: '#BFBFBF' }} />
                  </linearGradient>
                  <path
                    fill="url(#SVGID_8_)"
                    d="M500.4,432.8l47.4,27.5c0,0,7.1,3.9,14.6,0L610,432c0,0,6.3-3.6-0.8-7.4l-49-28
					c0,0-4.6-3.1-10.7,0.6l-48.5,28C501,425.2,493.2,429,500.4,432.8z"
                  />
                </g>
                <g>
                  <linearGradient
                    id="SVGID_9_"
                    gradientUnits="userSpaceOnUse"
                    x1="596.3016"
                    y1="1506.1545"
                    x2="524.3275"
                    y2="1464.6003"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#A61D30' }} />
                    <stop offset="0.2302" style={{ stopColor: '#AA2033' }} />
                    <stop offset="0.4367" style={{ stopColor: '#B4293A' }} />
                    <stop offset="0.634" style={{ stopColor: '#C73848' }} />
                    <stop offset="0.8245" style={{ stopColor: '#E04D5A' }} />
                    <stop offset="1" style={{ stopColor: '#FF6670' }} />
                  </linearGradient>
                  <path
                    fill="url(#SVGID_9_)"
                    d="M612.3,414.1c-0.1-0.8-3.3,0.2-3.3,0.2v1.3l0.1-0.1l-48.9-28c0,0-4.5-3.1-10.6,0.6l-48.8,28
					c0,0-0.7,0.1-0.7,0.3v-1.2c0,0-2.7-1-2.8-0.2c-0.4,2.3-0.1,1.9,0,3.5c0,1.1,0.8,2.3,3.1,3.5l47.5,27.5c0,0,7.1,3.9,14.6,0
					l47.6-28.3c0,0,2.3-1.4,2.5-3.4C612.8,416.2,612.7,416.3,612.3,414.1z"
                  />

                  <linearGradient
                    id="SVGID_10_"
                    gradientUnits="userSpaceOnUse"
                    x1="536.1385"
                    y1="1511.8278"
                    x2="577.0161"
                    y2="1453.4487"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#E6455C' }} />
                    <stop offset="1" style={{ stopColor: '#FF3D49' }} />
                  </linearGradient>
                  <path
                    fill="url(#SVGID_10_)"
                    d="M500.4,419l47.4,27.5c0,0,7.1,3.9,14.6,0l47.6-28.3c0,0,6.3-3.6-0.8-7.4l-49-28
					c0,0-4.6-3.1-10.7,0.6l-48.5,28C501,411.4,493.2,415.2,500.4,419z"
                  />
                </g>
                <g>
                  <linearGradient
                    id="SVGID_11_"
                    gradientUnits="userSpaceOnUse"
                    x1="596.2872"
                    y1="1531.3463"
                    x2="531.7474"
                    y2="1494.0841"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#808080' }} />
                    <stop offset="0.2627" style={{ stopColor: '#6F6F6F' }} />
                    <stop offset="0.7192" style={{ stopColor: '#575757' }} />
                    <stop offset="1" style={{ stopColor: '#4E4E4E' }} />
                  </linearGradient>
                  <path
                    fill="url(#SVGID_11_)"
                    d="M612.3,388.9c-0.1-0.8-3.3,0.2-3.3,0.2v1.3l0.1-0.1l-48.9-28c0,0-4.5-3.1-10.6,0.6l-48.8,28
					c0,0-0.7,0.1-0.7,0.3V390c0,0-2.7-1-2.8-0.2c-0.4,2.3-0.1,1.9,0,3.5c0,1.1,0.8,2.3,3.1,3.5l47.5,27.5c0,0,7.1,3.9,14.6,0
					l47.6-28.3c0,0,2.3-1.4,2.5-3.4C612.8,391.1,612.7,391.1,612.3,388.9z"
                  />

                  <linearGradient
                    id="SVGID_12_"
                    gradientUnits="userSpaceOnUse"
                    x1="536.1522"
                    y1="1537.0045"
                    x2="577.0297"
                    y2="1478.6252"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#9A9A9A' }} />
                    <stop offset="0.3122" style={{ stopColor: '#9F9F9F' }} />
                    <stop offset="0.7197" style={{ stopColor: '#B0B0B0' }} />
                    <stop offset="1" style={{ stopColor: '#BFBFBF' }} />
                  </linearGradient>
                  <path
                    fill="url(#SVGID_12_)"
                    d="M500.4,393.8l47.4,27.5c0,0,7.1,3.9,14.6,0L610,393c0,0,6.3-3.6-0.8-7.4l-49-28
					c0,0-4.6-3.1-10.7,0.6l-48.5,28C501,386.3,493.2,390,500.4,393.8z"
                  />
                  <g>
                    <path
                      fill="#FFFFFF"
                      d="M551,388.2c-0.3-0.8-0.5-1.6-0.8-2.3c-0.1-0.2-0.4-0.4-0.6-0.6c-0.4-0.4-1.1-0.7-1.2-1.2
						c-0.8-1.9-1.5-3.8-2.1-5.7c-0.4-1.3,1.1-2.7,3.4-3.2c2.2-0.4,4.4,0.2,4.9,1.5c0.7,1.9,1.4,3.7,2,5.6c0.1,0.4,0.1,0.8-0.1,1.2
						c-0.4,0.5-0.3,1-0.1,1.5c0.2,0.4,0.3,0.8,0.5,1.2c0.1,0.2,0.1,0.4,0.2,0.6c2.5-1.1,4.1-3.3,3.6-4.9c-0.7-2-1.4-4.1-2.1-6.1
						c-0.1-0.3-0.2-0.5-0.4-0.7c-1.4-2-5.4-3-9.1-2.3c-4,0.8-6.9,3-6.8,5.4c0,0.7,0.3,1.5,0.6,2.2c0.6,1.6,1,3.3,1.9,4.9
						C545.5,387.2,547.8,388,551,388.2z"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M565.2,394.4c-0.4-1-1.3-1.8-2.7-2.3c-1.1-0.5-2.4-0.7-3.9-0.8c0.3,0.9,0.6,1.7,0.9,2.6
						c0,0.1,0.2,0.2,0.3,0.2c0.9,0.3,1.3,0.9,1.5,1.5c0.6,1.7,1.3,3.4,1.8,5.1c0.1,0.4,0.2,0.9,0,1.4c-0.4,1.2-2.2,2.1-4.2,2.2
						s-3.6-0.5-4-1.6c-0.6-1.7-1.3-3.4-1.9-5.1c-0.2-0.5-0.3-1.1,0-1.6c0.3-0.7,0.5-1.2,0.2-1.8c-0.1-0.2,0-0.5-0.1-0.7
						c-0.1-0.3-0.2-0.6-0.3-0.9c-2.9,1.5-4.3,3.1-3.8,5c0.5,2,1.2,3.9,1.9,5.9c0.8,2.1,3.4,3.4,7,3.4c5.3,0,10.1-3.2,9.3-6.2
						C566.8,398.5,565.9,396.4,565.2,394.4z"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M555.3,383.1c-0.3-0.8-1.6-1.1-2.8-0.8c-1.2,0.2-2,1-1.7,1.7c0.7,1.9,3.6,10.3,4.4,12.2
						c0.1,0.3,0.4,0.6,0.7,0.8c0.7,0.3,2,0.1,2.7-0.2c0.7-0.3,1.3-0.9,1.1-1.5C558.7,392.6,555.7,384.3,555.3,383.1z"
                    />
                  </g>
                </g>
              </g>
              <g>
                <linearGradient
                  id="SVGID_13_"
                  gradientUnits="userSpaceOnUse"
                  x1="554.679"
                  y1="1464.3314"
                  x2="554.679"
                  y2="1574.4468"
                  gradientTransform="matrix(1 0 0 -1 0 1900)"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                  <stop offset="0.291" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.9975" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                </linearGradient>
                <path
                  opacity="0.25"
                  fill="url(#SVGID_13_)"
                  enable-background="new    "
                  d="M612.2,401.4l-0.4-91.4H497.1l0.5,91.2
				c0,3.4,0.3,5,3.6,6.7l46.4,27.5c0,0,7.1,4,14.6,0.1l47.6-28.6C609.8,406.9,612.7,405.4,612.2,401.4z"
                />
                <g>
                  <circle fill="#FF8088" cx="553.5" cy="364.8" r="1.5" />
                  <circle fill="#FF8088" cx="518.5" cy="307.8" r="0.5" />
                  <circle fill="#FFFFFF" cx="600.2" cy="379.4" r="0.7" />
                  <circle fill="#E64852" cx="581.8" cy="310.5" r="0.7" />
                  <circle fill="#FFFFFF" cx="564.5" cy="353.8" r="0.7" />
                  <circle fill="#FFFFFF" cx="602.9" cy="394.5" r="0.7" />
                  <circle fill="#FFFFFF" cx="596.7" cy="336.1" r="0.7" />
                  <circle fill="#FF8088" cx="576.7" cy="339.6" r="0.7" />
                  <circle fill="#FFFFFF" cx="573.3" cy="388.6" r="0.7" />
                  <circle fill="#FFFFFF" cx="509.4" cy="371" r="0.7" />
                  <circle fill="#FFFFFF" cx="532.5" cy="363.8" r="0.7" />
                  <circle fill="#E64852" cx="604.2" cy="357.9" r="1.4" />
                  <circle fill="#FFFFFF" cx="521.8" cy="341" r="0.7" />
                  <circle fill="#E64852" cx="506.9" cy="322" r="0.7" />
                  <circle fill="#E64852" cx="513" cy="361.5" r="0.7" />
                  <circle fill="#E64852" cx="554.8" cy="313.4" r="1" />
                  <circle fill="#E64852" cx="539.3" cy="341.7" r="1.4" />
                  <circle fill="#FFFFFF" cx="508.1" cy="391.9" r="1.4" />
                  <circle fill="#FFFFFF" cx="590.4" cy="371" r="1.4" />
                </g>
              </g>
              <g>
                <polygon fill="#D6D6D6" points="584.8,438.5 586.1,436.4 581.3,433.3 579.3,434.8 			" />

                <rect
                  x="588.9"
                  y="437.6"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -98.7603 700.7441)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="596"
                  y="442.2"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -99.3019 708.8547)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="603.2"
                  y="446.7"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -99.7879 716.9974)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="610.2"
                  y="451.2"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -100.3234 725.0131)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="617.4"
                  y="455.9"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -100.9509 733.1625)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="624.6"
                  y="460.3"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -101.3505 741.2676)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="631.7"
                  y="464.9"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -101.9773 749.4169)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="638.8"
                  y="469.5"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -102.5184 757.5275)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />
              </g>
            </g>
            <g id="d-apps2wrapper">
              <g>
                <rect
                  x="1148"
                  y="790.3"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -137.7791 1334.7788)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1155.1"
                  y="794.9"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -138.405 1342.9287)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1162.2"
                  y="799.5"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -138.9467 1351.0399)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1169.3"
                  y="804.1"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -139.5742 1359.1882)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1126.4"
                  y="776.7"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -136.3217 1310.3108)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1133.5"
                  y="781.4"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -136.9473 1318.4607)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1140.6"
                  y="785.9"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -137.4887 1326.5713)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1176.4"
                  y="808.5"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -139.9677 1367.1974)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1183.6"
                  y="813.1"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -140.5943 1375.3479)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1190.7"
                  y="817.7"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -141.1363 1383.4574)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1197.9"
                  y="822.2"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -141.6216 1391.6019)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1204.9"
                  y="826.7"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -142.1568 1399.6168)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1212.6"
                  y="831.3"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -142.5549 1408.2074)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />

                <rect
                  x="1219.7"
                  y="835.9"
                  transform="matrix(0.5382 -0.8428 0.8428 0.5382 -143.0962 1416.3175)"
                  fill="#D6D6D6"
                  width="2.4"
                  height="5.7"
                />
              </g>
              <g id="d-apps2">
                <g>
                  <linearGradient
                    id="d_SVGID_14_"
                    gradientUnits="userSpaceOnUse"
                    x1="1292.1067"
                    y1="1031.5428"
                    x2="1227.5238"
                    y2="994.2559"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#808080' }} />
                    <stop offset="0.2627" style={{ stopColor: '#6F6F6F' }} />
                    <stop offset="0.7192" style={{ stopColor: '#575757' }} />
                    <stop offset="1" style={{ stopColor: '#4E4E4E' }} />
                  </linearGradient>
                  <path
                    fill="url(#d_SVGID_14_)"
                    d="M1308.2,888.8c-0.1-0.8-3.2,0.2-3.2,0.2v1.3c0,0,0-0.1-0.1-0.1l-49-28c0,0-4.5-3.1-10.7,0.6
							l-48.7,28c0,0-0.6,0.1-0.6,0.3v-1.2c0,0-2.8-1-2.9-0.2c-0.4,2.3-0.2,1.9-0.1,3.5c0,1.1,0.8,2.3,3.1,3.5l47.5,27.5
							c0,0,7.1,3.9,14.6,0l47.6-28.3c0,0,2.4-1.4,2.5-3.4C1308.6,890.9,1308.6,891,1308.2,888.8z"
                  />

                  <linearGradient
                    id="d_SVGID_15_"
                    gradientUnits="userSpaceOnUse"
                    x1="1231.855"
                    y1="1037.1101"
                    x2="1272.7325"
                    y2="978.7307"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#9A9A9A' }} />
                    <stop offset="0.3122" style={{ stopColor: '#9F9F9F' }} />
                    <stop offset="0.7197" style={{ stopColor: '#B0B0B0' }} />
                    <stop offset="1" style={{ stopColor: '#BFBFBF' }} />
                  </linearGradient>
                  <path
                    fill="url(#d_SVGID_15_)"
                    d="M1196.1,893.7l47.4,27.5c0,0,7.1,3.9,14.6,0l47.6-28.3c0,0,6.3-3.6-0.8-7.4l-49-28
							c0,0-4.6-3.1-10.7,0.6l-48.5,28C1196.8,886.1,1188.9,889.9,1196.1,893.7z"
                  />
                </g>
                <g>
                  <linearGradient
                    id="d_SVGID_16_"
                    gradientUnits="userSpaceOnUse"
                    x1="1292.1136"
                    y1="1045.3467"
                    x2="1220.0916"
                    y2="1003.7648"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#A61D30' }} />
                    <stop offset="0.2302" style={{ stopColor: '#AA2033' }} />
                    <stop offset="0.4367" style={{ stopColor: '#B4293A' }} />
                    <stop offset="0.634" style={{ stopColor: '#C73848' }} />
                    <stop offset="0.8245" style={{ stopColor: '#E04D5A' }} />
                    <stop offset="1" style={{ stopColor: '#FF6670' }} />
                  </linearGradient>
                  <path
                    fill="url(#d_SVGID_16_)"
                    d="M1308.2,875c-0.1-0.8-3.2,0.2-3.2,0.2v1.3c0,0,0-0.1-0.1-0.1l-49-28c0,0-4.5-3.1-10.7,0.6
							l-48.7,28c0,0-0.6,0.1-0.6,0.3v-1.2c0,0-2.8-1-2.9-0.2c-0.4,2.3-0.2,1.9-0.1,3.5c0,1.1,0.8,2.3,3.1,3.5l47.5,27.5
							c0,0,7.1,3.9,14.6,0l47.6-28.3c0,0,2.4-1.4,2.5-3.4C1308.6,877.1,1308.6,877.2,1308.2,875z"
                  />

                  <linearGradient
                    id="d_SVGID_17_"
                    gradientUnits="userSpaceOnUse"
                    x1="1231.8475"
                    y1="1050.9205"
                    x2="1272.7251"
                    y2="992.5413"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#E6455C' }} />
                    <stop offset="1" style={{ stopColor: '#FF3D49' }} />
                  </linearGradient>
                  <path
                    fill="url(#d_SVGID_17_)"
                    d="M1196.1,879.9l47.4,27.5c0,0,7.1,3.9,14.6,0l47.6-28.3c0,0,6.3-3.6-0.8-7.4l-49-28
							c0,0-4.6-3.1-10.7,0.6l-48.5,28C1196.8,872.3,1188.9,876.1,1196.1,879.9z"
                  />
                </g>
                <g>
                  <linearGradient
                    id="d_SVGID_18_"
                    gradientUnits="userSpaceOnUse"
                    x1="1292.0992"
                    y1="1070.5387"
                    x2="1227.5164"
                    y2="1033.2516"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#808080' }} />
                    <stop offset="0.2627" style={{ stopColor: '#6F6F6F' }} />
                    <stop offset="0.7192" style={{ stopColor: '#575757' }} />
                    <stop offset="1" style={{ stopColor: '#4E4E4E' }} />
                  </linearGradient>
                  <path
                    fill="url(#d_SVGID_18_)"
                    d="M1308.2,849.8c-0.1-0.8-3.2,0.2-3.2,0.2v1.3c0,0,0-0.1-0.1-0.1l-49-28c0,0-4.5-3.1-10.7,0.6
							l-48.7,28c0,0-0.6,0.1-0.6,0.3v-1.2c0,0-2.8-1-2.9-0.2c-0.4,2.3-0.2,1.9-0.1,3.5c0,1.1,0.8,2.3,3.1,3.5l47.5,27.5
							c0,0,7.1,3.9,14.6,0l47.6-28.3c0,0,2.4-1.4,2.5-3.4C1308.6,852,1308.6,852,1308.2,849.8z"
                  />

                  <linearGradient
                    id="d_SVGID_19_"
                    gradientUnits="userSpaceOnUse"
                    x1="1231.8612"
                    y1="1076.097"
                    x2="1272.7388"
                    y2="1017.718"
                    gradientTransform="matrix(1 0 0 -1 0 1900)"
                  >
                    <stop offset="0" style={{ stopColor: '#9A9A9A' }} />
                    <stop offset="0.3122" style={{ stopColor: '#9F9F9F' }} />
                    <stop offset="0.7197" style={{ stopColor: '#B0B0B0' }} />
                    <stop offset="1" style={{ stopColor: '#BFBFBF' }} />
                  </linearGradient>
                  <path
                    fill="url(#d_SVGID_19_)"
                    d="M1196.1,854.7l47.4,27.5c0,0,7.1,3.9,14.6,0l47.6-28.3c0,0,6.3-3.6-0.8-7.4l-49-28
							c0,0-4.6-3.1-10.7,0.6l-48.5,28C1196.8,847.2,1188.9,850.9,1196.1,854.7z"
                  />
                  <g>
                    <path
                      fill="#FFFFFF"
                      d="M1246.8,849.1c-0.3-0.8-0.5-1.6-0.8-2.3c-0.1-0.2-0.4-0.4-0.6-0.6c-0.4-0.4-1.1-0.7-1.2-1.2
								c-0.8-1.9-1.5-3.8-2.1-5.7c-0.4-1.3,1.1-2.7,3.4-3.2c2.2-0.4,4.4,0.2,4.9,1.5c0.7,1.9,1.4,3.7,2,5.6c0.1,0.4,0.1,0.8-0.1,1.2
								c-0.4,0.5-0.3,1-0.1,1.5c0.2,0.4,0.3,0.8,0.5,1.2c0.1,0.2,0.1,0.4,0.2,0.6c2.5-1.1,4.1-3.3,3.6-4.9c-0.7-2-1.4-4.1-2.1-6.1
								c-0.1-0.3-0.2-0.5-0.4-0.7c-1.4-2-5.4-3-9.1-2.3c-4,0.8-6.9,3-6.8,5.4c0,0.7,0.3,1.5,0.6,2.2c0.6,1.6,1.1,3.3,1.9,4.9
								C1241.2,848.1,1243.5,848.9,1246.8,849.1z"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M1260.9,855.3c-0.4-1-1.3-1.8-2.7-2.3c-1.1-0.5-2.4-0.7-3.9-0.8c0.3,0.9,0.6,1.7,0.9,2.6
								c0,0.1,0.2,0.2,0.3,0.2c0.9,0.3,1.3,0.9,1.5,1.5c0.6,1.7,1.3,3.4,1.8,5.1c0.1,0.4,0.2,0.9,0,1.4c-0.4,1.2-2.2,2.1-4.2,2.2
								c-2,0.1-3.6-0.5-4-1.7c-0.6-1.7-1.3-3.4-1.9-5.1c-0.2-0.5-0.3-1.1,0-1.6c0.3-0.7,0.5-1.2,0.2-1.8c-0.1-0.2,0-0.5-0.1-0.7
								c-0.1-0.3-0.2-0.6-0.3-0.9c-2.9,1.5-4.3,3.1-3.8,5c0.5,2,1.2,3.9,1.9,5.9c0.8,2.1,3.4,3.4,7,3.4c5.3,0,10.1-3.2,9.3-6.2
								C1262.5,859.3,1261.7,857.3,1260.9,855.3z"
                    />
                    <path
                      fill="#FFFFFF"
                      d="M1251,844c-0.3-0.8-1.6-1.1-2.8-0.8c-1.2,0.2-2,1-1.7,1.7c0.7,1.9,3.6,10.3,4.4,12.2
								c0.1,0.3,0.4,0.6,0.7,0.8c0.7,0.3,2,0.1,2.7-0.2s1.3-0.9,1.1-1.5C1254.5,853.5,1251.4,845.2,1251,844z"
                    />
                  </g>
                </g>
              </g>

              <g>
                <linearGradient
                  id="d_SVGID_20_"
                  gradientUnits="userSpaceOnUse"
                  x1="1250.4299"
                  y1="1003.3376"
                  x2="1250.4299"
                  y2="1112.5714"
                  gradientTransform="matrix(1 0 0 -1 0 1900)"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                  <stop offset="0.291" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.9975" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                </linearGradient>
                <path
                  opacity="0.25"
                  fill="url(#d_SVGID_20_)"
                  enable-background="new    "
                  d="M1307.9,862.9l-0.4-90.9h-114.6l0.5,90.7
						c0,3.4,0.3,4.7,3.6,6.5l46.4,27.3c0,0,7.1,4,14.6,0l47.6-28.4C1305.6,868.1,1308.4,866.8,1307.9,862.9z"
                />
                <g>
                  <circle fill="#FF8088" cx="1249.2" cy="825.7" r="1.5" />
                  <circle fill="#FF8088" cx="1214.2" cy="768.7" r="0.5" />
                  <circle fill="#FFFFFF" cx="1295.9" cy="840.3" r="0.7" />
                  <circle fill="#E64852" cx="1277.5" cy="771.4" r="0.7" />
                  <circle fill="#FFFFFF" cx="1260.2" cy="814.7" r="0.7" />
                  <circle fill="#FFFFFF" cx="1298.6" cy="855.4" r="0.7" />
                  <circle fill="#FFFFFF" cx="1292.4" cy="797" r="0.7" />
                  <circle fill="#FF8088" cx="1272.4" cy="800.5" r="0.7" />
                  <circle fill="#FFFFFF" cx="1269.1" cy="849.5" r="0.7" />
                  <circle fill="#FFFFFF" cx="1205.1" cy="831.9" r="0.7" />
                  <circle fill="#FFFFFF" cx="1228.2" cy="824.7" r="0.7" />
                  <circle fill="#E64852" cx="1300" cy="818.8" r="1.4" />
                  <circle fill="#FFFFFF" cx="1217.5" cy="801.9" r="0.7" />
                  <circle fill="#E64852" cx="1202.6" cy="782.9" r="0.7" />
                  <circle fill="#E64852" cx="1208.8" cy="822.4" r="0.7" />
                  <circle fill="#E64852" cx="1250.5" cy="774.3" r="1" />
                  <circle fill="#E64852" cx="1235.1" cy="802.6" r="1.4" />
                  <circle fill="#FFFFFF" cx="1203.9" cy="852.8" r="1.4" />
                  <circle fill="#FFFFFF" cx="1286.2" cy="831.9" r="1.4" />
                </g>
              </g>
            </g>
            <g id="topgreyblocks" opacity="0.7">
              <g>
                <linearGradient
                  id="SVGID_14_"
                  gradientUnits="userSpaceOnUse"
                  x1="947.494"
                  y1="880.5922"
                  x2="990.4099"
                  y2="903.5613"
                  gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                >
                  <stop offset="0" style={{ stopColor: '#262626' }} />
                  <stop offset="0.2774" style={{ stopColor: '#2F2F2F' }} />
                  <stop offset="0.7283" style={{ stopColor: '#474747' }} />
                  <stop offset="1" style={{ stopColor: '#595959' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_14_)"
                  points="948.4,267.8 948.4,320.8 991.4,346.8 991.5,296.7 			"
                />

                <linearGradient
                  id="SVGID_15_"
                  gradientUnits="userSpaceOnUse"
                  x1="997.8663"
                  y1="909.6794"
                  x2="1033.5619"
                  y2="873.9838"
                  gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                >
                  <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                  <stop offset="0.2132" style={{ stopColor: '#969696' }} />
                  <stop offset="0.4462" style={{ stopColor: '#717171' }} />
                  <stop offset="0.6625" style={{ stopColor: '#565656' }} />
                  <stop offset="0.8538" style={{ stopColor: '#464646' }} />
                  <stop offset="1" style={{ stopColor: '#404040' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_15_)"
                  points="991.5,296.7 991.4,346.8 1038.7,320.8 1038.7,267.8 			"
                />

                <linearGradient
                  id="SVGID_16_"
                  gradientUnits="userSpaceOnUse"
                  x1="980.2971"
                  y1="911.2566"
                  x2="1008.4671"
                  y2="955.3561"
                  gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                >
                  <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                  <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                  <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                  <stop offset="0.833" style={{ stopColor: '#636363' }} />
                  <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_16_)"
                  points="948.8,267.8 991.1,296.7 1038.6,267.9 994.7,240.1 			"
                />
                <g opacity="0.12">
                  <polygon
                    fill="#FFFFFF"
                    points="959.4,275.5 959.4,314.7 991.4,333.9 991.5,296.8 				"
                  />
                  <polygon
                    fill="#FFFFFF"
                    points="1025.2,275.5 1025.2,314.7 991.4,333.9 991.5,296.8 				"
                  />
                  <polygon
                    fill="#FFFFFF"
                    points="959.3,275.5 991.2,296.8 1026.1,275.5 993.4,254.9 				"
                  />
                </g>

                <linearGradient
                  id="SVGID_17_"
                  gradientUnits="userSpaceOnUse"
                  x1="1010.6151"
                  y1="921.8813"
                  x2="1020.1381"
                  y2="912.3583"
                  gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                  <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                  <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                  <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_17_)"
                  points="992,296.7 992,297.7 1038.9,268.8 1039,267.9 			"
                />

                <linearGradient
                  id="SVGID_18_"
                  gradientUnits="userSpaceOnUse"
                  x1="2747.8123"
                  y1="920.8981"
                  x2="2755.3716"
                  y2="913.3389"
                  gradientTransform="matrix(-1 -1.170540e-04 1.170540e-04 -1 3721.9844 1200.2046)"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                  <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                  <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                  <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_18_)" points="992,296.7 992,297.7 949,268.8 949,267.8 			" />

                <linearGradient
                  id="SVGID_19_"
                  gradientUnits="userSpaceOnUse"
                  x1="979.2193"
                  y1="890.4445"
                  x2="1004.2247"
                  y2="865.439"
                  gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                  <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                  <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                  <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_19_)"
                  points="992.3,297.2 991.5,297.3 991.4,346.8 992.3,346.5 			"
                />
              </g>
              <g>
                <g>
                  <linearGradient
                    id="SVGID_20_"
                    gradientUnits="userSpaceOnUse"
                    x1="789.5049"
                    y1="786.5737"
                    x2="832.421"
                    y2="809.5428"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#262626' }} />
                    <stop offset="0.2774" style={{ stopColor: '#2F2F2F' }} />
                    <stop offset="0.7283" style={{ stopColor: '#474747' }} />
                    <stop offset="1" style={{ stopColor: '#595959' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_20_)"
                    points="790.4,361.8 790.4,414.8 833.4,440.8 833.5,390.7 				"
                  />

                  <linearGradient
                    id="SVGID_21_"
                    gradientUnits="userSpaceOnUse"
                    x1="839.8773"
                    y1="815.6609"
                    x2="875.5729"
                    y2="779.9653"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.2132" style={{ stopColor: '#969696' }} />
                    <stop offset="0.4462" style={{ stopColor: '#717171' }} />
                    <stop offset="0.6625" style={{ stopColor: '#565656' }} />
                    <stop offset="0.8538" style={{ stopColor: '#464646' }} />
                    <stop offset="1" style={{ stopColor: '#404040' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_21_)"
                    points="833.5,390.7 833.4,440.8 880.7,414.8 880.7,361.8 				"
                  />

                  <linearGradient
                    id="SVGID_22_"
                    gradientUnits="userSpaceOnUse"
                    x1="822.3081"
                    y1="817.2381"
                    x2="850.4781"
                    y2="861.3376"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.833" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_22_)"
                    points="790.8,361.8 833.1,390.7 880.6,361.9 836.7,334.1 				"
                  />
                  <g opacity="0.12">
                    <polygon
                      fill="#FFFFFF"
                      points="801.4,369.5 801.4,408.7 833.4,427.9 833.5,390.8 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="867.2,369.5 867.2,408.7 833.4,427.9 833.5,390.8 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="801.3,369.5 833.2,390.8 868.1,369.5 835.4,348.9 					"
                    />
                  </g>

                  <linearGradient
                    id="SVGID_23_"
                    gradientUnits="userSpaceOnUse"
                    x1="852.626"
                    y1="827.8629"
                    x2="862.1494"
                    y2="818.3397"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_23_)"
                    points="834,390.7 834,391.7 880.9,362.8 881,361.9 				"
                  />

                  <linearGradient
                    id="SVGID_24_"
                    gradientUnits="userSpaceOnUse"
                    x1="2905.8013"
                    y1="826.8796"
                    x2="2913.3606"
                    y2="819.3204"
                    gradientTransform="matrix(-1 -1.170540e-04 1.170540e-04 -1 3721.9844 1200.2046)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_24_)"
                    points="834,390.7 834,391.7 791,362.8 791,361.8 				"
                  />

                  <linearGradient
                    id="SVGID_25_"
                    gradientUnits="userSpaceOnUse"
                    x1="821.2303"
                    y1="796.426"
                    x2="846.2357"
                    y2="771.4205"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_25_)"
                    points="834.3,391.2 833.5,391.3 833.4,440.8 834.3,440.5 				"
                  />
                </g>

                <line
                  fill="none"
                  stroke="#B3B3B3"
                  stroke-width="3.2211"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="881"
                  y1="362.1"
                  x2="972.4"
                  y2="307"
                />
                <g>
                  <image
                    overflow="visible"
                    opacity="0.2"
                    enable-background="new    "
                    width="54"
                    height="51"
                    xlinkHref="data:image/png;base64,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
AAAAAElFTkSuQmCC"
                    transform="matrix(0.9804 0 0 0.9804 870.2711 328.2417)"
                  ></image>
                  <g>
                    <linearGradient
                      id="SVGID_26_"
                      gradientUnits="userSpaceOnUse"
                      x1="2660.3113"
                      y1="-777.6976"
                      x2="2673.176"
                      y2="-769.5624"
                      gradientTransform="matrix(-1 0 0 1 3563.1868 1126.7981)"
                    >
                      <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                      <stop offset="0.8387" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_26_)"
                      points="888.9,355 891.5,359.3 904.4,351 901.9,346.8 					"
                    />
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <linearGradient
                    id="SVGID_27_"
                    gradientUnits="userSpaceOnUse"
                    x1="628.5163"
                    y1="689.5548"
                    x2="671.4322"
                    y2="712.5239"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#262626' }} />
                    <stop offset="0.2774" style={{ stopColor: '#2F2F2F' }} />
                    <stop offset="0.7283" style={{ stopColor: '#474747' }} />
                    <stop offset="1" style={{ stopColor: '#595959' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_27_)"
                    points="629.4,458.8 629.4,511.8 672.4,537.8 672.5,487.7 				"
                  />

                  <linearGradient
                    id="SVGID_28_"
                    gradientUnits="userSpaceOnUse"
                    x1="678.8886"
                    y1="718.6421"
                    x2="714.5844"
                    y2="682.9465"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.2132" style={{ stopColor: '#969696' }} />
                    <stop offset="0.4462" style={{ stopColor: '#717171' }} />
                    <stop offset="0.6625" style={{ stopColor: '#565656' }} />
                    <stop offset="0.8538" style={{ stopColor: '#464646' }} />
                    <stop offset="1" style={{ stopColor: '#404040' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_28_)"
                    points="672.5,487.7 672.4,537.8 719.7,511.8 719.7,458.8 				"
                  />

                  <linearGradient
                    id="SVGID_29_"
                    gradientUnits="userSpaceOnUse"
                    x1="661.3195"
                    y1="720.2193"
                    x2="689.4895"
                    y2="764.3188"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.833" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_29_)"
                    points="629.8,458.8 672.1,487.7 719.6,458.9 675.7,431.1 				"
                  />
                  <g opacity="0.12">
                    <polygon
                      fill="#FFFFFF"
                      points="640.4,466.5 640.4,505.7 672.4,524.9 672.5,487.8 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="706.2,466.5 706.2,505.7 672.4,524.9 672.5,487.8 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="640.3,466.5 672.2,487.8 707.1,466.5 674.4,445.9 					"
                    />
                  </g>

                  <linearGradient
                    id="SVGID_30_"
                    gradientUnits="userSpaceOnUse"
                    x1="691.6375"
                    y1="730.844"
                    x2="701.1605"
                    y2="721.3209"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_30_)"
                    points="673,487.7 673,488.7 719.9,459.8 720,458.9 				"
                  />

                  <linearGradient
                    id="SVGID_31_"
                    gradientUnits="userSpaceOnUse"
                    x1="3066.79"
                    y1="729.8606"
                    x2="3074.3489"
                    y2="722.3018"
                    gradientTransform="matrix(-1 -1.170540e-04 1.170540e-04 -1 3721.9844 1200.2046)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_31_)"
                    points="673,487.7 673,488.7 630,459.8 630,458.8 				"
                  />

                  <linearGradient
                    id="SVGID_32_"
                    gradientUnits="userSpaceOnUse"
                    x1="660.2417"
                    y1="699.407"
                    x2="685.247"
                    y2="674.4018"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_32_)"
                    points="673.3,488.2 672.5,488.3 672.4,537.8 673.3,537.5 				"
                  />
                </g>

                <line
                  fill="none"
                  stroke="#B3B3B3"
                  stroke-width="3.2211"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="720"
                  y1="459.1"
                  x2="814.4"
                  y2="400.3"
                />
                <g>
                  <image
                    overflow="visible"
                    opacity="0.2"
                    enable-background="new    "
                    width="54"
                    height="51"
                    xlinkHref="data:image/png;base64,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
AAAAAElFTkSuQmCC"
                    transform="matrix(0.9804 0 0 0.9804 738.2711 406.2417)"
                  ></image>
                  <g>
                    <linearGradient
                      id="SVGID_33_"
                      gradientUnits="userSpaceOnUse"
                      x1="2792.3113"
                      y1="-699.6976"
                      x2="2805.176"
                      y2="-691.5624"
                      gradientTransform="matrix(-1 0 0 1 3563.1868 1126.7981)"
                    >
                      <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                      <stop offset="0.8387" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_33_)"
                      points="756.9,433 759.5,437.3 772.4,429 769.9,424.8 					"
                    />
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <linearGradient
                    id="SVGID_34_"
                    gradientUnits="userSpaceOnUse"
                    x1="471.528"
                    y1="593.1777"
                    x2="514.4439"
                    y2="616.1468"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#262626' }} />
                    <stop offset="0.2774" style={{ stopColor: '#2F2F2F' }} />
                    <stop offset="0.7283" style={{ stopColor: '#474747' }} />
                    <stop offset="1" style={{ stopColor: '#595959' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_34_)"
                    points="472.4,555.2 472.4,608.2 515.4,634.2 515.5,584.1 				"
                  />

                  <linearGradient
                    id="SVGID_35_"
                    gradientUnits="userSpaceOnUse"
                    x1="521.8997"
                    y1="622.2655"
                    x2="557.5959"
                    y2="586.5693"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.2132" style={{ stopColor: '#969696' }} />
                    <stop offset="0.4462" style={{ stopColor: '#717171' }} />
                    <stop offset="0.6625" style={{ stopColor: '#565656' }} />
                    <stop offset="0.8538" style={{ stopColor: '#464646' }} />
                    <stop offset="1" style={{ stopColor: '#404040' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_35_)"
                    points="515.5,584.1 515.4,634.2 562.7,608.2 562.7,555.2 				"
                  />

                  <linearGradient
                    id="SVGID_36_"
                    gradientUnits="userSpaceOnUse"
                    x1="504.3308"
                    y1="623.842"
                    x2="532.5008"
                    y2="667.9416"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.833" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_36_)"
                    points="472.8,555.2 515.1,584.1 562.6,555.3 518.7,527.4 				"
                  />
                  <g opacity="0.12">
                    <polygon
                      fill="#FFFFFF"
                      points="483.4,562.8 483.4,602 515.4,621.3 515.5,584.2 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="549.2,562.9 549.2,602 515.4,621.3 515.5,584.2 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="483.3,562.8 515.2,584.2 550.1,562.9 517.4,542.3 					"
                    />
                  </g>

                  <linearGradient
                    id="SVGID_37_"
                    gradientUnits="userSpaceOnUse"
                    x1="534.6481"
                    y1="634.4672"
                    x2="544.172"
                    y2="624.9434"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_37_)"
                    points="516,584.1 516,585 562.9,556.2 563,555.3 				"
                  />

                  <linearGradient
                    id="SVGID_38_"
                    gradientUnits="userSpaceOnUse"
                    x1="3223.7781"
                    y1="633.4838"
                    x2="3231.3376"
                    y2="625.9242"
                    gradientTransform="matrix(-1 -1.170540e-04 1.170540e-04 -1 3721.9844 1200.2046)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon fill="url(#SVGID_38_)" points="516,584.1 516,585 473,556.2 473,555.2 				" />

                  <linearGradient
                    id="SVGID_39_"
                    gradientUnits="userSpaceOnUse"
                    x1="503.2527"
                    y1="603.0305"
                    x2="528.2585"
                    y2="578.0247"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_39_)"
                    points="516.3,584.6 515.5,584.7 515.4,634.2 516.3,633.8 				"
                  />
                </g>

                <line
                  fill="none"
                  stroke="#B3B3B3"
                  stroke-width="3.2211"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="563"
                  y1="555.5"
                  x2="648.3"
                  y2="501.9"
                />
                <g>
                  <image
                    overflow="visible"
                    opacity="0.2"
                    enable-background="new    "
                    width="54"
                    height="50"
                    xlinkHref="data:image/png;base64,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
RK5CYII="
                    transform="matrix(0.98 0 0 0.98 590.2817 497.2417)"
                  ></image>
                  <g>
                    <linearGradient
                      id="SVGID_40_"
                      gradientUnits="userSpaceOnUse"
                      x1="2940.311"
                      y1="-609.3386"
                      x2="2953.176"
                      y2="-601.2035"
                      gradientTransform="matrix(-1 0 0 1 3563.1868 1126.7981)"
                    >
                      <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                      <stop offset="0.8387" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_40_)"
                      points="608.9,523.4 611.5,527.6 624.4,519.4 621.9,515.1 					"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="redglow">
              <linearGradient
                id="SVGID_41_"
                x1="885.7858"
                x2="885.9467"
                y1="-920.6589"
                y2="-787.5014"
                gradientTransform="matrix(0.3592 -0.3065 1.2019 0.6834 1339.3929 1550.1232)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                fill="url(#SVGID_41_)"
                points="733.6,720 683.4,767.8 491.1,643.4 
		555.6,608.9 		"
                enable-background="new    "
                opacity="0.25"
              />
              <linearGradient
                id="SVGID_42_"
                x1="1042.4587"
                x2="993.0236"
                y1="-985.6109"
                y2="-790.8901"
                gradientTransform="matrix(0.3592 -0.3065 1.2019 0.6834 1339.3929 1550.1232)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                <stop offset="0.4448" style={{ stopColor: '#FFB1B8', stopOpacity: 0.4448 }} />
                <stop offset="0.2113" style={{ stopColor: '#FFD7DA', stopOpacity: 0.2113 }} />
                <stop offset="0.6617" style={{ stopColor: '#FF969F', stopOpacity: 0.6617 }} />
                <stop offset="0.8535" style={{ stopColor: '#FF8690', stopOpacity: 0.8535 }} />
                <stop offset="1" style={{ stopColor: '#FF808B' }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                fill="url(#SVGID_42_)"
                points="777.3,682.4 718.3,724 493.5,577.2 
		556,537.9 		"
                enable-background="new    "
                opacity="0.75"
              />
              <g id="redglowparticles">
                <circle cx="548.8" cy="631.8" r="1.6" fill="#FFFFFF" />
                <circle cx="537.9" cy="613.6" r="1.6" fill="#FFFFFF" />
                <circle cx="606.4" cy="676" r="1.6" fill="#FFFFFF" />
                <circle cx="725.1" cy="657.4" r="1.6" fill="#FFFFFF" />
                <circle cx="542.7" cy="596.8" r="1.6" fill="#FFFFFF" />
                <circle cx="623.7" cy="724.8" r="1.6" fill="#FFFFFF" />
                <circle cx="696.2" cy="708" r="1.6" fill="#FFFFFF" />
                <circle cx="611.1" cy="610.4" r="1.6" fill="#FFFFFF" />
                <circle cx="564.1" cy="553.5" r="1.6" fill="#FFFFFF" />
                <circle cx="554.2" cy="589.4" r="1.6" fill="#FFFFFF" />
                <circle cx="670" cy="625" r="1.6" fill="#FFFFFF" />
                <ellipse
                  cx="510.9"
                  cy="630.2"
                  fill="#FFFFFF"
                  rx="3.2"
                  ry="3.2"
                  transform="matrix(0.3162 -0.9487 0.9487 0.3162 -248.554 915.582)"
                />
              </g>
              <linearGradient
                id="SVGID_43_"
                x1="891.1575"
                x2="874.2567"
                y1="-968.8058"
                y2="-817.3937"
                gradientTransform="matrix(0.3592 -0.3065 1.2019 0.6834 1339.3929 1550.1232)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="7.030000e-02" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                fill="url(#SVGID_43_)"
                points="672,693.7 672,760.4 492.3,643.8 
		492.7,577.2 		"
                enable-background="new    "
                opacity="0.35"
              />
              <linearGradient
                id="SVGID_44_"
                x1="889.0407"
                x2="876.6129"
                y1="-943.0591"
                y2="-831.72"
                gradientTransform="matrix(0.3592 -0.3065 1.2019 0.6834 1339.3929 1550.1232)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                fill="url(#SVGID_44_)"
                points="672,717 672,736.3 492.3,619.6 492.7,600.5 
				"
                enable-background="new    "
                opacity="0.35"
              />
              <linearGradient
                id="SVGID_45_"
                x1="1096.1616"
                x2="1062.9662"
                y1="-979.2617"
                y2="-821.5145"
                gradientTransform="matrix(0.3592 -0.3065 1.2019 0.6834 1339.3929 1550.1232)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                <stop offset="1" style={{ stopColor: '#FFFFFF' }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                fill="url(#SVGID_45_)"
                points="733.3,655.8 732.3,668.5 555,550.9 555,537.7 
				"
                enable-background="new    "
                opacity="0.2"
              />
              <g className="particlespoly" opacity="0.25">
                <polygon
                  fill="#FFFFFF"
                  points="602.1,626.4 605.2,611 632.9,608.1 636.4,604.4 601.7,607.7 597.7,629.2 			"
                />
                <polygon
                  fill="#FFFFFF"
                  points="594,618.4 597.2,603 625.4,599.5 628.3,596.3 593.7,599.7 589.7,621.2 			"
                />
              </g>
            </g>
            <g id="blocksticks">
              <g>
                <rect
                  x="1428.8"
                  y="314.8"
                  transform="matrix(0.8588 -0.5124 0.5124 0.8588 40.4099 777.3287)"
                  fill="#BFBFBF"
                  width="2.8"
                  height="1.2"
                />

                <rect
                  x="1432.4"
                  y="312.6"
                  transform="matrix(0.8588 -0.5124 0.5124 0.8588 42.0468 778.856)"
                  fill="#BFBFBF"
                  width="2.8"
                  height="1.2"
                />

                <rect
                  x="1435.9"
                  y="310.4"
                  transform="matrix(0.8588 -0.5124 0.5124 0.8588 43.6837 780.3834)"
                  fill="#BFBFBF"
                  width="2.8"
                  height="1.2"
                />

                <rect
                  x="1439.7"
                  y="308.3"
                  transform="matrix(0.8588 -0.5124 0.5124 0.8588 45.2837 781.9971)"
                  fill="#BFBFBF"
                  width="2.8"
                  height="1.2"
                />

                <rect
                  x="1443.3"
                  y="306.1"
                  transform="matrix(0.8588 -0.5124 0.5124 0.8588 46.9205 783.5242)"
                  fill="#BFBFBF"
                  width="2.8"
                  height="1.2"
                />

                <rect
                  x="1446.8"
                  y="303.9"
                  transform="matrix(0.8588 -0.5124 0.5124 0.8588 48.5192 785.0148)"
                  fill="#BFBFBF"
                  width="2.8"
                  height="1.2"
                />

                <rect
                  x="1450.5"
                  y="301.8"
                  transform="matrix(0.8588 -0.5124 0.5124 0.8588 50.1327 786.6038)"
                  fill="#BFBFBF"
                  width="2.8"
                  height="1.2"
                />

                <rect
                  x="1454.1"
                  y="299.6"
                  transform="matrix(0.8588 -0.5124 0.5124 0.8588 51.7561 788.1558)"
                  fill="#BFBFBF"
                  width="2.8"
                  height="1.2"
                />

                <rect
                  x="1457.8"
                  y="297.5"
                  transform="matrix(0.8588 -0.5124 0.5124 0.8588 53.3696 789.7447)"
                  fill="#BFBFBF"
                  width="2.8"
                  height="1.2"
                />
              </g>
              <g>
                <line
                  fill="none"
                  stroke="#FF4D6B"
                  stroke-width="3.4927"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="1096.5"
                  y1="511.7"
                  x2="1176.2"
                  y2="464.3"
                />
              </g>
              <g>
                <line
                  fill="none"
                  stroke="#FF4D6B"
                  stroke-width="3.4927"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="938.5"
                  y1="605.7"
                  x2="1018.2"
                  y2="558.3"
                />
              </g>
              <g>
                <line
                  fill="none"
                  stroke="#FF4D6B"
                  stroke-width="3.4927"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="781.4"
                  y1="699.4"
                  x2="861"
                  y2="652.1"
                />
              </g>
              <g>
                <line
                  fill="none"
                  stroke="#FF4D6B"
                  stroke-width="3.4927"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="624.2"
                  y1="791.7"
                  x2="703.9"
                  y2="744.3"
                />
              </g>
              <g>
                <line
                  fill="none"
                  stroke="#FF4D6B"
                  stroke-width="3.4927"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="468"
                  y1="885.5"
                  x2="547.7"
                  y2="838.2"
                />
              </g>
              <g>
                <line
                  fill="none"
                  stroke="#FF4D6B"
                  stroke-width="3.4927"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="1257.5"
                  y1="417.7"
                  x2="1337.2"
                  y2="370.3"
                />
              </g>
            </g>
            <g id="redblocksparticles">
              <g>
                <linearGradient
                  id="SVGID_91_"
                  x1="3650.8601"
                  x2="3659.948"
                  y1="114.5993"
                  y2="168.2118"
                  gradientTransform="matrix(-0.3592 -0.3065 -1.2019 0.6834 2623.3687 1550.1232)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFB3B7', stopOpacity: 0 }} />
                  <stop offset="1" style={{ stopColor: '#FFB3B7' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_91_)"
                  points="1114,501.7 1114,579 1202,523 1142.3,486 
						"
                  enable-background="new    "
                />
                <linearGradient
                  id="SVGID_92_"
                  x1="3814.6211"
                  x2="3799.0762"
                  y1="74.9866"
                  y2="152.319"
                  gradientTransform="matrix(-0.3592 -0.3065 -1.2019 0.6834 2623.3687 1550.1232)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFB3B7', stopOpacity: 0 }} />
                  <stop offset="1" style={{ stopColor: '#FFB3B7' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_92_)"
                  points="1050.3,461.1 1113,502 1204,450.6 
			1141.3,409 			"
                  enable-background="new    "
                />
                <g>
                  <circle cx="1115.2" cy="508.7" r="1.5" fill="#FF8088" />
                  <circle cx="1080.2" cy="451.7" r="0.5" fill="#FF8088" />
                  <circle cx="1161.9" cy="523.3" r="0.7" fill="#FFFFFF" />
                  <circle cx="1143.5" cy="454.4" r="0.7" fill="#E64852" />
                  <circle cx="1126.2" cy="497.7" r="0.7" fill="#FFFFFF" />
                  <circle cx="1164.6" cy="538.4" r="0.7" fill="#FFFFFF" />
                  <circle cx="1158.4" cy="480" r="0.7" fill="#FFFFFF" />
                  <circle cx="1138.4" cy="483.5" r="0.7" fill="#FF8088" />
                  <circle cx="1135.1" cy="532.5" r="0.7" fill="#FFFFFF" />
                  <circle cx="1071.1" cy="514.9" r="0.7" fill="#FFFFFF" />
                  <circle cx="1094.2" cy="507.7" r="0.7" fill="#FFFFFF" />
                  <circle cx="1166" cy="501.8" r="1.4" fill="#E64852" />
                  <circle cx="1083.5" cy="484.9" r="0.7" fill="#FFFFFF" />
                  <circle cx="1068.6" cy="465.9" r="0.7" fill="#E64852" />
                  <circle cx="1074.8" cy="505.4" r="0.7" fill="#E64852" />
                  <circle cx="1116.5" cy="457.3" r="1" fill="#E64852" />
                  <circle cx="1101.1" cy="485.6" r="1.4" fill="#E64852" />
                  <circle cx="1069.9" cy="535.8" r="1.4" fill="#FFFFFF" />
                  <circle cx="1152.2" cy="514.9" r="1.4" fill="#FFFFFF" />
                </g>
              </g>
              <g>
                <linearGradient
                  id="SVGID_93_"
                  x1="3634.5652"
                  x2="3643.6531"
                  y1="382.3858"
                  y2="435.9983"
                  gradientTransform="matrix(-0.3592 -0.3065 -1.2019 0.6834 2623.3687 1550.1232)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFB3B7', stopOpacity: 0 }} />
                  <stop offset="1" style={{ stopColor: '#FFB3B7' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_93_)"
                  points="798,689.7 798,767 886,711 826.3,674 			"
                  enable-background="new    "
                  opacity="0.35"
                />
                <linearGradient
                  id="SVGID_94_"
                  x1="3798.3262"
                  x2="3782.7813"
                  y1="342.7743"
                  y2="420.1066"
                  gradientTransform="matrix(-0.3592 -0.3065 -1.2019 0.6834 2623.3687 1550.1232)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFB3B7', stopOpacity: 0 }} />
                  <stop offset="1" style={{ stopColor: '#FFB3B7' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_94_)"
                  points="734.3,649.1 797,690 888,638.6 825.3,597 
						"
                  enable-background="new    "
                  opacity="0.35"
                />
                <g>
                  <circle cx="799.2" cy="696.7" r="1.5" fill="#FF8088" />
                  <circle cx="764.2" cy="639.7" r="0.5" fill="#FF8088" />
                  <circle cx="845.9" cy="711.3" r="0.7" fill="#FFFFFF" />
                  <circle cx="827.5" cy="642.4" r="0.7" fill="#E64852" />
                  <circle cx="810.2" cy="685.7" r="0.7" fill="#FFFFFF" />
                  <circle cx="848.6" cy="726.4" r="0.7" fill="#FFFFFF" />
                  <circle cx="842.4" cy="668" r="0.7" fill="#FFFFFF" />
                  <circle cx="822.4" cy="671.5" r="0.7" fill="#FF8088" />
                  <circle cx="819.1" cy="720.5" r="0.7" fill="#FFFFFF" />
                  <circle cx="755.1" cy="702.9" r="0.7" fill="#FFFFFF" />
                  <circle cx="778.2" cy="695.7" r="0.7" fill="#FFFFFF" />
                  <circle cx="850" cy="689.8" r="1.4" fill="#E64852" />
                  <circle cx="767.5" cy="672.9" r="0.7" fill="#FFFFFF" />
                  <circle cx="752.6" cy="653.9" r="0.7" fill="#E64852" />
                  <circle cx="758.8" cy="693.4" r="0.7" fill="#E64852" />
                  <circle cx="800.5" cy="645.3" r="1" fill="#E64852" />
                  <circle cx="785.1" cy="673.6" r="1.4" fill="#E64852" />
                  <circle cx="753.9" cy="723.8" r="1.4" fill="#FFFFFF" />
                  <circle cx="836.2" cy="702.9" r="1.4" fill="#FFFFFF" />
                </g>
              </g>
              <g>
                <linearGradient
                  id="SVGID_95_"
                  x1="3629.489"
                  x2="3638.5767"
                  y1="516.1934"
                  y2="569.8058"
                  gradientTransform="matrix(-0.3592 -0.3065 -1.2019 0.6834 2623.3687 1550.1232)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFB3B7', stopOpacity: 0 }} />
                  <stop offset="1" style={{ stopColor: '#FFB3B7' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_95_)"
                  points="639,782.7 639,860 727,804 667.3,767 			"
                  enable-background="new    "
                  opacity="0.35"
                />
                <linearGradient
                  id="SVGID_96_"
                  x1="3793.2498"
                  x2="3777.7048"
                  y1="476.5823"
                  y2="553.9148"
                  gradientTransform="matrix(-0.3592 -0.3065 -1.2019 0.6834 2623.3687 1550.1232)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFB3B7', stopOpacity: 0 }} />
                  <stop offset="1" style={{ stopColor: '#FFB3B7' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_96_)"
                  points="575.3,742.1 638,783 729,731.6 666.3,690 
						"
                  enable-background="new    "
                  opacity="0.35"
                />
                <g>
                  <circle cx="640.2" cy="789.7" r="1.5" fill="#FF8088" />
                  <circle cx="605.2" cy="732.7" r="0.5" fill="#FF8088" />
                  <circle cx="686.9" cy="804.3" r="0.7" fill="#FFFFFF" />
                  <circle cx="668.5" cy="735.4" r="0.7" fill="#E64852" />
                  <circle cx="651.2" cy="778.7" r="0.7" fill="#FFFFFF" />
                  <circle cx="689.6" cy="819.4" r="0.7" fill="#FFFFFF" />
                  <circle cx="683.4" cy="761" r="0.7" fill="#FFFFFF" />
                  <circle cx="663.4" cy="764.5" r="0.7" fill="#FF8088" />
                  <circle cx="660.1" cy="813.5" r="0.7" fill="#FFFFFF" />
                  <circle cx="596.1" cy="795.9" r="0.7" fill="#FFFFFF" />
                  <circle cx="619.2" cy="788.7" r="0.7" fill="#FFFFFF" />
                  <circle cx="691" cy="782.8" r="1.4" fill="#E64852" />
                  <circle cx="608.5" cy="765.9" r="0.7" fill="#FFFFFF" />
                  <circle cx="593.6" cy="746.9" r="0.7" fill="#E64852" />
                  <circle cx="599.8" cy="786.4" r="0.7" fill="#E64852" />
                  <circle cx="641.5" cy="738.3" r="1" fill="#E64852" />
                  <circle cx="626.1" cy="766.6" r="1.4" fill="#E64852" />
                  <circle cx="594.9" cy="816.8" r="1.4" fill="#FFFFFF" />
                  <circle cx="677.2" cy="795.9" r="1.4" fill="#FFFFFF" />
                </g>
              </g>
              <g>
                <linearGradient
                  id="SVGID_97_"
                  x1="3619.9592"
                  x2="3629.0474"
                  y1="648.0037"
                  y2="701.6161"
                  gradientTransform="matrix(-0.3592 -0.3065 -1.2019 0.6834 2623.3687 1550.1232)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFB3B7', stopOpacity: 0 }} />
                  <stop offset="1" style={{ stopColor: '#FFB3B7' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_97_)"
                  points="484,875.7 484,953 572,897 512.3,860 			"
                  enable-background="new    "
                  opacity="0.35"
                />
                <linearGradient
                  id="SVGID_98_"
                  x1="3783.7202"
                  x2="3768.1753"
                  y1="608.3932"
                  y2="685.7256"
                  gradientTransform="matrix(-0.3592 -0.3065 -1.2019 0.6834 2623.3687 1550.1232)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFB3B7', stopOpacity: 0 }} />
                  <stop offset="1" style={{ stopColor: '#FFB3B7' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_98_)"
                  points="420.3,835.1 483,876 574,824.6 511.3,783 
						"
                  enable-background="new    "
                  opacity="0.35"
                />
                <g>
                  <circle cx="485.2" cy="882.7" r="1.5" fill="#FF8088" />
                  <circle cx="450.2" cy="825.7" r="0.5" fill="#FF8088" />
                  <circle cx="531.9" cy="897.3" r="0.7" fill="#FFFFFF" />
                  <circle cx="513.5" cy="828.4" r="0.7" fill="#E64852" />
                  <circle cx="496.2" cy="871.7" r="0.7" fill="#FFFFFF" />
                  <circle cx="534.6" cy="912.4" r="0.7" fill="#FFFFFF" />
                  <circle cx="528.4" cy="854" r="0.7" fill="#FFFFFF" />
                  <circle cx="508.4" cy="857.5" r="0.7" fill="#FF8088" />
                  <circle cx="505.1" cy="906.5" r="0.7" fill="#FFFFFF" />
                  <circle cx="441.1" cy="888.9" r="0.7" fill="#FFFFFF" />
                  <circle cx="464.2" cy="881.7" r="0.7" fill="#FFFFFF" />
                  <circle cx="536" cy="875.8" r="1.4" fill="#E64852" />
                  <circle cx="453.5" cy="858.9" r="0.7" fill="#FFFFFF" />
                  <circle cx="438.6" cy="839.9" r="0.7" fill="#E64852" />
                  <circle cx="444.8" cy="879.4" r="0.7" fill="#E64852" />
                  <circle cx="486.5" cy="831.3" r="1" fill="#E64852" />
                  <circle cx="471.1" cy="859.6" r="1.4" fill="#E64852" />
                  <circle cx="439.9" cy="909.8" r="1.4" fill="#FFFFFF" />
                  <circle cx="522.2" cy="888.9" r="1.4" fill="#FFFFFF" />
                </g>
              </g>
            </g>
            <g>
              <g opacity="0.25">
                <linearGradient
                  id="SVGID_46_"
                  x1="1460.7068"
                  x2="1522.7059"
                  y1="-405.4163"
                  y2="-438.5989"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#494949' }} />
                  <stop offset="0.4259" style={{ stopColor: '#525252' }} />
                  <stop offset="1" style={{ stopColor: '#656565' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_46_)"
                  points="1462,219.7 1462,297 1524,334.9 1524,261.8 				"
                />
                <linearGradient
                  id="SVGID_47_"
                  x1="1533"
                  x2="1584.1"
                  y1="-447.2"
                  y2="-396.1"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#B8B8B8' }} />
                  <stop offset="5.310000e-02" style={{ stopColor: '#B0B0B0' }} />
                  <stop offset="0.3337" style={{ stopColor: '#8B8B8B' }} />
                  <stop offset="0.5939" style={{ stopColor: '#707070' }} />
                  <stop offset="0.8241" style={{ stopColor: '#5F5F5F' }} />
                  <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_47_)"
                  points="1524,261.8 1524,334.9 1591,297 1591,219.7 				"
                />
                <linearGradient
                  id="SVGID_48_"
                  x1="1507.2352"
                  x2="1547.9783"
                  y1="-450.4547"
                  y2="-514.2369"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#787878' }} />
                  <stop offset="0.5984" style={{ stopColor: '#636363' }} />
                  <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_48_)"
                  points="1461.7,219.7 1523.6,261.8 1590.9,219.7 1528.1,179.2 				"
                />
              </g>
              <path
                fill="#B3B3B3"
                d="M1513,186.3l-0.8-1.3l2.3-1.4l0.8,1.3L1513,186.3z M1519.3,182.5l-0.8-1.3l-2.3,1.4l0.8,1.3L1519.3,182.5
		z M1523.4,180l-0.8-1.3l-2.3,1.4l0.8,1.3L1523.4,180z M1503.1,192.3l-0.8-1.3l-2.3,1.4l0.8,1.3L1503.1,192.3z M1507.2,189.8
		l-0.8-1.3l-2.3,1.4l0.8,1.3L1507.2,189.8z M1511.2,187.4l-0.8-1.3l-2.3,1.4l0.8,1.3L1511.2,187.4z M1490.9,199.7l-0.8-1.3
		l-2.3,1.4l0.8,1.3L1490.9,199.7z M1495,197.2l-0.8-1.3l-2.3,1.4l0.8,1.3L1495,197.2z M1499,194.8l-0.8-1.3l-2.3,1.4l0.8,1.3
		L1499,194.8z M1478.8,207.1l-0.8-1.3l-2.3,1.4l0.8,1.3L1478.8,207.1z M1482.8,204.6l-0.8-1.3l-2.3,1.4l0.8,1.3L1482.8,204.6z
		 M1486.9,202.1l-0.8-1.3l-2.3,1.4l0.8,1.3L1486.9,202.1z M1466.6,214.4l-0.8-1.3l-2.3,1.4l0.8,1.3L1466.6,214.4z M1470.7,212
		l-0.8-1.3l-2.3,1.4l0.8,1.3L1470.7,212z M1474.7,209.5l-0.8-1.3l-2.3,1.4l0.8,1.3L1474.7,209.5z M1461,233h-2v3h2V233z M1461,229
		h-2v2h2V229z M1461,224h-2v2h2V224z M1461,248h-2v2h2V248z M1461,243h-2v3h2V243z M1461,238h-2v2h2V238z M1461,262h-2v2h2V262z
		 M1461,257h-2v3h2V257z M1461,253h-2v2h2V253z M1461,276h-2v3h2V276z M1461,271h-2v3h2V271z M1461,266h-2v3h2V266z M1461,290h-2
		v3h2V290z M1461,286h-2v2h2V286z M1461,281h-2v3h2V281z M1471.8,305.6l-0.8,1.3l2.1,1.3l0.8-1.3L1471.8,305.6z M1468,303.3
		l-0.8,1.3l2.1,1.3l0.8-1.3L1468,303.3z M1464.3,300.9l-0.8,1.3l2.1,1.3l0.8-1.3L1464.3,300.9z M1483.2,312.6l-0.8,1.3l2.1,1.3
		l0.8-1.3L1483.2,312.6z M1479.4,310.3l-0.8,1.3l2.1,1.3l0.8-1.3L1479.4,310.3z M1475.6,308l-0.8,1.3l2.1,1.3l0.8-1.3L1475.6,308z
		 M1494.5,319.7l-0.8,1.3l2.1,1.3l0.8-1.3L1494.5,319.7z M1490.8,317.3l-0.8,1.3l2.1,1.3l0.8-1.3L1490.8,317.3z M1487,315
		l-0.8,1.3l2.1,1.3l0.8-1.3L1487,315z M1505.9,326.7l-0.8,1.3l2.1,1.3l0.8-1.3L1505.9,326.7z M1502.1,324.4l-0.8,1.3l2.1,1.3
		l0.8-1.3L1502.1,324.4z M1498.4,322l-0.8,1.3l2.1,1.3l0.8-1.3L1498.4,322z M1517.3,333.7l-0.8,1.3l2.1,1.3l0.8-1.3L1517.3,333.7z
		 M1513.5,331.4l-0.8,1.3l2.1,1.3l0.8-1.3L1513.5,331.4z M1509.7,329.1l-0.8,1.3l2.1,1.3l0.8-1.3L1509.7,329.1z M1536.8,330.5
		l0.8,1.4l2.3-1.3l-0.8-1.4L1536.8,330.5z M1532.7,332.8l0.8,1.4l2.3-1.3l-0.8-1.4L1532.7,332.8z M1528.6,335.2l0.8,1.4l2.3-1.3
		l-0.8-1.4L1528.6,335.2z M1549.1,323.4l0.8,1.4l2.3-1.3l-0.8-1.4L1549.1,323.4z M1545,325.7l0.8,1.4l2.3-1.3l-0.8-1.4L1545,325.7
		z M1540.9,328.1l0.8,1.4l2.3-1.3l-0.8-1.4L1540.9,328.1z M1561.5,316.3l0.8,1.4l2.3-1.3l-0.8-1.4L1561.5,316.3z M1557.4,318.7
		l0.8,1.4l2.3-1.3l-0.8-1.4L1557.4,318.7z M1553.3,321l0.8,1.4l2.3-1.3l-0.8-1.4L1553.3,321z M1573.8,309.2l0.8,1.4l2.3-1.3
		l-0.8-1.4L1573.8,309.2z M1569.7,311.6l0.8,1.4l2.3-1.3l-0.8-1.4L1569.7,311.6z M1565.6,313.9l0.8,1.4l2.3-1.3l-0.8-1.4
		L1565.6,313.9z M1586.2,302.2l0.8,1.4l2.3-1.3l-0.8-1.4L1586.2,302.2z M1582.1,304.5l0.8,1.4l2.3-1.3l-0.8-1.4L1582.1,304.5z
		 M1578,306.9l0.8,1.4l2.3-1.3l-0.8-1.4L1578,306.9z M1593,283.5h1.6v-2.6h-1.6V283.5z M1593,288.3h1.6v-2.6h-1.6V288.3z
		 M1593,293h1.6v-2.6h-1.6V293z M1593,269.4h1.6v-2.6h-1.6V269.4z M1593,274.1h1.6v-2.6h-1.6V274.1z M1593,278.8h1.6v-2.6h-1.6
		V278.8z M1593,255.2h1.6v-2.6h-1.6V255.2z M1593,259.9h1.6v-2.6h-1.6V259.9z M1593,264.6h1.6V262h-1.6V264.6z M1592.9,241.1h1.6
		v-2.6h-1.6V241.1z M1592.9,245.8h1.6v-2.6h-1.6V245.8z M1593,250.5h1.6v-2.6h-1.6V250.5z M1592.9,226.9h1.6v-2.6h-1.6V226.9z
		 M1592.9,231.6h1.6V229h-1.6V231.6z M1592.9,236.3h1.6v-2.6h-1.6V236.3z M1581.1,211.6l0.9-1.3l-2.1-1.4l-0.9,1.3L1581.1,211.6z
		 M1584.9,214.1l0.9-1.3l-2.1-1.4l-0.9,1.3L1584.9,214.1z M1588.7,216.6l0.9-1.3l-2.1-1.4l-0.9,1.3L1588.7,216.6z M1569.6,204.1
		l0.9-1.3l-2.1-1.4l-0.9,1.3L1569.6,204.1z M1573.4,206.6l0.9-1.3l-2.1-1.4l-0.9,1.3L1573.4,206.6z M1577.2,209.1l0.9-1.3
		l-2.1-1.4l-0.9,1.3L1577.2,209.1z M1558.1,196.6l0.9-1.3l-2.1-1.4l-0.9,1.3L1558.1,196.6z M1561.9,199.1l0.9-1.3l-2.1-1.4
		l-0.9,1.3L1561.9,199.1z M1565.7,201.6l0.9-1.3l-2.1-1.4l-0.9,1.3L1565.7,201.6z M1546.5,189.1l0.9-1.3l-2.1-1.4l-0.9,1.3
		L1546.5,189.1z M1550.4,191.6l0.9-1.3l-2.1-1.4l-0.9,1.3L1550.4,191.6z M1554.2,194l0.9-1.3l-2.1-1.4l-0.9,1.3L1554.2,194z
		 M1535,181.5l0.9-1.3l-2.1-1.4l-0.9,1.3L1535,181.5z M1538.8,184l0.9-1.3l-2.1-1.4l-0.9,1.3L1538.8,184z M1542.7,186.5l0.9-1.3
		l-2.1-1.4l-0.9,1.3L1542.7,186.5z M1461.1,216.4l0.8,1.3l1.3-0.8l-0.8-1.3L1461.1,216.4z M1459,217.8c0,0,0,0.1,0,0.2
		c0,0.1,0,0.3,0,0.5c0,0.4,0,1.5,0,1.5h2c0,0,0-0.9,0-1.1c0-0.1,0-0.1,0-0.2l0,0l0,0l0,0h-0.3h-0.2h-0.1l0.4-0.3l-0.9-1.3
		l-1.1,0.8C1458.9,217.7,1459,217.8,1459,217.8z M1458.9,221.9h1.6v-1.5h-1.6V221.9z M1458.7,296.3h1.6v-1.5h-1.6V296.3z
		 M1458.9,298l0.1,0.5c0.1,0.1,0.3,0.5,0.4,0.6c0.3,0.2,0.6,0.5,0.6,0.5l0.8-1.3c0,0-0.1-0.1-0.2-0.1s-0.1-0.1-0.2-0.1V298v-0.4
		v-0.5l0,0c0,0,0,0-0.1,0h0.1l0,0h-1.4v1C1459,298,1458.8,298,1458.9,298z M1462.3,301l0.8-1.3l-1.2-0.8l-0.8,1.3L1462.3,301z
		 M1521.4,337.7l0.8-1.3l-1.3-0.8l-0.8,1.3L1521.4,337.7z M1523.9,339.1c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.3-0.2,0.5-0.3
		c0.3-0.2,0.7-0.4,0.7-0.4l-0.8-1.4c0,0-0.1,0.1-0.3,0.2c-0.1,0-0.1,0.1-0.2,0.1l0,0l0,0l0,0l0,0l0,0l0,0l-0.5-0.3l-0.8,1.3
		L1523.9,339.1C1523.8,339.2,1523.8,339.2,1523.9,339.1z M1527.6,337l-0.8-1.4l-1.3,0.8l0.8,1.4L1527.6,337z M1591.8,300.3
		l-0.8-1.4l-1.3,0.8l0.8,1.4L1591.8,300.3z M1594,298.9c0,0,0-0.1,0-0.2s0-0.3,0-0.5c0-0.4-0.2-0.8-0.2-0.8h-1.8c0,0,0,0.1,0,0.3
		c0,0.1,0,0.1,0,0.2l0,0l0,0l0,0h0.3h0.2h0.1l-0.5,0.3l0.9,1.4l1.1-0.8C1594.1,299,1594,298.9,1594,298.9z M1594.1,294.7h-1.6v1.5
		h1.6V294.7z M1594.1,221.2h-1.6v1.4h1.6V221.2z M1594,219l-0.1-0.2c-0.1-0.1-0.3-0.2-0.4-0.3c-0.3-0.2-0.6-0.4-0.6-0.4l-0.9,1.3
		c0,0,0.1,0.1,0.2,0.1s0.1,0.1,0.2,0.1l0,0v0.2v0.2l0,0c0,0,0,0,0.1,0h-0.5v0.1l1.8,0.1L1594,219C1594.1,219,1594.1,219,1594,219z
		 M1590.8,216.6l-0.9,1.3l1.2,0.8l0.9-1.3L1590.8,216.6z M1530.8,177.3l-0.9,1.3l1.4,0.9l0.9-1.3L1530.8,177.3z M1528.2,175.8
		c0,0-0.1,0.1-0.2,0.1c-0.1,0.1-0.3,0.2-0.5,0.3c-0.3,0.2-0.7,0.4-0.7,0.4l0.8,1.3c0,0,0.1-0.1,0.3-0.2c0.1,0,0.1-0.1,0.2-0.1l0,0
		l0,0l0,0l0,0l0,0l0,0l0.5,0.4l0.9-1.3L1528.2,175.8C1528.3,175.7,1528.3,175.7,1528.2,175.8z M1524.4,178.1l0.8,1.3l1.4-0.8
		l-0.8-1.3L1524.4,178.1z"
              />
            </g>
            <g id="firstBlock">
              <linearGradient
                id="SVGID_49_"
                x1="1299.6068"
                x2="1361.6029"
                y1="-311.3163"
                y2="-344.4973"
                gradientTransform="matrix(1 0 0 1 0 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#A91B37' }} />
                <stop offset="0.2857" style={{ stopColor: '#B21F37' }} />
                <stop offset="0.75" style={{ stopColor: '#CA2B38' }} />
                <stop offset="1" style={{ stopColor: '#DA3239' }} />
              </linearGradient>
              <polygon
                fill="url(#SVGID_49_)"
                points="1300.9,313.8 1300.9,391.1 1362.9,429 1362.9,355.9 			"
              />
              <linearGradient
                id="SVGID_50_"
                x1="1372.5"
                x2="1424.6"
                y1="-353.6"
                y2="-301.5"
                gradientTransform="matrix(1 0 0 1 0 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FF999F' }} />
                <stop offset="0.1701" style={{ stopColor: '#F27B85' }} />
                <stop offset="0.4158" style={{ stopColor: '#E35566' }} />
                <stop offset="0.6441" style={{ stopColor: '#D73A4F' }} />
                <stop offset="0.8458" style={{ stopColor: '#D02A41' }} />
                <stop offset="1" style={{ stopColor: '#CE243C' }} />
              </linearGradient>
              <polygon fill="url(#SVGID_50_)" points="1363,355.9 1363,429 1432,391.1 1432,313.8 			" />
              <linearGradient
                id="SVGID_51_"
                x1="1347.0559"
                x2="1388.1415"
                y1="-355.8673"
                y2="-420.1857"
                gradientTransform="matrix(1 0 0 1 0 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#E64852' }} />
                <stop offset="5.850000e-02" style={{ stopColor: '#E44550' }} />
                <stop offset="0.6415" style={{ stopColor: '#D42D41' }} />
                <stop offset="1" style={{ stopColor: '#CE243C' }} />
              </linearGradient>
              <polygon
                fill="url(#SVGID_51_)"
                points="1300.9,313.8 1362.7,355.9 1431.9,313.9 1367.9,273.3 			"
              />
              <g opacity="0.12">
                <polygon fill="#FFFFFF" points="1317,325 1317,382.1 1363,410.2 1363,356.1 				" />
                <polygon fill="#FFFFFF" points="1413,325 1413,382.1 1363,410.2 1363,356.1 				" />
                <polygon fill="#FFFFFF" points="1316.3,325 1362.9,356.1 1413.7,325 1366.1,295 				" />
              </g>
              <linearGradient
                id="SVGID_52_"
                x1="1390.3"
                x2="1404.4501"
                y1="-371.4"
                y2="-357.25"
                gradientTransform="matrix(1 0 0 1 0 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                <stop offset="1" style={{ stopColor: '#F8613A' }} />
              </linearGradient>
              <polygon
                fill="url(#SVGID_52_)"
                points="1363,355.9 1363,357.4 1431.9,315.3 1431.8,314 			"
              />
              <linearGradient
                id="SVGID_53_"
                x1="3884.6614"
                x2="3895.3269"
                y1="-369.7385"
                y2="-359.0731"
                gradientTransform="matrix(-1 0 0 1 5222 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                <stop offset="1" style={{ stopColor: '#F8613A' }} />
              </linearGradient>
              <polygon
                fill="url(#SVGID_53_)"
                points="1363,355.9 1363,357.4 1301,315.3 1301,313.8 			"
              />
              <linearGradient
                id="SVGID_54_"
                x1="1345.25"
                x2="1381.6"
                y1="-325.4501"
                y2="-289.0999"
                gradientTransform="matrix(1 0 0 1 0 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                <stop offset="1" style={{ stopColor: '#F8613A' }} />
              </linearGradient>
              <polygon fill="url(#SVGID_54_)" points="1364,356.6 1363,356.8 1363,429 1364,428.5 			" />
            </g>
            <g id="blockdis">
              <linearGradient
                id="SVGID_85_"
                x1="352.2181"
                x2="414.9812"
                y1="250.7917"
                y2="217.2003"
                gradientTransform="matrix(1 0 0 1 0 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#A91B37' }} />
                <stop offset="0.2857" style={{ stopColor: '#B21F37' }} />
                <stop offset="0.75" style={{ stopColor: '#CA2B38' }} />
                <stop offset="1" style={{ stopColor: '#DA3239' }} />
              </linearGradient>
              <polygon
                fill="url(#SVGID_85_)"
                points="353.4,875.7 353.4,953 416.4,990.9 416.4,917.8 			"
              />
              <linearGradient
                id="SVGID_86_"
                x1="425.25"
                x2="476.85"
                y1="208.55"
                y2="260.15"
                gradientTransform="matrix(1 0 0 1 0 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FF999F' }} />
                <stop offset="0.1701" style={{ stopColor: '#F27B85' }} />
                <stop offset="0.4158" style={{ stopColor: '#E35566' }} />
                <stop offset="0.6441" style={{ stopColor: '#D73A4F' }} />
                <stop offset="0.8458" style={{ stopColor: '#D02A41' }} />
                <stop offset="1" style={{ stopColor: '#CE243C' }} />
              </linearGradient>
              <polygon fill="url(#SVGID_86_)" points="416,917.8 416,990.9 484,953 484,875.7 			" />
              <linearGradient
                id="SVGID_87_"
                x1="399.3084"
                x2="440.5609"
                y1="206.1853"
                y2="141.6056"
                gradientTransform="matrix(1 0 0 1 0 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#E64852' }} />
                <stop offset="5.850000e-02" style={{ stopColor: '#E44550' }} />
                <stop offset="0.6415" style={{ stopColor: '#D42D41' }} />
                <stop offset="1" style={{ stopColor: '#CE243C' }} />
              </linearGradient>
              <polygon
                fill="url(#SVGID_87_)"
                points="353.1,875.8 416,918.6 484.4,875.7 420.3,835.1 			"
              />
              <g opacity="0.12">
                <polygon fill="#FFFFFF" points="370,886.8 370,944 416,972 416,918 				" />
                <polygon fill="#FFFFFF" points="466,886.8 466,944 416,972 416,918 				" />
                <polygon fill="#FFFFFF" points="369.8,886.8 416.3,918 467.2,886.8 419.5,856.9 				" />
              </g>
              <linearGradient
                id="SVGID_88_"
                x1="443.3097"
                x2="457.3094"
                y1="190.4596"
                y2="204.4595"
                gradientTransform="matrix(1 0 0 1 0 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                <stop offset="1" style={{ stopColor: '#F8613A' }} />
              </linearGradient>
              <polygon
                fill="url(#SVGID_88_)"
                points="416,917.8 416,919.2 484.7,877.1 484.7,875.8 			"
              />
              <linearGradient
                id="SVGID_89_"
                x1="4831.9097"
                x2="4843.0757"
                y1="191.8594"
                y2="203.0256"
                gradientTransform="matrix(-1 0 0 1 5222 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                <stop offset="1" style={{ stopColor: '#F8613A' }} />
              </linearGradient>
              <polygon fill="url(#SVGID_89_)" points="416,917.8 416,919.2 353,877.1 353,875.7 			" />
              <linearGradient
                id="SVGID_90_"
                x1="398.7"
                x2="435.2615"
                y1="235.8999"
                y2="272.4615"
                gradientTransform="matrix(1 0 0 1 0 700)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                <stop offset="1" style={{ stopColor: '#F8613A' }} />
              </linearGradient>
              <polygon fill="url(#SVGID_90_)" points="418,917.5 416,918.6 416,990.9 418,989.8 			" />
            </g>
            <g id="redblocks">
              <g>
                <linearGradient
                  id="SVGID_49_"
                  x1="1299.6068"
                  x2="1361.6029"
                  y1="-311.3163"
                  y2="-344.4973"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#A91B37' }} />
                  <stop offset="0.2857" style={{ stopColor: '#B21F37' }} />
                  <stop offset="0.75" style={{ stopColor: '#CA2B38' }} />
                  <stop offset="1" style={{ stopColor: '#DA3239' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_49_)"
                  points="1300.9,313.8 1300.9,391.1 1362.9,429 1362.9,355.9 			"
                />
                <linearGradient
                  id="SVGID_50_"
                  x1="1372.5"
                  x2="1424.6"
                  y1="-353.6"
                  y2="-301.5"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FF999F' }} />
                  <stop offset="0.1701" style={{ stopColor: '#F27B85' }} />
                  <stop offset="0.4158" style={{ stopColor: '#E35566' }} />
                  <stop offset="0.6441" style={{ stopColor: '#D73A4F' }} />
                  <stop offset="0.8458" style={{ stopColor: '#D02A41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_50_)"
                  points="1363,355.9 1363,429 1432,391.1 1432,313.8 			"
                />
                <linearGradient
                  id="SVGID_51_"
                  x1="1347.0559"
                  x2="1388.1415"
                  y1="-355.8673"
                  y2="-420.1857"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#E64852' }} />
                  <stop offset="5.850000e-02" style={{ stopColor: '#E44550' }} />
                  <stop offset="0.6415" style={{ stopColor: '#D42D41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_51_)"
                  points="1300.9,313.8 1362.7,355.9 1431.9,313.9 1367.9,273.3 			"
                />
                <g opacity="0.12">
                  <polygon fill="#FFFFFF" points="1317,325 1317,382.1 1363,410.2 1363,356.1 				" />
                  <polygon fill="#FFFFFF" points="1413,325 1413,382.1 1363,410.2 1363,356.1 				" />
                  <polygon fill="#FFFFFF" points="1316.3,325 1362.9,356.1 1413.7,325 1366.1,295 				" />
                </g>
                <linearGradient
                  id="SVGID_52_"
                  x1="1390.3"
                  x2="1404.4501"
                  y1="-371.4"
                  y2="-357.25"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_52_)"
                  points="1363,355.9 1363,357.4 1431.9,315.3 1431.8,314 			"
                />
                <linearGradient
                  id="SVGID_53_"
                  x1="3884.6614"
                  x2="3895.3269"
                  y1="-369.7385"
                  y2="-359.0731"
                  gradientTransform="matrix(-1 0 0 1 5222 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_53_)"
                  points="1363,355.9 1363,357.4 1301,315.3 1301,313.8 			"
                />
                <linearGradient
                  id="SVGID_54_"
                  x1="1345.25"
                  x2="1381.6"
                  y1="-325.4501"
                  y2="-289.0999"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_54_)"
                  points="1364,356.6 1363,356.8 1363,429 1364,428.5 			"
                />
              </g>
              <g>
                <linearGradient
                  id="SVGID_55_"
                  x1="1141.6068"
                  x2="1203.6029"
                  y1="-217.3163"
                  y2="-250.4973"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#A91B37' }} />
                  <stop offset="0.2857" style={{ stopColor: '#B21F37' }} />
                  <stop offset="0.75" style={{ stopColor: '#CA2B38' }} />
                  <stop offset="1" style={{ stopColor: '#DA3239' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_55_)"
                  points="1142.9,407.8 1142.9,485.1 1204.9,523 1204.9,449.9 			"
                />
                <linearGradient
                  id="SVGID_56_"
                  x1="1214.5"
                  x2="1266.6"
                  y1="-259.6"
                  y2="-207.5"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FF999F' }} />
                  <stop offset="0.1701" style={{ stopColor: '#F27B85' }} />
                  <stop offset="0.4158" style={{ stopColor: '#E35566' }} />
                  <stop offset="0.6441" style={{ stopColor: '#D73A4F' }} />
                  <stop offset="0.8458" style={{ stopColor: '#D02A41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_56_)"
                  points="1205,449.9 1205,523 1274,485.1 1274,407.8 			"
                />
                <linearGradient
                  id="SVGID_57_"
                  x1="1189.0559"
                  x2="1230.1415"
                  y1="-261.8673"
                  y2="-326.1857"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#E64852' }} />
                  <stop offset="5.850000e-02" style={{ stopColor: '#E44550' }} />
                  <stop offset="0.6415" style={{ stopColor: '#D42D41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_57_)"
                  points="1142.9,407.8 1204.7,449.9 1273.9,407.9 1209.9,367.3 			"
                />
                <g opacity="0.12">
                  <polygon fill="#FFFFFF" points="1159,419 1159,476.1 1205,504.2 1205,450.1 				" />
                  <polygon fill="#FFFFFF" points="1255,419 1255,476.1 1205,504.2 1205,450.1 				" />
                  <polygon fill="#FFFFFF" points="1158.3,419 1204.9,450.1 1255.7,419 1208.1,389 				" />
                </g>
                <linearGradient
                  id="SVGID_58_"
                  x1="1232.3"
                  x2="1246.4501"
                  y1="-277.4"
                  y2="-263.25"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_58_)"
                  points="1205,449.9 1205,451.4 1273.9,409.3 1273.8,408 			"
                />
                <linearGradient
                  id="SVGID_59_"
                  x1="4042.6614"
                  x2="4053.3269"
                  y1="-275.7386"
                  y2="-265.0729"
                  gradientTransform="matrix(-1 0 0 1 5222 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_59_)"
                  points="1205,449.9 1205,451.4 1143,409.3 1143,407.8 			"
                />
                <linearGradient
                  id="SVGID_60_"
                  x1="1187.25"
                  x2="1223.6"
                  y1="-231.4501"
                  y2="-195.0999"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_60_)"
                  points="1206,450.6 1205,450.8 1205,523 1206,522.5 			"
                />
              </g>
              <g>
                <linearGradient
                  id="SVGID_61_"
                  x1="980.6068"
                  x2="1042.6029"
                  y1="-123.3163"
                  y2="-156.4973"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#A91B37' }} />
                  <stop offset="0.2857" style={{ stopColor: '#B21F37' }} />
                  <stop offset="0.75" style={{ stopColor: '#CA2B38' }} />
                  <stop offset="1" style={{ stopColor: '#DA3239' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_61_)"
                  points="981.9,501.8 981.9,579.1 1043.9,617 1043.9,543.9 			"
                />
                <linearGradient
                  id="SVGID_62_"
                  x1="1053.5"
                  x2="1105.6"
                  y1="-165.6"
                  y2="-113.5"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FF999F' }} />
                  <stop offset="0.1701" style={{ stopColor: '#F27B85' }} />
                  <stop offset="0.4158" style={{ stopColor: '#E35566' }} />
                  <stop offset="0.6441" style={{ stopColor: '#D73A4F' }} />
                  <stop offset="0.8458" style={{ stopColor: '#D02A41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_62_)"
                  points="1044,543.9 1044,617 1113,579.1 1113,501.8 			"
                />
                <linearGradient
                  id="SVGID_63_"
                  x1="1028.0559"
                  x2="1069.1415"
                  y1="-167.8673"
                  y2="-232.1857"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#E64852' }} />
                  <stop offset="5.850000e-02" style={{ stopColor: '#E44550' }} />
                  <stop offset="0.6415" style={{ stopColor: '#D42D41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_63_)"
                  points="981.9,501.8 1043.7,543.9 1112.9,501.9 1048.9,461.3 			"
                />
                <g opacity="0.12">
                  <polygon fill="#FFFFFF" points="998,513 998,570.1 1044,598.2 1044,544.1 				" />
                  <polygon fill="#FFFFFF" points="1094,513 1094,570.1 1044,598.2 1044,544.1 				" />
                  <polygon fill="#FFFFFF" points="997.3,513 1043.9,544.1 1094.7,513 1047.1,483 				" />
                </g>
                <linearGradient
                  id="SVGID_64_"
                  x1="1071.3"
                  x2="1085.45"
                  y1="-183.4"
                  y2="-169.25"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_64_)"
                  points="1044,543.9 1044,545.4 1112.9,503.3 1112.8,502 			"
                />
                <linearGradient
                  id="SVGID_65_"
                  x1="4203.6616"
                  x2="4214.3271"
                  y1="-181.7386"
                  y2="-171.0729"
                  gradientTransform="matrix(-1 0 0 1 5222 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_65_)"
                  points="1044,543.9 1044,545.4 982,503.3 982,501.8 			"
                />
                <linearGradient
                  id="SVGID_66_"
                  x1="1026.25"
                  x2="1062.6"
                  y1="-137.4501"
                  y2="-101.0999"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_66_)"
                  points="1045,544.6 1044,544.8 1044,617 1045,616.5 			"
                />
              </g>
              <g>
                <linearGradient
                  id="SVGID_67_"
                  x1="822.6068"
                  x2="884.603"
                  y1="-29.3163"
                  y2="-62.4973"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#A91B37' }} />
                  <stop offset="0.2857" style={{ stopColor: '#B21F37' }} />
                  <stop offset="0.75" style={{ stopColor: '#CA2B38' }} />
                  <stop offset="1" style={{ stopColor: '#DA3239' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_67_)"
                  points="823.9,595.8 823.9,673.1 885.9,711 885.9,637.9 			"
                />
                <linearGradient
                  id="SVGID_68_"
                  x1="895.5"
                  x2="947.6"
                  y1="-71.6"
                  y2="-19.5"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FF999F' }} />
                  <stop offset="0.1701" style={{ stopColor: '#F27B85' }} />
                  <stop offset="0.4158" style={{ stopColor: '#E35566' }} />
                  <stop offset="0.6441" style={{ stopColor: '#D73A4F' }} />
                  <stop offset="0.8458" style={{ stopColor: '#D02A41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_68_)" points="886,637.9 886,711 955,673.1 955,595.8 			" />
                <linearGradient
                  id="SVGID_69_"
                  x1="870.056"
                  x2="911.1414"
                  y1="-73.8674"
                  y2="-138.1857"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#E64852' }} />
                  <stop offset="5.850000e-02" style={{ stopColor: '#E44550' }} />
                  <stop offset="0.6415" style={{ stopColor: '#D42D41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_69_)"
                  points="823.9,595.8 885.7,637.9 954.9,595.9 890.9,555.3 			"
                />
                <g opacity="0.12">
                  <polygon fill="#FFFFFF" points="840,607 840,664.1 886,692.2 886,638.1 				" />
                  <polygon fill="#FFFFFF" points="936,607 936,664.1 886,692.2 886,638.1 				" />
                  <polygon fill="#FFFFFF" points="839.3,607 885.9,638.1 936.7,607 889.1,577 				" />
                </g>
                <linearGradient
                  id="SVGID_70_"
                  x1="913.3002"
                  x2="927.4498"
                  y1="-89.3999"
                  y2="-75.2501"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_70_)"
                  points="886,637.9 886,639.4 954.9,597.3 954.8,596 			"
                />
                <linearGradient
                  id="SVGID_71_"
                  x1="4361.6616"
                  x2="4372.3271"
                  y1="-87.7386"
                  y2="-77.0729"
                  gradientTransform="matrix(-1 0 0 1 5222 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_71_)" points="886,637.9 886,639.4 824,597.3 824,595.8 			" />
                <linearGradient
                  id="SVGID_72_"
                  x1="868.25"
                  x2="904.6"
                  y1="-43.4501"
                  y2="-7.0999"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_72_)" points="887,638.6 886,638.8 886,711 887,710.5 			" />
              </g>
              <g>
                <linearGradient
                  id="SVGID_73_"
                  x1="665.5068"
                  x2="727.5029"
                  y1="64.4837"
                  y2="31.3026"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#A91B37' }} />
                  <stop offset="0.2857" style={{ stopColor: '#B21F37' }} />
                  <stop offset="0.75" style={{ stopColor: '#CA2B38' }} />
                  <stop offset="1" style={{ stopColor: '#DA3239' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_73_)"
                  points="666.8,689.6 666.8,766.9 728.8,804.8 728.8,731.7 			"
                />
                <linearGradient
                  id="SVGID_74_"
                  x1="738.5"
                  x2="790.6"
                  y1="22.2"
                  y2="74.3"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FF999F' }} />
                  <stop offset="0.1701" style={{ stopColor: '#F27B85' }} />
                  <stop offset="0.4158" style={{ stopColor: '#E35566' }} />
                  <stop offset="0.6441" style={{ stopColor: '#D73A4F' }} />
                  <stop offset="0.8458" style={{ stopColor: '#D02A41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_74_)" points="729,731.7 729,804.8 798,766.9 798,689.6 			" />
                <linearGradient
                  id="SVGID_75_"
                  x1="712.8423"
                  x2="753.9279"
                  y1="19.8539"
                  y2="-44.4645"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#E64852' }} />
                  <stop offset="5.850000e-02" style={{ stopColor: '#E44550' }} />
                  <stop offset="0.6415" style={{ stopColor: '#D42D41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_75_)"
                  points="666.7,689.5 728.6,731.7 797.7,689.6 733.7,649 			"
                />
                <g opacity="0.12">
                  <polygon fill="#FFFFFF" points="682,700.7 682,757.9 729,785.9 729,731.9 				" />
                  <polygon fill="#FFFFFF" points="779,700.7 779,757.9 729,785.9 729,731.9 				" />
                  <polygon
                    fill="#FFFFFF"
                    points="682.1,700.7 728.7,731.9 779.5,700.7 731.9,670.8 				"
                  />
                </g>
                <linearGradient
                  id="SVGID_76_"
                  x1="756.335"
                  x2="770.4348"
                  y1="4.3349"
                  y2="18.4348"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_76_)"
                  points="729,731.7 729,733.1 797.9,691 797.8,689.7 			"
                />
                <linearGradient
                  id="SVGID_77_"
                  x1="4518.6602"
                  x2="4529.3257"
                  y1="6.0099"
                  y2="16.6755"
                  gradientTransform="matrix(-1 0 0 1 5222 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_77_)" points="729,731.7 729,733.1 667,691 667,689.6 			" />
                <linearGradient
                  id="SVGID_78_"
                  x1="711.2"
                  x2="747.55"
                  y1="50.2999"
                  y2="86.6501"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_78_)" points="730,732.4 729,732.5 729,804.8 730,804.2 			" />
              </g>
              <g>
                <linearGradient
                  id="SVGID_79_"
                  x1="508.3068"
                  x2="570.3029"
                  y1="156.6837"
                  y2="123.5026"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#A91B37' }} />
                  <stop offset="0.2857" style={{ stopColor: '#B21F37' }} />
                  <stop offset="0.75" style={{ stopColor: '#CA2B38' }} />
                  <stop offset="1" style={{ stopColor: '#DA3239' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_79_)"
                  points="509.6,781.8 509.6,859.1 571.6,897 571.6,823.9 			"
                />
                <linearGradient
                  id="SVGID_80_"
                  x1="581.25"
                  x2="632.85"
                  y1="114.65"
                  y2="166.25"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FF999F' }} />
                  <stop offset="0.1701" style={{ stopColor: '#F27B85' }} />
                  <stop offset="0.4158" style={{ stopColor: '#E35566' }} />
                  <stop offset="0.6441" style={{ stopColor: '#D73A4F' }} />
                  <stop offset="0.8458" style={{ stopColor: '#D02A41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_80_)" points="572,823.9 572,897 640,859.1 640,781.8 			" />
                <linearGradient
                  id="SVGID_81_"
                  x1="555.7562"
                  x2="596.8416"
                  y1="112.1323"
                  y2="47.814"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#E64852' }} />
                  <stop offset="5.850000e-02" style={{ stopColor: '#E44550' }} />
                  <stop offset="0.6415" style={{ stopColor: '#D42D41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_81_)"
                  points="509.6,781.8 571.4,823.9 640.6,781.9 576.5,741.3 			"
                />
                <g opacity="0.12">
                  <polygon fill="#FFFFFF" points="526,792.9 526,850.1 572,878.1 572,824.1 				" />
                  <polygon fill="#FFFFFF" points="622,792.9 622,850.1 572,878.1 572,824.1 				" />
                  <polygon fill="#FFFFFF" points="525,792.9 571.5,824.1 622.3,792.9 574.7,763 				" />
                </g>
                <linearGradient
                  id="SVGID_82_"
                  x1="599.35"
                  x2="613.4"
                  y1="96.55"
                  y2="110.6"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_82_)"
                  points="572,823.9 572,825.3 640.8,783.2 640.8,781.9 			"
                />
                <linearGradient
                  id="SVGID_83_"
                  x1="4675.6753"
                  x2="4686.3408"
                  y1="98.2252"
                  y2="108.8909"
                  gradientTransform="matrix(-1 0 0 1 5222 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_83_)" points="572,823.9 572,825.3 510,783.2 510,781.8 			" />
                <linearGradient
                  id="SVGID_84_"
                  x1="554.5"
                  x2="591.35"
                  y1="142.2999"
                  y2="179.1501"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_84_)" points="574,824.6 572,824.8 572,897 574,896.5 			" />
              </g>
              <g>
                <linearGradient
                  id="SVGID_85_"
                  x1="352.2181"
                  x2="414.9812"
                  y1="250.7917"
                  y2="217.2003"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#A91B37' }} />
                  <stop offset="0.2857" style={{ stopColor: '#B21F37' }} />
                  <stop offset="0.75" style={{ stopColor: '#CA2B38' }} />
                  <stop offset="1" style={{ stopColor: '#DA3239' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_85_)"
                  points="353.4,875.7 353.4,953 416.4,990.9 416.4,917.8 			"
                />
                <linearGradient
                  id="SVGID_86_"
                  x1="425.25"
                  x2="476.85"
                  y1="208.55"
                  y2="260.15"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FF999F' }} />
                  <stop offset="0.1701" style={{ stopColor: '#F27B85' }} />
                  <stop offset="0.4158" style={{ stopColor: '#E35566' }} />
                  <stop offset="0.6441" style={{ stopColor: '#D73A4F' }} />
                  <stop offset="0.8458" style={{ stopColor: '#D02A41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_86_)" points="416,917.8 416,990.9 484,953 484,875.7 			" />
                <linearGradient
                  id="SVGID_87_"
                  x1="399.3084"
                  x2="440.5609"
                  y1="206.1853"
                  y2="141.6056"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#E64852' }} />
                  <stop offset="5.850000e-02" style={{ stopColor: '#E44550' }} />
                  <stop offset="0.6415" style={{ stopColor: '#D42D41' }} />
                  <stop offset="1" style={{ stopColor: '#CE243C' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_87_)"
                  points="353.1,875.8 416,918.6 484.4,875.7 420.3,835.1 			"
                />
                <g opacity="0.12">
                  <polygon fill="#FFFFFF" points="370,886.8 370,944 416,972 416,918 				" />
                  <polygon fill="#FFFFFF" points="466,886.8 466,944 416,972 416,918 				" />
                  <polygon fill="#FFFFFF" points="369.8,886.8 416.3,918 467.2,886.8 419.5,856.9 				" />
                </g>
                <linearGradient
                  id="SVGID_88_"
                  x1="443.3097"
                  x2="457.3094"
                  y1="190.4596"
                  y2="204.4595"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_88_)"
                  points="416,917.8 416,919.2 484.7,877.1 484.7,875.8 			"
                />
                <linearGradient
                  id="SVGID_89_"
                  x1="4831.9097"
                  x2="4843.0757"
                  y1="191.8594"
                  y2="203.0256"
                  gradientTransform="matrix(-1 0 0 1 5222 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_89_)" points="416,917.8 416,919.2 353,877.1 353,875.7 			" />
                <linearGradient
                  id="SVGID_90_"
                  x1="398.7"
                  x2="435.2615"
                  y1="235.8999"
                  y2="272.4615"
                  gradientTransform="matrix(1 0 0 1 0 700)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2713" style={{ stopColor: '#FDC8BA' }} />
                  <stop offset="0.5184" style={{ stopColor: '#FB9C83' }} />
                  <stop offset="0.7299" style={{ stopColor: '#F97C5B' }} />
                  <stop offset="0.8974" style={{ stopColor: '#F86843' }} />
                  <stop offset="1" style={{ stopColor: '#F8613A' }} />
                </linearGradient>
                <polygon fill="url(#SVGID_90_)" points="418,917.5 416,918.6 416,990.9 418,989.8 			" />
              </g>
            </g>

            <g id="bottomgreyblocks" opacity="0.7">
              <g>
                <linearGradient
                  id="SVGID_99_"
                  gradientUnits="userSpaceOnUse"
                  x1="1381.4531"
                  y1="601.6292"
                  x2="1424.369"
                  y2="624.5983"
                  gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                >
                  <stop offset="0" style={{ stopColor: '#262626' }} />
                  <stop offset="0.2774" style={{ stopColor: '#2F2F2F' }} />
                  <stop offset="0.7283" style={{ stopColor: '#474747' }} />
                  <stop offset="1" style={{ stopColor: '#595959' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_99_)"
                  points="1382.3,546.9 1382.3,599.8 1425.4,625.8 1425.4,575.7 			"
                />

                <linearGradient
                  id="SVGID_100_"
                  gradientUnits="userSpaceOnUse"
                  x1="1431.8254"
                  y1="630.7177"
                  x2="1467.5216"
                  y2="595.0216"
                  gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                >
                  <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                  <stop offset="0.2132" style={{ stopColor: '#969696' }} />
                  <stop offset="0.4462" style={{ stopColor: '#717171' }} />
                  <stop offset="0.6625" style={{ stopColor: '#565656' }} />
                  <stop offset="0.8538" style={{ stopColor: '#464646' }} />
                  <stop offset="1" style={{ stopColor: '#404040' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_100_)"
                  points="1425.4,575.7 1425.4,625.8 1472.6,599.9 1472.6,546.9 			"
                />

                <linearGradient
                  id="SVGID_101_"
                  gradientUnits="userSpaceOnUse"
                  x1="1414.2559"
                  y1="632.294"
                  x2="1442.4258"
                  y2="676.3935"
                  gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                >
                  <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                  <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                  <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                  <stop offset="0.833" style={{ stopColor: '#636363' }} />
                  <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_101_)"
                  points="1382.7,546.8 1425.1,575.7 1472.5,546.9 1428.6,519.1 			"
                />
                <g opacity="0.12">
                  <polygon
                    fill="#FFFFFF"
                    points="1393.3,554.5 1393.3,593.7 1425.4,612.9 1425.4,575.9 				"
                  />
                  <polygon
                    fill="#FFFFFF"
                    points="1459.1,554.5 1459.1,593.7 1425.4,612.9 1425.4,575.9 				"
                  />
                  <polygon
                    fill="#FFFFFF"
                    points="1393.2,554.5 1425.2,575.9 1460,554.5 1427.3,534 				"
                  />
                </g>

                <linearGradient
                  id="SVGID_102_"
                  gradientUnits="userSpaceOnUse"
                  x1="1444.6425"
                  y1="642.9139"
                  x2="1454.1476"
                  y2="633.4088"
                  gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                  <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                  <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                  <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_102_)"
                  points="1426,575.7 1426,576.7 1472.9,547.8 1473,547 			"
                />

                <linearGradient
                  id="SVGID_103_"
                  gradientUnits="userSpaceOnUse"
                  x1="2313.7791"
                  y1="641.9354"
                  x2="2321.3389"
                  y2="634.3757"
                  gradientTransform="matrix(-1 -1.170540e-04 1.170540e-04 -1 3721.9844 1200.2046)"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                  <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                  <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                  <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_103_)"
                  points="1426,575.7 1426,576.7 1383,547.8 1383,546.9 			"
                />

                <linearGradient
                  id="SVGID_104_"
                  gradientUnits="userSpaceOnUse"
                  x1="1413.178"
                  y1="611.4822"
                  x2="1438.1833"
                  y2="586.4769"
                  gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                >
                  <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                  <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                  <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                  <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                  <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                </linearGradient>
                <polygon
                  fill="url(#SVGID_104_)"
                  points="1426.2,576.2 1425.4,576.3 1425.4,625.8 1426.2,625.5 			"
                />
              </g>
              <g>
                <g>
                  <linearGradient
                    id="SVGID_105_"
                    gradientUnits="userSpaceOnUse"
                    x1="1223.4641"
                    y1="507.6107"
                    x2="1266.38"
                    y2="530.5798"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#262626' }} />
                    <stop offset="0.2774" style={{ stopColor: '#2F2F2F' }} />
                    <stop offset="0.7283" style={{ stopColor: '#474747' }} />
                    <stop offset="1" style={{ stopColor: '#595959' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_105_)"
                    points="1224.3,640.9 1224.3,693.8 1267.4,719.8 1267.4,669.7 				"
                  />

                  <linearGradient
                    id="SVGID_106_"
                    gradientUnits="userSpaceOnUse"
                    x1="1273.8364"
                    y1="536.6992"
                    x2="1309.5326"
                    y2="501.0031"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.2132" style={{ stopColor: '#969696' }} />
                    <stop offset="0.4462" style={{ stopColor: '#717171' }} />
                    <stop offset="0.6625" style={{ stopColor: '#565656' }} />
                    <stop offset="0.8538" style={{ stopColor: '#464646' }} />
                    <stop offset="1" style={{ stopColor: '#404040' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_106_)"
                    points="1267.4,669.7 1267.4,719.8 1314.6,693.9 1314.6,640.9 				"
                  />

                  <linearGradient
                    id="SVGID_107_"
                    gradientUnits="userSpaceOnUse"
                    x1="1256.2668"
                    y1="538.2755"
                    x2="1284.4368"
                    y2="582.375"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.833" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_107_)"
                    points="1224.7,640.8 1267.1,669.7 1314.5,640.9 1270.6,613.1 				"
                  />
                  <g opacity="0.12">
                    <polygon
                      fill="#FFFFFF"
                      points="1235.3,648.5 1235.3,687.7 1267.4,706.9 1267.4,669.9 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="1301.1,648.5 1301.1,687.7 1267.4,706.9 1267.4,669.9 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="1235.2,648.5 1267.2,669.9 1302,648.5 1269.3,628 					"
                    />
                  </g>

                  <linearGradient
                    id="SVGID_108_"
                    gradientUnits="userSpaceOnUse"
                    x1="1286.6536"
                    y1="548.8954"
                    x2="1296.1586"
                    y2="539.3903"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_108_)"
                    points="1268,669.7 1268,670.7 1314.9,641.8 1315,641 				"
                  />

                  <linearGradient
                    id="SVGID_109_"
                    gradientUnits="userSpaceOnUse"
                    x1="2471.7681"
                    y1="547.9169"
                    x2="2479.3279"
                    y2="540.3572"
                    gradientTransform="matrix(-1 -1.170540e-04 1.170540e-04 -1 3721.9844 1200.2046)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_109_)"
                    points="1268,669.7 1268,670.7 1225,641.8 1225,640.9 				"
                  />

                  <linearGradient
                    id="SVGID_110_"
                    gradientUnits="userSpaceOnUse"
                    x1="1255.189"
                    y1="517.4637"
                    x2="1280.1943"
                    y2="492.4585"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_110_)"
                    points="1268.2,670.2 1267.4,670.3 1267.4,719.8 1268.2,719.5 				"
                  />
                </g>

                <line
                  fill="none"
                  stroke="#B3B3B3"
                  stroke-width="3.2211"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="1314.9"
                  y1="641.1"
                  x2="1406.3"
                  y2="586"
                />
                <g>
                  <image
                    overflow="visible"
                    opacity="0.2"
                    enable-background="new    "
                    width="54"
                    height="51"
                    xlinkHref="data:image/png;base64,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"
                    transform="matrix(0.9804 0 0 0.9804 1304.2711 607.2417)"
                  ></image>
                  <g>
                    <linearGradient
                      id="SVGID_111_"
                      gradientUnits="userSpaceOnUse"
                      x1="2226.3848"
                      y1="-498.6838"
                      x2="2239.2498"
                      y2="-490.5486"
                      gradientTransform="matrix(-1 0 0 1 3563.1868 1126.7981)"
                    >
                      <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                      <stop offset="0.8387" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_111_)"
                      points="1322.8,634 1325.4,638.3 1338.4,630 1335.8,625.8 					"
                    />
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <linearGradient
                    id="SVGID_112_"
                    gradientUnits="userSpaceOnUse"
                    x1="1062.4755"
                    y1="410.5919"
                    x2="1105.3914"
                    y2="433.561"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#262626' }} />
                    <stop offset="0.2774" style={{ stopColor: '#2F2F2F' }} />
                    <stop offset="0.7283" style={{ stopColor: '#474747' }} />
                    <stop offset="1" style={{ stopColor: '#595959' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_112_)"
                    points="1063.3,737.9 1063.3,790.8 1106.4,816.8 1106.4,766.7 				"
                  />

                  <linearGradient
                    id="SVGID_113_"
                    gradientUnits="userSpaceOnUse"
                    x1="1112.8478"
                    y1="439.6804"
                    x2="1148.5438"
                    y2="403.9843"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.2132" style={{ stopColor: '#969696' }} />
                    <stop offset="0.4462" style={{ stopColor: '#717171' }} />
                    <stop offset="0.6625" style={{ stopColor: '#565656' }} />
                    <stop offset="0.8538" style={{ stopColor: '#464646' }} />
                    <stop offset="1" style={{ stopColor: '#404040' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_113_)"
                    points="1106.4,766.7 1106.4,816.8 1153.6,790.9 1153.6,737.9 				"
                  />

                  <linearGradient
                    id="SVGID_114_"
                    gradientUnits="userSpaceOnUse"
                    x1="1095.2782"
                    y1="441.2566"
                    x2="1123.4481"
                    y2="485.3561"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.833" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_114_)"
                    points="1063.7,737.8 1106.1,766.7 1153.5,737.9 1109.6,710.1 				"
                  />
                  <g opacity="0.12">
                    <polygon
                      fill="#FFFFFF"
                      points="1074.3,745.5 1074.3,784.7 1106.4,803.9 1106.4,766.9 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="1140.1,745.5 1140.1,784.7 1106.4,803.9 1106.4,766.9 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="1074.2,745.5 1106.2,766.9 1141,745.5 1108.3,725 					"
                    />
                  </g>

                  <linearGradient
                    id="SVGID_115_"
                    gradientUnits="userSpaceOnUse"
                    x1="1125.6649"
                    y1="451.8765"
                    x2="1135.1699"
                    y2="442.3715"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_115_)"
                    points="1107,766.7 1107,767.7 1153.9,738.8 1154,738 				"
                  />

                  <linearGradient
                    id="SVGID_116_"
                    gradientUnits="userSpaceOnUse"
                    x1="2632.7566"
                    y1="450.8981"
                    x2="2640.3164"
                    y2="443.3383"
                    gradientTransform="matrix(-1 -1.170540e-04 1.170540e-04 -1 3721.9844 1200.2046)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_116_)"
                    points="1107,766.7 1107,767.7 1064,738.8 1064,737.9 				"
                  />

                  <linearGradient
                    id="SVGID_117_"
                    gradientUnits="userSpaceOnUse"
                    x1="1094.2003"
                    y1="420.4448"
                    x2="1119.2057"
                    y2="395.4397"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_117_)"
                    points="1107.2,767.2 1106.4,767.3 1106.4,816.8 1107.2,816.5 				"
                  />
                </g>

                <line
                  fill="none"
                  stroke="#B3B3B3"
                  stroke-width="3.2211"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="1153.9"
                  y1="738.1"
                  x2="1248.3"
                  y2="679.3"
                />
                <g>
                  <image
                    overflow="visible"
                    opacity="0.2"
                    enable-background="new    "
                    width="54"
                    height="51"
                    xlinkHref="data:image/png;base64,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"
                    transform="matrix(0.9804 0 0 0.9804 1172.2711 685.2417)"
                  ></image>
                  <g>
                    <linearGradient
                      id="SVGID_118_"
                      gradientUnits="userSpaceOnUse"
                      x1="2358.3848"
                      y1="-420.6838"
                      x2="2371.2498"
                      y2="-412.5486"
                      gradientTransform="matrix(-1 0 0 1 3563.1868 1126.7981)"
                    >
                      <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                      <stop offset="0.8387" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_118_)"
                      points="1190.8,712 1193.4,716.3 1206.4,708 1203.8,703.8 					"
                    />
                  </g>
                </g>
              </g>
              <g>
                <g>
                  <linearGradient
                    id="SVGID_119_"
                    gradientUnits="userSpaceOnUse"
                    x1="905.4864"
                    y1="314.215"
                    x2="948.4024"
                    y2="337.1843"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#262626' }} />
                    <stop offset="0.2774" style={{ stopColor: '#2F2F2F' }} />
                    <stop offset="0.7283" style={{ stopColor: '#474747' }} />
                    <stop offset="1" style={{ stopColor: '#595959' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_119_)"
                    points="906.3,834.2 906.3,887.2 949.4,913.2 949.4,863.1 				"
                  />

                  <linearGradient
                    id="SVGID_120_"
                    gradientUnits="userSpaceOnUse"
                    x1="955.8588"
                    y1="343.3028"
                    x2="991.5549"
                    y2="307.6066"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.2132" style={{ stopColor: '#969696' }} />
                    <stop offset="0.4462" style={{ stopColor: '#717171' }} />
                    <stop offset="0.6625" style={{ stopColor: '#565656' }} />
                    <stop offset="0.8538" style={{ stopColor: '#464646' }} />
                    <stop offset="1" style={{ stopColor: '#404040' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_120_)"
                    points="949.4,863.1 949.4,913.2 996.6,887.2 996.6,834.2 				"
                  />

                  <linearGradient
                    id="SVGID_121_"
                    gradientUnits="userSpaceOnUse"
                    x1="938.2895"
                    y1="344.8793"
                    x2="966.4595"
                    y2="388.9789"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.833" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_121_)"
                    points="906.7,834.2 949.1,863.1 996.5,834.3 952.6,806.4 				"
                  />
                  <g opacity="0.12">
                    <polygon
                      fill="#FFFFFF"
                      points="917.3,841.9 917.3,881.1 949.4,900.3 949.4,863.2 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="983.1,841.9 983.1,881.1 949.4,900.3 949.4,863.2 					"
                    />
                    <polygon
                      fill="#FFFFFF"
                      points="917.2,841.9 949.2,863.2 984,841.9 951.3,821.3 					"
                    />
                  </g>

                  <linearGradient
                    id="SVGID_122_"
                    gradientUnits="userSpaceOnUse"
                    x1="968.6761"
                    y1="355.4992"
                    x2="978.1812"
                    y2="345.994"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_122_)"
                    points="950,863.1 950,864.1 996.9,835.2 997,834.3 				"
                  />

                  <linearGradient
                    id="SVGID_123_"
                    gradientUnits="userSpaceOnUse"
                    x1="2789.7456"
                    y1="354.521"
                    x2="2797.3054"
                    y2="346.9612"
                    gradientTransform="matrix(-1 -1.170540e-04 1.170540e-04 -1 3721.9844 1200.2046)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_123_)"
                    points="950,863.1 950,864.1 907,835.2 907,834.2 				"
                  />

                  <linearGradient
                    id="SVGID_124_"
                    gradientUnits="userSpaceOnUse"
                    x1="937.2116"
                    y1="324.0675"
                    x2="962.2169"
                    y2="299.0622"
                    gradientTransform="matrix(1 1.170540e-04 1.170540e-04 -1 -1.549590e-02 1199.7689)"
                  >
                    <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                    <stop offset="0.2961" style={{ stopColor: '#D3D3D3' }} />
                    <stop offset="0.604" style={{ stopColor: '#ABABAB' }} />
                    <stop offset="0.8495" style={{ stopColor: '#939393' }} />
                    <stop offset="1" style={{ stopColor: '#8A8A8A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_124_)"
                    points="950.2,863.6 949.4,863.7 949.4,913.2 950.2,912.8 				"
                  />
                </g>

                <line
                  fill="none"
                  stroke="#B3B3B3"
                  stroke-width="3.2211"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  x1="996.9"
                  y1="834.5"
                  x2="1082.2"
                  y2="780.9"
                />
                <g>
                  <image
                    overflow="visible"
                    opacity="0.2"
                    enable-background="new    "
                    width="54"
                    height="50"
                    xlinkHref="data:image/png;base64,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
CzAAqYTVOPWO2yYAAAAASUVORK5CYII="
                    transform="matrix(0.98 0 0 0.98 1024.2817 776.2417)"
                  ></image>
                  <g>
                    <linearGradient
                      id="SVGID_125_"
                      gradientUnits="userSpaceOnUse"
                      x1="2506.385"
                      y1="-330.3252"
                      x2="2519.25"
                      y2="-322.19"
                      gradientTransform="matrix(-1 0 0 1 3563.1868 1126.7981)"
                    >
                      <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                      <stop offset="0.8387" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
                    </linearGradient>
                    <polygon
                      fill="url(#SVGID_125_)"
                      points="1042.8,802.4 1045.4,806.6 1058.4,798.4 1055.8,794.2 					"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g>
              <circle r="1" style={{ fill: '#fff' }} opacity="4gf.2">
                <animateMotion begin="-200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="4gf.2">
                <animateMotion begin="-400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="4gf.2">
                <animateMotion begin="-600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="4gf.2">
                <animateMotion begin="-800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-1000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-1200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-1400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-1600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-1800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-2000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-2200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-2400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-2600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-2800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-3000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-3200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-3400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-3600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-3800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-4000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-4200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-4400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-4600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-4800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-5000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-5200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-5400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-5600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-5800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-6000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-6200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-6400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>

              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-6600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-6800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-7000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-7200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-7400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-7600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-7800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-8000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-8200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-8400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-8600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-8800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-9000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-9200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-9400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-9600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="04gf2">
                <animateMotion begin="-9800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-10000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-10200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-10400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-10600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-10800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-11000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-11200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-11400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-11600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-11800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-12000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-12200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-12400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-12600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-12800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-13000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-13200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-13400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-13600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-13800ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-14000ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-14200ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-14400ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
              <circle r="1" style={{ fill: '#fff' }} opacity="0.4gf">
                <animateMotion begin="-14600ms" dur="10s" repeatCount="indefinite">
                  <mpath xlinkHref="#bottomline" />
                </animateMotion>
              </circle>
            </g>

            <g id="bottomblocks" opacity="0.7">
              <g>
                <g opacity="0.25">
                  <linearGradient
                    id="SVGID_126_"
                    gradientUnits="userSpaceOnUse"
                    x1="1652.4972"
                    y1="450.1895"
                    x2="1679.3896"
                    y2="464.5827"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#494949' }} />
                    <stop offset="0.2255" style={{ stopColor: '#525252' }} />
                    <stop offset="0.593" style={{ stopColor: '#6A6A6A' }} />
                    <stop offset="1" style={{ stopColor: '#8C8C8C' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_126_)"
                    points="1653,717.7 1653,750.8 1680,767 1680,735.7 				"
                  />

                  <linearGradient
                    id="SVGID_127_"
                    gradientUnits="userSpaceOnUse"
                    x1="1683.9341"
                    y1="468.25"
                    x2="1705.967"
                    y2="446.217"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.833" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_127_)"
                    points="1680,735.7 1680,767 1709,750.8 1709,717.7 				"
                  />

                  <linearGradient
                    id="SVGID_128_"
                    gradientUnits="userSpaceOnUse"
                    x1="1673.0768"
                    y1="469.5625"
                    x2="1690.5178"
                    y2="496.8659"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#A6A6A6' }} />
                    <stop offset="3.360000e-02" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.4566" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.7934" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_128_)"
                    points="1653.6,717.7 1680.1,735.7 1708.9,717.7 1682,700.3 				"
                  />
                </g>

                <linearGradient
                  id="SVGID_129_"
                  gradientUnits="userSpaceOnUse"
                  x1="1709.9064"
                  y1="447.7885"
                  x2="1652.8374"
                  y2="483.866"
                  gradientTransform="matrix(1 0 0 -1 0 1200)"
                >
                  <stop offset="0" style={{ stopColor: '#3A3C4D' }} />
                  <stop offset="0.42" style={{ stopColor: '#3D3F4E' }} />
                  <stop offset="0.7058" style={{ stopColor: '#464752' }} />
                  <stop offset="0.9509" style={{ stopColor: '#555557' }} />
                  <stop offset="1" style={{ stopColor: '#595959' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_129_)"
                  d="M1675.6,703.4l-0.3-0.6l1-0.6l0.3,0.6L1675.6,703.4z M1678.3,701.7l-0.3-0.6l-1,0.6l0.3,0.6
				L1678.3,701.7z M1680,700.7l-0.3-0.6l-1,0.6l0.3,0.6L1680,700.7z M1671.3,705.9l-0.3-0.6l-1,0.6l0.3,0.6L1671.3,705.9z
				 M1673.1,704.9l-0.3-0.6l-1,0.6l0.3,0.6L1673.1,704.9z M1674.8,703.8l-0.3-0.6l-1,0.6l0.3,0.6L1674.8,703.8z M1666.1,709.1
				l-0.3-0.6l-1,0.6l0.3,0.6L1666.1,709.1z M1667.9,708l-0.3-0.6l-1,0.6l0.3,0.6L1667.9,708z M1669.6,707l-0.3-0.6l-1,0.6l0.3,0.6
				L1669.6,707z M1660.9,712.3l-0.3-0.6l-1,0.6l0.3,0.6L1660.9,712.3z M1662.6,711.2l-0.3-0.6l-1,0.6l0.3,0.6L1662.6,711.2z
				 M1664.4,710.2l-0.3-0.6l-1,0.6l0.3,0.6L1664.4,710.2z M1655.7,715.4l-0.3-0.6l-1,0.6l0.3,0.6L1655.7,715.4z M1657.4,714.4
				l-0.3-0.6l-1,0.6l0.3,0.6L1657.4,714.4z M1659.2,713.3l-0.3-0.6l-1,0.6l0.3,0.6L1659.2,713.3z M1653.3,723.4h-0.9v1.3h0.9V723.4z
				 M1653.3,721.7h-0.9v0.9h0.9V721.7z M1653.3,719.5h-0.9v0.9h0.9V719.5z M1653.3,729.8h-0.9v0.9h0.9V729.8z M1653.3,727.6h-0.9
				v1.3h0.9V727.6z M1653.3,725.5h-0.9v0.9h0.9V725.5z M1653.3,735.8h-0.9v0.9h0.9V735.8z M1653.3,733.6h-0.9v1.3h0.9V733.6z
				 M1653.3,731.9h-0.9v0.9h0.9V731.9z M1653.3,741.8h-0.9v1.3h0.9V741.8z M1653.3,739.6h-0.9v1.3h0.9V739.6z M1653.3,737.5h-0.9
				v1.3h0.9V737.5z M1653.3,747.8h-0.9v1.3h0.9V747.8z M1653.3,746.1h-0.9v0.9h0.9V746.1z M1653.3,743.9h-0.9v1.3h0.9V743.9z
				 M1657.9,754.5l-0.4,0.6l0.9,0.6l0.4-0.6L1657.9,754.5z M1656.3,753.4l-0.4,0.6l0.9,0.6l0.4-0.6L1656.3,753.4z M1654.7,752.4
				l-0.4,0.6l0.9,0.6l0.4-0.6L1654.7,752.4z M1662.8,757.5l-0.4,0.6l0.9,0.6l0.4-0.6L1662.8,757.5z M1661.2,756.5l-0.4,0.6l0.9,0.6
				l0.4-0.6L1661.2,756.5z M1659.6,755.5l-0.4,0.6l0.9,0.6l0.4-0.6L1659.6,755.5z M1667.7,760.5l-0.4,0.6l0.9,0.6l0.4-0.6
				L1667.7,760.5z M1666,759.5l-0.4,0.6l0.9,0.6l0.4-0.6L1666,759.5z M1664.4,758.5l-0.4,0.6l0.9,0.6l0.4-0.6L1664.4,758.5z
				 M1672.5,763.5l-0.4,0.6l0.9,0.6l0.4-0.6L1672.5,763.5z M1670.9,762.5l-0.4,0.6l0.9,0.6l0.4-0.6L1670.9,762.5z M1669.3,761.5
				l-0.4,0.6l0.9,0.6l0.4-0.6L1669.3,761.5z M1677.4,766.5l-0.4,0.6l0.9,0.6l0.4-0.6L1677.4,766.5z M1675.8,765.5l-0.4,0.6l0.9,0.6
				l0.4-0.6L1675.8,765.5z M1674.2,764.5l-0.4,0.6l0.9,0.6l0.4-0.6L1674.2,764.5z M1685.7,765.1l0.3,0.6l1-0.6l-0.3-0.6
				L1685.7,765.1z M1684,766.1l0.3,0.6l1-0.6l-0.3-0.6L1684,766.1z M1682.2,767.1l0.3,0.6l1-0.6l-0.3-0.6L1682.2,767.1z M1691,762.1
				l0.3,0.6l1-0.6l-0.3-0.6L1691,762.1z M1689.3,763.1l0.3,0.6l1-0.6l-0.3-0.6L1689.3,763.1z M1687.5,764.1l0.3,0.6l1-0.6l-0.3-0.6
				L1687.5,764.1z M1696.3,759l0.3,0.6l1-0.6l-0.3-0.6L1696.3,759z M1694.6,760l0.3,0.6l1-0.6l-0.3-0.6L1694.6,760z M1692.8,761
				l0.3,0.6l1-0.6l-0.3-0.6L1692.8,761z M1701.6,756l0.3,0.6l1-0.6l-0.3-0.6L1701.6,756z M1699.8,757l0.3,0.6l1-0.6l-0.3-0.6
				L1699.8,757z M1698.1,758l0.3,0.6l1-0.6l-0.3-0.6L1698.1,758z M1706.9,753l0.3,0.6l1-0.6l-0.3-0.6L1706.9,753z M1705.1,754
				l0.3,0.6l1-0.6l-0.3-0.6L1705.1,754z M1703.4,755l0.3,0.6l1-0.6l-0.3-0.6L1703.4,755z M1709.8,745l0.7,0l0-1.1l-0.7,0L1709.8,745
				z M1709.8,747l0.7,0l0-1.1l-0.7,0L1709.8,747z M1709.8,749l0.7,0l0-1.1l-0.7,0L1709.8,749z M1709.8,738.9l0.7,0l0-1.1l-0.7,0
				L1709.8,738.9z M1709.8,741l0.7,0l0-1.1l-0.7,0L1709.8,741z M1709.8,743l0.7,0l0-1.1l-0.7,0L1709.8,743z M1709.8,732.9l0.7,0
				l0-1.1l-0.7,0L1709.8,732.9z M1709.8,734.9l0.7,0l0-1.1l-0.7,0L1709.8,734.9z M1709.8,736.9l0.7,0l0-1.1l-0.7,0L1709.8,736.9z
				 M1709.8,726.8l0.7,0l0-1.1l-0.7,0L1709.8,726.8z M1709.8,728.8l0.7,0l0-1.1l-0.7,0L1709.8,728.8z M1709.8,730.8l0.7,0l0-1.1
				l-0.7,0L1709.8,730.8z M1709.8,720.8l0.7,0l0-1.1l-0.7,0L1709.8,720.8z M1709.8,722.8l0.7,0l0-1.1l-0.7,0L1709.8,722.8z
				 M1709.8,724.8l0.7,0l0-1.1l-0.7,0L1709.8,724.8z M1704.7,714.2l0.4-0.6l-0.9-0.6l-0.4,0.6L1704.7,714.2z M1706.4,715.3l0.4-0.6
				l-0.9-0.6l-0.4,0.6L1706.4,715.3z M1708,716.3l0.4-0.6l-0.9-0.6l-0.4,0.6L1708,716.3z M1699.8,711l0.4-0.6l-0.9-0.6l-0.4,0.6
				L1699.8,711z M1701.4,712.1l0.4-0.6l-0.9-0.6l-0.4,0.6L1701.4,712.1z M1703.1,713.1l0.4-0.6l-0.9-0.6l-0.4,0.6L1703.1,713.1z
				 M1694.8,707.8l0.4-0.6l-0.9-0.6l-0.4,0.6L1694.8,707.8z M1696.5,708.8l0.4-0.6l-0.9-0.6l-0.4,0.6L1696.5,708.8z M1698.1,709.9
				l0.4-0.6l-0.9-0.6l-0.4,0.6L1698.1,709.9z M1689.9,704.6l0.4-0.6l-0.9-0.6l-0.4,0.6L1689.9,704.6z M1691.6,705.6l0.4-0.6
				l-0.9-0.6l-0.4,0.6L1691.6,705.6z M1693.2,706.7l0.4-0.6l-0.9-0.6l-0.4,0.6L1693.2,706.7z M1685,701.3l0.4-0.6l-0.9-0.6l-0.4,0.6
				L1685,701.3z M1686.6,702.4l0.4-0.6l-0.9-0.6l-0.4,0.6L1686.6,702.4z M1688.3,703.5l0.4-0.6l-0.9-0.6l-0.4,0.6L1688.3,703.5z
				 M1653.3,716.3l0.3,0.6l0.5-0.3l-0.3-0.6L1653.3,716.3z M1652.4,716.9C1652.4,716.9,1652.4,716.9,1652.4,716.9c0,0.1,0,0.2,0,0.3
				c0,0.2,0,0.6,0,0.6h0.9c0,0,0-0.4,0-0.5c0,0,0-0.1,0-0.1v0v0v0l-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0l0.2-0.1l-0.4-0.6
				L1652.4,716.9C1652.4,716.8,1652.4,716.8,1652.4,716.9z M1652.4,718.6h0.7V718h-0.7V718.6z M1652.3,750.5h0.7v-0.6h-0.7V750.5z
				 M1652.4,751.2c0,0,0,0.2,0.1,0.2c0,0,0.1,0.2,0.2,0.2c0.1,0.1,0.3,0.2,0.3,0.2l0.4-0.6c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1-0.1l0,0
				l0-0.2l0-0.2h0c0,0,0,0,0,0c0,0,0,0,0,0l0,0h-0.6L1652.4,751.2C1652.4,751.2,1652.4,751.2,1652.4,751.2z M1653.8,752.5l0.4-0.6
				l-0.5-0.3l-0.4,0.6L1653.8,752.5z M1679.2,768.2l0.4-0.6l-0.6-0.3l-0.4,0.6L1679.2,768.2z M1680.2,768.8
				C1680.2,768.8,1680.3,768.8,1680.2,768.8c0.1-0.1,0.2-0.1,0.3-0.1c0.1-0.1,0.3-0.2,0.3-0.2l-0.3-0.6c0,0-0.1,0-0.1,0.1
				c0,0-0.1,0-0.1,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.2-0.1l-0.4,0.6L1680.2,768.8
				C1680.2,768.8,1680.2,768.8,1680.2,768.8z M1681.8,767.9l-0.3-0.6l-0.6,0.3l0.3,0.6L1681.8,767.9z M1709.3,752.2l-0.3-0.6
				l-0.6,0.3l0.3,0.6L1709.3,752.2z M1710.2,751.6C1710.2,751.5,1710.2,751.5,1710.2,751.6c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.3-0.1-0.3
				l-0.8,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1v0v0v0l0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0l-0.2,0.1l0.4,0.6L1710.2,751.6
				C1710.3,751.6,1710.2,751.6,1710.2,751.6z M1710.3,749.8l-0.7,0l0,0.6l0.7,0L1710.3,749.8z M1710.3,718.3l-0.7,0l0,0.6l0.7,0
				L1710.3,718.3z M1710.2,717.4C1710.2,717.4,1710.2,717.3,1710.2,717.4c-0.1-0.1-0.2-0.2-0.2-0.2c-0.1-0.1-0.3-0.2-0.3-0.2
				l-0.4,0.5c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0l0,0l0,0.1l0,0.1h0c0,0,0,0,0,0c0,0-0.2,0-0.2,0v0.1l0.8,0.1L1710.2,717.4
				C1710.3,717.4,1710.3,717.4,1710.2,717.4z M1708.8,716.3l-0.4,0.6l0.5,0.3l0.4-0.6L1708.8,716.3z M1683.2,699.5l-0.4,0.6l0.6,0.4
				l0.4-0.6L1683.2,699.5z M1682.1,698.9C1682.1,698.9,1682,698.9,1682.1,698.9c-0.1,0.1-0.2,0.1-0.3,0.2c-0.2,0.1-0.3,0.2-0.3,0.2
				l0.3,0.6c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.2,0.2l0.4-0.6L1682.1,698.9
				C1682.1,698.8,1682.1,698.8,1682.1,698.9z M1680.4,699.9l0.3,0.6l0.6-0.4l-0.3-0.6L1680.4,699.9z"
                />
              </g>
              <g>
                <g opacity="0.25">
                  <linearGradient
                    id="SVGID_130_"
                    gradientUnits="userSpaceOnUse"
                    x1="1495.5022"
                    y1="354.1784"
                    x2="1522.384"
                    y2="368.5924"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#494949' }} />
                    <stop offset="0.2255" style={{ stopColor: '#525252' }} />
                    <stop offset="0.593" style={{ stopColor: '#6A6A6A' }} />
                    <stop offset="1" style={{ stopColor: '#8C8C8C' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_130_)"
                    points="1496,813.7 1496,846.8 1523,863 1523,831.7 				"
                  />

                  <linearGradient
                    id="SVGID_131_"
                    gradientUnits="userSpaceOnUse"
                    x1="1526.934"
                    y1="372.25"
                    x2="1548.967"
                    y2="350.217"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.833" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_131_)"
                    points="1523,831.7 1523,863 1552,846.8 1552,813.7 				"
                  />

                  <linearGradient
                    id="SVGID_132_"
                    gradientUnits="userSpaceOnUse"
                    x1="1516.0768"
                    y1="373.5625"
                    x2="1533.5178"
                    y2="400.8659"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#A6A6A6' }} />
                    <stop offset="3.360000e-02" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.4566" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.7934" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_132_)"
                    points="1496.6,813.7 1523.1,831.7 1551.9,813.7 1525,796.3 				"
                  />
                </g>

                <linearGradient
                  id="SVGID_133_"
                  gradientUnits="userSpaceOnUse"
                  x1="1552.9064"
                  y1="351.7885"
                  x2="1495.8374"
                  y2="387.866"
                  gradientTransform="matrix(1 0 0 -1 0 1200)"
                >
                  <stop offset="0" style={{ stopColor: '#3A3C4D' }} />
                  <stop offset="0.42" style={{ stopColor: '#3D3F4E' }} />
                  <stop offset="0.7058" style={{ stopColor: '#464752' }} />
                  <stop offset="0.9509" style={{ stopColor: '#555557' }} />
                  <stop offset="1" style={{ stopColor: '#595959' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_133_)"
                  d="M1518.6,799.4l-0.3-0.6l1-0.6l0.3,0.6L1518.6,799.4z M1521.3,797.7l-0.3-0.6l-1,0.6l0.3,0.6
				L1521.3,797.7z M1523,796.7l-0.3-0.6l-1,0.6l0.3,0.6L1523,796.7z M1514.3,801.9l-0.3-0.6l-1,0.6l0.3,0.6L1514.3,801.9z
				 M1516.1,800.9l-0.3-0.6l-1,0.6l0.3,0.6L1516.1,800.9z M1517.8,799.8l-0.3-0.6l-1,0.6l0.3,0.6L1517.8,799.8z M1509.1,805.1
				l-0.3-0.6l-1,0.6l0.3,0.6L1509.1,805.1z M1510.9,804l-0.3-0.6l-1,0.6l0.3,0.6L1510.9,804z M1512.6,803l-0.3-0.6l-1,0.6l0.3,0.6
				L1512.6,803z M1503.9,808.3l-0.3-0.6l-1,0.6l0.3,0.6L1503.9,808.3z M1505.6,807.2l-0.3-0.6l-1,0.6l0.3,0.6L1505.6,807.2z
				 M1507.4,806.2l-0.3-0.6l-1,0.6l0.3,0.6L1507.4,806.2z M1498.7,811.4l-0.3-0.6l-1,0.6l0.3,0.6L1498.7,811.4z M1500.4,810.4
				l-0.3-0.6l-1,0.6l0.3,0.6L1500.4,810.4z M1502.2,809.3l-0.3-0.6l-1,0.6l0.3,0.6L1502.2,809.3z M1496.3,819.4h-0.9v1.3h0.9V819.4z
				 M1496.3,817.7h-0.9v0.9h0.9V817.7z M1496.3,815.5h-0.9v0.9h0.9V815.5z M1496.3,825.8h-0.9v0.9h0.9V825.8z M1496.3,823.6h-0.9
				v1.3h0.9V823.6z M1496.3,821.5h-0.9v0.9h0.9V821.5z M1496.3,831.8h-0.9v0.9h0.9V831.8z M1496.3,829.6h-0.9v1.3h0.9V829.6z
				 M1496.3,827.9h-0.9v0.9h0.9V827.9z M1496.3,837.8h-0.9v1.3h0.9V837.8z M1496.3,835.6h-0.9v1.3h0.9V835.6z M1496.3,833.5h-0.9
				v1.3h0.9V833.5z M1496.3,843.8h-0.9v1.3h0.9V843.8z M1496.3,842.1h-0.9v0.9h0.9V842.1z M1496.3,839.9h-0.9v1.3h0.9V839.9z
				 M1500.9,850.5l-0.4,0.6l0.9,0.6l0.4-0.6L1500.9,850.5z M1499.3,849.4l-0.4,0.6l0.9,0.6l0.4-0.6L1499.3,849.4z M1497.7,848.4
				l-0.4,0.6l0.9,0.6l0.4-0.6L1497.7,848.4z M1505.8,853.5l-0.4,0.6l0.9,0.6l0.4-0.6L1505.8,853.5z M1504.2,852.5l-0.4,0.6l0.9,0.6
				l0.4-0.6L1504.2,852.5z M1502.6,851.5l-0.4,0.6l0.9,0.6l0.4-0.6L1502.6,851.5z M1510.7,856.5l-0.4,0.6l0.9,0.6l0.4-0.6
				L1510.7,856.5z M1509,855.5l-0.4,0.6l0.9,0.6l0.4-0.6L1509,855.5z M1507.4,854.5l-0.4,0.6l0.9,0.6l0.4-0.6L1507.4,854.5z
				 M1515.5,859.5l-0.4,0.6l0.9,0.6l0.4-0.6L1515.5,859.5z M1513.9,858.5l-0.4,0.6l0.9,0.6l0.4-0.6L1513.9,858.5z M1512.3,857.5
				l-0.4,0.6l0.9,0.6l0.4-0.6L1512.3,857.5z M1520.4,862.5l-0.4,0.6l0.9,0.6l0.4-0.6L1520.4,862.5z M1518.8,861.5l-0.4,0.6l0.9,0.6
				l0.4-0.6L1518.8,861.5z M1517.2,860.5l-0.4,0.6l0.9,0.6l0.4-0.6L1517.2,860.5z M1528.7,861.1l0.3,0.6l1-0.6l-0.3-0.6
				L1528.7,861.1z M1527,862.1l0.3,0.6l1-0.6l-0.3-0.6L1527,862.1z M1525.2,863.1l0.3,0.6l1-0.6l-0.3-0.6L1525.2,863.1z M1534,858.1
				l0.3,0.6l1-0.6l-0.3-0.6L1534,858.1z M1532.3,859.1l0.3,0.6l1-0.6l-0.3-0.6L1532.3,859.1z M1530.5,860.1l0.3,0.6l1-0.6l-0.3-0.6
				L1530.5,860.1z M1539.3,855l0.3,0.6l1-0.6l-0.3-0.6L1539.3,855z M1537.6,856l0.3,0.6l1-0.6l-0.3-0.6L1537.6,856z M1535.8,857
				l0.3,0.6l1-0.6l-0.3-0.6L1535.8,857z M1544.6,852l0.3,0.6l1-0.6l-0.3-0.6L1544.6,852z M1542.8,853l0.3,0.6l1-0.6l-0.3-0.6
				L1542.8,853z M1541.1,854l0.3,0.6l1-0.6l-0.3-0.6L1541.1,854z M1549.9,849l0.3,0.6l1-0.6l-0.3-0.6L1549.9,849z M1548.1,850
				l0.3,0.6l1-0.6l-0.3-0.6L1548.1,850z M1546.4,851l0.3,0.6l1-0.6l-0.3-0.6L1546.4,851z M1552.8,841l0.7,0l0-1.1l-0.7,0L1552.8,841
				z M1552.8,843l0.7,0l0-1.1l-0.7,0L1552.8,843z M1552.8,845l0.7,0l0-1.1l-0.7,0L1552.8,845z M1552.8,834.9l0.7,0l0-1.1l-0.7,0
				L1552.8,834.9z M1552.8,837l0.7,0l0-1.1l-0.7,0L1552.8,837z M1552.8,839l0.7,0l0-1.1l-0.7,0L1552.8,839z M1552.8,828.9l0.7,0
				l0-1.1l-0.7,0L1552.8,828.9z M1552.8,830.9l0.7,0l0-1.1l-0.7,0L1552.8,830.9z M1552.8,832.9l0.7,0l0-1.1l-0.7,0L1552.8,832.9z
				 M1552.8,822.8l0.7,0l0-1.1l-0.7,0L1552.8,822.8z M1552.8,824.8l0.7,0l0-1.1l-0.7,0L1552.8,824.8z M1552.8,826.8l0.7,0l0-1.1
				l-0.7,0L1552.8,826.8z M1552.8,816.8l0.7,0l0-1.1l-0.7,0L1552.8,816.8z M1552.8,818.8l0.7,0l0-1.1l-0.7,0L1552.8,818.8z
				 M1552.8,820.8l0.7,0l0-1.1l-0.7,0L1552.8,820.8z M1547.7,810.2l0.4-0.6l-0.9-0.6l-0.4,0.6L1547.7,810.2z M1549.4,811.3l0.4-0.6
				l-0.9-0.6l-0.4,0.6L1549.4,811.3z M1551,812.3l0.4-0.6l-0.9-0.6l-0.4,0.6L1551,812.3z M1542.8,807l0.4-0.6l-0.9-0.6l-0.4,0.6
				L1542.8,807z M1544.4,808.1l0.4-0.6l-0.9-0.6l-0.4,0.6L1544.4,808.1z M1546.1,809.1l0.4-0.6l-0.9-0.6l-0.4,0.6L1546.1,809.1z
				 M1537.8,803.8l0.4-0.6l-0.9-0.6l-0.4,0.6L1537.8,803.8z M1539.5,804.8l0.4-0.6l-0.9-0.6l-0.4,0.6L1539.5,804.8z M1541.1,805.9
				l0.4-0.6l-0.9-0.6l-0.4,0.6L1541.1,805.9z M1532.9,800.6l0.4-0.6l-0.9-0.6l-0.4,0.6L1532.9,800.6z M1534.6,801.6l0.4-0.6
				l-0.9-0.6l-0.4,0.6L1534.6,801.6z M1536.2,802.7l0.4-0.6l-0.9-0.6l-0.4,0.6L1536.2,802.7z M1528,797.3l0.4-0.6l-0.9-0.6l-0.4,0.6
				L1528,797.3z M1529.6,798.4l0.4-0.6l-0.9-0.6l-0.4,0.6L1529.6,798.4z M1531.3,799.5l0.4-0.6l-0.9-0.6l-0.4,0.6L1531.3,799.5z
				 M1496.3,812.3l0.3,0.6l0.5-0.3l-0.3-0.6L1496.3,812.3z M1495.4,812.9C1495.4,812.9,1495.4,812.9,1495.4,812.9c0,0.1,0,0.2,0,0.3
				c0,0.2,0,0.6,0,0.6h0.9c0,0,0-0.4,0-0.5c0,0,0-0.1,0-0.1v0v0v0l-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0l0.2-0.1l-0.4-0.6
				L1495.4,812.9C1495.4,812.8,1495.4,812.8,1495.4,812.9z M1495.4,814.6h0.7V814h-0.7V814.6z M1495.3,846.5h0.7v-0.6h-0.7V846.5z
				 M1495.4,847.2c0,0,0,0.2,0.1,0.2c0,0,0.1,0.2,0.2,0.2c0.1,0.1,0.3,0.2,0.3,0.2l0.4-0.6c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1-0.1l0,0
				l0-0.2l0-0.2h0c0,0,0,0,0,0c0,0,0,0,0,0l0,0h-0.6L1495.4,847.2C1495.4,847.2,1495.4,847.2,1495.4,847.2z M1496.8,848.5l0.4-0.6
				l-0.5-0.3l-0.4,0.6L1496.8,848.5z M1522.2,864.2l0.4-0.6l-0.6-0.3l-0.4,0.6L1522.2,864.2z M1523.2,864.8
				C1523.2,864.8,1523.3,864.8,1523.2,864.8c0.1-0.1,0.2-0.1,0.3-0.1c0.1-0.1,0.3-0.2,0.3-0.2l-0.3-0.6c0,0-0.1,0-0.1,0.1
				c0,0-0.1,0-0.1,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.2-0.1l-0.4,0.6L1523.2,864.8
				C1523.2,864.8,1523.2,864.8,1523.2,864.8z M1524.8,863.9l-0.3-0.6l-0.6,0.3l0.3,0.6L1524.8,863.9z M1552.3,848.2l-0.3-0.6
				l-0.6,0.3l0.3,0.6L1552.3,848.2z M1553.2,847.6C1553.2,847.5,1553.2,847.5,1553.2,847.6c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.3-0.1-0.3
				l-0.8,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1v0v0v0l0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0l-0.2,0.1l0.4,0.6L1553.2,847.6
				C1553.3,847.6,1553.2,847.6,1553.2,847.6z M1553.3,845.8l-0.7,0l0,0.6l0.7,0L1553.3,845.8z M1553.3,814.3l-0.7,0l0,0.6l0.7,0
				L1553.3,814.3z M1553.2,813.4C1553.2,813.4,1553.2,813.3,1553.2,813.4c-0.1-0.1-0.2-0.2-0.2-0.2c-0.1-0.1-0.3-0.2-0.3-0.2
				l-0.4,0.5c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0l0,0l0,0.1l0,0.1h0c0,0,0,0,0,0c0,0-0.2,0-0.2,0v0.1l0.8,0.1L1553.2,813.4
				C1553.3,813.4,1553.3,813.4,1553.2,813.4z M1551.8,812.3l-0.4,0.6l0.5,0.3l0.4-0.6L1551.8,812.3z M1526.2,795.5l-0.4,0.6l0.6,0.4
				l0.4-0.6L1526.2,795.5z M1525.1,794.9C1525.1,794.9,1525,794.9,1525.1,794.9c-0.1,0.1-0.2,0.1-0.3,0.2c-0.2,0.1-0.3,0.2-0.3,0.2
				l0.3,0.6c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.2,0.2l0.4-0.6L1525.1,794.9
				C1525.1,794.8,1525.1,794.8,1525.1,794.9z M1523.4,795.9l0.3,0.6l0.6-0.4l-0.3-0.6L1523.4,795.9z"
                />

                <linearGradient
                  id="SVGID_134_"
                  gradientUnits="userSpaceOnUse"
                  x1="1553.097"
                  y1="420.8045"
                  x2="1662.411"
                  y2="420.8045"
                  gradientTransform="matrix(1 0 0 -1 0 1200)"
                >
                  <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                  <stop offset="0.1122" style={{ stopColor: '#AAAAAE' }} />
                  <stop offset="0.4064" style={{ stopColor: '#767884' }} />
                  <stop offset="0.6631" style={{ stopColor: '#515366' }} />
                  <stop offset="0.8695" style={{ stopColor: '#3A3D54' }} />
                  <stop offset="1" style={{ stopColor: '#32354D' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_134_)"
                  d="M1591.9,790.2l-0.8-1.2l2.8-1.8l0.8,1.2L1591.9,790.2z M1590.5,791l-0.8-1.2l-2.8,1.8l0.8,1.2
				L1590.5,791z M1586.3,793.7l-0.8-1.2l-2.8,1.8l0.8,1.2L1586.3,793.7z M1582.1,796.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1582.1,796.4z
				 M1607.4,780.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1607.4,780.4z M1603.2,783l-0.8-1.2l-2.8,1.8l0.8,1.2L1603.2,783z M1599,785.7
				l-0.8-1.2l-2.8,1.8l0.8,1.2L1599,785.7z M1577.9,799.1l-0.8-1.2l-2.8,1.8l0.8,1.2L1577.9,799.1z M1573.8,801.8l-0.8-1.2l-2.8,1.8
				l0.8,1.2L1573.8,801.8z M1569.6,804.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1569.6,804.4z M1636.7,761.4l-0.8-1.2l-2.8,1.8l0.8,1.2
				L1636.7,761.4z M1632.5,764l-0.8-1.2l-2.8,1.8l0.8,1.2L1632.5,764z M1628.3,766.7l-0.8-1.2l-2.8,1.8l0.8,1.2L1628.3,766.7z
				 M1624.1,769.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1624.1,769.4z M1649.4,753.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1649.4,753.4z M1645.2,756
				l-0.8-1.2l-2.8,1.8l0.8,1.2L1645.2,756z M1641,758.7l-0.8-1.2l-2.8,1.8l0.8,1.2L1641,758.7z M1662.4,745.4l-0.8-1.2l-2.8,1.8
				l0.8,1.2L1662.4,745.4z M1658.2,748l-0.8-1.2l-2.8,1.8l0.8,1.2L1658.2,748z M1654,750.7l-0.8-1.2l-2.8,1.8l0.8,1.2L1654,750.7z
				 M1619.9,772.1l-0.8-1.2l-2.8,1.8l0.8,1.2L1619.9,772.1z M1615.8,774.8l-0.8-1.2l-2.8,1.8l0.8,1.2L1615.8,774.8z M1611.6,777.4
				l-0.8-1.2l-2.8,1.8l0.8,1.2L1611.6,777.4z M1565.4,807.1l-0.8-1.2l-2.8,1.8l0.8,1.2L1565.4,807.1z M1561.2,809.8l-0.8-1.2
				l-2.8,1.8l0.8,1.2L1561.2,809.8z M1556.7,812.5l-0.8-1.2l-2.8,1.8l0.8,1.2L1556.7,812.5z"
                />
              </g>
              <g>
                <g opacity="0.15">
                  <linearGradient
                    id="SVGID_135_"
                    gradientUnits="userSpaceOnUse"
                    x1="1336.4972"
                    y1="257.1895"
                    x2="1363.3896"
                    y2="271.5827"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#494949' }} />
                    <stop offset="0.2255" style={{ stopColor: '#525252' }} />
                    <stop offset="0.593" style={{ stopColor: '#6A6A6A' }} />
                    <stop offset="1" style={{ stopColor: '#8C8C8C' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_135_)"
                    points="1337,910.7 1337,943.8 1364,960 1364,928.7 				"
                  />

                  <linearGradient
                    id="SVGID_136_"
                    gradientUnits="userSpaceOnUse"
                    x1="1367.9341"
                    y1="275.25"
                    x2="1389.967"
                    y2="253.217"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.833" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_136_)"
                    points="1364,928.7 1364,960 1393,943.8 1393,910.7 				"
                  />

                  <linearGradient
                    id="SVGID_137_"
                    gradientUnits="userSpaceOnUse"
                    x1="1357.0768"
                    y1="276.5625"
                    x2="1374.5178"
                    y2="303.8659"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#A6A6A6' }} />
                    <stop offset="3.360000e-02" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.4566" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.7934" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_137_)"
                    points="1337.6,910.7 1364.1,928.7 1392.9,910.7 1366,893.3 				"
                  />
                </g>

                <linearGradient
                  id="SVGID_138_"
                  gradientUnits="userSpaceOnUse"
                  x1="1393.9064"
                  y1="254.7885"
                  x2="1336.8374"
                  y2="290.866"
                  gradientTransform="matrix(1 0 0 -1 0 1200)"
                >
                  <stop offset="0" style={{ stopColor: '#3A3C4D' }} />
                  <stop offset="0.42" style={{ stopColor: '#3D3F4E' }} />
                  <stop offset="0.7058" style={{ stopColor: '#464752' }} />
                  <stop offset="0.9509" style={{ stopColor: '#555557' }} />
                  <stop offset="1" style={{ stopColor: '#595959' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_138_)"
                  d="M1359.6,896.4l-0.3-0.6l1-0.6l0.3,0.6L1359.6,896.4z M1362.3,894.7l-0.3-0.6l-1,0.6l0.3,0.6
				L1362.3,894.7z M1364,893.7l-0.3-0.6l-1,0.6l0.3,0.6L1364,893.7z M1355.3,898.9l-0.3-0.6l-1,0.6l0.3,0.6L1355.3,898.9z
				 M1357.1,897.9l-0.3-0.6l-1,0.6l0.3,0.6L1357.1,897.9z M1358.8,896.8l-0.3-0.6l-1,0.6l0.3,0.6L1358.8,896.8z M1350.1,902.1
				l-0.3-0.6l-1,0.6l0.3,0.6L1350.1,902.1z M1351.9,901l-0.3-0.6l-1,0.6l0.3,0.6L1351.9,901z M1353.6,900l-0.3-0.6l-1,0.6l0.3,0.6
				L1353.6,900z M1344.9,905.3l-0.3-0.6l-1,0.6l0.3,0.6L1344.9,905.3z M1346.6,904.2l-0.3-0.6l-1,0.6l0.3,0.6L1346.6,904.2z
				 M1348.4,903.2l-0.3-0.6l-1,0.6l0.3,0.6L1348.4,903.2z M1339.7,908.4l-0.3-0.6l-1,0.6l0.3,0.6L1339.7,908.4z M1341.4,907.4
				l-0.3-0.6l-1,0.6l0.3,0.6L1341.4,907.4z M1343.2,906.3l-0.3-0.6l-1,0.6l0.3,0.6L1343.2,906.3z M1337.3,916.4h-0.9v1.3h0.9V916.4z
				 M1337.3,914.7h-0.9v0.9h0.9V914.7z M1337.3,912.5h-0.9v0.9h0.9V912.5z M1337.3,922.8h-0.9v0.9h0.9V922.8z M1337.3,920.6h-0.9
				v1.3h0.9V920.6z M1337.3,918.5h-0.9v0.9h0.9V918.5z M1337.3,928.8h-0.9v0.9h0.9V928.8z M1337.3,926.6h-0.9v1.3h0.9V926.6z
				 M1337.3,924.9h-0.9v0.9h0.9V924.9z M1337.3,934.8h-0.9v1.3h0.9V934.8z M1337.3,932.6h-0.9v1.3h0.9V932.6z M1337.3,930.5h-0.9
				v1.3h0.9V930.5z M1337.3,940.8h-0.9v1.3h0.9V940.8z M1337.3,939.1h-0.9v0.9h0.9V939.1z M1337.3,936.9h-0.9v1.3h0.9V936.9z
				 M1341.9,947.5l-0.4,0.6l0.9,0.6l0.4-0.6L1341.9,947.5z M1340.3,946.4l-0.4,0.6l0.9,0.6l0.4-0.6L1340.3,946.4z M1338.7,945.4
				l-0.4,0.6l0.9,0.6l0.4-0.6L1338.7,945.4z M1346.8,950.5l-0.4,0.6l0.9,0.6l0.4-0.6L1346.8,950.5z M1345.2,949.5l-0.4,0.6l0.9,0.6
				l0.4-0.6L1345.2,949.5z M1343.6,948.5l-0.4,0.6l0.9,0.6l0.4-0.6L1343.6,948.5z M1351.7,953.5l-0.4,0.6l0.9,0.6l0.4-0.6
				L1351.7,953.5z M1350,952.5l-0.4,0.6l0.9,0.6l0.4-0.6L1350,952.5z M1348.4,951.5l-0.4,0.6l0.9,0.6l0.4-0.6L1348.4,951.5z
				 M1356.5,956.5l-0.4,0.6l0.9,0.6l0.4-0.6L1356.5,956.5z M1354.9,955.5l-0.4,0.6l0.9,0.6l0.4-0.6L1354.9,955.5z M1353.3,954.5
				l-0.4,0.6l0.9,0.6l0.4-0.6L1353.3,954.5z M1361.4,959.5l-0.4,0.6l0.9,0.6l0.4-0.6L1361.4,959.5z M1359.8,958.5l-0.4,0.6l0.9,0.6
				l0.4-0.6L1359.8,958.5z M1358.2,957.5l-0.4,0.6l0.9,0.6l0.4-0.6L1358.2,957.5z M1369.7,958.1l0.3,0.6l1-0.6l-0.3-0.6
				L1369.7,958.1z M1368,959.1l0.3,0.6l1-0.6l-0.3-0.6L1368,959.1z M1366.2,960.1l0.3,0.6l1-0.6l-0.3-0.6L1366.2,960.1z M1375,955.1
				l0.3,0.6l1-0.6l-0.3-0.6L1375,955.1z M1373.3,956.1l0.3,0.6l1-0.6l-0.3-0.6L1373.3,956.1z M1371.5,957.1l0.3,0.6l1-0.6l-0.3-0.6
				L1371.5,957.1z M1380.3,952l0.3,0.6l1-0.6l-0.3-0.6L1380.3,952z M1378.6,953l0.3,0.6l1-0.6l-0.3-0.6L1378.6,953z M1376.8,954
				l0.3,0.6l1-0.6l-0.3-0.6L1376.8,954z M1385.6,949l0.3,0.6l1-0.6l-0.3-0.6L1385.6,949z M1383.8,950l0.3,0.6l1-0.6l-0.3-0.6
				L1383.8,950z M1382.1,951l0.3,0.6l1-0.6l-0.3-0.6L1382.1,951z M1390.9,946l0.3,0.6l1-0.6l-0.3-0.6L1390.9,946z M1389.1,947
				l0.3,0.6l1-0.6l-0.3-0.6L1389.1,947z M1387.4,948l0.3,0.6l1-0.6l-0.3-0.6L1387.4,948z M1393.8,938l0.7,0l0-1.1l-0.7,0L1393.8,938
				z M1393.8,940l0.7,0l0-1.1l-0.7,0L1393.8,940z M1393.8,942l0.7,0l0-1.1l-0.7,0L1393.8,942z M1393.8,931.9l0.7,0l0-1.1l-0.7,0
				L1393.8,931.9z M1393.8,934l0.7,0l0-1.1l-0.7,0L1393.8,934z M1393.8,936l0.7,0l0-1.1l-0.7,0L1393.8,936z M1393.8,925.9l0.7,0
				l0-1.1l-0.7,0L1393.8,925.9z M1393.8,927.9l0.7,0l0-1.1l-0.7,0L1393.8,927.9z M1393.8,929.9l0.7,0l0-1.1l-0.7,0L1393.8,929.9z
				 M1393.8,919.8l0.7,0l0-1.1l-0.7,0L1393.8,919.8z M1393.8,921.8l0.7,0l0-1.1l-0.7,0L1393.8,921.8z M1393.8,923.8l0.7,0l0-1.1
				l-0.7,0L1393.8,923.8z M1393.8,913.8l0.7,0l0-1.1l-0.7,0L1393.8,913.8z M1393.8,915.8l0.7,0l0-1.1l-0.7,0L1393.8,915.8z
				 M1393.8,917.8l0.7,0l0-1.1l-0.7,0L1393.8,917.8z M1388.7,907.2l0.4-0.6l-0.9-0.6l-0.4,0.6L1388.7,907.2z M1390.4,908.3l0.4-0.6
				l-0.9-0.6l-0.4,0.6L1390.4,908.3z M1392,909.3l0.4-0.6l-0.9-0.6l-0.4,0.6L1392,909.3z M1383.8,904l0.4-0.6l-0.9-0.6l-0.4,0.6
				L1383.8,904z M1385.4,905.1l0.4-0.6l-0.9-0.6l-0.4,0.6L1385.4,905.1z M1387.1,906.1l0.4-0.6l-0.9-0.6l-0.4,0.6L1387.1,906.1z
				 M1378.8,900.8l0.4-0.6l-0.9-0.6l-0.4,0.6L1378.8,900.8z M1380.5,901.8l0.4-0.6l-0.9-0.6l-0.4,0.6L1380.5,901.8z M1382.1,902.9
				l0.4-0.6l-0.9-0.6l-0.4,0.6L1382.1,902.9z M1373.9,897.6l0.4-0.6l-0.9-0.6l-0.4,0.6L1373.9,897.6z M1375.6,898.6l0.4-0.6
				l-0.9-0.6l-0.4,0.6L1375.6,898.6z M1377.2,899.7l0.4-0.6l-0.9-0.6l-0.4,0.6L1377.2,899.7z M1369,894.3l0.4-0.6l-0.9-0.6l-0.4,0.6
				L1369,894.3z M1370.6,895.4l0.4-0.6l-0.9-0.6l-0.4,0.6L1370.6,895.4z M1372.3,896.5l0.4-0.6l-0.9-0.6l-0.4,0.6L1372.3,896.5z
				 M1337.3,909.3l0.3,0.6l0.5-0.3l-0.3-0.6L1337.3,909.3z M1336.4,909.9C1336.4,909.9,1336.4,909.9,1336.4,909.9c0,0.1,0,0.2,0,0.3
				c0,0.2,0,0.6,0,0.6h0.9c0,0,0-0.4,0-0.5c0,0,0-0.1,0-0.1v0v0v0l-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0l0.2-0.1l-0.4-0.6
				L1336.4,909.9C1336.4,909.8,1336.4,909.8,1336.4,909.9z M1336.4,911.6h0.7V911h-0.7V911.6z M1336.3,943.5h0.7v-0.6h-0.7V943.5z
				 M1336.4,944.2c0,0,0,0.2,0.1,0.2c0,0,0.1,0.2,0.2,0.2c0.1,0.1,0.3,0.2,0.3,0.2l0.4-0.6c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1-0.1l0,0
				l0-0.2l0-0.2h0c0,0,0,0,0,0c0,0,0,0,0,0l0,0h-0.6L1336.4,944.2C1336.4,944.2,1336.4,944.2,1336.4,944.2z M1337.8,945.5l0.4-0.6
				l-0.5-0.3l-0.4,0.6L1337.8,945.5z M1363.2,961.2l0.4-0.6l-0.6-0.3l-0.4,0.6L1363.2,961.2z M1364.2,961.8
				C1364.2,961.8,1364.3,961.8,1364.2,961.8c0.1-0.1,0.2-0.1,0.3-0.1c0.1-0.1,0.3-0.2,0.3-0.2l-0.3-0.6c0,0-0.1,0-0.1,0.1
				c0,0-0.1,0-0.1,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l-0.2-0.1l-0.4,0.6L1364.2,961.8
				C1364.2,961.8,1364.2,961.8,1364.2,961.8z M1365.8,960.9l-0.3-0.6l-0.6,0.3l0.3,0.6L1365.8,960.9z M1393.3,945.2l-0.3-0.6
				l-0.6,0.3l0.3,0.6L1393.3,945.2z M1394.2,944.6C1394.2,944.5,1394.2,944.5,1394.2,944.6c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.3-0.1-0.3
				l-0.8,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1v0v0v0l0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0l-0.2,0.1l0.4,0.6L1394.2,944.6
				C1394.3,944.6,1394.2,944.6,1394.2,944.6z M1394.3,942.8l-0.7,0l0,0.6l0.7,0L1394.3,942.8z M1394.3,911.3l-0.7,0l0,0.6l0.7,0
				L1394.3,911.3z M1394.2,910.4C1394.2,910.4,1394.2,910.3,1394.2,910.4c-0.1-0.1-0.2-0.2-0.2-0.2c-0.1-0.1-0.3-0.2-0.3-0.2
				l-0.4,0.5c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0l0,0l0,0.1l0,0.1h0c0,0,0,0,0,0c0,0-0.2,0-0.2,0v0.1l0.8,0.1L1394.2,910.4
				C1394.3,910.4,1394.3,910.4,1394.2,910.4z M1392.8,909.3l-0.4,0.6l0.5,0.3l0.4-0.6L1392.8,909.3z M1367.2,892.5l-0.4,0.6l0.6,0.4
				l0.4-0.6L1367.2,892.5z M1366.1,891.9C1366.1,891.9,1366,891.9,1366.1,891.9c-0.1,0.1-0.2,0.1-0.3,0.2c-0.2,0.1-0.3,0.2-0.3,0.2
				l0.3,0.6c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.2,0.2l0.4-0.6L1366.1,891.9
				C1366.1,891.8,1366.1,891.8,1366.1,891.9z M1364.4,892.9l0.3,0.6l0.6-0.4l-0.3-0.6L1364.4,892.9z"
                />

                <linearGradient
                  id="SVGID_139_"
                  gradientUnits="userSpaceOnUse"
                  x1="1394.097"
                  y1="323.8045"
                  x2="1503.411"
                  y2="323.8045"
                  gradientTransform="matrix(1 0 0 -1 0 1200)"
                >
                  <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                  <stop offset="0.1122" style={{ stopColor: '#AAAAAE' }} />
                  <stop offset="0.4064" style={{ stopColor: '#767884' }} />
                  <stop offset="0.6631" style={{ stopColor: '#515366' }} />
                  <stop offset="0.8695" style={{ stopColor: '#3A3D54' }} />
                  <stop offset="1" style={{ stopColor: '#32354D' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_139_)"
                  d="M1432.9,887.2l-0.8-1.2l2.8-1.8l0.8,1.2L1432.9,887.2z M1431.5,888l-0.8-1.2l-2.8,1.8l0.8,1.2
				L1431.5,888z M1427.3,890.7l-0.8-1.2l-2.8,1.8l0.8,1.2L1427.3,890.7z M1423.1,893.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1423.1,893.4z
				 M1448.4,877.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1448.4,877.4z M1444.2,880l-0.8-1.2l-2.8,1.8l0.8,1.2L1444.2,880z M1440,882.7
				l-0.8-1.2l-2.8,1.8l0.8,1.2L1440,882.7z M1418.9,896.1l-0.8-1.2l-2.8,1.8l0.8,1.2L1418.9,896.1z M1414.8,898.8l-0.8-1.2l-2.8,1.8
				l0.8,1.2L1414.8,898.8z M1410.6,901.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1410.6,901.4z M1477.7,858.4l-0.8-1.2l-2.8,1.8l0.8,1.2
				L1477.7,858.4z M1473.5,861l-0.8-1.2l-2.8,1.8l0.8,1.2L1473.5,861z M1469.3,863.7l-0.8-1.2l-2.8,1.8l0.8,1.2L1469.3,863.7z
				 M1465.1,866.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1465.1,866.4z M1490.4,850.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1490.4,850.4z M1486.2,853
				l-0.8-1.2l-2.8,1.8l0.8,1.2L1486.2,853z M1482,855.7l-0.8-1.2l-2.8,1.8l0.8,1.2L1482,855.7z M1503.4,842.4l-0.8-1.2l-2.8,1.8
				l0.8,1.2L1503.4,842.4z M1499.2,845l-0.8-1.2l-2.8,1.8l0.8,1.2L1499.2,845z M1495,847.7l-0.8-1.2l-2.8,1.8l0.8,1.2L1495,847.7z
				 M1460.9,869.1l-0.8-1.2l-2.8,1.8l0.8,1.2L1460.9,869.1z M1456.8,871.8l-0.8-1.2l-2.8,1.8l0.8,1.2L1456.8,871.8z M1452.6,874.4
				l-0.8-1.2l-2.8,1.8l0.8,1.2L1452.6,874.4z M1406.4,904.1l-0.8-1.2l-2.8,1.8l0.8,1.2L1406.4,904.1z M1402.2,906.8l-0.8-1.2
				l-2.8,1.8l0.8,1.2L1402.2,906.8z M1397.7,909.5l-0.8-1.2l-2.8,1.8l0.8,1.2L1397.7,909.5z"
                />
              </g>
              <g>
                <g opacity="0.25">
                  <linearGradient
                    id="SVGID_140_"
                    gradientUnits="userSpaceOnUse"
                    x1="1177.757"
                    y1="159.506"
                    x2="1204.4315"
                    y2="173.7825"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#494949' }} />
                    <stop offset="0.2255" style={{ stopColor: '#525252' }} />
                    <stop offset="0.593" style={{ stopColor: '#6A6A6A' }} />
                    <stop offset="1" style={{ stopColor: '#8C8C8C' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_140_)"
                    points="1178.5,1008.3 1178.4,1041.7 1205,1057.7 1205,1026.4 				"
                  />

                  <linearGradient
                    id="SVGID_141_"
                    gradientUnits="userSpaceOnUse"
                    x1="1208.9335"
                    y1="177.5215"
                    x2="1230.967"
                    y2="155.488"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                    <stop offset="0.219" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.5607" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.833" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_141_)"
                    points="1205,1026.4 1205,1057.7 1234,1041.5 1234,1008.4 				"
                  />

                  <linearGradient
                    id="SVGID_142_"
                    gradientUnits="userSpaceOnUse"
                    x1="1197.9689"
                    y1="178.8337"
                    x2="1215.4098"
                    y2="206.1371"
                    gradientTransform="matrix(1 0 0 -1 0 1200)"
                  >
                    <stop offset="0" style={{ stopColor: '#A6A6A6' }} />
                    <stop offset="3.360000e-02" style={{ stopColor: '#A2A2A2' }} />
                    <stop offset="0.4566" style={{ stopColor: '#7B7B7B' }} />
                    <stop offset="0.7934" style={{ stopColor: '#636363' }} />
                    <stop offset="1" style={{ stopColor: '#5A5A5A' }} />
                  </linearGradient>
                  <polygon
                    fill="url(#SVGID_142_)"
                    points="1178.5,1008.4 1205,1026.4 1233.8,1008.4 1206.9,991 				"
                  />
                </g>

                <linearGradient
                  id="SVGID_143_"
                  gradientUnits="userSpaceOnUse"
                  x1="1234.4193"
                  y1="157.2996"
                  x2="1178.0508"
                  y2="192.9343"
                  gradientTransform="matrix(1 0 0 -1 0 1200)"
                >
                  <stop offset="0" style={{ stopColor: '#595959' }} />
                  <stop offset="4.910000e-02" style={{ stopColor: '#555557' }} />
                  <stop offset="0.2942" style={{ stopColor: '#464752' }} />
                  <stop offset="0.58" style={{ stopColor: '#3D3F4E' }} />
                  <stop offset="1" style={{ stopColor: '#3A3C4D' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_143_)"
                  d="M1200.5,994.1l-0.3-0.6l1-0.6l0.3,0.6L1200.5,994.1z M1203.2,992.5l-0.3-0.6l-1,0.6l0.3,0.6
				L1203.2,992.5z M1204.9,991.4l-0.3-0.6l-1,0.6l0.3,0.6L1204.9,991.4z M1196.2,996.7l-0.3-0.6l-1,0.6l0.3,0.6L1196.2,996.7z
				 M1198,995.6l-0.3-0.6l-1,0.6l0.3,0.6L1198,995.6z M1199.7,994.6l-0.3-0.6l-1,0.6l0.3,0.6L1199.7,994.6z M1191,999.8l-0.3-0.6
				l-1,0.6l0.3,0.6L1191,999.8z M1192.7,998.8l-0.3-0.6l-1,0.6l0.3,0.6L1192.7,998.8z M1194.5,997.7l-0.3-0.6l-1,0.6l0.3,0.6
				L1194.5,997.7z M1185.8,1003l-0.3-0.6l-1,0.6l0.3,0.6L1185.8,1003z M1187.5,1001.9l-0.3-0.6l-1,0.6l0.3,0.6L1187.5,1001.9z
				 M1189.3,1000.9l-0.3-0.6l-1,0.6l0.3,0.6L1189.3,1000.9z M1180.6,1006.1l-0.3-0.6l-1,0.6l0.3,0.6L1180.6,1006.1z M1182.3,1005.1
				l-0.3-0.6l-1,0.6l0.3,0.6L1182.3,1005.1z M1184.1,1004l-0.3-0.6l-1,0.6l0.3,0.6L1184.1,1004z M1178.2,1014.1h-0.9v1.3h0.9V1014.1
				z M1178.2,1012.4h-0.9v0.9h0.9V1012.4z M1178.2,1010.2h-0.9v0.9h0.9V1010.2z M1178.2,1020.5h-0.9v0.9h0.9V1020.5z M1178.2,1018.4
				h-0.9v1.3h0.9V1018.4z M1178.2,1016.2h-0.9v0.9h0.9V1016.2z M1178.2,1026.5h-0.9v0.9h0.9V1026.5z M1178.2,1024.4h-0.9v1.3h0.9
				V1024.4z M1178.2,1022.7h-0.9v0.9h0.9V1022.7z M1178.2,1032.5h-0.9v1.3h0.9V1032.5z M1178.2,1030.4h-0.9v1.3h0.9V1030.4z
				 M1178.2,1028.2h-0.9v1.3h0.9V1028.2z M1178.2,1038.5h-0.9v1.3h0.9V1038.5z M1178.2,1036.8h-0.9v0.9h0.9V1036.8z M1178.2,1034.6
				h-0.9v1.3h0.9V1034.6z M1182.8,1045.2l-0.4,0.6l0.9,0.6l0.4-0.6L1182.8,1045.2z M1181.2,1044.2l-0.4,0.6l0.9,0.6l0.4-0.6
				L1181.2,1044.2z M1179.6,1043.2l-0.4,0.6l0.9,0.6l0.4-0.6L1179.6,1043.2z M1187.7,1048.2l-0.4,0.6l0.9,0.6l0.4-0.6L1187.7,1048.2
				z M1186.1,1047.2l-0.4,0.6l0.9,0.6l0.4-0.6L1186.1,1047.2z M1184.5,1046.2l-0.4,0.6l0.9,0.6l0.4-0.6L1184.5,1046.2z
				 M1192.6,1051.2l-0.4,0.6l0.9,0.6l0.4-0.6L1192.6,1051.2z M1190.9,1050.2l-0.4,0.6l0.9,0.6l0.4-0.6L1190.9,1050.2z
				 M1189.3,1049.2l-0.4,0.6l0.9,0.6l0.4-0.6L1189.3,1049.2z M1197.4,1054.2l-0.4,0.6l0.9,0.6l0.4-0.6L1197.4,1054.2z
				 M1195.8,1053.2l-0.4,0.6l0.9,0.6l0.4-0.6L1195.8,1053.2z M1194.2,1052.2l-0.4,0.6l0.9,0.6l0.4-0.6L1194.2,1052.2z
				 M1202.3,1057.2l-0.4,0.6l0.9,0.6l0.4-0.6L1202.3,1057.2z M1200.7,1056.2l-0.4,0.6l0.9,0.6l0.4-0.6L1200.7,1056.2z M1199,1055.2
				l-0.4,0.6l0.9,0.6l0.4-0.6L1199,1055.2z M1210.6,1055.8l0.3,0.6l1-0.6l-0.3-0.6L1210.6,1055.8z M1208.9,1056.8l0.3,0.6l1-0.6
				l-0.3-0.6L1208.9,1056.8z M1207.1,1057.8l0.3,0.6l1-0.6l-0.3-0.6L1207.1,1057.8z M1215.9,1052.8l0.3,0.6l1-0.6l-0.3-0.6
				L1215.9,1052.8z M1214.2,1053.8l0.3,0.6l1-0.6l-0.3-0.6L1214.2,1053.8z M1212.4,1054.8l0.3,0.6l1-0.6l-0.3-0.6L1212.4,1054.8z
				 M1221.2,1049.8l0.3,0.6l1-0.6l-0.3-0.6L1221.2,1049.8z M1219.4,1050.8l0.3,0.6l1-0.6l-0.3-0.6L1219.4,1050.8z M1217.7,1051.8
				l0.3,0.6l1-0.6l-0.3-0.6L1217.7,1051.8z M1226.5,1046.7l0.3,0.6l1-0.6l-0.3-0.6L1226.5,1046.7z M1224.7,1047.7l0.3,0.6l1-0.6
				l-0.3-0.6L1224.7,1047.7z M1223,1048.7l0.3,0.6l1-0.6l-0.3-0.6L1223,1048.7z M1231.8,1043.7l0.3,0.6l1-0.6l-0.3-0.6
				L1231.8,1043.7z M1230,1044.7l0.3,0.6l1-0.6l-0.3-0.6L1230,1044.7z M1228.3,1045.7l0.3,0.6l1-0.6l-0.3-0.6L1228.3,1045.7z
				 M1234.7,1035.7l0.7,0l0-1.1l-0.7,0L1234.7,1035.7z M1234.7,1037.7l0.7,0l0-1.1l-0.7,0L1234.7,1037.7z M1234.7,1039.8l0.7,0
				l0-1.1l-0.7,0L1234.7,1039.8z M1234.7,1029.7l0.7,0l0-1.1l-0.7,0L1234.7,1029.7z M1234.7,1031.7l0.7,0l0-1.1l-0.7,0
				L1234.7,1031.7z M1234.7,1033.7l0.7,0l0-1.1l-0.7,0L1234.7,1033.7z M1234.7,1023.6l0.7,0l0-1.1l-0.7,0L1234.7,1023.6z
				 M1234.7,1025.6l0.7,0l0-1.1l-0.7,0L1234.7,1025.6z M1234.7,1027.6l0.7,0l0-1.1l-0.7,0L1234.7,1027.6z M1234.7,1017.5l0.7,0
				l0-1.1l-0.7,0L1234.7,1017.5z M1234.7,1019.6l0.7,0l0-1.1l-0.7,0L1234.7,1019.6z M1234.7,1021.6l0.7,0l0-1.1l-0.7,0
				L1234.7,1021.6z M1234.7,1011.5l0.7,0l0-1.1l-0.7,0L1234.7,1011.5z M1234.7,1013.5l0.7,0l0-1.1l-0.7,0L1234.7,1013.5z
				 M1234.7,1015.5l0.7,0l0-1.1l-0.7,0L1234.7,1015.5z M1229.6,1004.9l0.4-0.6l-0.9-0.6l-0.4,0.6L1229.6,1004.9z M1231.2,1006
				l0.4-0.6l-0.9-0.6l-0.4,0.6L1231.2,1006z M1232.9,1007.1l0.4-0.6l-0.9-0.6l-0.4,0.6L1232.9,1007.1z M1224.7,1001.7l0.4-0.6
				l-0.9-0.6l-0.4,0.6L1224.7,1001.7z M1226.3,1002.8l0.4-0.6l-0.9-0.6l-0.4,0.6L1226.3,1002.8z M1227.9,1003.9l0.4-0.6l-0.9-0.6
				l-0.4,0.6L1227.9,1003.9z M1219.7,998.5l0.4-0.6l-0.9-0.6l-0.4,0.6L1219.7,998.5z M1221.4,999.6l0.4-0.6l-0.9-0.6l-0.4,0.6
				L1221.4,999.6z M1223,1000.6l0.4-0.6l-0.9-0.6l-0.4,0.6L1223,1000.6z M1214.8,995.3l0.4-0.6l-0.9-0.6l-0.4,0.6L1214.8,995.3z
				 M1216.4,996.4l0.4-0.6l-0.9-0.6l-0.4,0.6L1216.4,996.4z M1218.1,997.4l0.4-0.6l-0.9-0.6l-0.4,0.6L1218.1,997.4z M1209.9,992.1
				l0.4-0.6l-0.9-0.6l-0.4,0.6L1209.9,992.1z M1211.5,993.1l0.4-0.6l-0.9-0.6l-0.4,0.6L1211.5,993.1z M1213.2,994.2l0.4-0.6
				l-0.9-0.6l-0.4,0.6L1213.2,994.2z M1178.2,1007l0.3,0.6l0.5-0.3l-0.3-0.6L1178.2,1007z M1177.3,1007.6
				C1177.3,1007.6,1177.3,1007.6,1177.3,1007.6c0,0.1,0,0.2,0,0.3c0,0.2,0,0.6,0,0.6h0.9c0,0,0-0.4,0-0.5c0,0,0-0.1,0-0.1v0v0v0
				l-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0l0.2-0.1l-0.4-0.6L1177.3,1007.6C1177.3,1007.6,1177.3,1007.6,1177.3,1007.6z M1177.3,1009.3
				h0.7v-0.6h-0.7V1009.3z M1177.2,1041.2h0.7v-0.6h-0.7V1041.2z M1177.3,1041.9c0,0,0,0.2,0.1,0.2c0,0,0.1,0.2,0.2,0.2
				c0.1,0.1,0.3,0.2,0.3,0.2l0.4-0.6c0,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1-0.1l0,0l0-0.2l0-0.2h0c0,0,0,0,0,0c0,0,0,0,0,0l0,0h-0.6
				L1177.3,1041.9C1177.3,1041.9,1177.2,1041.9,1177.3,1041.9z M1178.7,1043.2l0.4-0.6l-0.5-0.3l-0.4,0.6L1178.7,1043.2z
				 M1204.1,1058.9l0.4-0.6l-0.6-0.3l-0.4,0.6L1204.1,1058.9z M1205.1,1059.5C1205.1,1059.5,1205.1,1059.5,1205.1,1059.5
				c0.1-0.1,0.2-0.1,0.3-0.2c0.1-0.1,0.3-0.2,0.3-0.2l-0.3-0.6c0,0-0.1,0-0.1,0.1c0,0-0.1,0-0.1,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0
				c0,0,0,0,0,0l-0.2-0.1l-0.4,0.6L1205.1,1059.5C1205.1,1059.6,1205.1,1059.5,1205.1,1059.5z M1206.7,1058.6l-0.3-0.6l-0.6,0.3
				l0.3,0.6L1206.7,1058.6z M1234.2,1042.9l-0.3-0.6l-0.6,0.3l0.3,0.6L1234.2,1042.9z M1235.1,1042.3
				C1235.1,1042.3,1235.1,1042.3,1235.1,1042.3c0-0.1,0-0.2,0-0.3c0-0.2-0.1-0.3-0.1-0.3l-0.8,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1v0
				v0v0l0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0l-0.2,0.1l0.4,0.6L1235.1,1042.3C1235.2,1042.3,1235.1,1042.3,1235.1,1042.3z
				 M1235.2,1040.5l-0.7,0l0,0.6l0.7,0L1235.2,1040.5z M1235.2,1009.1l-0.7,0l0,0.6l0.7,0L1235.2,1009.1z M1235.1,1008.1
				C1235.1,1008.1,1235.1,1008,1235.1,1008.1c-0.1-0.1-0.2-0.2-0.2-0.2c-0.1-0.1-0.3-0.2-0.3-0.2l-0.4,0.5c0,0,0.1,0,0.1,0.1
				c0,0,0.1,0,0.1,0l0,0l0,0.1l0,0.1h0c0,0,0,0,0,0c0,0-0.2,0-0.2,0v0.1l0.8,0.1L1235.1,1008.1
				C1235.2,1008.1,1235.2,1008.1,1235.1,1008.1z M1233.7,1007.1l-0.4,0.6l0.5,0.3l0.4-0.6L1233.7,1007.1z M1208.1,990.3l-0.4,0.6
				l0.6,0.4l0.4-0.6L1208.1,990.3z M1207,989.6C1207,989.6,1206.9,989.6,1207,989.6c-0.1,0.1-0.2,0.1-0.3,0.2
				c-0.2,0.1-0.3,0.2-0.3,0.2l0.3,0.6c0,0,0.1,0,0.1-0.1c0,0,0.1,0,0.1,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0.2,0.2l0.4-0.6
				L1207,989.6C1207,989.6,1207,989.6,1207,989.6z M1205.3,990.6l0.3,0.6l0.6-0.4l-0.3-0.6L1205.3,990.6z"
                />

                <linearGradient
                  id="SVGID_144_"
                  gradientUnits="userSpaceOnUse"
                  x1="1234.6152"
                  y1="190.7464"
                  x2="1343.2386"
                  y2="260.4814"
                  gradientTransform="matrix(1 0 0 -1 0 1200)"
                >
                  <stop offset="0" style={{ stopColor: '#BFBFBF' }} />
                  <stop offset="0.1122" style={{ stopColor: '#AAAAAE' }} />
                  <stop offset="0.4064" style={{ stopColor: '#767884' }} />
                  <stop offset="0.6631" style={{ stopColor: '#515366' }} />
                  <stop offset="0.8695" style={{ stopColor: '#3A3D54' }} />
                  <stop offset="1" style={{ stopColor: '#32354D' }} />
                </linearGradient>
                <path
                  fill="url(#SVGID_144_)"
                  d="M1273.8,984.9l-0.8-1.2l2.8-1.8l0.8,1.2L1273.8,984.9z M1272.4,985.8l-0.8-1.2l-2.8,1.8l0.8,1.2
				L1272.4,985.8z M1268.2,988.5l-0.8-1.2l-2.8,1.8l0.8,1.2L1268.2,988.5z M1264,991.1l-0.8-1.2l-2.8,1.8l0.8,1.2L1264,991.1z
				 M1289.3,975.1l-0.8-1.2l-2.8,1.8l0.8,1.2L1289.3,975.1z M1285.1,977.8l-0.8-1.2l-2.8,1.8l0.8,1.2L1285.1,977.8z M1280.9,980.4
				l-0.8-1.2l-2.8,1.8l0.8,1.2L1280.9,980.4z M1259.8,993.8l-0.8-1.2l-2.8,1.8l0.8,1.2L1259.8,993.8z M1255.6,996.5l-0.8-1.2
				l-2.8,1.8l0.8,1.2L1255.6,996.5z M1251.5,999.2l-0.8-1.2l-2.8,1.8l0.8,1.2L1251.5,999.2z M1318.6,956.1l-0.8-1.2l-2.8,1.8
				l0.8,1.2L1318.6,956.1z M1314.4,958.8l-0.8-1.2l-2.8,1.8l0.8,1.2L1314.4,958.8z M1310.2,961.5l-0.8-1.2l-2.8,1.8l0.8,1.2
				L1310.2,961.5z M1306,964.1l-0.8-1.2l-2.8,1.8l0.8,1.2L1306,964.1z M1331.3,948.1l-0.8-1.2l-2.8,1.8l0.8,1.2L1331.3,948.1z
				 M1327.1,950.8l-0.8-1.2l-2.8,1.8l0.8,1.2L1327.1,950.8z M1322.9,953.4l-0.8-1.2l-2.8,1.8l0.8,1.2L1322.9,953.4z M1344.3,940.1
				l-0.8-1.2l-2.8,1.8l0.8,1.2L1344.3,940.1z M1340.1,942.8l-0.8-1.2l-2.8,1.8l0.8,1.2L1340.1,942.8z M1335.9,945.4l-0.8-1.2
				l-2.8,1.8l0.8,1.2L1335.9,945.4z M1301.8,966.8l-0.8-1.2l-2.8,1.8l0.8,1.2L1301.8,966.8z M1297.6,969.5l-0.8-1.2l-2.8,1.8
				l0.8,1.2L1297.6,969.5z M1293.5,972.2l-0.8-1.2l-2.8,1.8l0.8,1.2L1293.5,972.2z M1247.3,1001.8l-0.8-1.2l-2.8,1.8l0.8,1.2
				L1247.3,1001.8z M1243.1,1004.5l-0.8-1.2l-2.8,1.8l0.8,1.2L1243.1,1004.5z M1238.6,1007.2l-0.8-1.2l-2.8,1.8l0.8,1.2
				L1238.6,1007.2z"
                />
              </g>

              <linearGradient
                id="SVGID_145_"
                gradientUnits="userSpaceOnUse"
                x1="1179.2999"
                y1="193.9759"
                x2="969.9731"
                y2="325.7959"
                gradientTransform="matrix(1 0 0 -1 0 1200)"
              >
                <stop offset="0" style={{ stopColor: '#32354D' }} />
                <stop offset="0.1305" style={{ stopColor: '#3A3D54' }} />
                <stop offset="0.3369" style={{ stopColor: '#515366' }} />
                <stop offset="0.5936" style={{ stopColor: '#767884' }} />
                <stop offset="0.8878" style={{ stopColor: '#AAAAAE' }} />
                <stop offset="1" style={{ stopColor: '#BFBFBF' }} />
              </linearGradient>
              <path
                fill="url(#SVGID_145_)"
                d="M1112.1,964.9l0.8-1.2l2.8,1.8l-0.8,1.2L1112.1,964.9z M1110.7,964l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1110.7,964z M1106.6,961.4l0.8-1.2l-2.8-1.8l-0.8,1.2L1106.6,961.4z M1102.4,958.7l0.8-1.2l-2.8-1.8l-0.8,1.2L1102.4,958.7z
			 M1127.5,974.7l0.8-1.2l-2.8-1.8l-0.8,1.2L1127.5,974.7z M1123.3,972.1l0.8-1.2l-2.8-1.8l-0.8,1.2L1123.3,972.1z M1119.1,969.4
			l0.8-1.2l-2.8-1.8l-0.8,1.2L1119.1,969.4z M1098.2,956.1l0.8-1.2l-2.8-1.8l-0.8,1.2L1098.2,956.1z M1094,953.4l0.8-1.2l-2.8-1.8
			l-0.8,1.2L1094,953.4z M1089.8,950.8l0.8-1.2l-2.8-1.8l-0.8,1.2L1089.8,950.8z M1156.9,993.1l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1156.9,993.1z M1152.8,990.5l0.8-1.2l-2.8-1.8l-0.8,1.2L1152.8,990.5z M1148.6,987.8l0.8-1.2l-2.8-1.8l-0.8,1.2L1148.6,987.8z
			 M1144.4,985.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1144.4,985.2z M1169.5,1001.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1169.5,1001.2z M1165.3,998.5
			l0.8-1.2l-2.8-1.8l-0.8,1.2L1165.3,998.5z M1161.1,995.9l0.8-1.2l-2.8-1.8l-0.8,1.2L1161.1,995.9z M1178,1006.8l0.8-1.2l-2.8-1.8
			l-0.8,1.2L1178,1006.8z M1173.8,1004.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1173.8,1004.2z M1140.2,982.5l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1140.2,982.5z M1136,979.9l0.8-1.2l-2.8-1.8l-0.8,1.2L1136,979.9z M1131.9,977.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1131.9,977.2z
			 M1085.7,948.1l0.8-1.2l-2.8-1.8l-0.8,1.2L1085.7,948.1z M1081.5,945.5l0.8-1.2l-2.8-1.8l-0.8,1.2L1081.5,945.5z M1077.2,942.6
			l0.8-1.2l-2.8-1.8l-0.8,1.2L1077.2,942.6z M1009.9,899.8l0.8-1.2l-2.8-1.8l-0.8,1.2L1009.9,899.8z M1005.7,897.1l0.8-1.2l-2.8-1.8
			l-0.8,1.2L1005.7,897.1z M1001.6,894.5l0.8-1.2l-2.8-1.8l-0.8,1.2L1001.6,894.5z M997.4,891.8l0.8-1.2l-2.8-1.8l-0.8,1.2
			L997.4,891.8z M1022.5,907.8l0.8-1.2l-2.8-1.8l-0.8,1.2L1022.5,907.8z M1018.3,905.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1018.3,905.2z
			 M1014.1,902.5l0.8-1.2l-2.8-1.8l-0.8,1.2L1014.1,902.5z M993.2,889.2l0.8-1.2l-2.8-1.8l-0.8,1.2L993.2,889.2z M989,886.5l0.8-1.2
			l-2.8-1.8l-0.8,1.2L989,886.5z M984.8,883.9l0.8-1.2l-2.8-1.8l-0.8,1.2L984.8,883.9z M1051.9,926.2l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1051.9,926.2z M1047.8,923.6l0.8-1.2l-2.8-1.8l-0.8,1.2L1047.8,923.6z M1043.6,920.9l0.8-1.2l-2.8-1.8l-0.8,1.2L1043.6,920.9z
			 M1039.4,918.3l0.8-1.2l-2.8-1.8l-0.8,1.2L1039.4,918.3z M1064.5,934.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1064.5,934.2z M1060.3,931.6
			l0.8-1.2l-2.8-1.8l-0.8,1.2L1060.3,931.6z M1056.1,929l0.8-1.2l-2.8-1.8l-0.8,1.2L1056.1,929z M1073,939.9l0.8-1.2l-2.8-1.8
			l-0.8,1.2L1073,939.9z M1068.8,937.3l0.8-1.2l-2.8-1.8l-0.8,1.2L1068.8,937.3z M1035.2,915.6l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1035.2,915.6z M1031,913l0.8-1.2l-2.8-1.8l-0.8,1.2L1031,913z M1026.9,910.3l0.8-1.2l-2.8-1.8l-0.8,1.2L1026.9,910.3z
			 M980.7,881.2l0.8-1.2l-2.8-1.8l-0.8,1.2L980.7,881.2z M976.5,878.6l0.8-1.2l-2.8-1.8l-0.8,1.2L976.5,878.6z M972.2,875.7l0.8-1.2
			l-2.8-1.8l-0.8,1.2L972.2,875.7z"
              />

              <linearGradient
                id="SVGID_146_"
                gradientUnits="userSpaceOnUse"
                x1="1653.7408"
                y1="481.3279"
                x2="1444.4141"
                y2="613.148"
                gradientTransform="matrix(1 0 0 -1 0 1200)"
              >
                <stop offset="0" style={{ stopColor: '#32354D' }} />
                <stop offset="0.1305" style={{ stopColor: '#3A3D54' }} />
                <stop offset="0.3369" style={{ stopColor: '#515366' }} />
                <stop offset="0.5936" style={{ stopColor: '#767884' }} />
                <stop offset="0.8878" style={{ stopColor: '#AAAAAE' }} />
                <stop offset="1" style={{ stopColor: '#BFBFBF' }} />
              </linearGradient>
              <path
                fill="url(#SVGID_146_)"
                d="M1587.1,677.9l0.8-1.2l2.8,1.8l-0.8,1.2L1587.1,677.9z M1585.7,677l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1585.7,677z M1581.6,674.4l0.8-1.2l-2.8-1.8l-0.8,1.2L1581.6,674.4z M1577.4,671.7l0.8-1.2l-2.8-1.8l-0.8,1.2L1577.4,671.7z
			 M1602.5,687.7l0.8-1.2l-2.8-1.8l-0.8,1.2L1602.5,687.7z M1598.3,685.1l0.8-1.2l-2.8-1.8l-0.8,1.2L1598.3,685.1z M1594.1,682.4
			l0.8-1.2l-2.8-1.8l-0.8,1.2L1594.1,682.4z M1573.2,669.1l0.8-1.2l-2.8-1.8l-0.8,1.2L1573.2,669.1z M1569,666.4l0.8-1.2l-2.8-1.8
			l-0.8,1.2L1569,666.4z M1564.8,663.8l0.8-1.2l-2.8-1.8l-0.8,1.2L1564.8,663.8z M1631.9,706.1l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1631.9,706.1z M1627.8,703.5l0.8-1.2l-2.8-1.8l-0.8,1.2L1627.8,703.5z M1623.6,700.8l0.8-1.2l-2.8-1.8l-0.8,1.2L1623.6,700.8z
			 M1619.4,698.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1619.4,698.2z M1644.5,714.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1644.5,714.2z M1640.3,711.5
			l0.8-1.2l-2.8-1.8l-0.8,1.2L1640.3,711.5z M1636.1,708.9l0.8-1.2l-2.8-1.8l-0.8,1.2L1636.1,708.9z M1653,719.8l0.8-1.2l-2.8-1.8
			l-0.8,1.2L1653,719.8z M1648.8,717.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1648.8,717.2z M1615.2,695.5l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1615.2,695.5z M1611,692.9l0.8-1.2l-2.8-1.8l-0.8,1.2L1611,692.9z M1606.9,690.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1606.9,690.2z
			 M1560.7,661.1l0.8-1.2l-2.8-1.8l-0.8,1.2L1560.7,661.1z M1556.5,658.5l0.8-1.2l-2.8-1.8l-0.8,1.2L1556.5,658.5z M1552.2,655.6
			l0.8-1.2l-2.8-1.8l-0.8,1.2L1552.2,655.6z M1484.9,612.8l0.8-1.2l-2.8-1.8l-0.8,1.2L1484.9,612.8z M1480.7,610.1l0.8-1.2l-2.8-1.8
			l-0.8,1.2L1480.7,610.1z M1476.6,607.5l0.8-1.2l-2.8-1.8l-0.8,1.2L1476.6,607.5z M1472.4,604.8l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1472.4,604.8z M1497.5,620.8l0.8-1.2l-2.8-1.8l-0.8,1.2L1497.5,620.8z M1493.3,618.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1493.3,618.2z
			 M1489.1,615.5l0.8-1.2l-2.8-1.8l-0.8,1.2L1489.1,615.5z M1468.2,602.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1468.2,602.2z M1464,599.5
			l0.8-1.2l-2.8-1.8l-0.8,1.2L1464,599.5z M1459.8,596.9l0.8-1.2l-2.8-1.8l-0.8,1.2L1459.8,596.9z M1526.9,639.2l0.8-1.2l-2.8-1.8
			l-0.8,1.2L1526.9,639.2z M1522.8,636.6l0.8-1.2l-2.8-1.8l-0.8,1.2L1522.8,636.6z M1518.6,633.9l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1518.6,633.9z M1514.4,631.3l0.8-1.2l-2.8-1.8l-0.8,1.2L1514.4,631.3z M1539.5,647.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1539.5,647.2z
			 M1535.3,644.6l0.8-1.2l-2.8-1.8l-0.8,1.2L1535.3,644.6z M1531.1,642l0.8-1.2l-2.8-1.8l-0.8,1.2L1531.1,642z M1548,652.9l0.8-1.2
			l-2.8-1.8l-0.8,1.2L1548,652.9z M1543.8,650.3l0.8-1.2l-2.8-1.8l-0.8,1.2L1543.8,650.3z M1510.2,628.6l0.8-1.2l-2.8-1.8l-0.8,1.2
			L1510.2,628.6z M1506,626l0.8-1.2l-2.8-1.8l-0.8,1.2L1506,626z M1501.9,623.3l0.8-1.2l-2.8-1.8l-0.8,1.2L1501.9,623.3z
			 M1455.7,594.2l0.8-1.2l-2.8-1.8l-0.8,1.2L1455.7,594.2z M1451.5,591.6l0.8-1.2l-2.8-1.8l-0.8,1.2L1451.5,591.6z M1447.2,588.7
            l0.8-1.2l-2.8-1.8l-0.8,1.2L1447.2,588.7z"
              />

              <path
                id="bottomline"
                d="m969.4 873.9 241.4 151.8 291.8-184.6 177.5-105.4-241.9-153.4"
                style={{ fill: 'none', strokeMiterlimit: 10, stroke: 'transparent' }}
              />
            </g>

            <g>
              <linearGradient
                id="SVGID_147_"
                gradientUnits="userSpaceOnUse"
                x1="605.9249"
                y1="953.613"
                x2="606.0892"
                y2="817.645"
                gradientTransform="matrix(0.3592 -0.3065 -1.2019 -0.6834 1880.408 1551.1382)"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                opacity="0.25"
                fill="url(#SVGID_147_)"
                enable-background="new    "
                points="1139.7,789.3 1074.3,826 886.1,711.5 
			955,672.8 		"
              />

              <linearGradient
                id="SVGID_148_"
                gradientUnits="userSpaceOnUse"
                x1="763.4714"
                y1="1027.7656"
                x2="725.6356"
                y2="878.7339"
                gradientTransform="matrix(0.3592 -0.3065 -1.2019 -0.6834 1880.408 1551.1382)"
              >
                <stop offset="0" style={{ stopColor: '#FF808B' }} />
                <stop offset="0.3874" style={{ stopColor: '#FFB2B9', stopOpacity: 0.5873 }} />
                <stop offset="0.9388" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                opacity="0.75"
                fill="url(#SVGID_148_)"
                enable-background="new    "
                points="1123.5,708.5 1057.5,749 887.2,638.9 
			954.8,596.8 		"
              />
              <g id="bottomparticles">
                <circle fill="#FFFFFF" cx="942.6" cy="693.5" r="1.6" />
                <circle fill="#FFFFFF" cx="931.6" cy="675.3" r="1.6" />
                <circle fill="#FFFFFF" cx="1000.1" cy="737.7" r="1.6" />
                <circle fill="#FFFFFF" cx="1118.8" cy="719.1" r="1.6" />
                <circle fill="#FFFFFF" cx="936.4" cy="658.5" r="1.6" />
                <circle fill="#FFFFFF" cx="1017.4" cy="786.5" r="1.6" />
                <circle fill="#FFFFFF" cx="1090" cy="769.7" r="1.6" />
                <circle fill="#FFFFFF" cx="1004.9" cy="672.1" r="1.6" />
                <circle fill="#FFFFFF" cx="957.9" cy="615.2" r="1.6" />
                <circle fill="#FFFFFF" cx="948" cy="651.1" r="1.6" />
                <circle fill="#FFFFFF" cx="1063.7" cy="686.7" r="1.6" />
                <circle fill="#FFFFFF" cx="904.7" cy="691.9" r="3.2" />
              </g>

              <linearGradient
                id="SVGID_149_"
                gradientUnits="userSpaceOnUse"
                x1="608.2545"
                y1="1006.7597"
                x2="591.3518"
                y2="855.3317"
                gradientTransform="matrix(0.3592 -0.3065 -1.2019 -0.6834 1880.408 1551.1382)"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="0.1993" style={{ stopColor: '#C5C6D1', stopOpacity: 0.8007 }} />
                <stop offset="0.3919" style={{ stopColor: '#9497AB', stopOpacity: 0.6081 }} />
                <stop offset="0.5731" style={{ stopColor: '#6E728D', stopOpacity: 0.4269 }} />
                <stop offset="0.7399" style={{ stopColor: '#535878', stopOpacity: 0.2601 }} />
                <stop offset="0.8874" style={{ stopColor: '#43486B', stopOpacity: 0.1126 }} />
                <stop offset="1" style={{ stopColor: '#3D4266', stopOpacity: 0 }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                opacity="0.6"
                fill="url(#SVGID_149_)"
                enable-background="new    "
                points="1066,755.4 1066,822.1 886.1,711.5 
			886.7,638.9 		"
              />

              <linearGradient
                id="SVGID_150_"
                gradientUnits="userSpaceOnUse"
                x1="606.5599"
                y1="980.9644"
                x2="594.1304"
                y2="869.6109"
                gradientTransform="matrix(0.3592 -0.3065 -1.2019 -0.6834 1880.408 1551.1382)"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                opacity="0.35"
                fill="url(#SVGID_150_)"
                enable-background="new    "
                points="1066,778.8 1066,798 886.1,681.3 
			886.7,662.2 		"
              />

              <linearGradient
                id="SVGID_151_"
                gradientUnits="userSpaceOnUse"
                x1="826.0909"
                y1="1015.9351"
                x2="792.8986"
                y2="858.2021"
                gradientTransform="matrix(0.3592 -0.3065 -1.2019 -0.6834 1880.408 1551.1382)"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                opacity="0.2"
                fill="url(#SVGID_151_)"
                enable-background="new    "
                points="1133.1,714.6 1132.2,727.2 955,609.6 
			955,596.4 		"
              />
              <g opacity="0.75">
                <polygon
                  fill="#FFFFFF"
                  points="973.8,636.1 970.7,656 944.7,654.9 939.5,658.1 974.2,659.3 978.1,633.2 			"
                />
                <polygon
                  fill="#FFFFFF"
                  points="981.8,644.1 978.7,664 952.7,662.9 947.6,666.1 982.2,667.3 986.2,641.3 			"
                />
              </g>
              <g opacity="0.75">
                <polygon
                  fill="#FFFFFF"
                  points="1012.5,770.8 1010.4,750.7 1035.9,745.2 1040,740.8 1006.2,748.4 1009,774.6 			"
                />
                <polygon
                  fill="#FFFFFF"
                  points="1002.6,765 1000.6,745 1026,739.4 1030.2,735 996.4,742.6 999.1,768.8 			"
                />
              </g>
            </g>
            <g>
              <linearGradient
                id="SVGID_152_"
                gradientUnits="userSpaceOnUse"
                x1="1329.9996"
                y1="905.4283"
                x2="1330.1639"
                y2="769.4603"
                gradientTransform="matrix(0.3592 -0.3065 -1.2019 -0.6834 1880.408 1551.1382)"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                opacity="0.25"
                fill="url(#SVGID_152_)"
                enable-background="new    "
                points="1457.7,600.3 1392.3,637 1204.1,522.5 
			1273,483.8 		"
              />

              <linearGradient
                id="SVGID_153_"
                gradientUnits="userSpaceOnUse"
                x1="1487.542"
                y1="979.5649"
                x2="1449.7062"
                y2="830.5333"
                gradientTransform="matrix(0.3592 -0.3065 -1.2019 -0.6834 1880.408 1551.1382)"
              >
                <stop offset="0" style={{ stopColor: '#FF808B' }} />
                <stop offset="0.3874" style={{ stopColor: '#FFB2B9', stopOpacity: 0.5873 }} />
                <stop offset="0.9388" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                opacity="0.75"
                fill="url(#SVGID_153_)"
                enable-background="new    "
                points="1441.5,519.5 1375.5,560 1205.2,449.9 
			1272.8,407.8 		"
              />
              <g id="bottomparticles2">
                <circle fill="#FFFFFF" cx="1260.6" cy="504.5" r="1.6" />
                <circle fill="#FFFFFF" cx="1249.6" cy="486.3" r="1.6" />
                <circle fill="#FFFFFF" cx="1318.1" cy="548.7" r="1.6" />
                <circle fill="#FFFFFF" cx="1436.8" cy="530.1" r="1.6" />
                <circle fill="#FFFFFF" cx="1254.4" cy="469.5" r="1.6" />
                <circle fill="#FFFFFF" cx="1335.4" cy="597.5" r="1.6" />
                <circle fill="#FFFFFF" cx="1408" cy="580.7" r="1.6" />
                <circle fill="#FFFFFF" cx="1322.9" cy="483.1" r="1.6" />
                <circle fill="#FFFFFF" cx="1275.9" cy="426.2" r="1.6" />
                <circle fill="#FFFFFF" cx="1266" cy="462.1" r="1.6" />
                <circle fill="#FFFFFF" cx="1381.7" cy="497.7" r="1.6" />
                <circle fill="#FFFFFF" cx="1222.7" cy="502.9" r="3.2" />
              </g>

              <linearGradient
                id="SVGID_154_"
                gradientUnits="userSpaceOnUse"
                x1="1332.3284"
                y1="958.5676"
                x2="1315.4257"
                y2="807.1397"
                gradientTransform="matrix(0.3592 -0.3065 -1.2019 -0.6834 1880.408 1551.1382)"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="8.269999e-02" style={{ stopColor: '#E2E2E5', stopOpacity: 0.9173 }} />
                <stop offset="0.2656" style={{ stopColor: '#A8A9AF', stopOpacity: 0.7344 }} />
                <stop offset="0.4423" style={{ stopColor: '#777983', stopOpacity: 0.5577 }} />
                <stop offset="0.6084" style={{ stopColor: '#515460', stopOpacity: 0.3916 }} />
                <stop offset="0.7614" style={{ stopColor: '#363947', stopOpacity: 0.2386 }} />
                <stop offset="0.8967" style={{ stopColor: '#262938', stopOpacity: 0.1033 }} />
                <stop offset="1" style={{ stopColor: '#202333', stopOpacity: 0 }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                opacity="0.6"
                fill="url(#SVGID_154_)"
                enable-background="new    "
                points="1384,566.4 1384,633.1 1204.1,522.5 
			1204.7,449.9 		"
              />

              <linearGradient
                id="SVGID_155_"
                gradientUnits="userSpaceOnUse"
                x1="1330.6338"
                y1="932.7722"
                x2="1318.2042"
                y2="821.4188"
                gradientTransform="matrix(0.3592 -0.3065 -1.2019 -0.6834 1880.408 1551.1382)"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                opacity="0.35"
                fill="url(#SVGID_155_)"
                enable-background="new    "
                points="1384,589.8 1384,609 1204.1,492.3 
			1204.7,473.2 		"
              />

              <linearGradient
                id="SVGID_156_"
                gradientUnits="userSpaceOnUse"
                x1="1550.1628"
                y1="967.7369"
                x2="1516.9703"
                y2="810.004"
                gradientTransform="matrix(0.3592 -0.3065 -1.2019 -0.6834 1880.408 1551.1382)"
              >
                <stop offset="0" style={{ stopColor: '#FFFFFF' }} />
                <stop offset="1" style={{ stopColor: '#FFFFFF', stopOpacity: 0 }} />
              </linearGradient>
              <polygon
                className="particlespoly"
                opacity="0.2"
                fill="url(#SVGID_156_)"
                enable-background="new    "
                points="1451.1,525.6 1450.2,538.2 1273,420.6 
			1273,407.4 		"
              />
              <g opacity="0.75">
                <polygon
                  fill="#FFFFFF"
                  points="1311.9,461.6 1308.8,481.5 1282.7,480.4 1277.6,483.6 1312.2,484.8 1316.2,458.8 			"
                />
                <polygon
                  fill="#FFFFFF"
                  points="1319.9,469.6 1316.8,489.5 1290.8,488.5 1285.7,491.6 1320.3,492.9 1324.3,466.8 			"
                />
              </g>
            </g>
          </g>
        </svg>
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
