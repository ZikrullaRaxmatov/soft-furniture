import React, { useEffect, useState } from 'react';
import './Collection.css'
import img from '../home/collection/diz-23-scaled.jpg'
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
import { useParams } from "react-router-dom";
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

console.log(winterCollection);

function CollectionItem() {

    // eslint-disable-next-line
    const [t, i18n] = useTranslation("global")

    const { itemId } = useParams()
    const [activeDesc, setActiveDesc] = useState(true)
    const [activeReviw, setActiveReviw] = useState(false)

    useEffect(() => {
        console.log(itemId);
    }, [itemId])

    const handleActiveDesc = () => {
        setActiveDesc(true)
        setActiveReviw(false)
    }

    const handleActiveReview = () => {
        setActiveDesc(false)
        setActiveReviw(true)
    }

    return (
        <div className="collectionItem">
            <div className="container">
                <div className="raw collectionItem-items">
                    <div className="col col-md-7 collectionItem-img">
                        {/* {winterCollection.map(item => {
                            if (item.id === itemId) {
                                return <img src={item.id} alt='...' key={item.id} />
                            } else {
                                return <img src={img} alt='...' key={item.id} />
                            }
                        }
                        )} */}
                        <img src={img} alt='...' />
                    </div>
                    <div className="col col-md-5 collectionItem-table">
                        <h1>Byzantium</h1>
                        <table className="table table-striped-columns">
                            <tbody>
                                <tr>
                                    <td className="collectionItem-table-data" >{t("collectionItem.meterial")}</td>
                                    <td className="collectionItem-table-data" >{t("collectionItem.meterialD")}</td>
                                </tr>
                                <tr>
                                    <td className="collectionItem-table-data" >{t("collectionItem.pillowcase")}</td>
                                    <td className="collectionItem-table-data" >{t("collectionItem.pillowcaseD")}</td>
                                </tr>
                                <tr>
                                    <td className="collectionItem-table-data" >{t("collectionItem.bedsheet")}</td>
                                    <td className="collectionItem-table-data" >{t("collectionItem.bedsheetD")}</td>
                                </tr>
                                <tr>
                                    <td className="collectionItem-table-data" >{t("collectionItem.duvetcover")}</td>
                                    <td className="collectionItem-table-data" >{t("collectionItem.duvetcoverD")}</td>
                                </tr>
                                <tr>
                                    <td className="collectionItem-table-data" >{t("collectionItem.size")}</td>
                                    <td className="collectionItem-table-data" >{t("collectionItem.sizeD")}</td>
                                </tr>
                                <tr>
                                    <td className="collectionItem-table-data" >{t("collectionItem.manufacturer")}</td>
                                    <td className="collectionItem-table-data" >{t("collectionItem.manufacturerD")}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>{t("collectionItem.category")}: <span>{t("collectionItem.categoryD")}</span></p>
                    </div>
                </div>


                <div className="collectionItem-tabs">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className={activeDesc ? "nav-link active" : "nav-link"} onClick={() => handleActiveDesc()} >{t("collectionItem.description")}</button>
                            {/* <a className="nav-link active " href="#!">Description</a> */}
                        </li>
                        <li className="nav-item">
                            <button className={activeReviw ? "nav-link active" : "nav-link"} onClick={() => handleActiveReview()} >{t("collectionItem.review")} (0)</button>
                            {/* <a className="nav-link" href="#!">Reviews </a> */}
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <div className={`collectionItem-description ${activeDesc ? "" : "d-none"}`}>
                        <h1>{t("collectionItem.description")}</h1>
                        <span>{t("collectionItem.subtitleD")}</span>
                        <p>{t("collectionItem.text")}</p>
                    </div>

                    <div className={`collectionItem-reviews ${activeReviw ? "" : "d-none"}`}>
                        <h1>{t("collectionItem.review")}</h1>
                        <span>{t("collectionItem.reviewResult")}</span>

                        <h1 className="mt-3">{t("collectionItem.subtitleR")}</h1>
                        <span>{t("collectionItem.validation")}</span>
                        <p>{t("collectionItem.mark")}</p>

                        <form>
                            <div className="raw collectionItem-reviews-form">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="name" className="form-label text-muted">{t("collectionItem.name")} *</label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="email" className="form-label text-muted">{t("collectionItem.email")} *</label>
                                    <input type="text" className="form-control" id="email" />
                                </div>
                            </div>
                            <div className="raw collectionItem-reviews-feedback">
                                <div className="col-12">
                                    <label htmlFor="feedback" className="form-label text-muted">{t("collectionItem.feedback")} *</label>
                                    <textarea type="text" className="form-control" id="feedback" />
                                </div>
                            </div>
                            <div className="collectionItem-submit">
                                <button type="submit" className="btn btn-primary">{t("collectionItem.submit")}</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="collectionItem-similar-products">
                    <h1>{t("collectionItem.similar")}</h1>
                    <div className="row row-cols-1 row-cols-md-4 g-3">
                        <div className="col">
                            <div className="card card-collection h-100 ">
                                <img src={win15} className="card-img-top" alt="news1" />
                                <div className="card-body">
                                    <h6 className="card-title news-title"> Squares </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-collection h-100 ">
                                <img src={win20} className="card-img-top" alt="news1" />
                                <div className="card-body">
                                    <h6 className="card-title news-title"> Bambi </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-collection h-100 ">
                                <img src={win17} className="card-img-top" alt="news1" />
                                <div className="card-body">
                                    <h6 className="card-title news-title"> Circles </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card card-collection h-100 ">
                                <img src={win24} className="card-img-top" alt="news1" />
                                <div className="card-body">
                                    <h6 className="card-title news-title"> Lavender roses </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CollectionItem;