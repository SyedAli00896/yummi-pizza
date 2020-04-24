import React, { Component } from 'react';

import { recipes } from '../assets/data/recipes';
import Pizzas from '../components/Pizzas';
export default class Home extends Component {
	render() {
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
					{recipes.map(recipe => (
						<Pizzas
							className='row'
							key={recipe.name}
							title={recipe.name}
							description={recipe.description}
							image={recipe.image}
						/>
					))}
				</div>
			</div>
		);
	}
}
