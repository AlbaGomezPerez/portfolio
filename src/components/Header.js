import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <nav className="nav-wrapper">
          <ul className="hide-on-med-and-down nav-info">
              <Link className="CardLink" to={'/aboutMe'}>
                  <li><p className="nav-tab">Sobre mi</p></li>
              </Link>
              <Link className="CardLink" to={'/proyects'}>
                  <li><p className="nav-tab">Proyectos</p></li>
              </Link>
              <Link className="CardLink" to={'/contact'}>
                  <li><p className="nav-tab">Contacto</p></li>
              </Link>
          </ul>
        </nav>
  );
};

export default Header;
