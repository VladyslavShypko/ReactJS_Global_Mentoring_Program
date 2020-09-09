import React from "react";
import PropTypes from 'prop-types';
import './NumberFoundMovies.scss'

function NumberFoundFilms({count}) {
    return (
        <p className='number-films'><span>{count}</span>movies found</p>
    );
}

export default NumberFoundFilms;

NumberFoundFilms.propTypes = {
    count: PropTypes.number.isRequired,
};
