import React from "react";
import {connect} from 'react-redux';
import {filterMoviesRequest, getMovies} from "../../../../../../redux/actions";
import './CategoryPanel.scss'

function CategoryPanel({filterMoviesRequest, getMovies}) {

    const changeActiveClass = (event) => {
        const ul = event.target.parentNode;
        if (!event.target.classList.contains('active')) {
            if (event.target.getAttribute('id') === 'all') {
                getMovies();
            } else {

                filterMoviesRequest(event.target.getAttribute('id'));
            }
            ul.getElementsByClassName('active')[0].classList.remove('active');
            event.target.classList.add('active');
        }
    }

    return (
        <ul className='category-panel-wrapper'>
            <li className='active' id='all' onClick={changeActiveClass}>ALL</li>
            <li id='documentary' onClick={changeActiveClass}>DOCUMENTARY</li>
            <li id='comedy' onClick={changeActiveClass}>COMEDY</li>
            <li id='horror' onClick={changeActiveClass}>HORROR</li>
            <li id='crime' onClick={changeActiveClass}>CRIME</li>
        </ul>
    );
}

const mapDispatchToProps = {
    filterMoviesRequest, getMovies
}

export default connect(null, mapDispatchToProps)(CategoryPanel);


