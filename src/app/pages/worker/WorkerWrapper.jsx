import { useIntl } from 'react-intl'
import { CheckCircleOutlined, ArrowsAltOutlined, ShrinkOutlined, CloseCircleOutlined } from '@ant-design/icons';
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { requestGET } from '../../../helpers/baseAPI'
import { Alert } from 'antd'
import { PageTitle } from '../../../_metronic/layout/core'
import Loading from '../../components/comments/Loading';
import './WorkerWrapper.scss'
import clsx from 'clsx';

const Worker = () => {
  const { id } = useParams();
  const [workPermit, setWorkPermit] = useState({
    loading: false,
    error: false,
    data: {}
  });
  const [show, setShow] = useState({
    showMore: false,
    isMobile: window.innerWidth <= 768
  })

  function handleWindowSizeChange() {
    setShow({ showMore: false, isMobile: window.innerWidth <= 768 })
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setWorkPermit({ data: null, loading: true, error: false })
      const res = await requestGET(`GetBySGPLD/${id}`, false);
      if (res && res.data && Object.keys(res.data).length !== 0) {
        setWorkPermit({ data: res.data, loading: false, error: false })
      }
      else {
        setWorkPermit({ data: null, loading: false, error: true })
      }
    };
    fetchData();
    return () => { };
  }, [id])


  return <>
    {
      <div className='content-container'>
        {
          workPermit.loading ? <Loading /> :
            workPermit.error ?
              <div className="wp-alert">
                <Alert message="Mã QR không hợp lệ" type="error" />
              </div> :
              workPermit.data &&
              <div className="work-permit">
                <div className="wp-header-wrap row">
                  <div className="wp-header col-md-12">
                    <div className="wp-image-wrap">
                      <div className="wp-img">
                        {workPermit.data?.HinhAnh ?
                          <img src={`data:image/jpeg;base64,${workPermit.data?.HinhAnh}`} alt="" /> :
                          <img src={`data:image/jpeg;base64,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`} alt="" />
                        }

                      </div>
                    </div>

                    <div className='wp-header-name'>
                      <h5 >
                        {workPermit.data?.HoTen}
                        <br></br><span>{workPermit.data?.QuocTich}</span>
                      </h5>
                      <div className='wp-border'></div>
                    </div>
                  </div>
                  <div className="wp-header-ex">
                    <div className='status-wrap'>
                      {workPermit.data?.TrangThaiCode != 'TTGPLD_HetHieuLuc' ?
                        <div className='wp-valid'>
                          <CheckCircleOutlined />
                          <i>Còn hiệu lực (valid)</i>
                        </div> :
                        <div className='wp-invalid' >
                          <CloseCircleOutlined />
                          <i>Hết hiệu lực (invalid)</i>
                        </div>
                      }


                    </div>
                    <div>
                      <div className='wp-time-scan'>
                        <span>Thời điểm quét:
                          <br></br>
                          <strong>{moment().format('DD/MM/yyyy, HH:mm A')}</strong>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="wp-body row">
                  {(show.showMore || !show.isMobile) &&
                    <div className="col-md-6">
                      <div className="row wp-field">
                        <div className="col-12 wp-label">
                          Số hộ chiếu
                        </div>
                        <div className={
                          !workPermit.data?.IDNumber ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                          {workPermit.data?.IDNumber || "Chưa khai báo"}
                        </div>
                      </div>
                      <div className="row wp-field">
                        <div className="col-12 wp-label">
                          Ngày hết hạn
                        </div>
                        <div className={
                          !workPermit.data?.CoGiaTriDen ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                          {workPermit.data?.CoGiaTriDen && moment(new Date(workPermit.data?.CoGiaTriDen)).format('DD/MM/yyyy') || "Chưa khai báo"}
                        </div>
                      </div>
                      <div className="row wp-field">
                        <div className="row wp-field">
                          <div className="col-12 wp-label">
                            Giới tính
                            <i> (sex)</i>
                          </div>
                          <div className={
                            !workPermit.data?.GioiTinh ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                            {workPermit.data?.GioiTinh || "Chưa khai báo"}
                          </div>
                        </div>
                        <div className="row wp-field">
                          <div className="col-12 wp-label">
                            Ngày, tháng, năm sinh
                          </div>
                          <div className={
                            !workPermit.data?.NgaySinh ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                            {workPermit.data?.NgaySinh && moment(new Date(workPermit.data?.NgaySinh)).format('DD/MM/yyyy') || "Chưa khai báo"}
                          </div>
                        </div>

                      </div>
                      <div className="row wp-field">
                        <div className="col-12 wp-label">
                          Tình trạng GPLĐ
                        </div>
                        <div className={
                          !workPermit.data?.HinhThucCapText ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                          {workPermit.data?.HinhThucCapText || "Chưa khai báo"}
                        </div>
                      </div>
                      {workPermit.data?.HinhThucCapCode == 'HTCGPLD_CapLai' &&
                        <div className="row wp-field">
                          <div className="col-12 wp-label">
                            Cấp lại lần thứ
                          </div>
                          <div className={
                            !workPermit.data?.SoLanCapLai ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                            {workPermit.data?.SoLanCapLai || "Chưa khai báo"}
                          </div>
                        </div>
                      }
                      {workPermit.data?.HinhThucCapCode == 'HTCGPLD_BaoCao' &&
                        <>
                          {/* <div className="row wp-field">
                              <div className="col-12 wp-label">
                                Tên người sử dụng lao động nước ngoài
                                <i></i>
                              </div>
                              <div className={
                                workPermit.data?.TenNuocNgoai ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                                {workPermit.data?.TenNuocNgoai || "Chưa khai báo"}
                              </div>
                            </div> */}
                          <div className="row wp-field">
                            <div className="col-12 wp-label">
                              Thuộc trường hợp
                              <i> </i>
                            </div>
                            <div className={
                              !workPermit.data?.TruongHopText ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                              {workPermit.data?.TruongHopText || "Chưa khai báo"}
                            </div>
                          </div>
                        </>
                      }

                    </div>
                  }

                  <div className="col-md-6">
                    {workPermit.data?.HinhThucCapCode != 'HTCGPLD_BaoCao' &&
                      <div className="row wp-field">
                        <div className="col-12 wp-label">
                          Số GPLĐ
                        </div>
                        <div className={
                          !workPermit.data?.SoGPLD ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                          {workPermit.data?.SoGPLD || "Chưa khai báo"}
                        </div>
                      </div>
                    }
                    <div className="row wp-field">
                      <div className="col-12 wp-label">
                        Vị trí công việc
                      </div>
                      <div className={
                        !workPermit.data?.ViTriCongViecText ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                        {workPermit.data?.ViTriCongViecText || "Chưa khai báo"}
                      </div>
                    </div>
                    <div className="row wp-field">
                      <div className="col-12 wp-label">
                        Chức danh công việc
                      </div>
                      <div className={
                        !workPermit.data?.ChucDanhCongViec ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                        {workPermit.data?.ChucDanhCongViec || "Chưa khai báo"}
                      </div>
                    </div>
                    <div className="row wp-field">
                      <div className="col-12 wp-label">
                        Địa điểm làm việc
                      </div>
                      <div className={
                        !workPermit.data?.DiaDiemLamViec ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                        {workPermit.data?.DiaDiemLamViec || "Chưa khai báo"}
                      </div>
                    </div>
                    <div className="row wp-field">
                      <div className="col-12 wp-label">
                        Làm việc tại doanh nghiệp/tổ chức
                      </div>
                      <div className={
                        !workPermit.data?.TenDoanhNghiep ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                        {workPermit.data?.TenDoanhNghiep || "Chưa khai báo"}
                      </div>
                    </div>
                    <div className="row wp-field">
                      <div className="col-12 wp-label">
                        Thời hạn làm việc
                      </div>
                      <div className={
                        !workPermit.data?.ThoiHanTu ? "col-12 wp-input not-info" : "col-12 wp-input"}>
                        <span>từ: </span>{workPermit.data?.ThoiHanTu && moment(new Date(workPermit.data?.ThoiHanTu)).format('DD/MM/yyyy') || "Chưa khai báo"}
                        <span className='to'>đến: </span>{workPermit.data?.ThoiHanDen && moment(new Date(workPermit.data?.ThoiHanDen)).format('DD/MM/yyyy') || "Chưa khai báo"}
                      </div>
                    </div>

                  </div>
                  <div className='row wp-bt'>
                    <div className='row wp-bt'>
                      {show.isMobile && !show.showMore &&
                        <div className='col-6'>
                          <button
                            className='btn-show'
                            onClick={() => setShow({ isMobile: true, showMore: true })}>
                            <ArrowsAltOutlined />
                            <span>Xem chi tiết</span>
                          </button>
                        </div>
                      }
                    </div>
                    {show.isMobile && show.showMore &&
                      <div className='col-6'>
                        <button
                          className='btn-hide'
                          onClick={() => setShow({ isMobile: true, showMore: false })}>
                          <ShrinkOutlined />
                          <span>Ẩn bớt</span>
                        </button>
                      </div>
                    }
                  </div>
                </div>
              </div>
        }
      </div>

    }
  </>
}

const WorkerWrapper = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle
        breadcrumbs={[
          {
            title: 'Lao động',
            path: '/',
            isActive: true,
            isSeparator: false
          }
        ]}
      >
      </PageTitle>
      <Worker />
    </>
  )
}

export { WorkerWrapper }
