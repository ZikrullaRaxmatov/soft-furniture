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
                        <p className="footer-context">{t("footer.subtitle")}</p>
                    </div>
                    <div className="col-md-3 p-3">
                        <h6 className="text-dark fw-bold text-center">{t("footer.title1")}</h6>
                        <ul className="footer-list">
                            <li> <Link to={"/"} className='footer-item' >{t("footer.home")}</Link> </li>
                            <li><Link to={"/about"} className='footer-item' >{t("footer.about")}</Link></li>
                            <li><Link to={"/collection"} className='footer-item' >{t("footer.collection")}</Link></li>
                            <li><Link to={"/contact"} className='footer-item' >{t("footer.contact")}</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 p-3">
                        <h6 className="text-dark fw-bold text-center">{t("footer.title2")}</h6>
                        <ul className="footer-list">
                            <li>Ferghana, st. Alpomysh 80.</li>
                            <li>Bnpuz@bk.ru</li>
                            <li>info@farfabric.com</li>
                            <li>+998 93 966 77 00</li>
                        </ul>
                    </div>
                    <div className="col-md-3 p-3">
                        <h6 className="text-dark fw-bold text-center">{t("footer.title3")}</h6>
                        <button className="btn btn-danger rounded-pill w-100 mt-4">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <h6>© 2024 LLC "FERGHANA NATURAL PRODUCT". {t("footer.private")}.</h6>
            </div>
        </div>
    );
}

export default Footer;