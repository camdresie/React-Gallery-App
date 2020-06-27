import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return(
            <nav className="main-nav">
                <ul>
                    <li><a href='www.google.com'>Cats</a></li>
                    <li><a href='www.google.com'>Dogs</a></li>
                    <li><a href='www.google.com'>Computers</a></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;