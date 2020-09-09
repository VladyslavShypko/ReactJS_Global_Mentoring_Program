import React, {useState } from "react";
import PropTypes from 'prop-types';
import './MovieCard.scss'

function MovieCard({id, url, title, release, genre, openModalWindow, getIndexMovieForModal, getIndexMovieForBanner, changeStyleForFooter, showMovieDetails}) {

    const [openActions, setOpenActions] = useState(false);

    const openMovieActions = () => {
        setOpenActions(true);
    };

    const closeMovieActions = () => {
        setOpenActions(false);
    };

    const getOnlyYear = (release) => {
        return release.slice(0, 4);
    };

    const openMovieActionsClass = openActions ? "opened" : "closed";

    return (
        <div className='movie-card-wrapper' id={id}>
            <div className='movie-card' id='card' onClick={(e) => {
                if (e.target.className !== 'movie-card-menu' && !e.target.className.includes('modal-movie-actions')) {
                    getIndexMovieForBanner(e.currentTarget.parentNode.getAttribute('id'));
                    showMovieDetails();
                }
            }}>
                <div className='movie-card-menu' onClick={() => {
                    openMovieActions();
                }}>
                </div>
                <img className='movie-poster' src={url}/>
                <div className='movie-title'>
                    <p className='movie-name'>{title}</p>
                    <p className='movie-release-date'>{getOnlyYear(release)}</p>
                </div>
                <p className='movie-category'>{genre}</p>
            </div>
            <div className={`modal-movie-actions ${openMovieActionsClass}`}>
                <p className='closeIcon' onClick={closeMovieActions}>X</p>
                <p className='edit' onClick={(e) => {
                    openModalWindow(false, false);
                    closeMovieActions();
                    getIndexMovieForModal(e.target.parentNode.parentNode.getAttribute('id'));
                    changeStyleForFooter();
                }}>
                    Edit
                </p>
                <p onClick={() => {
                    openModalWindow(false, true);
                    closeMovieActions();
                    changeStyleForFooter();
                }}>
                    Delete
                </p>
            </div>
        </div>
    );
}

export default MovieCard;

MovieCard.propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    openModalWindow: PropTypes.func.isRequired,
    getIndexMovieForModal: PropTypes.func.isRequired,
    getIndexMovieForBanner: PropTypes.func.isRequired,
    changeStyleForFooter: PropTypes.func.isRequired,
    showMovieDetails: PropTypes.func.isRequired,
}
