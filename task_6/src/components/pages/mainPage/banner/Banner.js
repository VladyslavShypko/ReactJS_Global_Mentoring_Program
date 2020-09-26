import React from "react";
import {connect} from 'react-redux'
import {hideMovieDetails} from '../../../../redux/actions';
import AddMovieButton from './components/addMovieButton';
import SearchForm from './components/searchForm';
import PropTypes from 'prop-types';
import './Banner.scss'

function Banner({displayMovieDetails, movieByIdBanner, hideMovieDetails}) {

    const getOnlyYear = (release) => {
        return release.slice(0, 4);
    }
    return (
        <div className='wrapper'>
            <div className='banner'></div>
            <div className='background-color' style={{opacity: displayMovieDetails ? '0.9' : '0.7'}}></div>
            {(displayMovieDetails && movieByIdBanner) ? (
                <div className='movie-details-wrapper'>
                    <i className="movie-details-search-icon fas fa-search fa-lg" onClick={hideMovieDetails}></i>
                    <img className='movie-details-poster' src={movieByIdBanner.poster_path}/>
                    <div className='movie-details'>
                        <div className='movie-details-header-wrapper'>
                            <h1 className='movie-details-text'>{movieByIdBanner.title}</h1>
                            <div className='movie-details-average'><p>{movieByIdBanner.vote_average}</p></div>
                        </div>
                        <p className='movie-details-reward'>{movieByIdBanner.tagline}</p>
                        <div className='movie-details-release-runtime'>
                            <p className='movie-details-release'>{getOnlyYear(movieByIdBanner.release_date)}</p>
                            <p className='movie-details-runtime'>{`${movieByIdBanner.runtime} min`}</p>
                        </div>
                        <p className='movie-details-overview'>{movieByIdBanner.overview}</p>
                    </div>
                </div>
            ) : (
                <div className='content'>
                    <div className='header'>
                        <AddMovieButton/>
                    </div>
                    <SearchForm/>
                </div>
            )}
        </div>
    );
};

const mapDispatchToProps = {
    hideMovieDetails,
}

const mapStateToProps = state => {
    return {
        displayMovieDetails: state.app.displayMovieDetails,
        movieByIdBanner: state.movies.movieByIdBanner,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);

Banner.propTypes = {
    displayMovieDetails: PropTypes.bool.isRequired,
    hideMovieDetails: PropTypes.func.isRequired,
};
