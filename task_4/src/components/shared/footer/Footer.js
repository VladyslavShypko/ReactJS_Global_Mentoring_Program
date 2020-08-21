import React, { Component } from "react";
import Logo from '../logo';
import PropTypes from 'prop-types';
import './Footer.scss'

export default class Footer extends Component {


    render() {
        const { changeStyle } = this.props;
        const changeStyleClass = changeStyle ? 'modal-window-open' : '';
        return (
                <div className={`footer ${changeStyleClass}`}>
                    <Logo />
                </div>
        );
    }
}

Footer.propTypes = {
   changeStyle: PropTypes.bool.isRequired,
}