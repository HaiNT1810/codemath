import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { useState, useEffect } from 'react'
import { List, Spin } from 'antd';
import { Link } from 'react-router-dom'
import { requestGET } from '../../../helpers/baseAPI'
import './PolicyWrapper.scss'

const Policy = () => {

    const [data, setData] = useState([]);
    const [loading, setLoadding] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoadding(true);
            let res = await requestGET('news?maChuyenMuc=CCCS');
            if (res && res.data.length > 0)
                setData(res.data);
            setLoadding(false)
        }
        fetchData();
        return () => { }
    }, [])

    // const data = [
    //     'Quyết định số 23/2017/QĐ-UBND ngày 28/7/2017 của UBND tỉnh Vĩnh Phúc V/v thực hiện hỗ trợ chi phí lập hồ sơ, thủ tục giới thiệu địa điểm, quy hoạch chi tiết tỷ lệ 1/500 các dự án thuộc lĩnh vực khuyến khích đầu tư của tỉnh Vĩnh Phúc',
    //     'Racing car sprays burning fuel into crowd.',
    //     'Japanese princess to wed commoner.',
    //     'Australian walks 100km after outback crash.',
    //     'Man charged over missing wedding girl.',
    //     'Los Angeles battles huge wildfires.',
    //     'Los Angeles battles huge wildfires.',
    //     'Racing car sprays burning fuel into crowd.',
    // ];
    return <>
    {
      loading ?
        <div
          className='container d-flex- justify-content-center align-items-center'
          style={{ "height": "180px" }}
        >
          <Spin></Spin>
        </div> : data &&
        <div className='content-container'>
          <div className='page-content'>
            <List
              className='policy-list'
              pagination={
                {
                  pageSize: 8,
                }
              }
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <div className='policy-item-wrapper'>
                    <Link 
                      className='policy-title'
                      to={`policy/${item.ID}`}
                    >
                      {item.Title}
                    </Link>
                    <p className='policy-summary'>{item.TomTat}</p>
                  </div>

                </List.Item>
              )}
            />
          </div>
        </div>
    }
  </>
}

const PolicyWrapper = () => {
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
            >
            </PageTitle>
            <Policy />
        </>
    )
}

export { PolicyWrapper }
