import { combineReducers } from 'redux';
import ReducersPizza from './reducerPizza';
const reducer = combineReducers({
	pizza: ReducersPizza,
});

export default reducer;
