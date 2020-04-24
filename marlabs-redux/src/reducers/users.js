import { ADD_USER } from '../actions/users';
import { FETCH_USERS } from '../actions/users';
import { VIEW_USER } from '../actions/viewUser';
import { REMOVE_USER } from '../actions/removeUser';

// However, object keys are not protected,
// so the following statement is executed without problem
// Use Object.freeze() to make object immutable

const initialAppState = {
    users : [],
    currUser : null
};

function userReducer(state=initialAppState, action) {
    switch (action.type) {
        case ADD_USER:
            state.users = [...state.users, action.userObj];
            return state;
        case FETCH_USERS:
            // return action.users_json
            return {'users': action.users_json};
            // var newState = Object.assign({}, state);
            // newState.users= action.users_json;
            // return newState;
        case VIEW_USER:
            state.currUser = state.users[action.id];
            return state;
        case REMOVE_USER:
            // var new_state_filter = state.users.filter(item => 
            //     item.username !== action.user.username
            // );
            // return {'users':new_state_filter};
            return {'users': action.users_json};
        default:
            return state;
    }
}

export default userReducer;