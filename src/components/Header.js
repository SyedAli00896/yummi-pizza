import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<div class='container-fluid'>
				<nav class='navbar navbar-inverse'>
					<div class='container-fluid'>
						<div class='navbar-header'>
							<li>
								<Link class='navbar-brand' to='./'>
									Yummi Pizza
								</Link>
							</li>
						</div>
						<ul class='nav navbar-nav'>
							<li>
								<Link to='./'>Home</Link>
							</li>
							<li>
								<Link to='./deals'>Deals</Link>
							</li>
						</ul>
						<ul class='nav navbar-nav navbar-right'>
							<li>
								<Link to='./cart'>
									<span class='glyphicon glyphicon-shopping-cart'></span> Cart
								</Link>
							</li>
							<li>
								<Link to='./login'>
									<span class='glyphicon glyphicon-log-in'></span> Login
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
