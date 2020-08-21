import React, { Component } from "react";
import AddMovieButton from './components/addMovieButton';
import SearchForm from './components/searchForm';
import PropTypes from 'prop-types';

import './Banner.scss'

export default class Banner extends Component{
  render() {
    const { openModalWindow, changeStyleForFooter } = this.props;
    return (
      <div className='wrapper'>
        <div className='banner'></div>
        <div className='background-color'></div>
        <div className='content'>
          <div className='header'>
            <AddMovieButton 
            openModalWindow={openModalWindow}
            changeStyleForFooter={changeStyleForFooter}
            />
          </div>
            <SearchForm />
          </div>
      </div>
    );
  }
}

Banner.propTypes = {
  openModalWindow: PropTypes.func.isRequired,
  changeStyleForFooter: PropTypes.func.isRequired,
}
