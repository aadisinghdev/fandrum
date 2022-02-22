import React, { useEffect, useState } from 'react';
import home from '../../../../../../assets/images/home/home_1.jpg';
import like from '../../../../../../assets/images/home/like.png';
import comment from '../../../../../../assets/images/home/comment.png';
import share from '../../../../../../assets/images/home/share.png';
import promote from '../../../../../../assets/images/home/promote.png';
import moment from 'moment';
import ChangeDateFormat from '../../../../../../utils/ContentModified';

const RatingAndReview = ({ reviews = [] }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		setData(reviews)
	}, [reviews])

	const changeDateFormat = (date) => {
		const dateTimeAgo = moment(date).fromNow();
		return dateTimeAgo
	}
	
	const contentExpansion = (length,content,index) => {
		if(document.getElementById(index).innerText === 'Read More'){
			document.getElementById(index).innerText='Less'
			document.getElementById(`${index}-content`).innerHTML=content ? content.substring(0, length) : null
		}
		else{
			document.getElementById(index).innerText='Read More'
			document.getElementById(`${index}-content`).innerHTML=content ? content.substring(0, 150) : null
		}

	}


	const renderReviewsAndRatings = () => {
		return reviews && reviews.map((item, ind) => {
			return <div key={'ind'} className="">
				<div className="bg-white chat-user-listing pl-0">
					<div className="d-flex">
						<div className="position-relative h-fit-content">
							<div className="wh-45 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
								<img src={item.author_details && item.author_details.avatar_path ? `https://image.tmdb.org/t/p/w300${item.author_details.avatar_path}` : home} className="img-fluid h-100 object-cover" />
							</div>
							<div className="online-tic"></div>
						</div>
						<div className="pl-10 w-100">
							<div className="d-flex align-items-center justify-content-between">
								<h5 className="text-danger mb-0 font-16">{item.author_details && item.author_details.name ? item.author_details.name : ""}</h5>
								<span className="text-secondary font-12">{ChangeDateFormat(item.created_at)}</span>
							</div>
							<div className="position-relative">
								<p className="text-secondary mb-0 font-14 pb-2" id={ind+"-content"} >{item.content ? item.content.substring(0, 150) : null}</p>
								<a  style={{textDecoration:'none'}} id={ind} onClick={() => {contentExpansion(item.content.length, item.content,ind)}} className="text-purple font-14 text-deco ">Read More</a>
								
							</div>
							<div className="d-flex align-items-center justify-content-between w-50">
								<div className="d-flex align-items-center">
									<div className="wh-25 mr-20 d-flex align-items-center justify-content-between">
										<a href="javascript:void(0)">
											<img src={like} className="img-fluid" width="30" height="30" />
										</a>
									</div>
									<div className="wh-25 mr-20 d-flex align-items-center justify-content-between">
										<a href="javascript:void(0)">
											<img src={comment} className="img-fluid" width="45" height="45" />
										</a>
									</div>
									<div className="wh-25 mr-20 d-flex align-items-center justify-content-between">
										<a href="javascript:void(0)">
											<img src={share} className="img-fluid" width="45" height="45" />
										</a>
									</div>
									<div className="wh-25 mr-20 d-flex align-items-center justify-content-between">
										<a href="javascript:void(0)">
											<img src={promote} className="img-fluid" width="45" height="45" />
										</a>
									</div>
								</div>
							</div>


							{/* sub comment on reviews  note: no getting res from api so commnted it*/}

							{/* <div className="d-flex mt-4">
								<div className="position-relative h-fit-content">
									<div className="wh-35 bg-dark flex-shrink-0 rounded-pill overflow-hidden ">
										<img src={home} className="img-fluid h-100 object-cover" />
									</div>
								</div>
								<div className="pl-10 w-100">
									<div className="d-flex align-items-center justify-content-between">
										<h5 className="text-danger mb-0 font-16">Shreya</h5>
										<span className="text-secondary font-12">1 min ago</span>
									</div>
									<p className="text-secondary mb-0 font-14 pb-2">Agree</p>
									<div className="d-flex align-items-center justify-content-between w-50">
										<div className="d-flex align-items-center">
											<div className="wh-25 mr-20 d-flex align-items-center justify-content-between">
												<a href="javascript:void(0)">
													<img src={like} className="img-fluid" width="30" height="30" />
												</a>
											</div>
											<div className="wh-25 mr-20 d-flex align-items-center justify-content-between">
												<a href="javascript:void(0)">
													<img src={comment} className="img-fluid" width="45" height="45" />
												</a>
											</div>
											<div className="wh-25 mr-20 d-flex align-items-center justify-content-between">
												<a href="javascript:void(0)">
													<img src={share} className="img-fluid" width="45" height="45" />
												</a>
											</div>
											<div className="wh-25 mr-20 d-flex align-items-center justify-content-between">
												<a href="javascript:void(0)">
													<img src={promote} className="img-fluid" width="45" height="45" />
												</a>
											</div>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		})
	}
	return (
		<div>
			<div>
				<h5 className="fw-bold">Reviews & Ratings</h5>
			</div>
			{renderReviewsAndRatings()}


			{reviews && reviews.length != 0 ? null
				: null}


			<div className="mb-5">

				<div className="d-flex justify-content-between mt-4 w-100">
					<div className="d-flex w-100">
						<div className="position-relative h-fit-content">
							<div className="wh-35 bg-dark flex-shrink-0 rounded-pill overflow-hidden ">
								<img src={home} className="img-fluid h-100 object-cover" />
							</div>
						</div>
						<div className="d-flex align-items-center pl-10 w-100">
							<input type="text" placeholder="Write a comment" className="w-100 border-0 outline-none" />
						</div>
					</div>
					<div className="d-flex">

						<div className="d-flex align-items-center">
							<div className="p-0 d-flex">
								<span className="material-icons icons_side_nav text-secondary font-30">play_arrow</span>
							</div>
							<div className="p-0 d-flex">
								<span className="material-icons icons_side_nav text-secondary font-30">play_arrow</span>
							</div>
							<div className="p-0 d-flex">
								<span className="material-icons icons_side_nav text-secondary font-30">play_arrow</span>
							</div>
						</div>
					</div>
				</div>


				<div className="text-center mt-3">
					<h4 className="text-purple font-18 fw-bold">Read more</h4>
				</div>
			</div>

		</div>
	)
}

export default RatingAndReview
