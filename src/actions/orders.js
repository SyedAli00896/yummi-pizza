import { RestClient } from '../network/RestClient';

export const ADD_ORDER = 'ADD_ORDER';
export const FETCH_ORDER = 'FETCH_ORDER';

export const fetchOrder = () => {
	return async (dispatch, state) => {
		const token = state().auth.token;
		const userId = state().auth.userId;
		const resData = await RestClient.get(`/orders/${userId}.json?auth=${token}`);

		if (!resData.ok) {
			dispatch({ type: FETCH_ORDER, orderData: [] });
		} else {
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
		}
	};
};

export const addOrder = (items, amount) => {
	const date = new Date();
	return async (dispatch, state) => {
		const userId = state().auth.userId;
		const token = state().auth.token;
		await RestClient.post(`/orders/${userId}.json?auth=${token}`, {
			items,
			amount,
			date,
		});
		dispatch({ type: ADD_ORDER, orderData: { id: date, date, items, amount } });
	};
};
