import { ADD_ORDER } from '../actions/orders';

const initialState = {
	orders: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_ORDER:
			const newOrder = {
				id: new Date().toString(),
				items: action.orderData.items,
				totalAmount: action.orderData.amount,
				date: new Date(),
			};
			return {
				...state,
				orders: state.orders.concat(newOrder),
			};
	}

	return state;
};
