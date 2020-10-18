import React from 'react';
import {withRouter} from 'react-router-dom';
import './PageNotFound.scss';

function PageNotFound({history}) {

    return (
        <div className='error-container'>
            <h1 className='error-header'>Page Not Found</h1>
            <p className='error-number'>404</p>
            <button onClick={() => {
                history.push('/');
            }}>GO BACK TO HOME
            </button>
        </div>
    )
}

export default withRouter(PageNotFound);