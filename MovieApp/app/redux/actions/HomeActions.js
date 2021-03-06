import fetch from 'isomorphic-fetch';

import { API_KEY } from '../constants/ApiKey';
import { LOAD, LOAD_SUCCESS, LOAD_SEARCH_SUCCESS, LOAD_GENRES_SUCCESS } from '../constants/App';

function request() {
	return {
		type: LOAD
	}
}

function receiveData(json, page) {
	return {
		type: LOAD_SUCCESS,
		data: json.results,
		page: page
	}
}
function receiveMovie(json) {
	return {
		type: LOAD_SEARCH_SUCCESS,
		data: json.results
	}
}
function receiveGenres(json) {
	return {
		type: LOAD_GENRES_SUCCESS,
		data: json.genres
	}
}

export function fetchPopular(page = 1) {
	if (page === 1) {
		
		return dispatch => {
			dispatch(request());
			
			return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
				.then(response => response.json())
				.then(json => dispatch(receiveData(json, page)))
				.catch(err => console.log(err));
		};
		
	} else {
		
		return dispatch => {
			
			return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
				.then(response => response.json())
				.then(json => dispatch(receiveData(json, page)))
				.catch(err => console.log(err));
		};
	}
}

export function fetchGenres() {
	
	return dispatch => {
		dispatch(request());
		
		return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
			.then(response => response.json())
			.then(json => dispatch(receiveGenres(json)))
			.catch( err => console.log(err) );
	};
}

export function fetchMovie(query) {
	
	if (query.length === 0) {
		return fetchPopular();
	}
	
	return dispatch => {
		dispatch(request());
		
		return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
			.then(response => response.json())
			.then(json => dispatch(receiveMovie(json)))
			.catch( err => console.log(err) );
	};
}