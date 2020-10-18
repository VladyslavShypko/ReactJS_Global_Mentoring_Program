import React, {useEffect, useState, useMemo} from 'react';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import * as Yup from 'yup';
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
    const submitHandler = (values) => {
        ++values.runtime;
        if (addMovieModalOpen) {
            addMovie({
                ...values,
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
            updateMovie({...movieByIdModal, ...values});
        }
        formik.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            title: "",
            release_date: "",
            poster_path: "",
            overview: "",
            runtime: "",
        },
        onSubmit: submitHandler,
        validationSchema: Yup.object().shape({
            title: Yup.string().required('This field is required'),
            release_date: Yup.string().required('This field is required'),
            poster_path: Yup.string().required('This field is required'),
            overview: Yup.string().required('This field is required'),
            runtime: Yup.number().typeError('Runtime must be a number').integer('Runtime must be an integer').required('This field is required'),
        })
    });

    const openModalClass = openModal ? 'open' : 'close';

    const movies = useMemo(() => {
        return movieByIdModal
    }, [movieByIdModal]);

    useEffect(() => {
        if (movieByIdModal) {
            formik.setFieldValue('title', movieByIdModal.title);
            formik.setFieldValue('release_date', movieByIdModal.release_date);
            formik.setFieldValue('poster_path', movieByIdModal.poster_path);
            formik.setFieldValue('overview', movieByIdModal.overview);
            formik.setFieldValue('runtime', movieByIdModal.runtime);
        }
    }, [movies]);

    return (
        <div id='modal' className={`modal-window-wrapper ${openModalClass}`}>
            <p className='close-modal' onClick={() => {
                closeModalWindow();
                formik.resetForm();
            }}>X</p>
            <div className='movie-form' id='movie-form'>
                <h1>{deleteMovieModalOpen ? 'DELETE MOVIE' : addMovieModalOpen ? 'ADD MOVIE' : 'EDIT MOVIE'}</h1>
                {!deleteMovieModalOpen ? (
                    <form onSubmit={formik.handleSubmit}>
                        {!addMovieModalOpen ? (<>
                            <p className='movie-id-title'>MOVIE ID</p>
                            <p className='movie-id'>{movieByIdModal ? movieByIdModal.id : ''}</p>
                        </>) : ''}

                        <label htmlFor='title'>TITLE</label>
                        <input
                            type='text'
                            name='title'
                            placeholder='Title here'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.title}>
                        </input>
                        {formik.touched.title && formik.errors.title && <p className='error'>{formik.errors.title}</p>}

                        <label htmlFor='release'>RELEASE DATE</label>
                        <input
                            type='date'
                            name='release_date'
                            placeholder='Select Date'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.release_date}>
                        </input>
                        {formik.touched.release_date && formik.errors.release_date &&
                        <p className='error'>{formik.errors.release_date}</p>}

                        <label htmlFor='url'>MOVIE URL</label>
                        <input type='text'
                               name='poster_path'
                               placeholder='Movie URL here'
                               onChange={formik.handleChange}
                               onBlur={formik.handleBlur}
                               value={formik.values.poster_path}>
                        </input>
                        {formik.touched.poster_path && formik.errors.poster_path &&
                        <p className='error'>{formik.errors.poster_path}</p>}

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
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.overview}>
                        </input>
                        {formik.touched.overview && formik.errors.overview &&
                        <p className='error'>{formik.errors.overview}</p>}

                        <label htmlFor='runtime'>RUNTIME</label>
                        <input
                            type='text'
                            name='runtime'
                            placeholder='Runtime here'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.runtime}>
                        </input>
                        {formik.touched.runtime && formik.errors.runtime &&
                        <p className='error'>{formik.errors.runtime}</p>}
                        <div className='buttons-group'>
                            <button type='button' className='reset' onClick={formik.resetForm}
                            >RESET
                            </button>
                            <button type='submit' className='submit'>SUBMIT</button>
                        </div>
                    </form>
                ) : <div className='confirm-deleting'>
                    <p>Are you sure you want to delete this movie?</p>
                    <button onClick={() => {
                        deleteMovie(movieByIdModal.id);
                        formik.resetForm();
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