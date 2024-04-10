import React from 'react';
import news1 from './img/adult-blur-close-up-267394-637x357.png'
import news2 from './img/billetto-editorial-334686-unsplash-637x357.png'
import news3 from './img/daniel-korpai-1074289-unsplash-637x357.png'
import { useTranslation } from 'react-i18next';

function News() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className="news mb-5">
            <div className="container">
                <div className="news-items text-center mt-2 mt-md-3 mt-lg-4">
                    <h1 className="fw-bold ">{t("news.title")}</h1>
                    <p className="fw-light fst-italic text-muted">Ferghana Natural Product</p>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        <div className="col">
                            <div className="card card-news h-100 ">
                                <img src={news1} className="card-img-top" alt="news1" />
                                <div className="card-body">
                                    <h6 className="card-title news-title">{t("news.title1")}</h6>
                                    <p className="card-text news-context">{t("news.subtitle1")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-news h-100">
                                <img src={news2} className="card-img-top" alt="news2" />
                                <div className="card-body">
                                    <h6 className="card-title news-title">{t("news.title1")}</h6>
                                    <p className="card-text news-context">{t("news.subtitle1")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-news h-100">
                                <img src={news3} className="card-img-top" alt="news3" />
                                <div className="card-body">
                                    <h6 className="card-title news-title">{t("news.title1")}</h6>
                                    <p className="card-text news-context">{t("news.subtitle1")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News