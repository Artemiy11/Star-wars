import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h1><Link className="header-main" to="/">StarDB</Link></h1>
            <ul className="header-ul">
                <li className="header-li"><Link to="/characters">People</Link></li>
                <li className="header-li"><Link to="/planets">Planets</Link></li>
                <li className="header-li"><Link to="/starships">Starships</Link></li>
            </ul>
        </div>
    )
}

export default Header;