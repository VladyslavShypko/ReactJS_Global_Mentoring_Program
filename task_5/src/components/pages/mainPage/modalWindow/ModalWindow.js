import React, { useEffect } from 'react';
import useInput from '../../../../customHooks/useInput';
import PropTypes from 'prop-types';
import './ModalWindow.scss';

function ModalWindow({open, isAdd, isDelete, closeModalWindow, movies, movieDataIndex, changeStyleForFooter}) {
    
    const openModalClass = open ? 'open' : 'close';
    const emptyMovieData = {
        url: "",
        title: "",
        release: "",
        genre: "",
        overview: "",
        runtime: "",
    }

    const dataMovie = !isAdd ? movies[movieDataIndex] : emptyMovieData;

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
                        {!isAdd ? (<>
                        <p className='movie-id-title'>MOVIE ID</p>
                        <p className='movie-id'>{dataMovie.id}</p>
                        </>) : ''}

                        <label htmlFor='title'>TITLE</label>
                        <input 
                        type='text' 
                        name='title' 
                        placeholder='Title here' 
                        value={dataMovie.title}>
                        </input>

                        <label htmlFor='release'>RELEASE DATE</label>
                        <input 
                        type='date' 
                        name='release' 
                        placeholder='Select Date'
                        value={dataMovie.release}>
                         </input>

                        <label htmlFor='url'>MOVIE URL</label>
                        <input type='text' 
                        name='url' 
                        placeholder='Movie URL here' 
                        value={dataMovie.url}>
                        </input>

                        <label htmlFor='genre'>GENRE</label>
                        <select name='genre' 
                        value={dataMovie.genre}>
                            <option value='' disabled selected>Select Genre</option>
                            <option>Documentary</option>
                            <option>Comedy</option>
                            <option>Horror</option>
                            <option>Crime</option>
                            <option>Action & Drama</option>
                        </select>

                        <label htmlFor='overview'>OVERVIEW</label>
                        <input 
                        type='text' 
                        name='overview' 
                        placeholder='Overview here' 
                        value={dataMovie.overview}>
                        </input>

                        <label htmlFor='runtime'>RUNTIME</label>
                        <input 
                        type='text' 
                        name='runtime' 
                        placeholder='Runtime here' 
                        value={dataMovie.runtime}>
                        </input>
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
};

export default ModalWindow;

ModalWindow.propTypes = {
    open: PropTypes.bool.isRequired,
    isAdd: PropTypes.bool.isRequired,
    isDelete: PropTypes.bool.isRequired,
    closeModalWindow: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        release: PropTypes.string,
        genre: PropTypes.string,
        overview: PropTypes.string,
        runtime: PropTypes.string,
    })),
    movieDataIndex: PropTypes.number.isRequired,
    changeStyleForFooter: PropTypes.func.isRequired,
}

