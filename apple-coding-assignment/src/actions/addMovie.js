export const ADD_MOVIE = 'ADD_MOVIE';

export function add_movie(movie) {
    return {
        type: ADD_MOVIE,
        movie
    }
}