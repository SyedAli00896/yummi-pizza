import { SIGNUP, LOGIN, LOGOUT } from '../actions/auth';
const initialState = {
	token: null,
	userId: null,
	email: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN || SIGNUP:
			return {
				token: action.payload.token,
				userId: action.payload.userId,
				email: action.payload.email,
			};
		case LOGOUT:
			return {
				initialState,
			};
		// case SIGNUP:
		//   return {
		// 		token: action.payload.token,
		// 		userId: action.payload.userId,
		// 	};

		default:
			return state;
	}
};
