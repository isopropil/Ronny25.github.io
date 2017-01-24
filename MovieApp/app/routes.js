import React from 'react';
import {IndexRoute, Route} from 'react-router';

//Containers
import App from './components/containers/App';
import Home from './components/containers/Home';
import FavouritesPage from './components/containers/Favourites';
import MoviePage from './components/containers/MoviePage';

export const routes = (
	<div>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='/movie/:id' component={MoviePage} />
			<Route path='/favourites' component={FavouritesPage} />
		</Route>
	</div>
);
