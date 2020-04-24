export const REMOVE_MOVIE = 'REMOVE_MOVIE';

export function remove_movie(movie) {
    return {
        type: REMOVE_MOVIE,
        movie
    }
}