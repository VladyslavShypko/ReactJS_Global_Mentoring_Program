import React, { Component } from "react";
import PropTypes from 'prop-types';
import './MovieCard.scss'


export default class MovieCard extends Component{

  state = {
    open: false,
  }

  openMovieActions = () => {
      this.setState({
        open: true
      });
  } 

  closeMovieActions = () => {
    this.setState({
      open: false
    });
  }

  render() {

    const { src, title, release, category } = this.props;
    const className = this.state.open ? "opened" : "closed";

    return (
     <div className='movie-card-wrapper'>
        <div className='movie-card'>
           <div className='movie-card-menu' onClick={this.openMovieActions}></div>
            <img className='movie-poster' src={src}/>
            <div className='movie-title'>
                <p className='movie-name'>{title}</p>
                <p className='movie-release-date'>{release}</p>
            </div>
            <p className='movie-category'>{ category }</p>
        </div>
        <div className= {`modal-movie-actions ${className}`}>
            <p className='close' onClick={this.closeMovieActions}>X</p>
            <p>Edit</p>
            <p>Delete</p>
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
