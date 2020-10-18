import React, {useState} from "react";
import {connect} from 'react-redux';
import {getMovies} from "../../../../../../redux/actions";
import './SortPanel.scss'

function SortPanel({getMovies}) {

    const [sortBy, setSortBy] = useState('desc');

    const sortByRelease = () => {
        const el = document.getElementById('arrow');

        if (sortBy === 'asc') {
            getMovies({sortOrder: 'desc'});
            setSortBy('desc');
            el.classList.remove('arrow-top');
            el.classList.add('arrow-down');
        } else {
            getMovies({sortOrder: 'asc'});
            setSortBy('asc');
            el.classList.remove('arrow-down');
            el.classList.add('arrow-top');
        }
    }

    return (
        <ul className='sort-panel-wrapper'>
            <li className='sort-by'>SORT BY</li>
            <li className='second-last' onClick={sortByRelease}>RELEASE DATE</li>
            <li>
                <div id='arrow' className="arrow-down"></div>
            </li>
        </ul>
    );
}

const mapDispatchToProps = {
    getMovies
}

export default connect(null, mapDispatchToProps)(SortPanel);
