import React, { Component } from "react";
import PropTypes from 'prop-types';
import './MovieCard.scss'


export default class MovieCard extends Component{

  render() {
    const { src, title, release, category } = this.props;
    return (
     <div className='movie-card-wrapper'>
        <div className='movie-card'>
            <img className='movie-poster' src={src}/>
            <div className='movie-title'>
                <p className='movie-name'>{title}</p>
                <p className='movie-release-date'>{release}</p>
            </div>
            <p className='movie-category'>{ category }</p>
        </div>
     </div>
    );
  }
}

MovieCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}
