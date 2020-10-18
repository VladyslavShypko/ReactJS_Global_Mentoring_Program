import React, {useEffect, useCallback, useMemo} from "react";
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import CategoryPanel from './components/categoryPanel';
import SortPanel from './components/sortPanel';
import NumberFoundFilms from "./components/numberFoundMovies";
import MovieCard from './components/movieCard';
import {getMovies, searchMoviesRequest} from '../../../../redux/actions';
import PropTypes from 'prop-types';
import './MovieBoard.scss'

function MovieBoard({getMovies, searchMoviesRequest, movies, location}) {

    const params = new URLSearchParams(location.search);
    const searchTerm = params.get('searchTerm'); 

    const data = useMemo(() => {
        movies
    }, [movies]);

    const memoizedGetMovies = useCallback(
        () => {
            searchTerm ? searchMoviesRequest(searchTerm) : getMovies();
        }, [data]
    );

    useEffect(() => {
        memoizedGetMovies();
    }, [data, memoizedGetMovies]);

    return (
        <div className='movies-board-wrapper'>
            <div className='movies-board-menu'>
                <CategoryPanel/>
                <SortPanel/>
            </div>
            <NumberFoundFilms count={movies.length ? movies.length : 0}/>
            {movies.length ? (
                <div className='movies-cards'>
                    {movies.map(movie => <MovieCard
                        id={movie.id}
                        key={movie.id}
                        url={movie.poster_path}
                        title={movie.title}
                        release={movie.release_date}
                        genres={movie.genres}
                        overview={movie.overview}
                        runtime={movie.runtime}
                    />)}
                </div>
            ) : (
                <div className='no-movie-found'><p>No Movie Found</p></div>
            )}
        </div>
    );
}

const mapDispatchToProps = {
    getMovies, searchMoviesRequest,
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieBoard));

MovieBoard.propTypes = {
    getMovies: PropTypes.func.isRequired,
};
