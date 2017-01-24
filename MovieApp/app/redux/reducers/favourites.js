import {
	LOAD,
	LOAD_GENRES_SUCCESS,
	LOAD_FAVOURITES_SUCCESS,
	REMOVE_FAVOURITE_SUCCESS,
	LOAD_FAIL } from '../constants/App';

const initialState = {
	data: {},
	genres: [],
	fetching: false,
	error: ''
};

export default function home(state = initialState, action = {}) {
	let removedState = {};
	
	switch (action.type) {
		case LOAD:
			return {
				...state,
				fetching: true,
				error: ''
			};
		case LOAD_FAVOURITES_SUCCESS:
			return {
				...state,
				data: action.data,
				error: ''
			};
		case LOAD_GENRES_SUCCESS:
			return {
				...state,
				genres: action.data,
				fetching: false,
				error: ''
			};
		case REMOVE_FAVOURITE_SUCCESS:
			removedState.data = state.data.splice(action.itemIndex, 1);
			
			return {
				...state,
				data: removedState.data,
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