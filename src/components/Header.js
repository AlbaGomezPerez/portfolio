import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/header.css';
// import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Header = () => {
    AOS.init({
        duration: 100000,
    });

    return (
          <nav className="nav-wrapper" data-aos="nav-animation">
            <ul className="nav-info">
                <Link className="link" to="#aboutMe">
                    <li className="tab-container"><p className="nav-tab">Sobre mi</p></li>
                </Link>
                <Link className="link" to="#projects">
                    <li className="tab-container"><p className="nav-tab">Proyectos</p></li>
                </Link>
                <Link className="link" to="#contact">
                    <li className="tab-container"><p className="nav-tab">Contacto</p></li>
                </Link>
            </ul>
          </nav>
    );
};

export default Header;
