import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cart';
import Pizzas from '../components/Pizzas';
class Home extends Component {
	render() {
		const { availableProducts } = this.props.products;
		return (
			<div class='container-fluid'>
				<div
					style={{
						height: 400,
						backgroundSize: 'cover',
						backgroundImage: `url(${require('../assets/pizza-with-olives-facebook-cover.jpg')})`,
					}}
				>
					<h1
						style={{
							textAlign: 'center',
							fontSize: 50,
							fontWeight: 'bold',
							color: 'white',
							backgroundColor: 'gray',
						}}
					>
						Yummi Pizza
					</h1>
				</div>
				<div>
					<hr />
					<h1 style={{ textAlign: 'center' }}>Our Most Popular Items</h1>
				</div>
				<div class='container'>
					{availableProducts.map(item => (
						<Pizzas
							className='row'
							key={item.title}
							title={item.title}
							description={item.description}
							image={item.image}
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

export default connect(mapStateToProps, { addToCart })(Home);
