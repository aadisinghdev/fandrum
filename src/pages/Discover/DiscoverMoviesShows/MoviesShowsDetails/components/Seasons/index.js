import React from 'react';
import SeasonPic from 'assets/images/inner/noimage.jpg';

const Seasons = () => {
	return <>

		<div className="mb-5">
			<div className="d-flex cast-box align-items-center bg-white border shadow">
				<div className="w-150">
					<img src={SeasonPic} className="img-fluid object-cover" />
				</div>
				<div className="p-3 w-100">
					<h5 className="font-20 mb-1 text-ellipsis fw-bold">Season 30</h5>
					<h6 className="font-14 mb-3 fw-bold text-ellipsis">2021 | 100 Episode</h6>
					<p className="text-secondary font-14 text-three-ellipsis">Season 39 of Wheel of Fortune premiered on 13 September 2021.</p>
				</div>
			</div>
			<h5 className="fw-bold mt-2"><a href="javascript:void(0)" className="text-dark text-deco">View all session</a></h5>
		</div>

	</>;
};

export default Seasons