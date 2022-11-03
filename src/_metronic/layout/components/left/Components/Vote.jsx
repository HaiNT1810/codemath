/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Progress } from 'antd';

const Vote = (props) => {
  const { voteSelected } = props
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className='vote-result'>
      <div className="result-header">
        Đánh giá của bạn về cổng thông tin điện tử
      </div>
      <span>Rất hữu ích</span>
      <Progress  
        percent={20} 
        strokeColor	={voteSelected === 1 && '#1890ff' || '#B90504'}
      />
      <span>Hữu ích</span>
      <Progress  
        percent={70} 
        strokeColor	={voteSelected === 2 && '#1890ff' || '#B90504'}
      />
      <span>Ý kiến khác</span>
      <Progress  
        percent={10} 
        strokeColor	={voteSelected === 3 && '#1890ff' || '#B90504'}
      />
    </div>
  )
}

export { Vote }
