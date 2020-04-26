import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../containers/Home';
import Deals from '../containers/Deals';
import Cart from '../containers/Cart';
import Orders from '../containers/Orders';
import Checkout from '../containers/Checkout';
import Login from '../containers/Login';
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/cart' component={Cart} exact />
					<Route path='/deals' component={Deals} exact />
					<Route path='/orders' component={Orders} />
					<Route path='/checkout' component={Checkout} />
					<Route path='/login' component={Login} />
					<Route path='/' component={Home} exact />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
