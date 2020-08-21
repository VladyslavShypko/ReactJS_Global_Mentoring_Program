import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.scss';

export default class ModalWindow extends Component {


   render() {
    const { open, isAdd, isDelete, closeModalWindow, movies, movieDataIndex, changeStyleForFooter } = this.props;
    const openModalClass = open ? 'open' : 'close';

      return (
          <div id='modal' className={`modal-window-wrapper ${openModalClass}`}>
            <p className='close-modal' onClick={() => {
               closeModalWindow();
               changeStyleForFooter();
               }}>X</p>
            <form className='movie-form'>
               <h1>{isDelete ? 'DELETE MOVIE' : isAdd ? 'ADD MOVIE' : 'EDIT MOVIE'}</h1>
               {!isDelete ? (
               <>
               {console.log(movies[movieDataIndex])}
               <label htmlFor='title'>TITLE</label>
               <input type='text' name='title' placeholder='Title here' value={!isAdd ? movies[movieDataIndex].title : ''}></input>

               <label htmlFor='release'>RELEASE DATE</label>
               <input type='date' name='release' placeholder='Select Date' value={!isAdd ? movies[movieDataIndex].release : ''}></input>

               <label htmlFor='url'>MOVIE URL</label>
               <input type='text' name='url' placeholder='Movie URL here' value={!isAdd ? movies[movieDataIndex].url : ''}></input>

               <label htmlFor='genre'>GENRE</label>
               <select name='genre' value={!isAdd ? movies[movieDataIndex].genre : ''}>
                  <option value="" disabled selected>Select Genre</option>
                  <option>Documentary</option>
                  <option>Comedy</option>
                  <option>Horror</option>
                  <option>Crime</option>
                  <option>Action & Drama</option>
               </select>

               <label htmlFor='overview'>OVERVIEW</label>
               <input type='text' name='overview' placeholder='Overview here' value={!isAdd ? movies[movieDataIndex].overview : ''}></input>

               <label htmlFor='runtime'>RUNTIME</label>
               <input type='text' name='runtime'placeholder='Runtime here'value={!isAdd ? movies[movieDataIndex].runtime : ''}></input>
               <div className='buttons-group'>
                  <button className='reset'>RESET</button>
                  <button className='submit'>SUBMIT</button>
               </div>
               </>
               ) : <div className='confirm-deleting'>
                  <p>Are you sure you want to delete this movie?</p>
                  <button>CONFIRM</button>
                  </div>
               }
            </form>
          </div>
       );
    }
}


ModalWindow.propTypes = {
   open: PropTypes.bool.isRequired,
   isAdd: PropTypes.bool.isRequired,
   isDelete: PropTypes.bool.isRequired,
   closeModalWindow: PropTypes.func.isRequired,
   movieDataIndex: PropTypes.number.isRequired,
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