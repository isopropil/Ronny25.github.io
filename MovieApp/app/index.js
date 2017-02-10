//Libraries
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
//Routes
import { routes } from './routes';
//Store
import configureStore from './redux/store/configureStore';

const store = configureStore();

render(
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
