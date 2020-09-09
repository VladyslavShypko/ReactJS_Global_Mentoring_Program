import React from "react";
import './CategoryPanel.scss'

function CategoryPanel() {
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

export default CategoryPanel;


