import React from "react";
import CategoryPanel from './components/categoryPanel';
import SortPanel from './components/sortPanel';
import NumberFoundFilms from "./components/numberFoundMovies";
import MovieCard from './components/movieCard';
import PropTypes from 'prop-types';
import './MovieBoard.scss'

function MovieBoard({openModalWindow, movies, getIndexMovieForModal, getIndexMovieForBanner, changeStyleForFooter, showMovieDetails}) {

    return (
        <div className='movies-board-wrapper'>
            <div className='movies-board-menu'>
                <CategoryPanel/>
                <SortPanel/>
            </div>
            <NumberFoundFilms count={movies.length}/>
            <div className='movies-cards'>
                {movies.map(movie => <MovieCard
                    id={movie.id}
                    key={movie.id}
                    url={movie.url}
                    title={movie.title}
                    release={movie.release}
                    genre={movie.genre}
                    overview={movie.overview}
                    runtime={movie.runtime}
                    openModalWindow={openModalWindow}
                    getIndexMovieForModal={getIndexMovieForModal}
                    getIndexMovieForBanner={getIndexMovieForBanner}
                    changeStyleForFooter={changeStyleForFooter}
                    showMovieDetails={showMovieDetails}
                />)}
            </div>
        </div>
    );
}

export default MovieBoard;

MovieBoard.propTypes = {
    openModalWindow: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        release: PropTypes.string,
        genre: PropTypes.string,
        overview: PropTypes.string,
        runtime: PropTypes.string,
    })),
    getIndexMovieForModal: PropTypes.func.isRequired,
    getIndexMovieForBanner: PropTypes.func.isRequired,
    changeStyleForFooter: PropTypes.func.isRequired,
    showMovieDetails: PropTypes.func.isRequired,
}
