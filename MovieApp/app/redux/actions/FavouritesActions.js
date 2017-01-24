import fetch from 'isomorphic-fetch';
import { LOAD,
	LOAD_GENRES_SUCCESS,
	LOAD_FAVOURITES_SUCCESS,
	REMOVE_FAVOURITE_SUCCESS } from '../constants/App';
import { API_KEY } from '../constants/ApiKey';

function request() {
	return {
		type: LOAD
	}
}

function receiveGenres(json) {
	return {
		type: LOAD_GENRES_SUCCESS,
		data: json.genres
	}
}

function receiveFavourites(data) {
	return {
		type: LOAD_FAVOURITES_SUCCESS,
		data: data
	}
}
function removing(index) {
	return {
		type: REMOVE_FAVOURITE_SUCCESS,
		itemIndex: index
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

export function getFavourites() {
	const localData = JSON.parse(localStorage.getItem('favourite')) ? JSON.parse(localStorage.getItem('favourite')) : [];
	
	return dispatch => {
		dispatch(receiveFavourites(localData));
	};
}
export function removeFromFavourites(itemIndex) {
	const localData = JSON.parse(localStorage.getItem('favourite')) ? JSON.parse(localStorage.getItem('favourite')) : [];
	localData.splice(itemIndex, 1);
	
	localStorage.clear('favourite');
	localStorage.setItem('favourite', JSON.stringify(localData));
	
	return dispatch => {
		dispatch(removing(itemIndex));
	};
}
