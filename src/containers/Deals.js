import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cart';
import { deals } from '../assets/data/deals';
import PizzaDeals from '../components/PizzaDeals';
class Deals extends Component {
	render() {
		return (
			<div class='container-fluid'>
				<div class='container'>
					{deals.map(item => (
						<PizzaDeals
							className='row'
							key={item.name}
							title={item.title}
							description={item.description}
							image={item.image}
							price={item.price}
							onAddToCart={() => this.props.addToCart(item)}
						/>
					))}
				</div>
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

export default connect(mapStateToProps, { addToCart })(Deals);
