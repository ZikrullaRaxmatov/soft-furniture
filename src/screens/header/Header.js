import React from 'react';
import sofa from './sofa-logo.png'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div class="header ">
            <nav class="navbar navbar-expand-md  ">
                <div class="container">
                    <Link class="navbar-brand" to="/"><img src={sofa} alt='sofa' class="navbar-img"/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  " id="navbarTogglerDemo02">
                        <ul class="navbar-nav mb-2 mb-lg-0 p-2">
                            <li class="nav-item">
                                <Link class="nav-link me-4" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link me-4" to="/collection">Collection</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link me-4" to="#!">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link me-4" to="#!">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;