import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

export default function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<div>
				<nav class='navbar navbar-inverse'>
					<div class='container-fluid'>
						<div class='navbar-header'>
							<a class='navbar-brand' href='#'>
								Yummi Pizza
							</a>
						</div>
						<ul class='nav navbar-nav'>
							<li class='active'>
								<Link>Home</Link>
							</li>
							<li>
								<Link>Deals</Link>
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
			<div class='item'>
				<img
					src={require('../assets/pizza-with-olives-facebook-cover.jpg')}
					alt='Image Not Available'
					style={{ width: '100%' }}
				/>
			</div>
			<div>
				<h1>Our Most Popular Items</h1>
			</div>
		</div>
	);
}
