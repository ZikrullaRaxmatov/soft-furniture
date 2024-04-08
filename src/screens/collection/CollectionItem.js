import React, { useState } from 'react';
import './Collection.css'
import img from '../home/img/111.png'

function CollectionItem() {

    const [active, setActive] = useState("")

    const handleActive = () => {
        setActive("active")
    }

    return (
        <div class="collectionItem">
            <div class="container">
                <div class="raw collectionItem-items">
                    <div class="col-7 collectionItem-img">
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
                            <button class="nav-link active">Description</button>
                            {/* <a class="nav-link active " href="#!">Description</a> */}
                        </li>
                        <li class="nav-item">
                        <button class="nav-link">Reviews (0)</button>
                            {/* <a class="nav-link" href="#!">Reviews </a> */}
                        </li>
                    </ul>
                </div>
                <div class="container">
                    <div class="collectionItem-description d-none">
                        <h1>Description</h1>
                        <span>Bed linen set Byzantium</span>
                        <p>Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.</p>
                    </div>

                    <div class="collectionItem-reviews">
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
                                <img src={img} class="card-img-top" alt="news1" />
                                <div class="card-body">
                                    <h6 class="card-title news-title"> Title </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card-collection h-100 ">
                                <img src={img} class="card-img-top" alt="news1" />
                                <div class="card-body">
                                    <h6 class="card-title news-title"> Title </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card-collection h-100 ">
                                <img src={img} class="card-img-top" alt="news1" />
                                <div class="card-body">
                                    <h6 class="card-title news-title"> Title </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card card-collection h-100 ">
                                <img src={img} class="card-img-top" alt="news1" />
                                <div class="card-body">
                                    <h6 class="card-title news-title"> Title </h6>
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