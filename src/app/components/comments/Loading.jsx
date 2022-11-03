import { Spin } from 'antd';
import "./Styles.scss";

const Loading = () => (
  <div className="loading">
    <Spin/> <span>Đang xử lý . . .</span>
  </div>
);

export default Loading;
