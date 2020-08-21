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

  getOnlyYear = (release) => {
      return release.slice(0, 4);
  }

  render() {

    const { id, url, title, release, genre, openModalWindow, takeDataFromId, changeStyleForFooter } = this.props;
    const openMovieActionsClass = this.state.open ? "opened" : "closed";

    return (
     <div className='movie-card-wrapper' id={id}>
        <div className='movie-card'>
           <div className='movie-card-menu' onClick={this.openMovieActions}></div>
            <img className='movie-poster' src={url}/>
            <div className='movie-title'>
                <p className='movie-name'>{title}</p>
                <p className='movie-release-date'>{this.getOnlyYear(release)}</p>
            </div>
            <p className='movie-category'>{ genre }</p>
        </div>
        <div className= {`modal-movie-actions ${openMovieActionsClass}`}>
            <p className='closeIcon' onClick={this.closeMovieActions}>X</p>
            <p className='edit' onClick={(e) => {
              openModalWindow(false, false);
              this.closeMovieActions();
              takeDataFromId(e.target.parentNode.parentNode.getAttribute('id'));
              changeStyleForFooter();
            }}>
              Edit
            </p>
            <p onClick={(e) => {
              openModalWindow(false, true);
              this.closeMovieActions();
              changeStyleForFooter();
            }}>
              Delete
            </p>
        </div>
     </div>
    );
  }
}

MovieCard.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  openModalWindow: PropTypes.func.isRequired,
  takeDataFromId: PropTypes.func.isRequired,
  changeStyleForFooter: PropTypes.func.isRequired,
}
