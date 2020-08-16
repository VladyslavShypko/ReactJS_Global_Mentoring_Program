import React, { Component } from "react";
import './CategoryPanel.scss'

export default class CategoryPanel extends Component{
  render() {
    return (
    <ul className='category-panel-wrapper'>
      <li className='active'>ALL</li>
      <li>DOCUMENTARY</li>
      <li>COMEDY</li>
      <li>HORROR</li>
      <li>CRIME</li>
    </ul>
    );
  }
}