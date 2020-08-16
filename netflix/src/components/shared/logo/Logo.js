import React, { Component } from "react";
import './Logo.scss'

export default class Logo extends Component {

    render() {
        return (
            <p className='logo-wrap'>
                netflix
                <span className='roulette'>roulette</span>
            </p>
        );
    }
}