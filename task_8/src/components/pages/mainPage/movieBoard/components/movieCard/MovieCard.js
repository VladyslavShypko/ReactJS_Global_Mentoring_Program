import React, {useState} from "react";
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './MovieCard.scss'
import {
    openModalWindow,
    openDeleteMovieModal,
    getMovieByIdForModal,
    getMovieByIdForBanner,
    showMovieDetails,
} from "../../../../../../redux/actions";

function MovieCard({
                       id,
                       url,
                       title,
                       release,
                       genres,
                       openModalWindow,
                       openDeleteMovieModal,
                       getMovieByIdForModal,
                       getMovieByIdForBanner,
                       showMovieDetails,
                       history,
                   }) {

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
                    getMovieByIdForBanner(e.currentTarget.parentNode.getAttribute('id'));
                    showMovieDetails();
                    window.scrollTo(0, 0);
                    history.push(`/film/${id}`);
              
            }}}>
                <div className='movie-card-menu' onClick={() => {
                    openMovieActions();
                }}>
                </div>
                <img className='movie-poster' src={url}/>
                <div className='movie-title'>
                    <p className='movie-name'>{title}</p>
                    <p className='movie-release-date'>{getOnlyYear(release)}</p>
                </div>
                <p className='movie-category'>{genres.join(', ')}</p>
            </div>
            <div className={`modal-movie-actions ${openMovieActionsClass}`}>
                <p className='closeIcon' onClick={closeMovieActions}>X</p>
                <p className='edit' onClick={async e => {
                    await getMovieByIdForModal(e.target.parentNode.parentNode.getAttribute('id'));
                    openModalWindow();
                    closeMovieActions();
                }}>
                    Edit
                </p>
                <p onClick={(e) => {
                    openModalWindow();
                    openDeleteMovieModal();
                    getMovieByIdForModal(e.target.parentNode.parentNode.getAttribute('id'));
                    closeMovieActions();
                }}>
                    Delete
                </p>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    openModalWindow,
    openDeleteMovieModal,
    getMovieByIdForModal,
    getMovieByIdForBanner,
    showMovieDetails,
}


export default withRouter(connect(null, mapDispatchToProps)(MovieCard));

MovieCard.propTypes = {
    openModalWindow: PropTypes.func.isRequired,
    openDeleteMovieModal: PropTypes.func.isRequired,
    getMovieByIdForModal: PropTypes.func.isRequired,
    getMovieByIdForBanner: PropTypes.func.isRequired,
    showMovieDetails: PropTypes.func.isRequired,
}
