import React, { Component } from "react";
import Logo from '../logo';
import './Footer.scss'

export default class Footer extends Component {

    render() {
        return (
            <div className='footer'>
               <Logo />
            </div>
        );
    }
}