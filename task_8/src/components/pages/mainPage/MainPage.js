import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Banner from './banner';
import MovieBoard from "./movieBoard";
import ModalWindow from './modalWindow';
import PropTypes from 'prop-types';
import './MainPage.scss';

function MainPage({openModal}) {

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
                <Banner/>
                <MovieBoard/>
            </div>
            <ModalWindow/>
            <div className={`main-page-background-modal ${displayBackgroundClass}`}>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        openModal: state.app.openModal
    }
}

export default connect(mapStateToProps, null)(MainPage);

MainPage.propTypes = {
    openModal: PropTypes.bool.isRequired,
}

