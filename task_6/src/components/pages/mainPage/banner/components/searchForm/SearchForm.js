import React, {useState} from "react";
import {connect} from 'react-redux';
import {searchMoviesRequest} from '../../../../../../redux/actions';
import './SearchForm.scss';

function SearchForm({searchMoviesRequest}) {

    const [searchState, setSearchState] = useState('');

    const changeStateHandler = event => {
        event.persist();
        setSearchState(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (searchState) {
            searchMoviesRequest(searchState);
            setSearchState('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className='form-wrap'>
            <label htmlFor='search'><h1 className='search-title'>FIND YOUR MOVIE</h1></label>
            <input
                type="text"
                size="40"
                placeholder="What do you want to watch?"
                className='search-input'
                name='search'
                value={searchState}
                onChange={changeStateHandler}>
            </input>
            <input
                type="submit"
                value="SEARCH"
                className='search-button'>
            </input>
        </form>
    );
}

const mapDispatchToProps = {
    searchMoviesRequest
}

export default connect(null, mapDispatchToProps)(SearchForm);
