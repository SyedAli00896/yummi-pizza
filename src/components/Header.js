import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

class Header extends Component {
	render() {
		const { userId, email } = this.props.auth;
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
						{userId ? (
							<ul class='nav navbar-nav navbar-right'>
								<li>
									<Link>
										<span class='glyphicon glyphicon glyphicon-user'></span> {email}
									</Link>
								</li>
								<li>
									<Link to='./orders'>
										<span class='glyphicon glyphicon-check'></span> Previous Orders
									</Link>
								</li>

								<li>
									<Link to='./cart'>
										<span class='glyphicon glyphicon-shopping-cart'></span> Cart
									</Link>
								</li>
								<li>
									<Link
										to='./'
										onClick={() => {
											this.props.logout();
										}}
									>
										<span class='glyphicon glyphicon-log-out'></span> LogOut
									</Link>
								</li>
							</ul>
						) : (
							<ul class='nav navbar-nav navbar-right'>
								<li>
									<Link to='./cart'>
										<span class='glyphicon glyphicon-shopping-cart'></span> Cart
									</Link>
								</li>
								<li>
									<Link to='./login'>
										<span class='glyphicon glyphicon-log-in'></span> Login/SignUp
									</Link>
								</li>
							</ul>
						)}
					</div>
				</nav>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		auth: state.auth,
	};
};

export default connect(mapStateToProps, { logout })(Header);
