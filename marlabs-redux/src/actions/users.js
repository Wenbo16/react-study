export const ADD_USER = 'ADD_USER';
export const FETCH_USERS = 'FETCH_USERS';

export function add_user(userObj) {
    return {
        type: ADD_USER,
        userObj
    }
}


// return a function
export function fetch_users(){
	return dispatch => {
		fetch('http://localhost:2000/getusers')
		.then(resp => resp.json())
		.then(resp_json => {
			dispatch({
				type: FETCH_USERS,
				users_json: resp_json
			})
		})
	};
}