import { DetailWrapper } from "../../components/detail/DetailWrapper";
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestGET, requestGETTmp } from '../../../helpers/baseAPI'
import { Spin } from 'antd';


const Recruit = () => {
  const { id } = useParams();
  const [loading, setLoadding] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      setLoadding(true);
      let res = await requestGETTmp(`worker/${id}`);
      res && setData(res.data);
      setLoadding(false)
    }
    fetchData();
    return () => { }
  }, [id])

  return <>
    {
      loading ?
        <div
          className='container d-flex- justify-content-center align-items-center'
          style={{ height: "180px", display: 'flex'}}>
          <Spin></Spin>
        </div> : data &&
        <DetailWrapper
          data={data}
        />
    }
  </>
}

const RecruitDetail = () => {
  const intl = useIntl()

  return (
    <>
      <PageTitle
        breadcrumbs={[
          {
            title: 'Tuyển dụng',
            path: '/',
            isActive: true,
            isSeparator: false
          }
        ]}
      > Chi tiết
      </PageTitle>
      <Recruit />
    </>
  )
}

export { RecruitDetail }
