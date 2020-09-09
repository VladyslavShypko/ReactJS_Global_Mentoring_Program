import React from "react";
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
export default Footer;
Footer.propTypes = {
    changeStyle: PropTypes.bool.isRequired,
}
