import axios from "axios";

const rapidApiHeader = {
    'x-rapidapi-host': process.env.REACT_APP_X_RAPID_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_X_RAPID_API_KEY
}

// "https://api.themoviedb.org/3/movie/{movie_id}/keywords?api_key=<<api_key>>"
export const getAxios = async ({ endPoint = "", params = {}, apiType = "rapidApi" }) => {
    const serverParams = getServerUrl(apiType)
    const options = {
        method: 'GET',
        url: `${serverParams.baseApiUrl}${endPoint}`,
        params: params,
        headers: serverParams.header
    };
    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        return error;
    }

}
const getServerUrl = (url) => {
    switch (url) {
        case 'rapidApi':
            return { baseApiUrl: process.env.REACT_APP_RAPID_API_SERVER_URL, header: rapidApiHeader }
        case 'TMDBApi':
            return { baseApiUrl: process.env.REACT_APP_TMDB_API_SERVER_URL, header: {} }
        case 'googleNews':
            return { baseApiUrl: process.env.REACT_APP_GOOGLE_NEWS_API_URL, header: {} }
        default:
            return { baseApiUrl: process.env.REACT_APP_RAPID_API_SERVER_URL, header: rapidApiHeader }
    }
}

