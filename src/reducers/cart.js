import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import { ADD_ORDER } from '../actions/orders';

const initialState = {
	items: {},
	totalAmount: 0,
};

export default (state = initialState, action) => {
	console.log('hello', action);
	switch (action.type) {
		case ADD_TO_CART:
			const addedProduct = action.product;
			const prodPrice = addedProduct.price;
			const prodTitle = addedProduct.title;

			let updatedOrNewCartItem = {};
			if (state.items[addedProduct.id]) {
				// already have the item in the cart
				updatedOrNewCartItem = {
					quantity: state.items[addedProduct.id].quantity + 1,
					productPrice: prodPrice,
					productTitle: prodTitle,
					sum: state.items[addedProduct.id].sum + prodPrice,
				};
			} else {
				updatedOrNewCartItem = {
					quantity: 1,
					productPrice: prodPrice,
					productTitle: prodTitle,
					sum: prodPrice,
				};
			}
			return {
				...state,
				items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
				totalAmount: state.totalAmount + prodPrice,
			};
		case ADD_ORDER: {
			return initialState;
		}
		case REMOVE_FROM_CART:
			const selectedCartItem = state.items[action.pid];
			const currentQty = selectedCartItem.quantity;
			let updatedCartItems;
			if (currentQty > 1) {
				// need to reduce it, not erase it
				const updatedCartItem = {
					quantity: selectedCartItem.quantity - 1,
					productPrice: selectedCartItem.productPrice,
					productTitle: selectedCartItem.productTitle,
					sum: selectedCartItem.sum - selectedCartItem.productPrice,
				};

				updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
			} else {
				updatedCartItems = { ...state.items };
				delete updatedCartItems[action.pid];
			}
			return {
				...state,
				items: updatedCartItems,
				totalAmount: state.totalAmount - selectedCartItem.productPrice,
			};
	}

	return state;
};
