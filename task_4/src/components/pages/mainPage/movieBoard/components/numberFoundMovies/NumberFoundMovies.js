import React, { Component } from "react";
import './NumberFoundMovies.scss'

export default class NumberFoundFilms extends Component{

state = {
    count: 39,
}

  render() {
  const { count } = this.state;
    return (
        <p className='number-films'><span>{count}</span>movies found</p>
    );
  }
}