import React, {useEffect, useCallback, useMemo} from "react";
import {connect} from 'react-redux'
import CategoryPanel from './components/categoryPanel';
import SortPanel from './components/sortPanel';
import NumberFoundFilms from "./components/numberFoundMovies";
import MovieCard from './components/movieCard';
import {getMovies} from '../../../../redux/actions';
import PropTypes from 'prop-types';
import './MovieBoard.scss'

function MovieBoard({getMovies, movies}) {

    const data = useMemo(() => {
        movies
    }, [movies]);

    const memoizedGetMovies = useCallback(
        () => {
            getMovies();
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
            ) : ''}
        </div>
    );
}

const mapDispatchToProps = {
    getMovies
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieBoard);

MovieBoard.propTypes = {
    getMovies: PropTypes.func.isRequired,
};
