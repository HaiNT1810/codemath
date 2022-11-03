import { LinkOutlined } from '@ant-design/icons';
import { useState } from 'react'
import { useHistory, useParams, Link } from "react-router-dom";
import { Card, Rate } from 'antd'
import './DetailWrapper.scss'
import { CommentForm } from '../comments/CommentForm';
import { useSelector } from 'react-redux';

const getFile = (attackment) => {
  // let result = "";
  // let fileType = ['gif', 'jpeg', 'png', 'jpg']
  // let url = `${process.env.REACT_APP_RESOURCES_URL}/${attackment.split(",")[0]}`;
  // let name = attackment.split(",")[1]
  // let type = name.split(".")[1];
  // if (fileType.includes(type)) {
  //   result = <a className='link-file-doc' href={url}>
  //     <FileImageOutlined style={{ fontSize: '24px' }} />
  //     {name}
  //   </a>
  // }
  // else if (type === 'pdf') {
  //   result = <a className='link-file-doc' href={url}>
  //     <FilePdfOutlined style={{ fontSize: '24px' }} />
  //     {name}
  //   </a>
  // }
  // else {
  //   result = <a className='link-file-doc' href={url}>
  //     <FileExclamationOutlined style={{ fontSize: '24px' }} />
  //     {name}
  //   </a>
  // }
  // return result;
}

const DetailWrapper = (props) => {
  const { data } = props;
  const [otherNews, setOtherNews] = useState([]);
  const [point, setPoint] = useState(4.5);


  // Thêm đánh giá
  const addComment = (comment) => {
    // const url = `${CONFIG.GETWAY_URL}/${CONFIG.GETWAY_PATH}/addcomment`;
    // comment.Point = point;
    // comment.ItemID = id;
    // comment.TableName = 'KhuCongNghiep';
    // let data = {
    //   comment,
    //   token: accessToken
    // }
    // axios.put(url, data).then(response => response.status == 200 && setLoadChat(true));
  }

  // useEffect(() => {
  //   const url = `${CONFIG.GETWAY_URL}/${CONFIG.GETWAY_PATH}/news`
  //   axios.get(url).then(response => {
  //     let _news = response.data.data;
  //     let _data = _news.find(x => x.ID == id);
  //     setData(_data);
  //     let _otherNews = _news.filter(x => x.ID != id).slice(0, 4);
  //     setOtherNews(_otherNews);
  //     setLoading(false);
  //   })
  // }, [id])

  return <div className='content-container'>
    <div className="page-header">
      <h2 className="header-title">{data.Title}</h2>
      {data.TomTat && <p>{data.TomTat}</p>}
    </div>
    <div className="article-content">
      <div
        dangerouslySetInnerHTML={{ __html: data?.Content }}
      />
    </div>
    {data.DinhKem
      && <div className='attackment'>
        Tệp đính kèm: {getFile(data.DinhKem)}
      </div>
    }
    <div className="vote-news">
      <div className="vote-wrapper">
        <div>
          Đánh giá
          <Rate
            value={point}
            onHoverChange={value => { value && setPoint(value) }}
            allowHalf
          />
        </div>
        <div>Lượt đánh giá: 0, trung bình: 0.00</div>
      </div>
      <div className="socical">

        <button className='btn-share'>
          <LinkOutlined />
          Chia sẻ
        </button>
      </div>
    </div>

    {/* <div className="other-news">
      <Card title={<span>Tin liên quan</span>} >
        <ul className='list-other-news'>
          {otherNews && otherNews.map((item, index) =>
          (
            <Link
              to={`/news/${item.ID}`}
              key={index}
            >
              <li className='other-news-titles'>
                &#9679;{item.Title}
              </li>
            </Link>

          ))}
        </ul>
      </Card>
    </div> */}
    <div className="comment">
      <CommentForm handleSubmit={addComment} />
    </div>
  </div>
}


export { DetailWrapper }
