import React from 'react';
import sofa from './sofa-logo.png'
import './Header.css'

function Header() {
    return (
        <div class="header ">
            <nav class="navbar navbar-expand-md  ">
                <div class="container">
                    <a class="navbar-brand" href="#!"><img src={sofa} alt='sofa' class="navbar-img"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  " id="navbarTogglerDemo02">
                        <ul class="navbar-nav mb-2 mb-lg-0 p-2">
                            <li class="nav-item">
                                <a class="nav-link me-4" href="#!">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-4" href="#!">Collection</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-4" href="#!">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link me-4" href="#!">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;