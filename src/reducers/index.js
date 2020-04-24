import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';
const reducer = combineReducers({
	cart,
	products,
});

export default reducer;
