import Logo from '../assets/Logo.png';
export const LOGO = Logo;

export const API_OPT = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TOCKEN
    }
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LAGUAGES = ["english", "hindi", "spanish"];

export const API_KEY = process.env.REACT_APP_API_KEY;

export const SEARCH_QUERY = "https://api.themoviedb.org/3/search/movie?query=";