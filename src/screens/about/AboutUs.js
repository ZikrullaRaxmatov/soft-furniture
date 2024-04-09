import React from 'react';
import './AboutUs.css'
import img from './aboutUs.png'

function AboutUs() {
    return (
        <div className="about">
            <div className="container">
                <div className="raw about-items flex-row-reverse">
                    <div className="col col-md-6 about-img" >
                        <img src={img} alt='aboutimg' />
                    </div>
                    <div className="col col-md-6 about-item">
                        <h1>Ferghana  Natural Product</h1>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsOur factory has been a company that produces cotton fabrics for use all over the world for many years.</p>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThis company has been serving customers for 17 years.</p>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe main goal of this company is to produce high quality and cost effective products.</p>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe production process of this company is completely environmentally friendly.</p>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company can produce any types of cotton raw materials according to the requirements and suggestions of customers.</p>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company is the official dealer of DongJia weaving machines in Uzbekistan.</p>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsCurrently, more than 80 families contribute to the prestige and success of the company by providing financially for their families.</p>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsTo meet this demand, 50 looms are running at high speed, non-stop.</p>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsWe have the capacity to weave 200-250,000 meters of fabric per month.</p>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsIn accordance with the high demand of our customers, the company has now launched the production of high-quality premium eco-bags.</p>
                        <p>Ferghana matolari, Eco sumkalar, Bukhara fabrics, Eco bagsBukhara Natural Product Company is pleased to serve its loyal customers at any time.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutUs;