// Dependency Imports

import React from 'react';
import { NavLink } from 'react-router-dom';

/*************** 
* The Nav component sets the links for each of the links on the page. 
****************/

const Nav = () => {
    return(
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/rainbows'>Rainbows</NavLink></li>
                <li><NavLink to='/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/waterfalls'>Waterfalls</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;