import { DetailWrapper } from "../../components/detail/DetailWrapper";
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestGET } from '../../../helpers/baseAPI'
import { Spin } from 'antd';
// import './PolicyDetail.scss'

const Policy = () => {
    const { id } = useParams();
    const [loading, setLoadding] = useState(true);
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            setLoadding(true);
            let res = await requestGET(`news/${id}`);
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
          style={{ "height": "180px" }}
        >
          <Spin></Spin>
        </div> : data &&
        <DetailWrapper
          data={data}
        />
    }
  </>
}

const PolicyDetail = () => {
    const intl = useIntl()

    return (
        <>
            <PageTitle
                breadcrumbs={[
                    {
                        title: 'Cơ chế chính sách',
                        path: '/',
                        isActive: true,
                        isSeparator: false
                    }
                ]}
            > Chi tiết
            </PageTitle>
            <Policy />
        </>
    )
}

export { PolicyDetail }
