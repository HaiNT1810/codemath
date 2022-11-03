import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import clsx from 'clsx'
import { DrawerComponent } from '../../assets/ts/components'

const Content: React.FC = ({ children }) => {
  const location = useLocation()
  const { pathname } = location;
  useEffect(() => {
    DrawerComponent.hideAll()
  }, [location])

  return (
    <div id='kt_content_container' className={clsx('content flex-row-fluid p-0')}>
      <div className='container' >
        <div
          style={{ minHeight: 'calc(100vh - 235px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          className="content-wrapper">
            {children}
        </div>

      </div>
    </div>
  )
}

export { Content }
