export const REMOVE_USER = 'REMOVE_USER';

export function remove_user(user) {
    return {
        type: REMOVE_USER,
        user
    }
}