import React, { Component } from 'react';
import Banner from './banner';
import MovieBoard from "./movieBoard";
import ModalWindow from './modalWindow';
import movies from '../../../mockedData';

import './MainPage.scss';

export default class MainPage extends Component {

state = {
   openModal: false,
   isAdd: false,
   isDelete: false,
   movieDataIndex: 0,
}

openModalWindow = (modalType, isDelete) => {
   this.setState({
      openModal: true,
      isAdd: modalType,
      isDelete,
   });
}

closeModalWindow = () => {
   this.setState({
      openModal: false,
   });
}

takeDataFromId = (id) => {
   const index = movies.findIndex(movie => movie.id === id);
   if(index !== -1) {
      console.log('2');
      this.setState({
         movieDataIndex: index
      });
   }
}

componentDidUpdate = () => {
 if(this.state.openModal) {
  window.scrollTo(0, 0);
 }
}

   render() {
      const { changeStyleForFooter } = this.props;
      const blurClass = this.state.openModal ? 'blur' : '';
      const displayBackgroundClass = this.state.openModal ? 'display-background' : '';

      return (
      <>
       <div className={`main-page-wrapper ${blurClass}`}>
            <Banner 
            openModalWindow={this.openModalWindow} 
            changeStyleForFooter={changeStyleForFooter}
            />
            <MovieBoard 
            openModalWindow={this.openModalWindow}
            movies={movies}
            takeDataFromId={this.takeDataFromId}
            changeStyleForFooter={changeStyleForFooter}
         />
        </div>
        <ModalWindow 
        open={this.state.openModal}
        isAdd={this.state.isAdd}
        isDelete={this.state.isDelete}
        closeModalWindow={this.closeModalWindow}
        movies={movies}
        movieDataIndex={this.state.movieDataIndex}
        changeStyleForFooter={changeStyleForFooter}
        />
        <div className={`main-page-background-modal ${displayBackgroundClass}`}>
         </div>
        </>
       );
    }
}

