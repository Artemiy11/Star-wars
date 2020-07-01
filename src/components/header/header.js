import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>StarDB</h1>
            <ul className="header-ul">
                <li className="header-li"><a href="#">People</a></li>
                <li className="header-li"><a href="#">Planets</a></li>
                <li className="header-li"><a href="#">Starships</a></li>
            </ul>
        </div>
    )
}

export default Header;