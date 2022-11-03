import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Footer } from './components/Footer'
import { ScrollTop } from './components/ScrollTop'
import { Content } from './components/Content'
import { PageDataProvider } from './core'
import { useLocation } from 'react-router-dom'
import { MenuComponent } from '../assets/ts/components'
import { Modal } from 'react-bootstrap-v5'
import { Affix, Menu } from 'antd'
import { CaretDownOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom'
import { checkIsActive, toAbsoluteUrl } from '../helpers'
import * as auth from '../../app/modules/auth/redux/AuthRedux'
import { Login } from './Login'
import { ForgotPassword } from './ForgotPassword'
import { ChangePassword } from './ChangePassword'
import moment from 'moment'
import { useHistory } from "react-router-dom";
import { logout } from '../../app/modules/auth/redux/AuthCRUD'
import { DefaultTitleAuction } from './components/header/page-title/DefaultTitleAuction'
import { HomeOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

import './style.scss'
const { Search } = Input;
const MasterLayout = ({ children }) => {
  const dispatch = useDispatch()
  const { Search } = Input;
  const accessToken = useSelector(({ auth }) => auth.accessToken)
  const user = useSelector(({ auth }) => auth.user)
  const location = useLocation();
  var history = useHistory();
  const { pathname } = location;
  const [modalLogin, setModalLogin] = useState(false)
  const [modalRegister, setModalRegister] = useState(false)
  const [visibleSuccess, setVisibleSuccess] = useState(false)
  const [modalForgot, setModalForgot] = useState(false)
  const [modalChangePass, setModalChangePass] = useState(false)
  const [emailChangePass, setEmailChangePass] = useState('')

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  const handleLogOut = () => {
    logout(accessToken)
      .then(() => {
        dispatch(auth.actions.logout())
        localStorage.clear()
        sessionStorage.clear()
        setTimeout(() => {
          document.location.reload()
        }, 500)
      })
  }
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const [time, setTime] = useState(moment().format("HH:mm:ss"));
  const [date, setDate] = useState(moment().format("dddd"));
  const [dates, setDates] = useState(moment().format("DD/MM/yyyy"));
  useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(moment().format("HH:mm:ss"))
    }, 1000)

    return () => clearInterval(secTimer);
  });

  const onSearch = (value) => console.log(value);
  return (
    <PageDataProvider>
      <div className='page d-flex flex-row flex-column-fluid'>
        <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
          {/* begin:: Header */}
          <div id="kt_header" className="header h-auto flex-column" data-kt-sticky="false" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
            <div className='header-content-contianer'>
              <div className="container-xxl d-flex flex-grow-1 flex-stack">
                {/*begin::Header Logo*/}
                <div className="d-flex align-items-center me-5">
                  <div className="logo-qh">
                    <Link to="/" className='d-flex align-items-center'>
                      <div className='logo w-125px'>
                        <img alt="Logo" src={toAbsoluteUrl('/media/logos/logo.png')} className="img-fluid" />
                      </div>
                      <div className='logo-title'>
                        <article>
                          <h1>BAN QUẢN LÝ CÁC KHU CÔNG NGHIỆP VĨNH PHÚC</h1>
                          <p>VINHPHUC INDUSTRIAL ZONES MANAGEMENT BOARD</p>
                        </article>
                      </div>
                    </Link>
                  </div>
                </div>
                {/*begin::Topbar*/}
                <div className="d-flex align-items-center">
                  {/*begin::Topbar*/}
                  <div className="d-flex align-items-center flex-shrink-0">

                    {/* <div className='flex-grow-1 header-date-time'>
                      <span className='fs-2x fw-bolder text-danger ms-auto header-times'>{time}</span>
                      <span className='fs-6 text-gray-800 d-flex d-sm-block header-dates'><span>{Capitalize(date)}</span> <span>{dates}</span></span>
                    </div> */}
                    <a href='/sites/qlkcn'>
                      <button className='go-admin' >
                        <span>Truy cập phần mềm</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*begin::Separator*/}
            <div className="separator w-100" />
            {/*begin::Container*/}
            <Affix offsetTop={0}>
              <div className="header-menu-container w-100" id="kt_header_nav" style={{ backgroundImage: `url(${toAbsoluteUrl('/media/patterns/bg-navbar.svg')})` }}>
                <div className="d-flex container-xxl flex-row align-items-center justify-content-between">
                  <div className="me-auto navbar-nav">
                    <Menu mode="horizontal" selectedKeys={pathname} defaultSelectedKeys={['/home']}>
                      <Menu.Item key={"/home"}>
                        <Link to='/home'>Trang chủ</Link>
                      </Menu.Item>
                      {/* <Menu.SubMenu key={"/about"} title={<Link to='/about'>Giới thiệu tổng quan <CaretDownOutlined /></Link>}>
                        <Menu.Item key={"/about/funtion"} onClick={() => { history.push("/about/funtion") }}>
                          Chức năng
                        </Menu.Item>
                        <Menu.Item key={"/about/misson"} onClick={() => { history.push("/about/misson") }}>
                          Nhiệm vụ
                        </Menu.Item>
                      </Menu.SubMenu>
                      <Menu.Item key={"/overall-data"}>
                        <Link to='/overall-data'>Dữ liệu tổng thể</Link>
                      </Menu.Item>
                      <Menu.SubMenu key={"/interactive"} title={<Link to='/interactive'>Nhà nước công dân <CaretDownOutlined /></Link>}>
                        <Menu.Item key={"/interactive/feedback"} onClick={() => { history.push("/interactive/feedback") }}>
                          Góp ý
                        </Menu.Item>
                        <Menu.Item key={"/interactive/contact"} onClick={() => { history.push("/interactive/contact") }}>
                          Liên hệ
                        </Menu.Item>
                      </Menu.SubMenu> */}
                      {/* <Menu.Item key={"/policy"}>
                        <Link to='/policy'>Cơ chế chính sách</Link>
                      </Menu.Item> */}
                      {/* <Menu.Item key={"#"}>
                        <Link to='/wp'>Thông tin người lao động</Link>
                      </Menu.Item> */}
                      <Menu.Item key={"/#"}>
                        <Link to='/#'>Bản đồ</Link>
                      </Menu.Item>
                      <Menu.Item key={"/recruit"}>
                        <Link to='/recruit'>Tuyển dụng</Link>
                      </Menu.Item>
                      <Menu.Item key={"/#"}>
                        <Link to='/#'>Hướng dẫn sử dụng</Link>
                      </Menu.Item>
                    </Menu>
                  </div>
                </div>
              </div>
            </Affix>
            {/* begin::Header bottom */}
            <div className='header-bottom'>
              <div className='container'>
                <div className='header-bottom-wrapper'>
                  <div className='header-bottom-left'>
                    <DefaultTitleAuction />
                  </div>
                  <div className='header-bottom-right'>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='wrapper-content' >
            <Content>{children}</Content>
          </div>
          <Footer />
        </div>
      </div>
      <Modal
        show={modalLogin}
        //size={'lg'}
        scrollable={true}
        onHide={() => {
          setModalLogin(false)
        }}
      >
        <Modal.Body className='w-lg-500px bg-white rounded shadow-sm p-10'>
          <Login
            setModalLogin={setModalLogin}
            setModalRegister={setModalRegister}
            setModalForgot={setModalForgot}
          />
        </Modal.Body>
      </Modal>

      <Modal
        show={modalForgot}
        //size={'lg'}
        scrollable={true}
        onHide={() => {
          setModalForgot(false)
        }}
      >
        <Modal.Body className='w-lg-500px bg-white rounded shadow-sm p-10'>
          <ForgotPassword
            setModalForgot={setModalForgot}
            setModalChangePass={setModalChangePass}
            setEmailChangePass={setEmailChangePass}
          />
        </Modal.Body>
      </Modal>
      <Modal
        show={modalChangePass}
        //size={'lg'}
        scrollable={true}
        onHide={() => {
          setModalChangePass(false)
        }}
      >
        <Modal.Body className='w-lg-500px bg-white rounded shadow-sm p-10'>
          <ChangePassword
            setModalChangePass={setModalChangePass}
            setModalLogin={setModalLogin}
            emailChangePass={emailChangePass}
          />
        </Modal.Body>
      </Modal>
      <ScrollTop />
    </PageDataProvider >
  )
}

export { MasterLayout }
