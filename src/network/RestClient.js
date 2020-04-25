/* eslint-disable import/named */
import { create } from 'apisauce';

// Rest Client for Americamp APIs
export const RestClient = create({
	baseURL: `https://yummi-pizza.firebaseio.com/`,
	headers: {
		Accept: 'application/json',
	},
	json: true,
	timeout: 30000,
});
