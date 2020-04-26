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
			loading: false,
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
		const { email, password } = this.state;
		return (
			<div className='Login container'>
				<form onSubmit={this.handleSubmit}>
					<div style={{ marginBottom: 20 }}>
						<div class='col-md-6 mb-3' style={{ marginBottom: 20 }}>
							<label for='firstName'>Email</label>
							<input
								class='form-control'
								type='email'
								data-test='email'
								value={email}
								onChange={this.handleUserChange}
							/>
						</div>
						<div class='col-md-6 mb-3'>
							<label for='lastName'>Password</label>
							<input
								class='form-control'
								type='password'
								data-test='password'
								value={password}
								onChange={this.handlePassChange}
							/>
						</div>
					</div>
					{this.state.loading ? (
						<div class='d-flex justify-content-center'>
							<div class='spinner-border' role='status'>
								<span class='sr-only'>Loading...</span>
							</div>
						</div>
					) : (
						<div>
							<div>
								<button
									class='btn btn-primary btn-lg btn-block'
									type='submit'
									data-test='submit'
									onClick={() => {
										this.setState({ loading: true });
										this.props.login(email, password, this.props.history);
										this.setState({ loading: false });
									}}
								>
									Log In
								</button>
							</div>
							<br />
							<div>
								<button
									class='btn btn-primary btn-lg btn-block'
									type='submit'
									data-test='submit'
									onClick={() => {
										this.setState({ loading: true });
										this.props.signup(email, password);
										this.setState({ loading: false });
									}}
								>
									Sign Up
								</button>
							</div>
						</div>
					)}
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
