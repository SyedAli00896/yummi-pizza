import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../containers/Home';
import Deals from '../containers/Deals';
class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/about'>
						<Home />
					</Route>
					<Route path='/deals' exact>
						<Deals />
					</Route>
					<Route path='/' component={Home} exact />
				</Switch>
			</div>
		);
	}
}

export default App;
