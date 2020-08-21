import React, { Component } from "react";
import './Logo.scss'

export default class Logo extends Component {

    render() {
        return (
            <div className='logo-wrap'>
                <p className='logo'>
                    netflix
                    <span className='roulette'>roulette</span>
                </p>
            </div>
        );
    }
}