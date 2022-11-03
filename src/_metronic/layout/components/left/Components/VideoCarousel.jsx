import { useState, useEffect, useRef } from 'react'
import { List, Skeleton, Divider, Button } from 'antd'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './VideoCarousel.scss'
import { toast } from 'react-toastify'
import { requestGET } from '../../../../../helpers/baseAPI'
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const VideoCarousel = () => {

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const loadMoreData = () => {
		if (loading) {
			return;
		}
		// const url = `${CONFIG.GETWAY_URL}/${CONFIG.GETWAY_PATH}/news`;
		// axios.get(url).then(response => setData(response.data.data));
		setLoading(false);
	};

	useEffect(() => {
		loadMoreData();
		return () => {}
	}, [])


	const handleClick = () => {

	}
	return (
		<>
			<div className='video-carousel'>
				<div className='row'>
					<div className="list-video-carousel">
						<div
							id="listNews"
							style={{
								height: 210,
								overflow: 'auto',
								padding: '0 16px',
							}}
						>
							<InfiniteScroll
								dataLength={data && data.length}
								next={loadMoreData}
								hasMore={data && data.length < 50}
								loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
								scrollableTarget="listNews"
							>
								<List
									dataSource={data}
									renderItem={(item, index) => (
										<List.Item key={"list" + item.ID} onClick={handleClick}>
											{item.Image && <img width={50} src={process.env.REACT_APP_RESOURCES_URL + item.Image.split(',')[0]} />}
											<div>
												{item.Title}
											</div>
										</List.Item>
									)}
								/>
							</InfiniteScroll>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export { VideoCarousel }
