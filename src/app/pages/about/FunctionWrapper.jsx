import { useIntl } from 'react-intl'
import { useState, useEffect } from 'react'
import { requestGET } from '../../../helpers/baseAPI'
import { Spin } from 'antd'
import { PageTitle } from '../../../_metronic/layout/core'

const Function = () => {
  const [data, setData] = useState({});
  const [loading, setLoadding] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoadding(true);
      const res = await requestGET(`news?machuyenmuc=gttq_chucnang`);
      if (res && res.data.length > 0)
        setData(res.data[0])
      setLoadding(false);
    };
    fetchData();
    return () => { };
  }, []);
  return <>
    {
      loading ?
        <div
          className='container d-flex- justify-content-center align-items-center'
          style={{ height: "180px", display: 'flex' }}>
          <Spin></Spin>
        </div> : data &&
        <div className='content-container'>
          <div className="page-header">
            <h2 className="header-title">{data.Title}</h2>
          </div>
          <div className="article-content">
            {data.TomTat && <p className="lead">{data.TomTat}</p>}
            <div
              dangerouslySetInnerHTML={{ __html: data?.Content }}
            />
          </div>
        </div>
    }
  </>
}

const FunctionWrapper = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle
        breadcrumbs={[
          {
            title: 'Giới thiệu tổng quan',
            path: '/',
            isActive: true,
            isSeparator: false
          }
        ]}
      >  Chức năng
      </PageTitle>
      <Function />
    </>
  )
}

export { FunctionWrapper }
