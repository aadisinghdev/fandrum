import React from 'react';
import Kate from 'assets/images/inner/kate-fleetwood.jpeg'
import Cowboy from 'assets/images/inner/cowboy-bebop.jpeg';
import Elves from 'assets/images/inner/elves.jpg';
import Helbound from 'assets/images/inner/helbound.jpg';
import Marcus from 'assets/images/inner/marcus-rutherford.jpeg';
import Rosamund from 'assets/images/inner/rosamund-pike.jpg';
import Hawkeye from 'assets/images/inner/hawkeye.jpg';
import Love from 'assets/images/home/love-aj-kal.jpeg';
import Thegirl from 'assets/images/home/the-girl.jpeg';
import Deep from 'assets/images/home/deep.jpeg';
import Holidate from 'assets/images/home/holidate.jpeg';
import Weekaway from 'assets/images/home/week-away.jpeg';
import ReactPlayer from 'react-player'

import Home from 'assets/images/home/home_1.jpg';
import Speaker from 'assets/images/inner/Group 310.png';
import Thumbup from 'assets/images/inner/Paath 313.png';
import Comment from 'assets/images/inner/Path 314.png';
import Share from 'assets/images/inner/Layer_3.png';
import Add from 'assets/images/inner/Icon-add.svg';
import Ellips97 from 'assets/images/inner/Ellipse 97.png';
export const Posts = () => {

	return <>

		<div className="mb-5">
			<div>
				<h5 className="fw-bold">Post</h5>
			</div>
			<div className="mb-5">
				<div className="mb-5">
					<div className="rounded-30 overflow-hidden mb-10">
						<ReactPlayer width="100%" url='https://youtu.be/JfVOs4VSpmA' />
					</div>
					<div className="bg-white pl-0">
						<div className="d-flex">
							<div className="position-relative h-fit-content">
								<div className="wh-45 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
									<img src={Rosamund} className="img-fluid h-100 object-cover" />
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
										<img src={Add} />
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
						</div>

					</div>
				</div>

				<div className="bg-white pl-0">
					<div className="d-flex">
						<div className="position-relative h-fit-content">
							<div className="wh-45 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
								<img src={Rosamund} className="img-fluid h-100 object-cover" />
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
								<img src={Elves} className="img-fluid h-100 object-cover" />
							</div>
							<div className="wh-25 bg-dark rounded-pill border border-white overflow-hidden user-image">
								<img src={Helbound} className="img-fluid h-100 object-cover" />
							</div>
							<div className="wh-25 bg-dark rounded-pill border border-white overflow-hidden user-image">
								<img src={Marcus} className="img-fluid h-100 object-cover" />
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
								<div className="pl-2"> 531</div>
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
								<div className=" img-in wh-50 bg-dark flex-shrink-0 rounded-pill overflow-hidden ">
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
					</div>

				</div>
			</div>

			<div className="post-img rounded-30 overflow-hidden mb-10">
				<img src={Home} />
			</div>
			<div className="bg-white pl-0">
				<div className="d-flex">
					<div className="position-relative h-fit-content">
						<div className="wh-45 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
							<img src={Elves} className="img-fluid h-100 object-cover" />
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
							<img src={Helbound} className="img-fluid h-100 object-cover" />
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
							<div className=" img-in wh-50 bg-dark flex-shrink-0 rounded-pill overflow-hidden ">
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

			<div className="mb-5">
				<div className="mb-10">
					<div className="row">
						<div className="col-xxl-6 col-xl-7 col-lg-6 col-md-7">
							<div className=" bg-img-show position-relative">
								<a href="#">
									<img src={Thegirl} className="img-fluid w-100 h-100 object-cover" />
								</a>
								<a href="#" className="bg-danger text-white t-d-n img-show-content font-16">
									The Girl On The Train
								</a>
							</div>
						</div>
						<div className="col-xxl-6 col-xl-5 col-lg-6 col-md-5 d-md-flex d-none">
							<div className="row">
								<div className="col-xxl-6 col-xl-12 col-lg-6 col-md-12">
									<div className="sm-img-show position-relative w-100 mb-3">
										<a href="#">
											<img src={Weekaway} className="img-fluid w-100 h-100 object-cover" />
										</a>
										<a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
											A Week Away
										</a>
									</div>
								</div>
								<div className="col-xxl-6 col-xl-12 col-lg-6 col-md-12">
									<div className="sm-img-show position-relative w-100 mb-xxl-3">
										<a href="#">
											<img src={Holidate} className="img-fluid w-100 h-100 object-cover" />
										</a>
										<a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
											Holidate
										</a>
									</div>
								</div>
								<div className="col-xxl-6 col-xl-12 col-md-6 d-xxl-flex d-xl-none d-lg-flex d-none">
									<div className="bg-success sm-img-show position-relative w-100 mb-0">
										<a href="#">
											<img src={Deep} className="img-fluid w-100 h-100 object-cover" />
										</a>
										<a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
											Deep
										</a>
									</div>
								</div>
								<div className="col-xxl-6 col-xl-12 col-md-6 d-xxl-flex d-xl-none d-lg-flex d-none">
									<div className="bg-success sm-img-show position-relative w-100 mb-0">
										<a href="#">
											<img src={Love} className="img-fluid w-100 h-100 object-cover" />
										</a>
										<a href="#" className="bg-danger text-white t-d-n img-show-content font-12">
											Love Aaj Kal
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white pl-0">
					<div className="d-flex">
						<div className="position-relative h-fit-content">
							<div className="wh-45 bg-dark flex-shrink-0 rounded-pill overflow-hidden">
								<img src={Elves} className="img-fluid h-100 object-cover" />
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
								<img src={Helbound} className="img-fluid h-100 object-cover" />
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


		</div>

	</>;
};
export default Posts
