import React, { Component } from "react";
import './AddMovieButton.scss'

export default class AddMovieButton extends Component {

    render() {
        return (
            <div className='add-button-wrap'>
            <button className='add-button'><p className='add-button-text'>+ ADD MOVIE</p></button>
            </div>
        );
    }
}