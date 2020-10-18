import {combineReducers} from 'redux'
import {moviesReducer} from './moviesReducer'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
    movies: moviesReducer,
    app: appReducer
})