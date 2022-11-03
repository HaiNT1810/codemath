import { Link } from 'react-router-dom'
import { Input, Radio, Space } from 'antd';
import { useEffect, useState } from 'react';
import { VideoCameraOutlined } from '@ant-design/icons';
import ReactPlayer from "react-player";
import { Modal } from 'react-bootstrap-v5';
import { Vote } from './Components/Vote';
import { VideoCarousel } from './Components/VideoCarousel';
import video1 from '../../../assets/videos/video-1.mp4'
import './LeftWrapper.scss'

function LeftWrapper() {
  const [voteSelected, setVoteSelected] = useState(1);
  const [modalVote, setModalVote] = useState(false);
  const handleChangeVote = (e) => {
    setVoteSelected(e.target.value);
  };



  return (
    <div className='left-wrapper'>
      {/* <div className="recruit">
        <div className="recruit-header">
          <Link to='/recruit'>Tuyển dụng</Link>
        </div>
        <div className="recruit-content">

        </div>
      </div> */}
      <div className="vote">
        <div className="vote-header">
          <input
            type='checkbox'
            checked
            disabled
          />
          <span>Bình chọn</span>
        </div>
        <div className="vote-content">
          <div className="vote-title">
            <span>Đánh giá của bạn về cổng thông tin điện tử</span>
          </div>
          <Radio.Group
            onChange={handleChangeVote}
            value={voteSelected}
            className="vote-list"
          >
            <Space
              className='antd-space'
              direction="vertical">
              <Radio value={1}>Rất hữu ích</Radio>
              <Radio value={2}>Hữu ích</Radio>
              <Radio className='more-vote' value={3}>
                Ý kiến khác
              </Radio>
            </Space>
          </Radio.Group>
          <div className="vote-bottom">
            <span><u onClick={() => setModalVote(true)}>Bình chọn</u></span>
            <span>
              <u onClick={() => setModalVote(true)}>Xem kết quả</u>
            </span>
          </div>
        </div>
      </div>
      <div className="video">
        <div className="video-header">
          <Link to='/video'>
            <VideoCameraOutlined />
            <span>Video</span>
          </Link>
        </div>
        <div className="video-content">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              controls={true}
              width="100%"
              height="100%"
              url={video1}
            />
          </div>
        </div>
        <VideoCarousel/>
      </div>
      <Modal
        show={modalVote}
        //size={'lg'}
        scrollable={true}
        onHide={() => {
          setModalVote(false)
        }}
      >
        <Modal.Body className='w-lg-500px bg-white rounded shadow-sm p-5'>
          <Vote
            voteSelected={voteSelected}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export { LeftWrapper }