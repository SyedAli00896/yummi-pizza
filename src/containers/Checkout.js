import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrder, fetchOrder } from '../actions/orders';

class Checkout extends Component {
	state = { loading: false };
	componentDidMount = async () => {
		await this.props.fetchOrder();
	};
	render() {
		const {
			cart: { items },
			orders,
			addOrder,
			history,
		} = this.props;
		const transformedCartItems = [];
		for (const key in items) {
			transformedCartItems.push({
				productId: key,
				productTitle: items[key].productTitle,
				prodImage: items[key].prodImage,
				productPrice: items[key].productPrice,
				quantity: items[key].quantity,
				sum: items[key].sum,
			});
		}
		let subtotal = 0,
			deliveryCharges = 10;
		transformedCartItems.map(item => (subtotal += item.sum));
		let total = subtotal + deliveryCharges;

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
							<span>Current Cart Items</span>
						</h4>
						<ul class='list-group mb-3'>
							<li class='list-group-item d-flex justify-content-between lh-condensed'>
								{transformedCartItems.map(item => (
									<div class='list-group-item '>
										<div>
											<h6 class='my-0'>{item.productTitle}</h6>
											<small class='text-muted'>Quantity: {item.quantity}</small>
										</div>
										<span class='text-muted'>Price: ${item.sum}</span>
									</div>
								))}
							</li>
							{transformedCartItems.length && (
								<li class='list-group-item d-flex justify-content-between'>
									<span>Total (USD)</span>
									<strong> ${total}</strong>
								</li>
							)}
						</ul>
						<div>
							<h4 class='d-flex justify-content-between align-items-center mb-3'>
								<span>Previous Orders</span>
							</h4>
							<ul class='list-group mb-3'>
								<li class='list-group-item d-flex justify-content-between lh-condensed'>
									{orders.map(itemData => (
										<div class='list-group-item '>
											{itemData.items.map(item => (
												<div>
													<h6>
														<strong>Pizza : </strong>
														{item.productTitle}
													</h6>
													<h6>
														<strong>Quantity: </strong>
														{item.quantity}
													</h6>
												</div>
											))}

											<div>
												<span class='my-0'>
													<strong>Amount: </strong>${itemData.totalAmount}
												</span>
											</div>
											<span class='my-0'>
												<strong>Date: </strong>
												{itemData.date.toString().substring(0, 21)}
											</span>
										</div>
									))}
								</li>
							</ul>
						</div>
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
							<div class='mb-3'>
								<label for='phone'>Contact Number</label>
								<input class='form-control' placeholder='1234567890' />
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

							{this.state.loading ? (
								<div class='d-flex justify-content-center'>
									<div class='spinner-border' role='status'>
										<span class='sr-only'>Loading...</span>
									</div>
								</div>
							) : (
								<button
									class='btn btn-primary btn-lg btn-block'
									onClick={async () => (
										this.setState({ loading: true }),
										await addOrder(transformedCartItems, total),
										this.setState({ loading: false }),
										alert('Your order has been placed!!'),
										history.push('./')
									)}
								>
									Place Order
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);
	return {
		cart: state.cart,
		orders: state.orders.orders,
	};
};

export default connect(mapStateToProps, { addOrder, fetchOrder })(Checkout);
