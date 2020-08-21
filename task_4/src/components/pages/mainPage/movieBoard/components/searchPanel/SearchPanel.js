import React, { Component } from "react";
import './SearchPanel.scss'

export default class SearchPanel extends Component{
  render() {
    return (
    <ul className='search-panel-wrapper'>
      <li className='sort-by'>SORT BY</li>
      <li className='second-last'>RELEASE DATE</li>
      <li><div className="arrow-down"></div></li>
    </ul>
    );
  }
}