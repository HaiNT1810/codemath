import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {useLayout} from '../../../core/LayoutProvider'
import {usePageData} from '../../../core/PageData'
import './DefaultTitleAuction.scss'

const DefaultTitleAuction: FC = () => {
  const {pageTitle, pageDescription, pageBreadcrumbs} = usePageData()
  const {config, attributes} = useLayout()

  return (
    <div {...attributes.pageTitle} className='page-title d-flex flex-column'>
      {pageBreadcrumbs &&
        pageBreadcrumbs.length > 0 &&
        config.pageTitle &&
        config.pageTitle.breadCrumbs && (
          <ul className='breadcrumb breadcrumb-dot justify-content-center fw-normal fs-5 my-1'>
            {Array.from(pageBreadcrumbs).map((item, index) => (
              <li className={`breadcrumb-item ${index === 0 && 'border-left'}`} key={`${item.path}${index}`}>

                {!item.isSeparator ? (
                  <Link className='' to={item.path}>
                    {item.title}
                  </Link>
                ) : (
                  <span className='bullet bg-white opacity-75 w-5px h-2px'></span>
                )}
              </li>
            ))}
            <li className=''>{pageTitle}</li>
          </ul>
        )}
    </div>
  )
}

export {DefaultTitleAuction}
