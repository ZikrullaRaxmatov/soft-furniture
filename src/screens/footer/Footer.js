import React from 'react';
import './Footer.css'
import sofa from '../header/sofa-logo.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div class="footer">
            <div class="container">
                <div class="raw d-md-flex">
                    <div class="col-md-3">
                        <img src={sofa} alt='logo' class="footer-logo" />
                        <p class="footer-context">'Ferghana Natural Product' has been a company that produces cotton fabrics for many years for use all over the world.</p>
                    </div>
                    <div class="col-md-3 p-3">
                        <h6 class="text-dark fw-bold text-center">Menu</h6>
                        <ul class="footer-list">
                            <li> <Link to={"/"}>Home</Link> </li>
                            <li><Link to={"/about"}>About Us</Link></li>
                            <li><Link to={"/collection"}>Collection</Link></li>
                            <li><Link to={"/contact"}>Contacts</Link></li>
                        </ul>
                    </div>
                    <div class="col-md-3 p-3">
                        <h6 class="text-dark fw-bold text-center">Contact</h6>
                        <ul class="footer-list">
                            <li>Ferghana, st. Alpomysh 80.</li>
                            <li>Bnpuz@bk.ru</li>
                            <li>info@farfabric.com</li>
                            <li>+998 93 966 77 00</li>
                        </ul>
                    </div>
                    <div class="col-md-3 p-3">
                        <h6 class="text-dark fw-bold text-center">Subscribe</h6>
                        <button class="btn btn-danger rounded-pill w-100 mt-4">Subscribe</button>
                    </div>
                </div>
            </div>
            <div class="footer-end">
                <h6>© 2024 LLC "FERGHANA NATURAL PRODUCT". All rights reserved.</h6>
            </div>
        </div>
    );
}

export default Footer;