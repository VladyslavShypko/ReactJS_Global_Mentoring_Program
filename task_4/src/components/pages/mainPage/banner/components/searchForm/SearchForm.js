import React, { Component } from "react";
import './SearchForm.scss'

export default class SearchForm extends Component {

    render() {
        return (
            <form className='form-wrap'>
            <label htmlFor='search'><h1 className='search-title'>FIND YOUR MOVIE</h1></label>
            <input type="text" size="40" placeholder="What do you want to watch?" className='search-input' name='search'></input>
            <input type="submit" value="SEARCH" className='search-button'></input>
            </form>
        );
    }
}