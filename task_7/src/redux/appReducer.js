import {
    CHANGE_STYLE,
    OPEN_MODAL,
    CLOSE_MODAL,
    OPEN_ADD_MOVIE_MODAL,
    OPEN_DELETE_MOVIE_MODAL,
    OPEN_MOVIE_DETAILS,
    CLOSE_MOVIE_DETAILS,
} from './types'

const initialState = {
    changeStyle: false,
    openModal: false,
    addMovieModalOpen: false,
    deleteMovieModalOpen: false,
    displayMovieDetails: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STYLE:
            return {...state, changeStyle: !state.changeStyle}
        case OPEN_MODAL:
            return {...state, openModal: true}
        case CLOSE_MODAL:
            return {
                ...state, openModal: false,
                addMovieModalOpen: false,
                deleteMovieModalOpen: false,
            }
        case OPEN_ADD_MOVIE_MODAL:
            return {...state, addMovieModalOpen: true,}
        case OPEN_DELETE_MOVIE_MODAL:
            return {...state, deleteMovieModalOpen: true}
        case OPEN_MOVIE_DETAILS:
            return {...state, displayMovieDetails: true}
        case CLOSE_MOVIE_DETAILS:
            return {...state, displayMovieDetails: false}
        default:
            return state
    }
}