import React, { useState, useEffect } from 'react';
import hawkeye from '../../../../../../assets/images/inner/hawkeye.jpg';
import helbound from '../../../../../../assets/images/inner/helbound.jpg';
import elves from '../../../../../../assets/images/inner/elves.jpg';
import cowboyBebop from '../../../../../../assets/images/inner/cowboy-bebop.jpeg';
import OwlCarousel from 'react-owl-carousel';
const Recommendation = ({ recommendations }) => {
	const [data, setData] = useState([])

	useEffect(() => {
		setData(recommendations)
	}, [recommendations])

	const renderRecommendation = () => {
		return recommendations && recommendations.map((item, ind) => {
			return <div key={ind}>
				<div className="rounded-30 overflow-hidden">
					<img src={`https://image.tmdb.org/t/p/w780${item.backdrop_path}`} className="img-fluid" />
				</div>
				<div className="p-2 bg-white text-center ">
					<h5 className="font-18 text-purple text-ellipsis fw-bold">{item.title}</h5>
				</div>
			</div>
		})
	}
	return (
		<div>
			{
				recommendations && recommendations.length ? <div className="mb-5 recommendations-box">
				<div>
					{recommendations && recommendations.length != 0 && <h5 className="fw-bold">Recommendations</h5>}
				</div>
				<OwlCarousel items={4}
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
					{renderRecommendation()}
					{/* <div>
						<div className="rounded-30 overflow-hidden">
							<img src={hawkeye} className="img-fluid" />
						</div>
						<div className="p-2 bg-white text-center">
							<h5 className="font-18 text-purple text-ellipsis fw-bold">Hawkeys</h5>
						</div>
					</div>
					<div>
						<div className="rounded-30 overflow-hidden">
							<img src={helbound} className="img-fluid" />
						</div>
						<div className="p-2 bg-white text-center">
							<h5 className="font-18 text-purple text-ellipsis fw-bold">Hellbound</h5>
						</div>
					</div>
					<div>
						<div className="rounded-30 overflow-hidden">
							<img src={elves} className="img-fluid" />
						</div>
						<div className="p-2 bg-white text-center">
							<h5 className="font-18 text-purple text-ellipsis fw-bold">Elves</h5>
						</div>
					</div>
					<div>
						<div className="rounded-30 overflow-hidden">
							<img src={cowboyBebop} className="img-fluid" />
						</div>
						<div className="p-2 bg-white text-center">
							<h5 className="font-18 text-purple text-ellipsis fw-bold">Cowboy Bebop</h5>
						</div>
					</div> */}

				</OwlCarousel>

			</div>
			:null}
			
		</div>
	)
}

export default Recommendation
