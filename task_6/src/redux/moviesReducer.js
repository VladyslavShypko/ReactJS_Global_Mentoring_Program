import {
    ADD_MOVIE,
    GET_MOVIES,
    GET_MOVIE_MODAL,
    GET_MOVIE_BANNER,
    UPDATE_MOVIE,
    SEARCH_MOVIE,
    FILTER_MOVIES,
} from './types'

const initialState = {
    movies: [],
    movieByIdModal: null,
    movieByIdBanner: null,
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {...state, movies: state.movies.concat([action.payload])}
        case SEARCH_MOVIE:
            return {...state, movies: action.payload.data}
        case FILTER_MOVIES:
            return {...state, movies: action.payload.data}
        case GET_MOVIES:
            return {...state, movies: action.payload.data}
        case GET_MOVIE_MODAL:
            return {...state, movieByIdModal: action.payload}
        case GET_MOVIE_BANNER:
            return {...state, movieByIdBanner: action.payload}
        case UPDATE_MOVIE:
            let foundIndex = state.movies.findIndex(movie => movie.id === action.payload.id);
            state.movies[foundIndex] = action.payload;
            return {...state, movies: state.movies}
        default:
            return state
    }
}