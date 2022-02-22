import DiscoverMoviesShows from "pages/Discover/DiscoverMoviesShows";
import MoviesShowsDetails from "pages/Discover/DiscoverMoviesShows/MoviesShowsDetails";
import Home from "pages/Home";
import LandingPage from "pages/LandingPage";

export const ALL_ROUTES = [
    {
        exact: true,
        path: '/',
        component: Home,
    },
    {
        exact: true,
        path: '/shows',
        component: DiscoverMoviesShows,
    },
    {
        exact: true,
        path: '/movie',
        component: DiscoverMoviesShows,
    },
    {
        exact: false,
        path: '/movie/detail',
        component: MoviesShowsDetails,
    },
    {
        exact: false,
        path: '/shows/detail',
        component: MoviesShowsDetails,
    },
    {
        exact: false,
        path: '/home',
        component: LandingPage,
    }
]