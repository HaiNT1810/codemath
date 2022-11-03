/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, { FC, useState } from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { Rate } from 'antd'
import './Item.scss'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import { requestGET } from '../../../../helpers/baseAPI'
import { CONFIG } from '../../../../helpers/config'
import { Modal, Space, Card } from 'antd'
import { useSelector } from 'react-redux'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const Item = ({ className = '', type = 1, detail }) => {
    const accessToken = useSelector(state => state.auth.accessToken);
    const user = useSelector(state => state.auth.user);
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const history = useHistory();

    return (
        <div className={`card card-bussiness d-flex align-items-center flex-row mb-6 shadow-sm ${className}`} >
            <div className='card-img-wrapper'>
                <Link to={`/${type == 2 ? "product" : "business"}/${detail.ID}`}>
                    <img src={detail.Image ? CONFIG.FILE_URL + detail.Image : toAbsoluteUrl("/media/products/auction1.jpg")} />
                </Link>
            </div>
            <div className="card-body">
                <Card title={
                    <>
                        <Link to={`/${type == 2 ? "product" : "business"}/${detail.ID}`} className="card-title">{detail?.Title ?? ''}</Link>
                        <div className='card-time mb-0 text-truncate text-muted'>
                            <Space size="middle" style={{ display: 'flex' }}>
                                <span><StarOutlined /> 156</span>
                                <span><LikeOutlined /> 123</span>
                                <span><MessageOutlined /> 321</span>
                            </Space>
                        </div>
                    </>
                } bordered={false}>
                    <p className='card-time mb-0 text-truncate text-muted'>Địa chỉ :</p>
                    <p className='card-time mb-0 text-truncate text-muted'>Liên hệ :</p>
                </Card>

            </div>
        </div >
    )
}

export { Item }
