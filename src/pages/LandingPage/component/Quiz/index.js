import React from 'react';
import Kate from 'assets/images/inner/kate-fleetwood.jpeg'
import Cowboy from 'assets/images/inner/cowboy-bebop.jpeg';
import Elves from 'assets/images/inner/elves.jpg';
import Helbound from 'assets/images/inner/helbound.jpg';
import Marcus from 'assets/images/inner/marcus-rutherford.jpeg';
import Rosamund from 'assets/images/inner/rosamund-pike.jpg';
import Hawkeye from 'assets/images/inner/hawkeye.jpg';

export const Quiz = () => {

	return <>

		<div className="mb-5">
			<div>
				<h5 className="fw-bold">Quiz</h5>
			</div>
			<div className="mb-5">
				<div className="rounded-30 d-flex three-image-post overflow-hidden mb-10">
					<div>
						<img src={Cowboy} className="img-fluid object-cover" />
					</div>
					<div className="px-2">
						<img src={Helbound} className="img-fluid object-cover" />
					</div>
					<div>
						<img src={Hawkeye} className="img-fluid object-cover" />
					</div>
				</div>
				<div className="bg-white pl-0">
					<h5 className="font-16 mb-20 pt-2">Question: <span className="text-danger">Name the other female actress from the movie Padmaavat?</span></h5>
					<div className="row">
						<div className="col-md-6 text-center mb-20">
							<button type="button" className="btn border border-purple rounded-30px w-lg-50-100 py-3 px-4 text-purple">Priyanka Chopra</button>
						</div>
						<div className="col-md-6 text-center mb-20">
							<button type="button" className="btn border border-purple rounded-30px w-lg-50-100 py-3 px-4 text-purple">Anushka Sharma</button>
						</div>
						<div className="col-md-6 text-center mb-20">
							<button type="button" className="btn btn-danger text-white rounded-30px w-lg-50-100 py-3 px-4 text-purple">Aditi Rao Hydari</button>
						</div>
						<div className="col-md-6 text-center mb-20">
							<button type="button" className="btn border border-purple rounded-30px w-lg-50-100 py-3 px-4 text-purple">Alia Bhatt</button>
						</div>
					</div>
				</div>
			</div>

		</div>

	</>;
};
export default Quiz
