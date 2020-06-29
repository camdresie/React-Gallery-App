import React from 'react';

const Nav = () => {
    return(
        <nav className="main-nav">
            <ul>
                <li><a href='/rainbows'>Rainbows</a></li>
                <li><a href='/dogs'>Dogs</a></li>
                <li><a href='/waterfalls'>Waterfalls</a></li>
            </ul>
        </nav>
    );
}

export default Nav;