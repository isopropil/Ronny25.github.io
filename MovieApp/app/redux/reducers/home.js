import {
	LOAD,
	LOAD_SUCCESS,
	LOAD_SEARCH_SUCCESS,
	LOAD_GENRES_SUCCESS,
	LOAD_FAIL } from '../constants/App';

const initialState = {
	data: {},
	genres: [],
	fetching: false,
	error: ''
};

export default function home(state = initialState, action = {}) {
	let newState = {};
	
	switch (action.type) {
		case LOAD:
			return {
				...state,
				fetching: true,
				error: ''
			};
		case LOAD_SUCCESS:
			if (action.page === 1) {
				return {
					...state,
					data: action.data,
					fetching: false,
					error: ''
				};
			}
			
			newState = {
				...state,
				data: state.data.concat(action.data),
				fetching: false,
				error: ''
			};
			
			return newState;
		case LOAD_SEARCH_SUCCESS:
			return {
				...state,
				data: action.data,
				fetching: false,
				error: ''
			};
		case LOAD_GENRES_SUCCESS:
			return {
				...state,
				genres: action.data,
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