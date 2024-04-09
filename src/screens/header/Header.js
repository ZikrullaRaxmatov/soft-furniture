import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import sofa from './sofa-logo.png'
import telegram from './imgs/telegram-icon.png'
import eng from './imgs/flag-eng.jpg'
import uzb from './imgs/flag-uzb.png'
import kor from './imgs/flag-kor.png'

function Header() {
    return (
        <div class="header ">
            <nav class="navbar navbar-expand-md">
                <div class="container">
                    <Link class="navbar-brand w-50 d-md-none" to="/"><img src={sofa} alt='sofa' class="navbar-img" /></Link>
                    <Link class="navbar-brand d-none d-md-block" to="/"><img src={sofa} alt='sofa' class="navbar-img" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mb-2 mb-lg-0 p-2">
                            <li class="nav-item">
                                <Link class="nav-link me-4" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link me-4" to="/collection">Collection</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link me-4" to="/about">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link me-4" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown dropdown-language ">
                        <button class="btn btn-secondary1 lan-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                        </button>
                        <ul class="dropdown-menu lan-menu">
                            <li><a class="dropdown-item lan-item" href="#!"><img className='rounded me-2' style={{ width: "30px" }} src={eng} alt="Eng" /> English</a></li>
                            <li><a class="dropdown-item lan-item" href="#!"><img className='rounded me-2' style={{ width: "30px" }} src={uzb} alt="Uzb" /> O'zbekcha</a></li>
                            <li><a class="dropdown-item lan-item" href="#!"><img className='rounded me-2' style={{ width: "30px" }} src={kor} alt="Kor" /> 한국어</a></li>
                        </ul>
                    </div>
                    <div class="telegramm">
                        <span class="tg-msg">Write us</span>
                        <div class="tg-contact">
                            <Link to={"/contact"} > <img src={telegram} alt='tg' class="tg-img " /> </Link>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Header;