import React, { useEffect, useState } from 'react';
import Helbound from 'assets/images/inner/helbound.jpg';
import Marcus from 'assets/images/inner/marcus-rutherford.jpeg';
import Rosamund from 'assets/images/inner/rosamund-pike.jpg';

import Mask from 'assets/images/inner/Mask Group 1.png';
import Ranveer from 'assets/images/inner/Ranveer-and-Deepika.png';
import Speaker from 'assets/images/inner/Group 310.png';
import Thumb from 'assets/images/inner/Path 313.png';
import Comment from 'assets/images/inner/Path 314.png';
import Share from 'assets/images/inner/Layer_3.png';
import OwlCarousel from 'react-owl-carousel';
import moment from 'moment';
import ChangeDateFormat from 'utils/ContentModified';

const EntertainmentNews = ({ googleNews = [] }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		setData(googleNews)
	}, [googleNews])

	const contentExpansion = (length, content, index) => {
		if (document.getElementById(index).innerText === 'Read More') {
			document.getElementById(index).innerText = 'Less'
			document.getElementById(`${index}-content`).innerHTML = content ? content.substring(0, length) : null
		}
		else {
			document.getElementById(index).innerText = 'Read More'
			document.getElementById(`${index}-content`).innerHTML = content ? content.substring(0, 100) : null
		}

	}

	const renderEntertainmentNews = () => {
		return googleNews && googleNews.map((item, index) => {
			return <>
				<div key={index} className="d-flex rounded-30">
					<div className="w-md-50-100">
						<div className="h-100">
							<img src={item.urlToImage} className="img-fluid h-100 object-cover" />
						</div>
					</div>
					<div className="w-md-50-100">
						<div className="p-3 bg-white border">
							<div className="d-flex align-items-center justify-content-between mb-2">
								<div className="d-flex align-items-center">
									{/* <div className="wh-55 bg-dark rounded-pill overflow-hidden user-image">
										<img src={Mask} className="img-fluid h-100 object-cover" />
									</div> */}
									<div>
										<h5 className="font-18 text-danger mb-0 pl-10">{item.author}</h5>
										<h6 className="font-10 text-secondary mb-0 pl-10">{ChangeDateFormat(item.publishedAt)}</h6>
									</div>
								</div>
								{/* <div><button type="button" className="btn btn-purple">Follow</button></div>						 */}
							</div>
							<h5 className="font-27 text-333 mb-1 text-ellipsis fw-bold">{item.title}</h5>
							<h6 className="font-16 text-light-grey mb-1 " id={index + "-content"}>{item.description ? item.description.substring(0, 100) : null}</h6>
							<div className="text-end">
								<a style={{ textDecoration: 'none' }} id={index} onClick={() => { contentExpansion(item.description.length, item.description, index) }} className="text-purple font-14 text-deco">Read More</a>
							</div>

							<div className="mb-2">
								<div className="d-flex image-over-effect align-items-center">
									<div className="wh-25 bg-dark rounded-pill border border-white overflow-hidden user-image">
										<img src={Helbound} className="img-fluid h-100 object-cover" />
									</div>
									<div className="wh-25 bg-dark rounded-pill border border-white overflow-hidden user-image">
										<img src={Marcus} className="img-fluid h-100 object-cover" />
									</div>
									<div className="wh-25 bg-dark rounded-pill border border-white overflow-hidden user-image">
										<img src={Rosamund} className="img-fluid h-100 object-cover" />
									</div>
									<h5 className="font-14 mb-0 pl-10 text-purple">& 7 more fandrums</h5>
								</div>
							</div>
							<div className="d-flex align-items-center">
								<div className="mr-30 d-flex align-items-center justify-content-between">
									<a href="javascript:void(0)">
										<img src={Thumb} />
									</a>
									<div>531</div>
								</div>
								<div className=" mr-30 d-flex align-items-center justify-content-between">
									<a href="javascript:void(0)">
										<img src={Comment} />
									</a>
									<div>9k</div>
								</div>
								<div className="wh-25 mr-30 d-flex align-items-center justify-content-between">
									<a href="javascript:void(0)">
										<img src={Share} />
									</a>
								</div>
								<div className="wh-25 mr-30 d-flex align-items-center justify-content-between">
									<a href="javascript:void(0)">
										<img src={Speaker} />
									</a>
								</div>
							</div>

						</div>
					</div>
				</div>
			</>
		})

	}

	return <>

		<div className="mb-4">
			<h5 className="fw-bold">Entertainment News</h5>
			<div className="">
				<OwlCarousel items={1}
					classNameName="owl-carousel"
					// loop
					smartSpeed={1000}
					responsiveclassName={true}
					responsive={{
						0: {
							items: 1,
						},
						400: {
							items: 1,
						},
						600: {
							items: 1,
						},
						700: {
							items: 1,
						},
						1000: {
							items: 1,

						}
					}}

					nav={true}
					margin={20}
					rewind={true}
					autoplay={true}
					autoplayTimeout={20000}
				>
					{renderEntertainmentNews()}
				</OwlCarousel>
			</div>
		</div>

	</>;
};

export default EntertainmentNews
