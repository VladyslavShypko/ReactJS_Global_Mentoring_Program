import React from "react";
import {connect} from 'react-redux'
import {openModalWindow, openAddMovieModal} from '../../../../../../redux/actions';
import PropTypes from 'prop-types';
import './AddMovieButton.scss'

function AddMovieButton({openModalWindow, openAddMovieModal}) {
    return (
        <div className='add-button-wrap'>
            <button className='add-button' onClick={() => {
                openModalWindow();
                openAddMovieModal();
            
            }}>
                <p className='add-button-text'>+ ADD MOVIE</p>
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    openModalWindow,
    openAddMovieModal,

}

export default connect(null, mapDispatchToProps)(AddMovieButton);

AddMovieButton.propTypes = {
    openModalWindow: PropTypes.func.isRequired,
    openAddMovieModal: PropTypes.func.isRequired,
};
