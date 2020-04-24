export const VIEW_USER = 'VIEW_USER';

export function view_user(id) {
    return {
        type: VIEW_USER,
        id
    }
}