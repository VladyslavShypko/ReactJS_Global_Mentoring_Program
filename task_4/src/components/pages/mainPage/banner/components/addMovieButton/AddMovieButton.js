import React, { Component } from "react";
import PropTypes from 'prop-types';
import './AddMovieButton.scss'

export default class AddMovieButton extends Component {

    render() {
        const { openModalWindow, changeStyleForFooter } = this.props;
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
    }
}

AddMovieButton.proptypes = {
    openModalWindow: PropTypes.func.isRequired,
    changeStyleForFooter: PropTypes.func.isRequired,
}

