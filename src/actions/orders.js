import { RestClient } from '../network/RestClient';

export const ADD_ORDER = 'ADD_ORDER';
export const FETCH_ORDER = 'FETCH_ORDER';

export const fetchOrder = () => {
	return async dispatch => {
		const resData = await RestClient.get('/orders/u1.json');
		const loadedOrders = [];

		for (const key in resData.data) {
			loadedOrders.push({
				id: key,
				items: resData.data[key].items,
				totalAmount: resData.data[key].amount,
				date: new Date(resData.data[key].date),
			});
		}

		dispatch({ type: FETCH_ORDER, orderData: loadedOrders });
	};
};

export const addOrder = (items, amount) => {
	const date = new Date();
	return async dispatch => {
		const res = await RestClient.post('/orders/u1.json', {
			items,
			amount,
			date,
		});
		dispatch({ type: ADD_ORDER, orderData: { id: date, date, items, amount } });
	};
};
