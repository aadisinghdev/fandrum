import React from 'react';
import Cowboy from 'assets/images/inner/cowboy-bebop.jpeg';
import Elves from 'assets/images/inner/elves.jpg';
import Helbound from 'assets/images/inner/helbound.jpg';
import Marcus from 'assets/images/inner/marcus-rutherford.jpeg';
import Rosamund from 'assets/images/inner/rosamund-pike.jpg';

import Speaker from 'assets/images/inner/Group 310.png';
import Thumbup from 'assets/images/inner/Paath 313.png';
import Comment from 'assets/images/inner/Path 314.png';
import Share from 'assets/images/inner/Layer_3.png';
import Ellips97 from 'assets/images/inner/Ellipse 97.png';
import OwlCarousel from 'react-owl-carousel';

const Explore = () => {

	const renderExplore = () => {
		return <>
			<div className="">
				<div className="">
					<img src={Elves} className="img-fluid" />
				</div>
				<div className="py-2 px-3 bg-white shadow">
					<h5 className="font-16 mb-1 text-ellipsis fw-bold">Palm Springs</h5>
					<h6 className="font-14 mb-1 text-ellipsis">2020</h6>
					<h6 className="font-14 mb-0 fw-bold text-danger text-ellipsis">40 Fandoms</h6>
				</div>
			</div>
			<div className="">
				<div className="">
					<img src={Helbound} className="img-fluid" />
				</div>
				<div className="py-2 px-3 bg-white shadow">
					<h5 className="font-16 mb-1 text-ellipsis fw-bold">Palm Springs</h5>
					<h6 className="font-14 mb-1 text-ellipsis">2020</h6>
					<h6 className="font-14 mb-0 fw-bold text-danger text-ellipsis">40 Fandoms</h6>
				</div>
			</div>
			<div className="">
				<div className="">
					<img src={Marcus} className="img-fluid" />
				</div>
				<div className="py-2 px-3 bg-white shadow">
					<h5 className="font-16 mb-1 text-ellipsis fw-bold">Palm Springs</h5>
					<h6 className="font-14 mb-1 text-ellipsis">2020</h6>
					<h6 className="font-14 mb-0 fw-bold text-danger text-ellipsis">40 Fandoms</h6>
				</div>
			</div>
			<div className="">
				<div className="">
					<img src={Rosamund} className="img-fluid" />
				</div>
				<div className="py-2 px-3 bg-white shadow">
					<h5 className="font-16 mb-1 text-ellipsis fw-bold">Palm Springs</h5>
					<h6 className="font-14 mb-1 text-ellipsis">2020</h6>
					<h6 className="font-14 mb-0 fw-bold text-danger text-ellipsis">40 Fandoms</h6>
				</div>
			</div>
			<div className="">
				<div className="">
					<img src={Cowboy} className="img-fluid" />
				</div>
				<div className="py-2 px-3 bg-white shadow">
					<h5 className="font-16 mb-1 text-ellipsis fw-bold">Palm Springs</h5>
					<h6 className="font-14 mb-1 text-ellipsis">2020</h6>
					<h6 className="font-14 mb-0 fw-bold text-danger text-ellipsis">40 Fandoms</h6>
				</div>
			</div>
			<div className="">
				<div className="">
					<img src={Helbound} className="img-fluid" />
				</div>
				<div className="py-2 px-3 bg-white shadow">
					<h5 className="font-16 mb-1 text-ellipsis fw-bold">Palm Springs</h5>
					<h6 className="font-14 mb-1 text-ellipsis">2020</h6>
					<h6 className="font-14 mb-0 fw-bold text-danger text-ellipsis">40 Fandoms</h6>
				</div>
			</div>
			<div className="">
				<div className="">
					<img src={Elves} className="img-fluid" />
				</div>
				<div className="py-2 px-3 bg-white shadow">
					<h5 className="font-16 mb-1 text-ellipsis fw-bold">Palm Springs</h5>
					<h6 className="font-14 mb-1 text-ellipsis">2020</h6>
					<h6 className="font-14 mb-0 fw-bold text-danger text-ellipsis">40 Fandoms</h6>
				</div>
			</div>
		</>

	}

	return <>
		<div className="mb-5 custom-tabs">
			<h5 className="fw-bold">Explore</h5>
			<ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
				<li className="nav-item">
					<button className="nav-link active" id="movies-tab" data-bs-toggle="tab" data-bs-target="#movies" type="button">Movies</button>
				</li>
				<li className="nav-item">
					<button className="nav-link" id="shows-tab" data-bs-toggle="tab" data-bs-target="#shows" type="button">Shows</button>
				</li>
				<li className="nav-item">
					<button className="nav-link" id="characters-tab" data-bs-toggle="tab" data-bs-target="#characters" type="button">Characters</button>
				</li>
				<li className="nav-item">
					<button className="nav-link" id="friends-tab" data-bs-toggle="tab" data-bs-target="#friends" type="button">Friends</button>
				</li>
				<li className="nav-item">
					<button className="nav-link" id="celebrities-tab" data-bs-toggle="tab" data-bs-target="#celebrities" type="button">Celebrities</button>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="movies">
					<div className="mb-4 shadow explore-box">
						<div className="">


							<OwlCarousel items={1}
								className="owl-carousel"
								// loop
								smartSpeed={1000}
								responsiveclass={true}
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
										items: 3,

									}
								}}

								nav
								margin={20}
								rewind={true}
							>
								{renderExplore()}
							</OwlCarousel>


						</div>
					</div>
					<div className="bg-white pl-0">
						<div className="d-flex">
							<div className="position-relative h-fit-content">
								<div className="wh-45 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
									<img src={Helbound} className="img-fluid h-100 object-cover" />
								</div>
							</div>
							<div className="pl-10 w-100 d-flex justify-content-between align-items-center">
								<div className="">
									<h5 className="text-danger mb-0 font-16">David</h5>
									<h6 className="font-10 mb-0 text-secondary">1 day ago</h6>
								</div>
								<div>
									<button type="button" className="btn btn-purple d-flex align-items-center">
										<span className="material-icons font-10 pr-2">add</span> Friends
									</button>
								</div>
							</div>
						</div>
						<div className="position-relative">
							<p className="text-secondary mb-0 font-16 text-ellipsis">
								<a href="#" className="text-deco text-purple">#wintor2021 #tredning</a>
								Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
							<div className="text-end">
								<a href="#" className="text-purple font-14 text-deco">Read more</a>
							</div>
						</div>
						<div className="mb-2">
							<div className="d-flex image-over-effect align-items-center">
								<div className="wh-25 bg-dark rounded-pill border border-white overflow-hidden user-image">
									<img src={Cowboy} className="img-fluid h-100 object-cover" />
								</div>
								<div className="wh-25 bg-dark rounded-pill border border-white overflow-hidden user-image">
									<img src={Elves} className="img-fluid h-100 object-cover" />
								</div>
								<div className="wh-25 bg-dark rounded-pill border border-white overflow-hidden user-image">
									<img src={Rosamund} className="img-fluid h-100 object-cover" />
								</div>
								<h5 className="font-14 mb-0 pl-10 text-purple">&amp; 7 more fandoms</h5>
							</div>
						</div>
						<div className="d-flex align-items-center justify-content-between">
							<div className="d-flex align-items-center">
								<div className="wh-25 mr-30 d-flex align-items-center justify-content-between">
									<a href="javascript:void(0)">
										<img src={Thumbup} />
									</a>
									<div> 531</div>
								</div>
								<div className="wh-25 mr-30 d-flex align-items-center justify-content-between">
									<a href="javascript:void(0)">
										<img src={Comment} />
									</a>
									<div> 9k</div>
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
							<div>
								<div className="wh-25">
									<a href="javascript:void(0)">
										<span className="material-icons text-purple">add_circle </span>
									</a>
								</div>
							</div>
						</div>

						<div className="d-flex justify-content-between mt-4 w-100">
							<div className="d-flex w-100">
								<div className="position-relative h-fit-content mr-10">
									<div className="img-in wh-50 bg-dark flex-shrink-0 rounded-pill overflow-hidden ">
										<img src={Ellips97} />
									</div>
								</div>
								<div className="d-flex align-items-center w-100 px-2 rounded-30px py-1 bg-light-purple">
									<input type="text" placeholder="Write a comment" className="w-100 font-16 border-0 outline-none bg-light-purple px-2" />
									<div className="d-flex align-items-center">
										<div className="p-0 d-flex">
											<span className="material-icons icons_side_nav text-light-blue font-20 mr-10">sentiment_satisfied</span>
										</div>
										<div className="p-0 d-flex">
											<span className="material-icons icons_side_nav text-light-blue font-20 mr-10">attachment</span>
										</div>
										<div className="p-0 d-flex">
											<span className="material-icons icons_side_nav text-light-blue font-20">send</span>
										</div>
									</div>
								</div>
							</div>
							<div className="d-flex">

							</div>
						</div>

					</div>
				</div>
				<div className="tab-pane fade" id="shows">.b.</div>
				<div className="tab-pane fade" id="characters">.c.</div>
				<div className="tab-pane fade" id="friends">.d.</div>
				<div className="tab-pane fade" id="celebrities">.e.</div>
			</div>
		</div>

	</>;
};

export default Explore
