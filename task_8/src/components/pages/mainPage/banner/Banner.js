import React, {useEffect} from "react";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import {hideMovieDetails, getMovieByIdForBanner, showMovieDetails} from '../../../../redux/actions';
import AddMovieButton from './components/addMovieButton';
import SearchForm from './components/searchForm';
import PropTypes from 'prop-types';
import './Banner.scss'

function Banner({responseStatus, displayMovieDetails, movieByIdBanner, hideMovieDetails, getMovieByIdForBanner, showMovieDetails, history, match}) {

    const id = match.params.id && match.params.id.trim();

    useEffect(() => {
        if (id) {
            getMovieByIdForBanner(id);
            showMovieDetails();
        }
    }, [id]);

    useEffect(() => {
        if (!responseStatus && displayMovieDetails) {
            hideMovieDetails();
        }
    }, [responseStatus]);

    const getOnlyYear = (release) => {
        return release.slice(0, 4);
    }
    return (
        <div className='wrapper'>
            <div className='banner'></div>
            <div className='background-color' style={{opacity: displayMovieDetails ? '0.9' : '0.7'}}></div>
            {(displayMovieDetails && movieByIdBanner) ? (
                <div className='movie-details-wrapper'>
                    <i className="movie-details-search-icon fas fa-search fa-lg" onClick={() => {
                        hideMovieDetails();
                        history.push('/');
                    }}></i>
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
    hideMovieDetails, getMovieByIdForBanner, showMovieDetails
}

const mapStateToProps = state => {
    return {
        displayMovieDetails: state.app.displayMovieDetails,
        movieByIdBanner: state.movies.movieByIdBanner,
        responseStatus: state.movies.responseStatus,

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Banner));

Banner.propTypes = {
    displayMovieDetails: PropTypes.bool.isRequired,
    hideMovieDetails: PropTypes.func.isRequired,
};
