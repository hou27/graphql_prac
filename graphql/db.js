//import fetch from "node-fetch";
import axios from "axios";

const BASE_URL = "https://yts-proxy.now.sh/"
	, LIST_MOVIES_URL = `${BASE_URL}list_movies.json`
	, MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`
	, MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;


export const getMovies = async (limit, rating) => {
	const {
		data: {
			data: { movies }
		}
	} = await axios(LIST_MOVIES_URL, {
		params: {
			limit,
			minimum_rating: rating
		}
	});
	
	return movies;
};

export const getMovie = async id => {
	console.log(id)
	const {
		data: { 
			data:{ movie }
		}
	} = await axios(MOVIE_DETAILS_URL, {
		params: {
			movie_id: id
		}
	});
	console.log(movie);
	return movie;
};

export const getSuggestions = async id => {
	const {
		data: {
			data: { movies }
		}
	} = await axios(MOVIE_SUGGESTIONS_URL, {
		params: {
			movie_id: id
		}
	});
	
	return movies;
};