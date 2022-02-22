import React from 'react'
import { Button } from 'react-bootstrap';
import home from '../../../../../../assets/images/home/home_1.jpg';
import prime from '../../../../../../assets/images/home/prime.png';
import netflix from '../../../../../../assets/images/home/netflix.png';
import disney from '../../../../../../assets/images/home/disney.png';
import hotstar from '../../../../../../assets/images/home/hotstar.png';
import ShowsActionBtn from '../../../../../../components/common/ActionButton/ShowsActionBtn';

const DetailsBanner = ({ itemDetails = {} }) => {

	const { title,
		backdropURLs,
		fndm_genresValues,
		fndm_keywords,
		overview,
		streamingInfo,
		imdbRating,
		tmdbRating,
		posterURLs

	} = itemDetails

	const imageObj = {
		netflix: netflix,
		prime: prime,
		disney: disney,
		hotstar: hotstar
	}

	return (
		<div>
			<div className="position-relative rounded-30 overflow-hidden mb-5">
				<div className="rounded-30 overflow-hidden">
					<div className="gradient-overlay p-md-5 active" style={{ "backgroundSize": "cover" , "backgroundImage": `url(${backdropURLs ? backdropURLs[780] : home})` }}>
						<div className="row">
							<div className="col-lg-5 col-md-4 d-flex justify-content-end">
								<div className="h-100 float-right text-right p-lg-4 p-md-0 p-4">
									<img src={posterURLs && posterURLs.original ? posterURLs.original : null} className="text-right rounded-20 overflow-hidden float-right text-right img-fluid justify-content-end position-relative w-100 h-100 object-cover" />
								</div>
							</div>
							<div className="col-lg-7 col-md-8">
								<div className="dashboard-post-box border-0 p-0">
									<div className="position-relative plb-md-15">
										<div className="h-120 pr-35">
											<h2 className="text-white mb-1 text-ellipsis">{title}</h2>
											<h5 className="text-blue text-uppercase text-ellipsis">{fndm_genresValues ? fndm_genresValues.slice(0, 5).join(', ') : null}</h5>
											<h4 className="text-white fw-bolder mb-20 text-ellipsis">{((imdbRating * 1 + tmdbRating * 1) / 20)}/10</h4>
										</div>
										<div className="h-120 pr-35">
											<p className="text-white mb-4 text-three-ellipsis">
												{overview ? `${overview.substring(0, 140)}...` : ''}
											</p>
										</div>
										<div className="pb-3 d-flex custom-scroll-buttons">
											{fndm_keywords && fndm_keywords.map((keyword, i) => {
												return i < 3 ? <Button key={i} type="button" className="btn btn-danger white-space-nowrap mr-10"
												>
													{keyword.name || "..."}
												</Button> : null

											})}

										</div>

										<div className="d-flex align-items-center">

											{streamingInfo && Object.keys(streamingInfo).map((streamingKey, ind) => {
												const streamingValues = streamingInfo[streamingKey] && streamingInfo[streamingKey].in

												// new design

												// return <div key={ind}
												// 	className="bg-black-75 flex-shrink-0 rounded-pill wh-55 mr-10 d-flex align-items-center justify-content-center pointer">
												// 	<a href={streamingValues ? streamingValues.link : ""}
												// 		className="tooltip-hover p-1">
												// 		<img src={imageObj[streamingKey]} className="img-fluid" />
												// 		<div className="tooltip-inner">{`Watch on ${streamingKey}`}</div>
												// 	</a>
												// </div>

												return < ShowsActionBtn
													key={ind}
													url={streamingValues ? streamingValues.link : ""}
													image={imageObj[streamingKey]}
													imgAlt={streamingKey}
													title={`Watch on ${streamingKey}`}
												/>
											})}

											{/* <div className="bg-black-75 flex-shrink-0 rounded-pill wh-55 mr-10 d-flex align-items-center justify-content-center pointer">
												<a href="#" className="tooltip-hover p-1">
													<img src={prime} className="img-fluid" />
													<div className="tooltip-inner">Watch on prime</div>
												</a>
											</div> */}

											{/* <div className="bg-black-75 flex-shrink-0 wh-55 rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center pointer">
												<div className="p-0 tooltip-hover d-flex">
													<span className="material-icons icons_side_nav text-secondary font-30 text-white">play_arrow</span>
													<div className="tooltip-inner">Play</div>
												</div>
											</div>
											<div className="bg-black-75 flex-shrink-0 wh-55 rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center pointer">
												<div className="p-0 tooltip-hover d-flex">
													<span className="material-icons icons_side_nav text-secondary font-28 text-danger">done</span>
													<div className="tooltip-inner">Check</div>
												</div>
											</div>
											<div className="bg-black-75 flex-shrink-0 wh-55 rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center pointer">
												<div className="p-0 tooltip-hover d-flex">
													<span className="material-icons icons_side_nav text-white font-28 text-white">done</span>
													<div className="tooltip-inner">Close</div>
												</div>
											</div>
											<div className="bg-black-75 flex-shrink-0 wh-55 rounded-pill wh-45 mr-10 d-flex align-items-center justify-content-center pointer">
												<div className="p-0 tooltip-hover d-flex">
													<span className="material-icons icons_side_nav text-white font-28 text-white">done</span>
													<div className="tooltip-inner">Close</div>
												</div>
											</div> */}
											{/* <h4 className="font-18 text-danger pointer user-select-none pointer">20 Fendums</h4> */}
										</div>

										<div className="pt-3">
											<h5 className="text-uppercase text-blue text-ellipsis">Rate</h5>
										</div>

										<div className="d-flex">
											<div className="mr-5">
												<a href="#">
													<span className="material-icons icons_side_nav text-secondary font-36 text-danger">star_rate</span>
												</a>
											</div>
											<div className="mr-5">
												<a href="#">
													<span className="material-icons icons_side_nav text-secondary font-36 text-danger">star_rate</span>
												</a>
											</div>
											<div className="mr-5">
												<a href="#">
													<span className="material-icons icons_side_nav text-secondary font-36 text-danger">star_rate</span>
												</a>
											</div>
											<div className="mr-5">
												<a href="#">
													<span className="material-icons icons_side_nav text-secondary font-36 text-danger">star_rate</span>
												</a>
											</div>
											<div className="mr-5">
												<a href="#">
													<span className="material-icons icons_side_nav text-secondary font-36 text-danger">star_rate</span>
												</a>
											</div>
										</div>

									</div>
									<div className="bg-success p-2 free-label text-white px-3 py-1 fw-bolder">Subscription</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailsBanner
