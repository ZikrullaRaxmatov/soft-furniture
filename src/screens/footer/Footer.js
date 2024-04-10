import React from 'react';
import './Footer.css'
import sofa from '../header/sofa-logo.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className="footer">
            <div className="container">
                <div className="raw d-md-flex">
                    <div className="col-md-3">
                        <img src={sofa} alt='logo' className="footer-logo" />
                        <p className="footer-context">'Ferghana Natural Product' has been a company that produces cotton fabrics for many years for use all over the world.</p>
                    </div>
                    <div className="col-md-3 p-3">
                        <h6 className="text-dark fw-bold text-center">Menu</h6>
                        <ul className="footer-list">
                            <li> <Link to={"/"} className='footer-item' >Home</Link> </li>
                            <li><Link to={"/about"} className='footer-item' >About Us</Link></li>
                            <li><Link to={"/collection"} className='footer-item' >Collection</Link></li>
                            <li><Link to={"/contact"} className='footer-item' >Contacts</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 p-3">
                        <h6 className="text-dark fw-bold text-center">Contact</h6>
                        <ul className="footer-list">
                            <li>Ferghana, st. Alpomysh 80.</li>
                            <li>Bnpuz@bk.ru</li>
                            <li>info@farfabric.com</li>
                            <li>+998 93 966 77 00</li>
                        </ul>
                    </div>
                    <div className="col-md-3 p-3">
                        <h6 className="text-dark fw-bold text-center">Subscribe</h6>
                        <button className="btn btn-danger rounded-pill w-100 mt-4">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <h6>© 2024 LLC "FERGHANA NATURAL PRODUCT". All rights reserved.</h6>
            </div>
        </div>
    );
}

export default Footer;