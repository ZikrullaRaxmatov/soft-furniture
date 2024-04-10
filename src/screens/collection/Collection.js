import React from 'react';
import './Collection.css'

import win15 from '../home/collection/diz-15-scaled-370x278.jpg'
import win16 from '../home/collection/diz-16-scaled-370x278.jpg'
import win17 from '../home/collection/diz-17-scaled-370x278.jpg'
import win18 from '../home/collection/diz-18-scaled-370x278.jpg'
import win19 from '../home/collection/diz-19-scaled-370x278.jpg'
import win20 from '../home/collection/diz-20-scaled-370x278.jpg'
import win21 from '../home/collection/diz-21-370x278.jpg'
import win22 from '../home/collection/diz-22-scaled-370x278.jpg'
import win23 from '../home/collection/diz-23-scaled-370x278.jpg'
import win24 from '../home/collection/diz-24-scaled-370x278.jpg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const winterCollection = [
    {
        id: "15",
        name: win15,
        type: "Squares"
    },
    {
        id: "16",
        name: win16,
        type: "Ikat"
    },
    {
        id: "17",
        name: win17,
        type: "Circles"
    },
    {
        id: "18",
        name: win18,
        type: "Geometry blue"
    },
    {
        id: "19",
        name: win19,
        type: "Tropical leaves"
    },
    {
        id: "20",
        name: win20,
        type: "Bambi"
    },
    {
        id: "21",
        name: win21,
        type: "Byzantium"
    },
    {
        id: "22",
        name: win22,
        type: "Evening garden"
    },
    {
        id: "23",
        name: win23,
        type: "Feather Marquis"
    },
    {
        id: "24",
        name: win24,
        type: "Lavender roses"
    },
]


function Collection() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    return (
        <div className="collection mt-4 mb-4">
            <div className="container">
                <div className="raw d-md-flex">
                    <div className="col col-md-4">
                        <div className="collection-left">
                            <div className="collection-left-search">
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <span className="input-group-text"><i className="fa-solid fa-magnifying-glass text-primary"></i></span>
                                </div>

                                <div className="accordion collectionItem-accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                {t("collection.title")}
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                            <ul className="dropdown-list">
                                                <li><a className="dropdown-item dropdown-link " href="#!">{t("collection.spring")}</a></li>
                                                <li><a className="dropdown-item dropdown-link" href="#!">{t("collection.summer")}</a></li>
                                                <li><a className="dropdown-item dropdown-link" href="#!">{t("collection.autumn")}</a></li>
                                                <li><a className="dropdown-item dropdown-link" href="#!">{t("collection.winter")}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col  col-md-8">
                        <div className="collection-right">
                            <div className="collection-right-title">
                                <div>
                                    <h1>{t("collection.title")}</h1>
                                    <span>{t("collection.showing")}</span>
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                    {t("collection.sort")}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item dropdown-link" href="#!">{t("collection.popularity")}</a></li>
                                        <li><a className="dropdown-item dropdown-link" href="#!">{t("collection.rating")}</a></li>
                                        <li><a className="dropdown-item dropdown-link" href="#!">{t("collection.novelty")}</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="collection-right-images">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                                    {winterCollection.map(item => (
                                        <Link to={`/product/${item.id}`}>
                                            <div className="col">
                                                <div className="card card-collection h-100 ">
                                                    <img src={item.name} className="card-img-top" alt="news1" />
                                                    <div className="card-body">
                                                        <h6 className="card-title news-title">  {item.type} </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="btn-toolbar mt-4 d-flex justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-primary collection-next-btn active">1</button>
                                    <button type="button" className="btn btn-primary collection-next-btn">2</button>
                                    <button type="button" className="btn btn-primary collection-next-btn">3</button>
                                    <button type="button" className="btn btn-primary collection-next-btn">4</button>
                                </div>
                                <div className="btn-group" role="group" aria-label="Third group">
                                    <button type="button" className="btn btn-info collection-next-btn"><i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;