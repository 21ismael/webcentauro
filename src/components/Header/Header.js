import React from 'react';
//import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.webp';
import logowhite from '../../assets/images/logos/logo-svg.svg';
import nav from '../../utils/nav';
import './Header.css';

export default function Header() {
  return <>
    <div className='header'>
      <nav className="navbar" id="navbar">
        <div className="container">
          <div className='nav-left-group'>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">
              <img src={logowhite} className="logo" alt="logo" />
            </a>
          </div>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ margin: 0 }}>
              </button>
              <img src={logo} className="logo" alt='logo' />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={nav}>Rent a Car</a>
                </li>
                <li className="nav-item nav-link">
                  Offices
                </li>
                <li className="nav-item nav-link">
                  Services
                </li>
                <li className="nav-item nav-link">
                  Log Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </div>
  </>
}

/*
<li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </a>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li>
      <hr className="dropdown-divider" />
    </li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</li>
*/