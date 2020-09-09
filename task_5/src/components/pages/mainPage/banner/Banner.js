import React from "react";
import AddMovieButton from './components/addMovieButton';
import SearchForm from './components/searchForm';
import PropTypes from 'prop-types';
import './Banner.scss'

function Banner({openModalWindow, changeStyleForFooter, displayMovieDetails, movieDataIndex, movies, hideMovieDetails}) {

    const getOnlyYear = (release) => {
        return release.slice(0, 4);
    }
    const movie = movies[movieDataIndex];
    return (
        <div className='wrapper'>
            <div className='banner'></div>
            <div className='background-color' style={{opacity: displayMovieDetails ? '0.9' : '0.7'}}></div>
            {displayMovieDetails ? (
                <div className='movie-details-wrapper'>
                    <i className="movie-details-search-icon fas fa-search fa-lg" onClick={hideMovieDetails}></i>
                    <img className='movie-details-poster' src={movie.url}/>
                    <div className='movie-details'>
                        <h1 className='movie-details-header'>{movie.title}</h1>
                        <p className='movie-details-reward'>Oscar winning Movie</p>
                        <div className='movie-details-release-runtime'>
                            <p className='movie-details-release'>{getOnlyYear(movie.release)}</p>
                            <p className='movie-details-runtime'>{`${movie.runtime} min`}</p>
                        </div>
                        <p className='movie-details-overview'>{movie.overview}</p>
                    </div>
                </div>
            ) : (
                <div className='content'>
                    <div className='header'>
                        <AddMovieButton
                            openModalWindow={openModalWindow}
                            changeStyleForFooter={changeStyleForFooter}
                        />
                    </div>
                    <SearchForm/>
                </div>
            )}
        </div>
    );
};

export default Banner;

Banner.propTypes = {
    openModalWindow: PropTypes.func.isRequired,
    changeStyleForFooter: PropTypes.func.isRequired,
    displayMovieDetails: PropTypes.bool.isRequired,
    movieDataIndex: PropTypes.number.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        release: PropTypes.string,
        genre: PropTypes.string,
        overview: PropTypes.string,
        runtime: PropTypes.string,
    })),
    hideMovieDetails: PropTypes.func.isRequired,
};
