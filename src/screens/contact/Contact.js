import React from 'react';
import './Contact.css'
import email from './noun_Email_254038.svg'
import phone from './noun_Phone_17950751.svg'
import location from './noun_Location_19355641.svg'
import map from './ferghanaMap.jpg'


function Contact() {
    return (
        <div class="contact">
            <div class="container">
                <div class="raw contact-items">
                    <div class="col-6 contact-form">
                        <h1>Contact</h1>
                        <div class="contact-form-items">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="contact-form-items">
                            <label for="exampleFormControlInput2" class="form-label">Phone number</label>
                            <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Phone number" />
                        </div>
                        <div class="contact-form-items">
                            <label for="exampleFormControlTextarea1" class="form-label">Your message here</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message here" ></textarea>
                        </div>
                        <div class="contact-form-btn">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    <div class="col-6 contact-map">
                        <img src={map} alt='map' />
                    </div>
                </div>
                <div class="raw contact-info">
                    <div class="col-4 contact-info-context">
                        <img src={email} alt='email' class="contact-email" />
                        <div>
                            <h1>Email:</h1>
                            <p>info@ferghanafabric.uz</p>
                        </div>
                    </div>
                    <div class="col-4 contact-info-context">
                        <img src={phone} alt='email' />
                        <div>
                            <h1>Tel:</h1>
                            <p>+998 93 383 75 85 <br />
                                +998 93 960 78 00</p>
                        </div>
                    </div>
                    <div class="col-4 contact-info-context">
                        <img src={location} alt='email' />
                        <div>
                            <h1>Location:</h1>
                            <p>Ferghana, st. Alpomysh 80.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;