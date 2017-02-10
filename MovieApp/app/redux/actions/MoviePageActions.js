import fetch from 'isomorphic-fetch';

import { API_KEY } from '../constants/ApiKey';
import { LOAD,
	LOAD_MOVIE_SUCCESS,
	LOAD_GENRES_SUCCESS,
	LOAD_RECOMMEND_SUCCESS,
	LOAD_SIMILAR_SUCCESS } from '../constants/App';

function request() {
	return {
		type: LOAD
	}
}

function receiveData(json) {
	return {
		type: LOAD_MOVIE_SUCCESS,
		data: json
	}
}
function receiveGenres(json) {
	return {
		type: LOAD_GENRES_SUCCESS,
		data: json.genres
	}
}
function receiveRecommendations(json) {
	return {
		type: LOAD_RECOMMEND_SUCCESS,
		data: json.results
	}
}
function receiveSimilar(json) {
	return {
		type: LOAD_SIMILAR_SUCCESS,
		data: json.results
	}
}

export function fetchMovie(id) {
	
	return dispatch => {
		dispatch(request());
		
		return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
			.then(response => response.json())
			.then(json => dispatch(receiveData(json)))
			.catch( err => console.log(err) );
	};
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

export function fetchRecommendations(id) {
	
	return dispatch => {
		dispatch(request());
		
		return fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
			.then(response => response.json())
			.then(json => dispatch(receiveRecommendations(json)))
			.catch( err => console.log(err) );
	};
}

export function fetchSimilar(id) {
	
	return dispatch => {
		dispatch(request());
		
		return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
			.then(response => response.json())
			.then(json => dispatch(receiveSimilar(json)))
			.catch( err => console.log(err) );
	};
}
