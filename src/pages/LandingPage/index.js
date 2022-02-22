import React, { useEffect, useState } from 'react';
import { getAxios } from '../../api/serverRequest';
import EntertainmentNews from './component/EntertainmentNews';
import Explore from './component/Explore';
import OfficialVideos from './component/OfficialVideos';
import PostComment from './component/PostComment';
import Posts from './component/Posts';
import Quiz from './component/Quiz';
import ViewUsers from './component/ViewUsers';

export const LandingPage = () => {

	const [googleNews, setGoogleNews] = useState([])

	const params = {
		apiKey: `${process.env.REACT_APP_GOOGLE_NEWS_API_KEY}`,
		country: "in",
		category: "entertainment"
	}

	const fetchGoogleNews = async () => {
		const response = await getAxios({ endPoint: "/top-headlines", params: params, apiType: "googleNews" })
		if (response && response.data && response.data.articles) {
			const { articles } = response.data
			setGoogleNews(articles)
		}
	}

	useEffect(() => {
		fetchGoogleNews()
	}, [])

	return <>

		<ViewUsers />

		<PostComment />

		<OfficialVideos />

		<EntertainmentNews googleNews={googleNews} />

		<Posts />

		<Explore />

		<Quiz />

	</>;
};

export default LandingPage


