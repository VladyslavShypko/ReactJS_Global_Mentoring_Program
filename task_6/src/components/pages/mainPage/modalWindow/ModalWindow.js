import React, {useEffect, useState, useMemo} from 'react';
import {connect} from 'react-redux';
import {closeModalWindow, updateMovie, addMovie, deleteMovie} from '../../../../redux/actions';
import PropTypes from 'prop-types';
import './ModalWindow.scss';

function ModalWindow({
                         openModal,
                         addMovieModalOpen,
                         deleteMovieModalOpen,
                         movieByIdModal,
                         closeModalWindow,
                         updateMovie,
                         addMovie,
                         deleteMovie,
                     }) {

    const openModalClass = openModal ? 'open' : 'close';
    const emptyMovieData = {
        title: "",
        release_date: "",
        poster_path: "",
        genres: [],
        overview: "",
        runtime: '',
    }


    const dataMovie = !addMovieModalOpen && movieByIdModal ? movieByIdModal : emptyMovieData;
    const movies = useMemo(() => {
        return movieByIdModal
    }, [movieByIdModal]);
    const [formState, setFormState] = useState({});

    useEffect(() => {
        setFormState(dataMovie);
    }, [movies]);

    const changeStateHandler = event => {
        event.persist();
        setFormState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.name === 'runtime' ? ++event.target.value : event.target.value
            }
        }))
    }

    const resetForm = () => {
        setFormState(emptyMovieData);
    }

    const submitHandler = event => {
        event.preventDefault();
        if (addMovieModalOpen) {
            addMovie({
                ...formState,
                tagline: "Here's to the fools who dream.",
                vote_average: 7.9,
                vote_count: 6782,
                budget: 30000000,
                revenue: 445435700,
                genres: [
                    "Comedy",
                    "Drama",
                    "Romance"
                ],
            });
        } else {
            updateMovie(formState);
            resetForm();
        }
    }

    return (
        <div id='modal' className={`modal-window-wrapper ${openModalClass}`}>
            <p className='close-modal' onClick={() => {
                closeModalWindow();
                resetForm();
            }}>X</p>
            <div className='movie-form' id='movie-form'>
                <h1>{deleteMovieModalOpen ? 'DELETE MOVIE' : addMovieModalOpen ? 'ADD MOVIE' : 'EDIT MOVIE'}</h1>
                {!deleteMovieModalOpen ? (
                    <form onSubmit={submitHandler}>
                        {!addMovieModalOpen ? (<>
                            <p className='movie-id-title'>MOVIE ID</p>
                            <p className='movie-id'>{dataMovie.id}</p>
                        </>) : ''}

                        <label htmlFor='title'>TITLE</label>
                        <input
                            type='text'
                            name='title'
                            placeholder='Title here'
                            onChange={changeStateHandler}
                            value={formState.title}>
                        </input>

                        <label htmlFor='release'>RELEASE DATE</label>
                        <input
                            type='date'
                            name='release_date'
                            placeholder='Select Date'
                            onChange={changeStateHandler}
                            value={formState.release_date}>
                        </input>

                        <label htmlFor='url'>MOVIE URL</label>
                        <input type='text'
                               name='poster_path'
                               placeholder='Movie URL here'
                               onChange={changeStateHandler}
                               value={formState.poster_path}>
                        </input>

                        {/* <label htmlFor='genre'>GENRE</label>
                        <select name='genre'
                                value={formState.genres ? formState.genres.join(', ') : ''}
                                onChange={changeStateHandler}>
                            {console.log(formState.genres)}
                            <option value={formState.genres ? formState.genres.join(', ') : ''}>Select Genre</option>
                        </select>

                        <div className="checkboxes">
                            <label htmlFor="action">
                                <input type="checkbox" id="action" onClick={addCheckedGenreToState} value="Action"/>Action</label>
                            <label htmlFor="animation">
                                <input type="checkbox" id="animation" onClick={addCheckedGenreToState}
                                       value="Animation"/>Animation</label>
                            <label htmlFor="adventure">
                                <input type="checkbox" id="adventure" onClick={addCheckedGenreToState}
                                       value="Adventure"/>Adventure</label>
                            <label htmlFor="drama">
                                <input type="checkbox" id="drama" onClick={addCheckedGenreToState} value="Drama"/>Drama</label>
                            <label htmlFor="comedy">
                                <input type="checkbox" id="comedy" onClick={addCheckedGenreToState} value="Comedy"/>Comedy</label>
                            <label htmlFor="science">
                                <input type="checkbox" id="science" onClick={addCheckedGenreToState} value="Science"/>Science</label>
                            <label htmlFor="romance">
                                <input type="checkbox" id="romance" onClick={addCheckedGenreToState} value="Romance"/>Romance</label>
                            <label htmlFor="family">
                                <input type="checkbox" id="family" onClick={addCheckedGenreToState} value='Family'/>Family</label>
                            <label htmlFor="fantasy">
                                <input type="checkbox" id="fantasy" onClick={addCheckedGenreToState} value="Fantasy"/>Fantasy</label>
                            <label htmlFor="fiction">
                                <input type="checkbox" id="fiction" onClick={addCheckedGenreToState} value="Fiction"/>Fiction</label>
                        </div> */}

                        <label htmlFor='overview'>OVERVIEW</label>
                        <input
                            type='text'
                            name='overview'
                            placeholder='Overview here'
                            onChange={changeStateHandler}
                            value={formState.overview}>
                        </input>

                        <label htmlFor='runtime'>RUNTIME</label>
                        <input
                            type='text'
                            name='runtime'
                            placeholder='Runtime here'
                            onChange={changeStateHandler}
                            value={formState.runtime}>
                        </input>
                        <div className='buttons-group'>
                            <button className='reset'
                            >RESET
                            </button>
                            <button type='submit' className='submit'>SUBMIT</button>
                        </div>
                    </form>
                ) : <div className='confirm-deleting'>
                    <p>Are you sure you want to delete this movie?</p>
                    <button onClick={() => {
                        deleteMovie(movieByIdModal.id);
                        resetForm();
                    }}>CONFIRM
                    </button>
                </div>
                }
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    closeModalWindow, updateMovie, addMovie, deleteMovie
}

const mapStateToProps = state => {
    return {
        openModal: state.app.openModal,
        addMovieModalOpen: state.app.addMovieModalOpen,
        deleteMovieModalOpen: state.app.deleteMovieModalOpen,
        movieByIdModal: state.movies.movieByIdModal,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);

ModalWindow.propTypes = {
    openModal: PropTypes.bool.isRequired,
    addMovieModalOpen: PropTypes.bool.isRequired,
    deleteMovieModalOpen: PropTypes.bool.isRequired,
    closeModalWindow: PropTypes.func.isRequired,
    updateMovie: PropTypes.func.isRequired,
    addMovie: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
}

