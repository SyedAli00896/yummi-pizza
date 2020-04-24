import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';
import orders from './orders';
const reducer = combineReducers({
	cart,
	products,
	orders,
});

export default reducer;
