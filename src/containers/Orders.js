import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cart';
import { Link } from 'react-router-dom';
class Orders extends Component {
	render() {
		const transformedCartItems = [];
		for (const key in this.props.cart.items) {
			transformedCartItems.push({
				productId: key,
				productTitle: this.props.cart.items[key].productTitle,
				prodImage: this.props.cart.items[key].prodImage,
				productPrice: this.props.cart.items[key].productPrice,
				quantity: this.props.cart.items[key].quantity,
				sum: this.props.cart.items[key].sum,
			});
		}
		return (
			<div class='container'>
				<div class='py-5 text-center'>
					<img
						class='d-block mx-auto mb-4'
						src='https://getbootstrap.com/assets/brand/bootstrap-solid.svg'
						alt=''
						width='72'
						height='72'
					/>
					<h2>Checkout</h2>
				</div>

				<div class='row'>
					<div class='col-md-4 order-md-2 mb-4'>
						<h4 class='d-flex justify-content-between align-items-center mb-3'>
							<span class='text-muted'>Your cart</span>
						</h4>
						<ul class='list-group mb-3'>
							<li class='list-group-item d-flex justify-content-between lh-condensed'>
								{transformedCartItems.map(item => (
									<div>
										<div>
											<h6 class='my-0'>{item.productTitle}</h6>
											<small class='text-muted'>Quantity: {item.quantity}</small>
										</div>
										<span class='text-muted'>Price: ${item.sum}</span>
									</div>
								))}
							</li>

							<li class='list-group-item d-flex justify-content-between'>
								<span>Total (USD)</span>
								<strong>$20</strong>
							</li>
						</ul>
					</div>
					<div class='col-md-8 order-md-1'>
						<h4 class='mb-3'>Billing</h4>
						<form class='needs-validation' novalidate>
							<div class='row'>
								<div class='col-md-6 mb-3'>
									<label for='firstName'>First name</label>
									<input
										type='text'
										class='form-control'
										id='firstName'
										placeholder=''
										value=''
									/>
								</div>
								<div class='col-md-6 mb-3'>
									<label for='lastName'>Last name</label>
									<input
										type='text'
										class='form-control'
										id='lastName'
										placeholder=''
										value=''
									/>
								</div>
							</div>

							<div class='mb-3'>
								<label for='email'>
									Email <span class='text-muted'>(Optional)</span>
								</label>
								<input
									type='email'
									class='form-control'
									id='email'
									placeholder='you@example.com'
								/>
								<div class='invalid-feedback'>
									Please enter a valid email address for shipping updates.
								</div>
							</div>

							<div class='mb-3'>
								<label for='address'>Address</label>
								<input
									type='text'
									class='form-control'
									id='address'
									placeholder='1234 Main St'
								/>
							</div>

							<hr class='mb-4' />

							<hr class='mb-4' />

							<h4 class='mb-3'>Payment</h4>

							<div class='d-block my-3'>
								<div class='custom-control custom-radio'>
									<input
										id='credit'
										name='paymentMethod'
										type='radio'
										class='custom-control-input'
										checked
									/>
									<label class='custom-control-label' for='credit'>
										Credit card
									</label>
								</div>
								<div class='custom-control custom-radio'>
									<input
										id='debit'
										name='paymentMethod'
										type='radio'
										class='custom-control-input'
									/>
									<label class='custom-control-label' for='debit'>
										Debit card
									</label>
								</div>
								<div class='custom-control custom-radio'>
									<input
										id='paypal'
										name='paymentMethod'
										type='radio'
										class='custom-control-input'
									/>
									<label class='custom-control-label' for='paypal'>
										Paypal
									</label>
								</div>
							</div>
							<div class='row'>
								<div class='col-md-6 mb-3'>
									<label for='cc-name'>Name on card</label>
									<input type='text' class='form-control' id='cc-name' placeholder='' />
									<small class='text-muted'>Full name as displayed on card</small>
								</div>
								<div class='col-md-6 mb-3'>
									<label for='cc-number'>Credit card number</label>
									<input type='text' class='form-control' id='cc-number' placeholder='' />
									<div class='invalid-feedback'>Credit card number is </div>
								</div>
							</div>
							<div class='row'>
								<div class='col-md-3 mb-3'>
									<label for='cc-expiration'>Expiration</label>
									<input type='text' class='form-control' id='cc-expiration' placeholder='' />
									<div class='invalid-feedback'>Expiration date </div>
								</div>
								<div class='col-md-3 mb-3'>
									<label for='cc-expiration'>CVV</label>
									<input type='text' class='form-control' id='cc-cvv' placeholder='' />
									<div class='invalid-feedback'>Security code </div>
								</div>
							</div>
							<hr class='mb-4' />
							<Link to='./'>
								<button
									class='btn btn-primary btn-lg btn-block'
									// type='submit'
									onClick={() => alert('Your order has been placed!!')}
								>
									Continue to checkout
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cart: state.cart,
	};
};

export default connect(mapStateToProps, { addToCart })(Orders);
