import React, { Component } from 'react';
import Banner from './banner';
import MovieBoard from "./movieBoard";

export default class MainPage extends Component {
   render() {
      return (
       <>
            <Banner />
            <MovieBoard />
        </>
       );
    }
}

