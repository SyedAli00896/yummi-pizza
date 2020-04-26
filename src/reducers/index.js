import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';
import orders from './orders';
import auth from './auth';
const reducer = combineReducers({
	cart,
	products,
	orders,
	auth,
});

export default reducer;
