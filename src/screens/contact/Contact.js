import React from 'react';
import './Contact.css'
import email from './noun_Email_254038.svg'
import phone from './noun_Phone_17950751.svg'
import location from './noun_Location_19355641.svg'
import map from './ferghanaMap.jpg'
import { useTranslation } from 'react-i18next';


function Contact() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className="contact">
            <div className="container">
                <div className="raw contact-items">
                    <div className="col col-md-6 contact-form">
                        <h1>{t("contact.contact")}</h1>
                        <div className="contact-form-items">
                            <label for="exampleFormControlInput1" className="form-label">{t("contact.email")}</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="contact-form-items">
                            <label for="exampleFormControlInput2" className="form-label">{t("contact.phone")}</label>
                            <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Phone number" />
                        </div>
                        <div className="contact-form-items">
                            <label for="exampleFormControlTextarea1" className="form-label">{t("contact.message")}</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message here" ></textarea>
                        </div>
                        <div className="contact-form-btn">
                            <button className="btn btn-primary">{t("contact.submit")}</button>
                        </div>
                    </div>
                    <div className="col col-md-6 contact-map">
                        <img src={map} alt='map' />
                    </div>
                </div>
                <div className="raw contact-info">
                    <div className="col col-md-4 contact-info-context">
                        <img src={email} alt='email' className="contact-email" />
                        <div>
                            <h1>{t("contact.email")}:</h1>
                            <p>info@ferghanafabric.uz</p>
                        </div>
                    </div>
                    <div className="col col-md-4 contact-info-context">
                        <img src={phone} alt='email' />
                        <div>
                            <h1>{t("contact.tel")}:</h1>
                            <p>+998 93 383 75 85 <br />
                                +998 93 960 78 00</p>
                        </div>
                    </div>
                    <div className="col col-md-4 contact-info-context">
                        <img src={location} alt='email' />
                        <div>
                            <h1>{t("contact.location")}:</h1>
                            <p>Ferghana, st. Alpomysh 80.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;