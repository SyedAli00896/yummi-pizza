import React from 'react';

const CartItem = props => {
	const { productTitle, image, productPrice, quantity, onRemove } = props;

	return (
		<tr>
			<td class='col-md-6'>
				<div class='media'>
					<a class='thumbnail pull-left' href='#'>
						<img class='media-object' src={image} style={{ width: 72, height: 72 }} />
					</a>
					<div class='media-body'>
						<h4 class='media-heading'>
							<a href='#'>{productTitle}</a>
						</h4>
					</div>
				</div>
			</td>
			<td class='col-md-1' style={{ textAlign: 'center' }}>
				<strong>{quantity}</strong>
			</td>
			<td class='col-md-1 text-center'>
				<strong>{productPrice}</strong>
			</td>
			<td class='col-md-1 text-center'>
				<strong>${quantity * productPrice}</strong>
			</td>
			<td class='col-md-1'>
				<button type='button' class='btn btn-danger' onClick={onRemove}>
					<span class='glyphicon glyphicon-remove'></span> Remove
				</button>
			</td>
		</tr>
	);
};
export default CartItem;
