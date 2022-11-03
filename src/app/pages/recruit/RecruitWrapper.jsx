import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { useState, useEffect } from 'react'
import { List, Spin } from 'antd';
import { Link } from 'react-router-dom'
import { requestGET, requestGETTmp } from '../../../helpers/baseAPI'
import './RecruitWrapper.scss'

const Recruit = () => {
  const [data, setData] = useState([]);
  const [loading, setLoadding] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoadding(true);
      let res = await requestGETTmp('worker?maChuyenMuc=TuyenDung');
      if (res && res.data.length > 0)
        setData(res.data);
      setLoadding(false)
    }
    fetchData();
    return () => { }
  }, [])

  return <>
    {
      loading ?
        <div
          className='container d-flex- justify-content-center align-items-center'
          style={{ height: "180px", display: 'flex'}}>
          <Spin></Spin>
        </div> : data &&
        <div className='content-container'>
          <div className='page-content'>
            <List
              className='worker-list'
              pagination={
                {
                  pageSize: 6,
                }
              }
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <div className='worker-item-wrapper'>
                    <Link 
                      className='worker-title'
                      to={`recruit/${item.ID}`}
                    >
                      {item.Title}
                    </Link>
                    <p className='worker-summary'>{item.TomTat}</p>
                  </div>

                </List.Item>
              )}
            />
          </div>
        </div>
    }
  </>

}

const RecruitWrapper = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle
        breadcrumbs={[
          {
            title: 'Trang chủ',
            path: '/',
            isActive: true,
            isSeparator: false
          }
        ]}
      >
      </PageTitle>
      <Recruit />
    </>
  )
}

export { RecruitWrapper }
