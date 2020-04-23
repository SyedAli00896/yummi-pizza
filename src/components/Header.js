import React, { useState, Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<div class='container-fluid'>
				<nav class='navbar navbar-inverse'>
					<div class='container-fluid'>
						<div class='navbar-header'>
							<a class='navbar-brand' href='#'>
								Yummi Pizza
							</a>
						</div>
						<ul class='nav navbar-nav'>
							<li class='active'>
								<Link to='./'>Home</Link>
							</li>
							<li>
								<Link to='./deals'>Deals</Link>
							</li>
							<li>
								<Link>Cart</Link>
							</li>
						</ul>
						<ul class='nav navbar-nav navbar-right'>
							<li>
								<Link>
									<span class='glyphicon glyphicon-user'></span> Sign Up
								</Link>
							</li>
							<li>
								<Link>
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
