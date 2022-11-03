/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useLayout } from '../core'

const Footer: FC = () => {
  const { classes } = useLayout()

  return (
    <div className='footer' id='kt_footer'>
      <div className="footer-bottom">
        <div className="container">
          <div className="fb-item">
            Địa chỉ: Số 38 đường Nguyễn Trãi, phường Đống Đa, thành phố Vĩnh Yên
          </div>
          <div className="fb-item">
            Điện thoại: 0211.3843403 - Fax: 0211.3843407
          </div>
          <div className="fb-item">
            Email: banqlckcn@vinhphuc.gov.vn
          </div>
        </div>
      </div>
    </div>

  )
}

export { Footer }
