import React, { useState, Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { recipes } from '../assets/data/recipes';
import PizzaDeals from '../components/PizzaDeals';
export default class Home extends Component {
	render() {
		return (
			<div class='container-fluid'>
				<div class='container'>
					{recipes.map(recipe => (
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
