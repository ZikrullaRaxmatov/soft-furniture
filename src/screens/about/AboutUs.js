import React from 'react';
import './AboutUs.css'
import img from './aboutUs.png'
import { useTranslation } from 'react-i18next';

function AboutUs() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className="about">
            <div className="container">
                <div className="raw about-items flex-row-reverse">
                    <div className="col col-md-6 about-img" >
                        <img src={img} alt='aboutimg' />
                    </div>
                    <div className="col col-md-6 about-item">
                        <h1>Ferghana  Natural Product</h1>
                        <p>{t("about.desc1")}</p>
                        <p>{t("about.desc2")}</p>
                        <p>{t("about.desc3")}</p>
                        <p>{t("about.desc4")}</p>
                        <p>{t("about.desc5")}</p>
                        <p>{t("about.desc6")}</p>
                        <p>{t("about.desc7")}</p>
                        <p>{t("about.desc8")}</p>
                        <p>{t("about.desc9")}</p>
                        <p>{t("about.desc10")}</p>
                        <p>{t("about.desc11")}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutUs;