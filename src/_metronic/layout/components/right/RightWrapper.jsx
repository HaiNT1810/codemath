import Marquee from "react-easy-marquee";
import { LinkOutlined, NotificationOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { requestGET } from '../../../../helpers/baseAPI';
import { useEffect, useState } from 'react';
import { checkIsActive } from '../../../helpers'
import { useLocation } from 'react-router'
import { Link } from "react-router-dom";
import './RightWrapper.scss'

function RightWrapper() {
  const [worker, setWorker] = useState([]);
  const [notify, setNotify] = useState([]);
  const location = useLocation()
  const { pathname } = location;
  const { Option } = Select;


  useEffect(() => {
    const fetchData = async () => {
      const res = await requestGET(`worker`);
      if (res && res.data.length > 0)
        setWorker(res.data)
    };
    fetchData();
    return () => { };
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await requestGET(`news?maChuyenMuc=ThongBao`);
      if (res && res.data.length > 0)
        setNotify(res.data)
    };
    fetchData();
    return () => { };
  }, [])

  const handleChange = (value) => {
    window.location.replace(value)
  };
  return (
    <div className='right-wrapper'>
      <div className="notify">
      <div className="notify-header">
          <Link to='/#'>Thông báo</Link>
        </div>
        <div className="notify-content">
          {notify && notify.length > 0 &&
            <Marquee
              width="100%"
              duration={notify && notify.length * 2000}
              height="100%"
              axis="Y"
              pauseOnHover="true"
            >
              {notify.map((item) => (
                <div key={item.ID}>
                  <Link
                    key={item.ID}
                    className="marquee-item"
                    to={`/notify/${item.ID}`}
                  >
                    {item.Title}
                  </Link>
                </div>

              ))}
            </Marquee>
          }

        </div>
      </div>
      {checkIsActive(pathname, '/tree-page') &&
        <>
          {/* <div className="image-news">
            <div className="access-header">
              <Link to={"#"}>Tin ảnh</Link>
            </div>
            <div className="access-content">
              <div className='access-detail'>
              </div>
            </div>
          </div> */}
          {/* <div className="documents">
            <div className="access-header">
              <Link to={"#"}>Tài liệu kỳ họp</Link>
            </div>
          </div> */}
        </>
      }
      <div className="recruit">
        <div className="recruit-header">
          <Link to='/recruit'>Tuyển dụng</Link>
        </div>
        <div className="recruit-content">
          {worker && worker.length > 0 &&
            <Marquee
              width="100%"
              duration={worker && worker.length*2000}
              height="100%"
              axis="Y"
              Reverse="true"
              pauseOnHover="true"
            >
              {worker.map((item) => (
                <div key={item.ID}>
                  <Link
                    key={item.ID}
                    className="marquee-item"
                    to={`/recruit/${item.ID}`}
                  >
                    {item.Title}
                  </Link>
                </div>

              ))}
            </Marquee>
          }

        </div>
      </div>
      <div className="partner">
        <div className="partner-header">
          <div>
            <LinkOutlined />
            <span>Liên kết website</span>
          </div>
        </div>
        <div className="partner-content">
          <Select
            style={{
              width: '80%',
            }}
            placeholder="Chọn một liên kết"
            onChange={handleChange}
          >
            <Option value="http://banqlkcn.vinhphuc.gov.vn/Pages/Default.aspx">Cổng thông tin ban quản lý các KCN Vĩnh Phúc</Option>
            <Option value="https://vinhphuc.gov.vn/Pages/default.aspx">Cổng thông tin tỉnh Vĩnh Phúc</Option>
          </Select>
        </div>
      </div>
      <div className="access">
        <div className="access-header">
          <span>Số lượt truy cập</span>
        </div>
        <div className="access-content">
          <div className='access-detail'>
            <div>Thống kê: <strong>27.544</strong></div>
            <div>Online: <strong>100</strong></div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { RightWrapper }