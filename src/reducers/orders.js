import { ADD_ORDER, FETCH_ORDER } from '../actions/orders';

const initialState = {
	orders: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_ORDER:
			const newOrder = {
				id: action.orderData.id,
				items: action.orderData.items,
				totalAmount: action.orderData.amount,
				date: action.orderData.date,
			};
			return {
				...state,
				orders: state.orders.concat(newOrder),
			};
		case FETCH_ORDER:
			return {
				...state,
				orders: action.orderData,
			};
		default:
			return state;
	}
};
