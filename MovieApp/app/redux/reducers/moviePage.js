import {
	LOAD,
	LOAD_MOVIE_SUCCESS,
	LOAD_GENRES_SUCCESS,
	LOAD_RECOMMEND_SUCCESS,
	LOAD_SIMILAR_SUCCESS,
	LOAD_FAIL } from '../constants/App';

const initialState = {
	data: {},
	fetching: false,
	error: ''
};

export default function home(state = initialState, action = {}) {
	
	switch (action.type) {
		case LOAD:
			return {
				...state,
				fetching: true,
				error: ''
			};
		case LOAD_MOVIE_SUCCESS:
			return {
				...state,
				data: action.data,
				error: ''
			};
		case LOAD_GENRES_SUCCESS:
			return {
				...state,
				genres: action.data,
				error: ''
			};
		case LOAD_RECOMMEND_SUCCESS:
			return {
				...state,
				recommendations: action.data,
				error: ''
			};
		case LOAD_SIMILAR_SUCCESS:
			return {
				...state,
				similar: action.data,
				fetching: false,
				error: ''
			};
		case LOAD_FAIL:
			return {
				...state,
				fetching: false,
				error: action.payload.message
			};
		default:
			return state;
	}
	
}