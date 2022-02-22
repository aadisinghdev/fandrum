import React from 'react';
import Ellipse97 from 'assets/images/inner/Ellipse 97.png';
import Text from 'assets/images/inner/Group 290.png';
import Camera from 'assets/images/inner/Group 291.png';
import Reels from 'assets/images/inner/Group 518.png';
import Link from 'assets/images/inner/Group 517.png';
import Logo from 'assets/images/inner/Group 297.png';
import Emoji from 'assets/images/inner/Group 445.png';
import Send from 'assets/images/inner/Icon ionic-ios-send.png';

export const PostComment = () => {
	return <>

		<div className="mb-4">
			<div className="d-flex justify-content-between mt-4 w-100">
				<div className="row w-100">
					<div className="col-md-6">
						<div className="d-flex">
							<div className="position-relative h-fit-content mr-10">
								<div className="wh-65 bg-dark flex-shrink-0 rounded-pill overflow-hidden ">
									<img src={Ellipse97} className="img-fluid h-100 object-cover" />
								</div>
							</div>
							<div className="d-flex align-items-center w-100 px-2 rounded-30px py-1 bg-light-purple">
								<input type="text" placeholder="Write something to post" className="w-100 font-16 border-0 outline-none bg-light-purple px-2" />
								<div className="d-flex align-items-center">
									{/* <div className="p-0 d-flex">							
											<span className="material-icons icons_side_nav text-light-blue font-20 mr-10">sentiment_satisfied</span>																
										</div>
										<div className="p-0 d-flex">							
											<span className="material-icons icons_side_nav text-light-blue font-20 mr-10">attachment</span>																
										</div> */}
									<div className="p-0 d-flex">
										<img src={Send} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="d-flex align-items-center justify-content-between px-2 py-3">
							<div className="p-0 d-flex">
								<img src={Text} />
							</div>
							<div className="p-0 d-flex">
								<img src={Camera} />
							</div>
							<div className="p-0 d-flex">
								<img src={Reels} />
							</div>
							<div className="p-0 d-flex">
								<img src={Link} />
							</div>
							<div className="p-0 d-flex">
								<img src={Logo} />
							</div>
							<div className="p-0 d-flex">
								<img src={Emoji} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</>;
};

export default PostComment
