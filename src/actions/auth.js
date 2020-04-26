export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
	return async dispatch => {
		const response = await fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAt64ODSOYkU3476CuQkDBTudUdlCn9A2A',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecureToken: true,
				}),
			}
		);

		if (!response.ok) {
			const resData = await response.json();
			console.log(resData);
		} else {
			const resData = await response.json();
			console.log(resData);
			dispatch({ type: SIGNUP });
		}
	};
};

export const login = (email, password) => {
	return async dispatch => {
		const response = await fetch(
			'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAt64ODSOYkU3476CuQkDBTudUdlCn9A2A',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: email,
					password: password,
					returnSecureToken: true,
				}),
			}
		);
		if (!response.ok) {
			const resData = await response.json();
			console.log(resData);
			alert(resData.error.message);
		} else {
			const resData = await response.json();
			console.log(resData);
			dispatch({ type: LOGIN });
		}
	};
};
