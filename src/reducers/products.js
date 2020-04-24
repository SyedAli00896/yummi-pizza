import { pizzaList } from '../assets/data/pizza';

const initialState = {
	availableProducts: pizzaList,
	userProducts: pizzaList.filter(prod => prod.ownerId === 'u1'),
};

export default (state = initialState, action) => {
	return state;
};
