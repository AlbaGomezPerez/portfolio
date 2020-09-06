import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/header.css';

/**
 * Component which render Header content
 */
const Header = () => {
    return (
        <nav className="nav-wrapper">
            <ul className="nav-info">
                <Link className="link" to="/#aboutMe">
                    <li className="tab-container"><p className="nav-tab">Sobre mi</p></li>
                </Link>
                <Link className="link" to="/#projects">
                    <li className="tab-container"><p className="nav-tab">Proyectos</p></li>
                </Link>
                <Link className="link" to="/#contact">
                    <li className="tab-container"><p className="nav-tab">Contacto</p></li>
                </Link>
            </ul>
        </nav>
    );
};

export default Header;
