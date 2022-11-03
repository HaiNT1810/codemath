import { useState, useEffect, useRef } from 'react'
import { List, Skeleton, Divider, Button } from 'antd'
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { requestGET } from '../../../../helpers/baseAPI'
import { CONFIG } from '../../../../helpers/config'
import './IndustrialMap.scss'

const IndustrialMap = () => {

    return (
        <>
            <div className='section-industrial-map'>
                
            </div>
        </>
    )
}
export { IndustrialMap }
