import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.webp';
import logowhite from '../../assets/images/logos/logo-white.svg';
import './Header.css';

export default function Header() {
  return <>
    <div className='header'>
      <nav class="navbar">
        <div class="container">
          <div className='nav-left-group'>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">
              <img src={logowhite} className="logo" alt="logo" />
            </a>
          </div>
          <div class="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ margin: 0 }}>
              </button>
              <img src={logo} className="logo" alt='logo' />
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">My Account</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Fleet</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Offices</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
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
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </a>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li>
      <hr class="dropdown-divider" />
    </li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</li>
*/