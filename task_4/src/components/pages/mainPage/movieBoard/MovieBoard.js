import React, { Component } from "react";
import CategoryPanel from './components/categoryPanel';
import SearchPanel from './components/searchPanel';
import NumberFoundFilms from "./components/numberFoundMovies";
import MovieCard from './components/movieCard';
import PropTypes from 'prop-types';
import './MovieBoard.scss'


export default class MovieBoard extends Component{

  render() {
    const { openModalWindow, movies, takeDataFromId, changeStyleForFooter } = this.props;

    return (
      <div className='movies-board-wrapper'>
        <div className='movies-board-menu'>
          <CategoryPanel />
          <SearchPanel />
        </div>
          <NumberFoundFilms />
        <div className='movies-cards'>
          {movies.map(movie => <MovieCard 
          id={movie.id}
          key={ movie.id } 
          url={ movie.url } 
          title={ movie.title} 
          release={ movie.release } 
          genre={ movie.genre }
          overview={ movie.overview }
          runtime= { movie.runtime }
          openModalWindow={openModalWindow}
          takeDataFromId={takeDataFromId}
          changeStyleForFooter={changeStyleForFooter}
          />)}
        </div> 
      </div>
    );
  }
}

MovieBoard.propTypes = {
  openModalWindow: PropTypes.func.isRequired,
  takeDataFromId: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
     id: PropTypes.string,
     url: PropTypes.string,
     title: PropTypes.string,
     release: PropTypes.string,
     genre: PropTypes.string,
     overview: PropTypes.string,
     runtime: PropTypes.string,
  })),
  changeStyleForFooter: PropTypes.func.isRequired,
}