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

function CollectionItem() {

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
        <div class="collectionItem">
            <div class="container">
                <div class="raw collectionItem-items">
                    <div class="col-7 collectionItem-img">
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
                    <div class="col-5 collectionItem-table">
                        <h1>Byzantium</h1>
                        <table class="table table-striped-columns">
                            <tbody>
                                <tr>
                                    <td class="collectionItem-table-data" >Material:</td>
                                    <td class="collectionItem-table-data" >100% cotton flannel</td>
                                </tr>
                                <tr>
                                    <td class="collectionItem-table-data" >Pillowcase:</td>
                                    <td class="collectionItem-table-data" >50x70 cm (2 pcs.)</td>
                                </tr>
                                <tr>
                                    <td class="collectionItem-table-data" >Bed sheet:</td>
                                    <td class="collectionItem-table-data" >260×280 cm (1 piece)</td>
                                </tr>
                                <tr>
                                    <td class="collectionItem-table-data" >Duvet cover:</td>
                                    <td class="collectionItem-table-data" >160x220 cm (2 pcs.)</td>
                                </tr>
                                <tr>
                                    <td class="collectionItem-table-data" >Size:</td>
                                    <td class="collectionItem-table-data" >Special size</td>
                                </tr>
                                <tr>
                                    <td class="collectionItem-table-data" >Manufacturer:</td>
                                    <td class="collectionItem-table-data" >Ferghana Natural Product</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Category: <span>Winter collection</span></p>
                    </div>
                </div>


                <div class="collectionItem-tabs">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <button class={activeDesc ? "nav-link active" : "nav-link"} onClick={() => handleActiveDesc()} >Description</button>
                            {/* <a class="nav-link active " href="#!">Description</a> */}
                        </li>
                        <li class="nav-item">
                            <button class={activeReviw ? "nav-link active" : "nav-link"} onClick={() => handleActiveReview()} >Reviews (0)</button>
                            {/* <a class="nav-link" href="#!">Reviews </a> */}
                        </li>
                    </ul>
                </div>
                <div class="container">
                    <div class={`collectionItem-description ${activeDesc ? "" : "d-none"}`}>
                        <h1>Description</h1>
                        <span>Bed linen set Byzantium</span>
                        <p>Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.</p>
                    </div>

                    <div class={`collectionItem-reviews ${activeReviw ? "" : "d-none"}`}>
                        <h1>Reviews</h1>
                        <span>There is no review yet!</span>

                        <h1 class="mt-3">Be the first to review “Byzantium”</h1>
                        <span>Your email address will not be published. Required fields are marked *</span>
                        <p>Your mark *</p>

                        <form>
                            <div class="raw collectionItem-reviews-form">
                                <div class="col-6">
                                    <label htmlFor="name" class="form-label text-muted">Name *</label>
                                    <input type="text" class="form-control" id="name" />
                                </div>
                                <div class="col-6">
                                    <label htmlFor="email" class="form-label text-muted">Email *</label>
                                    <input type="text" class="form-control" id="email" />
                                </div>
                            </div>
                            <div class="raw collectionItem-reviews-feedback">
                                <div class="col">
                                    <label htmlFor="feedback" class="form-label text-muted">Feedback *</label>
                                    <textarea type="text" class="form-control" id="feedback" />
                                </div>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="collectionItem-similar-products">
                    <h1>Similar products</h1>
                    <div class="row row-cols-1 row-cols-md-4 g-3">
                        <div class="col">
                            <div class="card card-collection h-100 ">
                                <img src={win15} class="card-img-top" alt="news1" />
                                <div class="card-body">
                                    <h6 class="card-title news-title"> Squares </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card-collection h-100 ">
                                <img src={win20} class="card-img-top" alt="news1" />
                                <div class="card-body">
                                    <h6 class="card-title news-title"> Bambi </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card-collection h-100 ">
                                <img src={win17} class="card-img-top" alt="news1" />
                                <div class="card-body">
                                    <h6 class="card-title news-title"> Circles </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card-collection h-100 ">
                                <img src={win24} class="card-img-top" alt="news1" />
                                <div class="card-body">
                                    <h6 class="card-title news-title"> Lavender roses </h6>
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