import { ADD_USER } from '../actions/users';
import { VIEW_USER } from '../actions/viewUser';
import { REMOVE_USER } from '../actions/removeUser';

// However, object keys are not protected,
// so the following statement is executed without problem
// Use Object.freeze() to make object immutable

const initialAppState = {
    users : [
        {username : 'User 1', location:'Location 1'},
        {username : 'User 2', location:'Location 2'},
        {username : 'User 3', location:'Location 3'},
        {username : 'User 4', location:'Location 4'}
    ],
    currUser : null
};

function userReducer(state=initialAppState, action) {
    switch (action.type) {
        case ADD_USER:
            state.users = [...state.users, action.userObj];
            return state;
        case VIEW_USER:
            state.currUser = state.users[action.id];
            return state;
        case REMOVE_USER:
            state.users = state.users.filter(item => 
                item.username !== action.user.username
            );
            state.newProp = 'new prop'
            return state;
        default:
            return state;
    }
}

export default userReducer;