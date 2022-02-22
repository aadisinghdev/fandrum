import React, { useEffect, useState } from 'react';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import logo from 'assets/images/logoimg/fandrum.svg';
import DetailsBanner from './components/DetailsBanner';
import Cast from './components/Cast';
import RatingAndReview from './components/RatingsAndReview';
import Recommendation from './components/Recommendation';
import MoviesPlaylist from './components/MoviesPlaylist';
import { getAxios } from 'api/serverRequest';
import Seasons from './components/Seasons';

const MoviesShowsDetails = () => {
	const [reviews, setReviews] = useState([])
	const [recommendations, setRecommendations] = useState([])
	const [reviewsCurrentPage, setReviewsCurrentPage] = useState(1)
	const [recommendationCurrentPage, setRecommendationCurrentPage] = useState(1)

	const location = useLocation()
	const history = useHistory()

	const { itemDetails, backUrl } = location


	// get reviews and rating via movie id from tmdb api call
	const fetchReviewsAndRating = async () => {
		const { tmdbID } = itemDetails
		let tmdbApiUrl='';
		if(location.pathname === '/shows/detail'){
			 tmdbApiUrl = `/3/tv/${tmdbID}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${reviewsCurrentPage}`
		}
		else{
			 tmdbApiUrl = `/3/movie/${tmdbID}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${reviewsCurrentPage}`
		}

		const response = await getAxios({ endPoint: tmdbApiUrl, params: '', apiType: "TMDBApi" })
		if (response && response.data && response.data.results) {
			const { results } = response.data
			setReviews(results)
		}
	}

	// get fetchRecommendations via movie id from tmdb api call
	const fetchRecommendations = async () => {
		const { tmdbID } = itemDetails
		let tmdbApiUrl=''
		if(location.pathname === '/shows/detail'){
			tmdbApiUrl = `/3/tv/${tmdbID}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${recommendationCurrentPage}`
		}
		else{
			tmdbApiUrl = `/3/movie/${tmdbID}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${recommendationCurrentPage}`

		}
		const response = await getAxios({ endPoint: tmdbApiUrl, params: '', apiType: "TMDBApi" })
		if (response && response.data && response.data.results) {
			const { results } = response.data
			setRecommendations(results)
		}
	}
	useEffect(() => {
		if (location && !itemDetails) {
			history.push("/movie")
		} else {
			// get reviews and Ratings
			fetchReviewsAndRating()
			fetchRecommendations()
		}
	}, [])
	return (

		<div className="main-container w-100">
			<div className="shadow-background"></div>
			
			<div className="back-button px-xl-5 px-lg-0 px-3 py-lg-5 py-4">
			
				<h4 className="">
					<NavLink to={backUrl ? backUrl : '/movie'}
						className="font-18 d-flex align-items-center fw-bold text-purple text-deco" style={{textDecoration:'none'}} 
					>
                        <span className="material-icons icons_side_nav mr-5 text-secondary font-20">navigate_before</span>
						 Back</NavLink>
				</h4>
			</div>
			<div className="dashboard-section inner-dashboard" >

				<div className="logo-responsive">

					<div className="brand-logo">
						<a href="#">
							<img src={logo} className="img-fluid" />
						</a>
					</div>

				</div>


				<DetailsBanner itemDetails={itemDetails} />
				<Cast itemDetails={itemDetails} />

				<Seasons/>

				<MoviesPlaylist itemDetails={itemDetails} />

				<RatingAndReview
					reviews={reviews}
					itemDetails={itemDetails}
				/>
				<Recommendation
					recommendations={recommendations}
					itemDetails={itemDetails}
				/>

			</div>


		</div>
	)
}

export default MoviesShowsDetails
