import React from 'react';
import castPic from '../../../../../../assets/images/inner/default-cast.jpg';
import kateFleetwood from '../../../../../../assets/images/inner/kate-fleetwood.jpeg';
import marcusRutherford from '../../../../../../assets/images/inner/marcus-rutherford.jpeg';
import like from '../../../../../../assets/images/home/like.png';
import OwlCarousel from 'react-owl-carousel';

const Cast = ({ itemDetails = {} }) => {
	const { cast } = itemDetails

	const renderCasts = () => {
		return cast && cast.map((itm, key) => {
			return <div key={key}>
				<div className="">
					<img src={castPic} className="img-fluid" />
				</div>
				<div className="p-2 bg-white border text-center shadow">
					<h5 className="font-16 mb-1 text-ellipsis fw-bold">{itm}</h5>
					<h6 className="font-12 mb-2 text-ellipsis">{itm}</h6>
				</div>
			</div>
		})
	}
	return (
		<div>
			<div className="mb-5 cast-box">
				<div className="d-flex justify-content-between">
					<h5 className="fw-bold">Cast</h5>
					<h5><a href="#" className="text-purple text-deco fw-bold">Full Cast & Crew</a></h5>
				</div>

				<OwlCarousel items={6}
					className="owl-carousel"
					// loop
					smartSpeed={1000}
					responsiveclass={true}
					responsive={{
                        0: {
                            items: 1,
                        },
                        555: {
                            items: 2,
                        },
                        767: {
                            items: 4,
                        },
                        991: {
                            items: 5,
                        },
                        1199: {
                            items: 6,

                        }
                    }}
					nav
					margin={18}
				>

					{/* render casts */}
					{renderCasts()}
				</OwlCarousel>
			</div>
		</div>
	)
}

export default Cast
