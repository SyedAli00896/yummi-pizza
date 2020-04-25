import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Reducers from './reducers/index';
import './style/style.css';

const store = applyMiddleware(ReduxThunk)(createStore);
ReactDOM.render(
	<Provider store={store(Reducers)}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
