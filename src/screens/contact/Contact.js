import React, { useState } from 'react';
import './Contact.css'
import emailImg from './noun_Email_254038.svg'
import phoneImg from './noun_Phone_17950751.svg'
import location from './noun_Location_19355641.svg'
import map from './ferghanaMap.jpg'
import { useTranslation } from 'react-i18next';
import {toast} from 'react-toastify'


function Contact() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const chat_id = "755982207"
    const token = "7124709406:AAEuYY7m0GCQtcopulUdH2WesRL0VvrK1XI"

    const submit = async () => {
        // e.preventDefault()

        if (phone && email && message) {
            await fetch(`https://api.telegram.org/bot${token}/sendmessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: `Phone: ${phone} \nEmail: ${email} \nMessage: ${message} `
                })
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Your information has been send successfully!")
                    setPhone("")
                    setEmail("")
                    setMessage("")
                })
                .catch(err => {
                    toast.error("Somthing went wrong!")
                })
        } else {
            toast.error("Please, fill out the fields!")
        }
    }

    return (
        <div className="contact">
            <div className="container">
                <div className="raw contact-items">
                    <div className="col col-md-6 contact-form">
                        <h1>{t("contact.contact")}</h1>
                        <div className="contact-form-items">
                            <label htmlFor="exampleFormControlInput1" className="form-label" >{t("contact.email")}</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="contact-form-items">
                            <label htmlFor="exampleFormControlInput2" className="form-label">{t("contact.phone")}</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput2"
                                placeholder="Phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="contact-form-items">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">{t("contact.message")}</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3" placeholder="Your message here"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="contact-form-btn">
                            <button className="btn btn-primary" onClick={() => submit()} >{t("contact.submit")}</button>
                        </div>
                    </div>
                    <div className="col col-md-6 contact-map">
                        <img src={map} alt='map' />
                    </div>
                </div>
                <div className="raw contact-info">
                    <div className="col col-md-4 contact-info-context">
                        <img src={emailImg} alt='email' className="contact-email" />
                        <div>
                            <h1>{t("contact.email")}:</h1>
                            <p>info@ferghanafabric.uz</p>
                        </div>
                    </div>
                    <div className="col col-md-4 contact-info-context">
                        <img src={phoneImg} alt='email' />
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