export const REMOVE_USER = 'REMOVE_USER';

// export function remove_user(user) {
//     return {
//         type: REMOVE_USER,
//         user
//     }
// }


export function remove_user(user){
	return dispatch => {
		fetch('http://localhost:2000/deleteuser', {
			method: 'POST',
            cache: false,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user : user
            })
		}).then(resp => {
			return resp.json();
		}).then(resp_json => {
			console.log(resp_json);
			dispatch({
				type: REMOVE_USER,
				users_json: resp_json
			})
		})
	};
}

