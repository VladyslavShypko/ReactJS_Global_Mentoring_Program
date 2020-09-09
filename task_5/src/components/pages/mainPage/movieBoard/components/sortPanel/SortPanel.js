import React from "react";
import './SortPanel.scss'

function SortPanel() {
    return (
        <ul className='sort-panel-wrapper'>
            <li className='sort-by'>SORT BY</li>
            <li className='second-last'>RELEASE DATE</li>
            <li>
                <div className="arrow-down"></div>
            </li>
        </ul>
    );
}

export default SortPanel;
