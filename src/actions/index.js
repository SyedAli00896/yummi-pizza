import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';

export function fetchData(payload) {
	return {
		type: FETCH_DATA,
		payload,
	};
}
