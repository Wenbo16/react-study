export const ADD_USER = 'ADD_USER';

export function add_user(userObj) {
    return {
        type: ADD_USER,
        userObj
    }
}