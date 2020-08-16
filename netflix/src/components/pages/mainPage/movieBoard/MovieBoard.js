import React, { Component } from "react";
import CategoryPanel from './components/categoryPanel';
import SearchPanel from './components/searchPanel';
import NumberFoundFilms from "./components/numberFoundMovies";
import MovieCard from './components/movieCard';
import movies from '../../../../mockedData';
import './MovieBoard.scss'


export default class MovieBoard extends Component{

  render() {
    return (
      <div className='movies-board-wrapper'>
        <div className='movies-board-menu'>
          <CategoryPanel />
          <SearchPanel />
        </div>
          <NumberFoundFilms />
        <div className='movies-cards'>
          {movies.map(movie => <MovieCard 
          key={ movie.key } 
          src={ movie.src } 
          title={ movie.title} 
          release={ movie.release } 
          category={ movie.category }
          />)}
        </div> 
      </div>
    );
  }
}