import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../actions/cart';
import CartItem from '../components/CartItem';
class Cart extends Component {
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
		let subtotal = 0;
		transformedCartItems.map(item => (subtotal += item.sum));
		return (
			<div class='container'>
				<div class='row'>
					<div class='col-sm-12 col-md-10 col-md-offset-1'>
						<table class='table table-hover'>
							<thead>
								<tr>
									<th>Product</th>
									<th>Quantity</th>
									<th class='text-center'>Price</th>
									<th class='text-center'>Total</th>
									<th> </th>
								</tr>
							</thead>
							<tbody>
								{transformedCartItems.map(item => (
									<CartItem
										quantity={item.quantity}
										productTitle={item.productTitle}
										amount={item.sum}
										onRemove={() => {
											this.props.removeFromCart(item.productId);
										}}
										image={item.prodImage}
										productPrice={item.productPrice}
									/>
								))}
								<tr>
									<td>   </td>
									<td>   </td>
									<td>   </td>
									<td>
										<h5>Subtotal</h5>
									</td>
									<td class='text-right'>
										<h5>
											<strong>${subtotal}</strong>
										</h5>
									</td>
								</tr>
								<tr>
									<td>   </td>
									<td>   </td>
									<td>   </td>
									<td>
										<h5>Delivery Charges</h5>
									</td>
									<td class='text-right'>
										<h5>
											<strong>$6</strong>
										</h5>
									</td>
								</tr>
								<tr>
									<td>   </td>
									<td>   </td>
									<td>   </td>
									<td>
										<h3>Total</h3>
									</td>
									<td class='text-right'>
										<h3>
											<strong>$31.53</strong>
										</h3>
									</td>
								</tr>
								<tr>
									<td>   </td>
									<td>   </td>
									<td>   </td>
									<td>
										<button type='button' class='btn btn-default'>
											<Link to='./'>
												<span class='glyphicon glyphicon-shopping-cart'></span> Continue
												Shopping
											</Link>
										</button>
									</td>
									<td>
										<button type='button' class='btn btn-success'>
											Checkout <span class='glyphicon glyphicon-play'></span>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
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

export default connect(mapStateToProps, { removeFromCart })(Cart);
