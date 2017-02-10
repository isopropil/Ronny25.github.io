import { combineReducers } from 'redux';
//Reducers
import favourites from './favourites';
import home from './home';
import moviePage from './moviePage';

export default combineReducers({
	favourites,
	home,
	moviePage
});