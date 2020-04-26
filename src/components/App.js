import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../containers/Home';
import Deals from '../containers/Deals';
import Cart from '../containers/Cart';
import Orders from '../containers/Orders';
import Login from '../containers/Login';
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/cart' exact>
						<Cart />
					</Route>
					<Route path='/deals' exact>
						<Deals />
					</Route>
					<Route path='/orders' component={Orders} />
					<Route path='/login' component={Login} />
					<Route path='/' component={Home} exact />
				</Switch>
				<footer class='my-5 pt-5 text-muted text-center text-small'>
					<p class='mb-1'>&copy; 2020-2021 Yummi Pizza</p>
				</footer>
			</div>
		);
	}
}

export default App;
