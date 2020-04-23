import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path='/about'>
						<Home />
					</Route>
					<Route path='/users' exact>
						<Home />
					</Route>
					<Route path='/' component={Home} exact />
				</Switch>
			</div>
		);
	}
}

export default App;
