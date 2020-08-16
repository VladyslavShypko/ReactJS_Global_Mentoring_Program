import React, { Component } from "react";
import Logo from '../../../shared/logo';
import AddMovieButton from './components/addMovieButton';
import SearchForm from './components/searchForm';

import './Banner.scss'

export default class Banner extends Component{
  render() {
    return (
      <div className='wrapper'>
        <div className='banner'></div>
        <div className='background-color'></div>
        <div className='content'>
          <div className='header'>
            <Logo />
            <AddMovieButton />
          </div>
            <SearchForm />
          </div>
      </div>
    );
  }
}
