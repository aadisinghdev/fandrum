import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import OfficialVideos from './components/OfficialVideos';
import BannerSlider from './components/BannerSlider'
import { getAxios } from 'api/serverRequest';
import { showsGenres } from 'utils/showsGenres';
import Loader from 'utils/Loader';

const DiscoverMoviesShows = () => {
	// iinit states here
	const [selectedSlideIndex, setSelectedSlideIndex] = useState(0)
	const [showsData, setShowsData] = useState([])
	const [loading, setLoading] = useState(true)
	const [isPlaying, setIsPlaying] = useState(false)

	const location = useLocation()
	// Method to call shows dtails get api
	const apiType = location.pathname == "/shows" ? "series" : "movie"

	const getShowsDetails = async () => {
		const params = {
			service: 'netflix',
			country: 'in',
			change_type: 'new',
			type: apiType,
			output_language: 'en'
		}
		// Check api response and update state accordingly
		const response = await getAxios({ endPoint: '/changes', params: params, apiType: "rapidApi", })
		if (response && response.data && response.data.results) {
			const { results } = response.data
			// make loader false on success response get from api
			setLoading(false)

			console.log("Response : ", results);

			await Promise.all(results.map(async (item, ind) => {
				// calling TMDB api to get youtube playlist
				const tmdbApiUrl = `/3/movie/${item.tmdbID}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
				const playlistRes = await getAxios({ endPoint: tmdbApiUrl, params: '', apiType: "TMDBApi" })
				if (playlistRes && playlistRes.data && playlistRes.data.results) {
					results[ind]['fndm_youtube_playlist'] = results[ind] && results[ind]['fndm_youtube_playlist'] ? results[ind]['fndm_youtube_playlist'] : []
					results[ind]['fndm_youtube_playlist'].push(...playlistRes.data.results)
				}

				// callig TMDB api to get keywords
				const tmdbUrl = `/3/movie/${item.tmdbID}/keywords?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
				const tmdbResponse = await getAxios({ endPoint: tmdbUrl, params: '', apiType: "TMDBApi" })
				if (tmdbResponse && tmdbResponse.data && tmdbResponse.data.keywords) {
					results[ind]['fndm_keywords'] = results[ind] && results[ind]['fndm_keywords'] ? results[ind]['fndm_keywords'] : []
					results[ind]['fndm_keywords'].push(...tmdbResponse.data.keywords)
				}

				// Getting genres from local object via genres keys from movies api
				return item.genres.map(async (gen) => {
					let genresArrKey = await Object.keys(showsGenres).find((itm) => itm == gen);
					// set genresValues key on  result api after match key from showGenres object 
					results[ind]['fndm_genresValues'] = results[ind] && results[ind]['fndm_genresValues'] ? results[ind]['fndm_genresValues'] : []
					results[ind]['fndm_genresValues'].push(showsGenres[genresArrKey])
				})

			}))

			setShowsData(results)
		} else {
			console.error('Error : ', response);
			// make loader false on failure response get from api
			setLoading(false)
			setShowsData([])
		}
	}

	// (componentDidMount) render on component load...
	useEffect(() => {
		getShowsDetails();
	}, [])

	// handle sidebar button click on mobile view to open sibar


	return (
		<>
			{loading ? <Loader /> : null}
			{/* render show cards */}
			<BannerSlider setIsPlaying={setIsPlaying} isPlaying={isPlaying} showsData={showsData}
				selectedSlideIndex={selectedSlideIndex}
				setSelectedSlideIndex={setSelectedSlideIndex}
			/>
			{/* show official videos */}
			<OfficialVideos setIsPlaying={setIsPlaying} isPlaying={isPlaying} showsData={showsData} selectedSlideIndex={selectedSlideIndex} />

		</>
	)
}

export default DiscoverMoviesShows
