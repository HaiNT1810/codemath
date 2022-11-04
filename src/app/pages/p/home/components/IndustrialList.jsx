import { useState, useEffect, useRef } from 'react'
import { List, Skeleton, Divider, Button } from 'antd'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './IndustrialList.scss'

const IndustrialList = () => {

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

  return (
    <>
      {/* BEGIN: Section Product auction */}
      <div className='section-industrial-list'>
        <div className="section-title-holder">
          <div className="section-subtitle"></div>
        </div>
        
      </div>
    </>
  )
}
export { IndustrialList }
