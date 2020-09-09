import React, {useState, useEffect} from 'react';
import Banner from './banner';
import MovieBoard from "./movieBoard";
import ModalWindow from './modalWindow';
import movies from '../../../mockedData';
import PropTypes from 'prop-types';
import './MainPage.scss';

function MainPage({changeStyleForFooter}) {

    const [openModal, setOpenModal] = useState(false);
    const [AddMovie, setAddMovie] = useState(false);
    const [DeleteMovie, setDeleteMovie] = useState(false);
    const [movieDataIndexModal, setMovieDataIndexModal] = useState(0);
    const [movieDataIndexBanner, setMovieDataIndexBanner] = useState(0);
    const [displayMovieDetails, setDisplayMovieDetails] = useState(false);

    const openModalWindow = (isAdd, isDelete) => {
        setOpenModal(true);
        setAddMovie(isAdd);
        setDeleteMovie(isDelete);
    };

    const closeModalWindow = () => {
        setOpenModal(false);
    };

    const getIndexMovieForModal = (id) => {
        const index = movies.findIndex(movie => movie.id === id);
        if (index !== -1) {
            setMovieDataIndexModal(index);
        }
    };

    const getIndexMovieForBanner = (id) => {
        const index = movies.findIndex(movie => movie.id === id);
        if (index !== -1) {
            setMovieDataIndexBanner(index);
        }
    };

    const showMovieDetails = () => {
        setDisplayMovieDetails(true);
    }

    const hideMovieDetails = () => {
        setDisplayMovieDetails(false);
    }

    useEffect(() => {
        if (openModal) {
            window.scrollTo(0, 0);
        }
    }, [openModal]);


    const blurClass = openModal ? 'blur' : '';
    const displayBackgroundClass = openModal ? 'display-background' : '';

    return (
        <>
            <div className={`main-page-wrapper ${blurClass}`}>
                <Banner
                    openModalWindow={openModalWindow}
                    changeStyleForFooter={changeStyleForFooter}
                    displayMovieDetails={displayMovieDetails}
                    movieDataIndex={movieDataIndexBanner}
                    movies={movies}
                    hideMovieDetails={hideMovieDetails}
                />
                <MovieBoard
                    openModalWindow={openModalWindow}
                    movies={movies}
                    getIndexMovieForModal={getIndexMovieForModal}
                    getIndexMovieForBanner={getIndexMovieForBanner}
                    changeStyleForFooter={changeStyleForFooter}
                    showMovieDetails={showMovieDetails}
                />
            </div>
            <ModalWindow
                open={openModal}
                isAdd={AddMovie}
                isDelete={DeleteMovie}
                closeModalWindow={closeModalWindow}
                movies={movies}
                movieDataIndex={movieDataIndexModal}
                changeStyleForFooter={changeStyleForFooter}
            />
            <div className={`main-page-background-modal ${displayBackgroundClass}`}>
            </div>
        </>
    );
}

export default MainPage;

MainPage.propTypes = {
    changeStyleForFooter: PropTypes.func.isRequired,
}

