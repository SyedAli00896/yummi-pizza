import React, { useState, Component } from 'react';

import { deals } from '../assets/data/deals';
import PizzaDeals from '../components/PizzaDeals';
export default class Home extends Component {
	render() {
		return (
			<div class='container-fluid'>
				<div class='container'>
					{deals.map(recipe => (
						<PizzaDeals
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
