
import { List, Skeleton, Divider } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useEffect, useRef } from 'react'
import { useIntl } from 'react-intl'
import { useHistory } from "react-router-dom";
import { PageTitle } from '../../../../_metronic/layout/core'
import './home.scss'
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const history = useHistory();

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    const fetchData = async () => {
      // var res = await requestGET(`${CONFIG.GETWAY_PATH}/listarticles?skip=${data.length}&take=5`);
      // var _data = res?.data ?? []
      // setData([...data, ..._data]);
      // setLoading(false);
      setData(["1", "2", "3", "4"])
    }
    fetchData()
    return () => {

    }
  };

  useEffect(() => {
    loadMoreData();
  }, [])

  const ref = useRef();
  const goTo = (slide) => {
    ref.current.goToSlide(slide, false);
  };

  // const { RangePicker } = DatePicker
  // const accessToken = useSelector((state) => state.auth.accessToken)
  // const user = useSelector((state) => state.auth.user)

  return (
    <div className='container'>
      <div className='content-page'>

      </div>
    </div>
  )
}


const HomeWrapper = () => {
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
      <HomePage />
    </>
  )
}


export { HomeWrapper }

