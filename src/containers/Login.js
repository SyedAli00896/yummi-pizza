import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../actions/auth';

class SignUpLoginPage extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: '',
		};

		this.handlePassChange = this.handlePassChange.bind(this);
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.dismissError = this.dismissError.bind(this);
	}

	dismissError() {
		this.setState({ error: '' });
	}

	handleSubmit(evt) {
		evt.preventDefault();

		if (!this.state.email) {
			return this.setState({ error: 'Email is required' });
		}

		if (!this.state.password) {
			return this.setState({ error: 'Password is required' });
		}

		return this.setState({ error: '' });
	}

	handleUserChange(evt) {
		this.setState({
			email: evt.target.value,
		});
	}

	handlePassChange(evt) {
		this.setState({
			password: evt.target.value,
		});
	}

	render() {
		// NOTE: I use data-attributes for easier E2E testing
		// but you don't need to target those (any css-selector will work)
		const { email, password } = this.state;
		return (
			<div className='Login'>
				<form onSubmit={this.handleSubmit}>
					<label>User Name</label>
					<input
						type='email'
						data-test='email'
						value={email}
						onChange={this.handleUserChange}
					/>

					<label>Password</label>
					<input
						type='password'
						data-test='password'
						value={password}
						onChange={this.handlePassChange}
					/>

					<input
						type='submit'
						value='Log In'
						data-test='submit'
						onClick={() => {
							try {
								this.props.login(email, password);
							} catch (err) {
								console.log('error', err);
							}
						}}
					/>
					<input
						type='submit'
						value='Sign Up'
						data-test='submit'
						onClick={() => this.props.signup(email, password)}
					/>
					{this.state.error && (
						<h3 data-test='error' onClick={this.dismissError}>
							<button onClick={this.dismissError}>✖</button>
							{this.state.error}
						</h3>
					)}
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log('Home', state);
	return {
		products: state.products,
	};
};

export default connect(mapStateToProps, { signup, login })(SignUpLoginPage);
