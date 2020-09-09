import React from "react";
import PropTypes from 'prop-types';
import './AddMovieButton.scss'

function AddMovieButton({openModalWindow, changeStyleForFooter}) {
    return (
        <div className='add-button-wrap'>
            <button className='add-button' onClick={() => {
                openModalWindow(true, false);
                changeStyleForFooter();
            }}>
                <p className='add-button-text'>+ ADD MOVIE</p>
            </button>
        </div>
    );
};
export default AddMovieButton;

AddMovieButton.propTypes = {
    openModalWindow: PropTypes.func.isRequired,
    changeStyleForFooter: PropTypes.func.isRequired,
};
