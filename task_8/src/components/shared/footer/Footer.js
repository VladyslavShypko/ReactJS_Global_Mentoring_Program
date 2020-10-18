import React from "react";
import {connect} from 'react-redux'
import Logo from '../logo';
import PropTypes from 'prop-types';
import './Footer.scss'

function Footer({changeStyle}) {
    const changeStyleClass = changeStyle ? 'modal-window-open' : '';
    return (
        <div className={`footer ${changeStyleClass}`}>
            <Logo/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        changeStyle: state.app.changeStyle
    }
}

export default connect(mapStateToProps, null)(Footer)

Footer.propTypes = {
    changeStyle: PropTypes.bool.isRequired,
}
