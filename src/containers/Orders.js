import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrder } from '../actions/orders';

class Orders extends Component {
	componentDidMount = async () => {
		await this.props.fetchOrder();
	};
	render() {
		const { orders } = this.props;
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
					<h2>Previous Orders</h2>
				</div>

				<div>
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
		);
	}
}

const mapStateToProps = state => {
	return {
		orders: state.orders.orders,
	};
};

export default connect(mapStateToProps, { fetchOrder })(Orders);
