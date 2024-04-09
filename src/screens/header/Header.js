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
        <div className="header ">
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <Link className="navbar-brand w-50 d-md-none" to="/"><img src={sofa} alt='sofa' className="navbar-img" /></Link>
                    <Link className="navbar-brand d-none d-md-block" to="/"><img src={sofa} alt='sofa' className="navbar-img" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mb-2 mb-lg-0 p-2">
                            <li className="nav-item">
                                <Link className="nav-link me-4" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-4" to="/collection">Collection</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-4" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me-4" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-language ">
                        <button className="btn btn-secondary1 lan-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                        </button>
                        <ul className="dropdown-menu lan-menu">
                            <li><a className="dropdown-item lan-item" href="#!"><img classNameName='rounded me-2' style={{ width: "30px" }} src={eng} alt="Eng" /> English</a></li>
                            <li><a className="dropdown-item lan-item" href="#!"><img classNameName='rounded me-2' style={{ width: "30px" }} src={uzb} alt="Uzb" /> O'zbekcha</a></li>
                            <li><a className="dropdown-item lan-item" href="#!"><img classNameName='rounded me-2' style={{ width: "30px" }} src={kor} alt="Kor" /> 한국어</a></li>
                        </ul>
                    </div>
                    <div className="telegramm">
                        <span className="tg-msg">Write us</span>
                        <div className="tg-contact">
                            <Link to={"/contact"} > <img src={telegram} alt='tg' className="tg-img " /> </Link>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Header;