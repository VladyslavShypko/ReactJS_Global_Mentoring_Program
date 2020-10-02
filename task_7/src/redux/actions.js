import {
    ADD_MOVIE,
    GET_MOVIES,
    SEARCH_MOVIE,
    FILTER_MOVIES,
    GET_MOVIE_MODAL,
    GET_MOVIE_BANNER,
    UPDATE_MOVIE,
    CHANGE_STYLE,
    OPEN_MODAL,
    CLOSE_MODAL,
    OPEN_ADD_MOVIE_MODAL,
    OPEN_DELETE_MOVIE_MODAL,
    OPEN_MOVIE_DETAILS,
    CLOSE_MOVIE_DETAILS,
} from './types'

export function toggleChangeStyle() {
    return {
        type: CHANGE_STYLE
    }
}

export function openModalWindow() {
    return dispatch => {
        dispatch({
            type: OPEN_MODAL,
        });
        dispatch(toggleChangeStyle());
    }
}

export function closeModalWindow() {
    return dispatch => {
        dispatch({
            type: CLOSE_MODAL,
        });
        dispatch(toggleChangeStyle());
    }
}

export function openAddMovieModal() {
    return {
        type: OPEN_ADD_MOVIE_MODAL
    }
}

export function openDeleteMovieModal() {
    return {
        type: OPEN_DELETE_MOVIE_MODAL
    }
}

export function getMovieByIdForModal(id) {
    return async dispatch => {
        const response = await fetch(`http://localhost:4000/movies/${id}`)
        const json = await response.json()
     dispatch({type: GET_MOVIE_MODAL, payload: json})
    }
}

export function getMovieByIdForBanner(id) {
    return async dispatch => {
        const response = await fetch(`http://localhost:4000/movies/${id}`)
        const json = await response.json()
        dispatch({type: GET_MOVIE_BANNER, payload: json})
    }
}

export function updateMovie(movie) {
    return async dispatch => {
        await fetch(`http://localhost:4000/movies`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movie),
            }
        );
        dispatch({type: UPDATE_MOVIE, payload: movie});
        dispatch(closeModalWindow());
        dispatch(getMovies());
    };

}

export function addMovie(movie) {
    return async dispatch => {
        await fetch(`http://localhost:4000/movies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(movie),
            }
        );
        dispatch(closeModalWindow());
        dispatch({type: ADD_MOVIE, payload: movie});
    };
}

export function deleteMovie(id) {
    return async dispatch => {
        await fetch(`http://localhost:4000/movies/${id}`, {
            method: 'DELETE'
        });
        dispatch(closeModalWindow());
        dispatch(getMovies());
    }
}

export function searchMoviesRequest(searchString) {
    return async dispatch => {
        const response = await fetch(`http://localhost:4000/movies?search=${searchString}&searchBy=title`)
        const json = await response.json();
        dispatch({type: SEARCH_MOVIE, payload: json})
    }
}

export function filterMoviesRequest(genre) {
    return async dispatch => {
        const response = await fetch(`http://localhost:4000/movies?searchBy=genres&filter=${genre}`)
        const json = await response.json()
        dispatch({type: FILTER_MOVIES, payload: json})
    }
}

export function showMovieDetails() {
    return {
        type: OPEN_MOVIE_DETAILS
    }
}

export function hideMovieDetails() {
    return {
        type: CLOSE_MOVIE_DETAILS
    }
}

export function getMovies(params) {
    const query = `${params ? params.sortOrder ? '?sortBy=release_date&sortOrder=' + params.sortOrder : '': ''}`;
    return async dispatch => {
        const response = await fetch(`http://localhost:4000/movies${query}`)
        const json = await response.json()
        dispatch({type: GET_MOVIES, payload: json})
    }
}