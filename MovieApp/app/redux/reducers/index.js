import { combineReducers } from 'redux';
import home from './home';
import moviePage from './moviePage';
import favourites from './favourites';

export default combineReducers({
	home,
	moviePage,
	favourites
});