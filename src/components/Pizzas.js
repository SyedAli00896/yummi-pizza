import React from 'react';

const Pizzas = props => {
	const { title, image, description, onAddToCart, price } = props;

	return (
		<div>
			<div className='col-sm-6 col-md-4'>
				<div className='thumbnail text-center'>
					<img src={image} alt='No File' className='img-square' />
					<div className='caption'>
						<h3>{title}</h3>
						<p>{description}</p>
						<h4>Price: ${price}</h4>
						<button type='button' class='btn btn-danger btn-sm' onClick={onAddToCart}>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Pizzas;
