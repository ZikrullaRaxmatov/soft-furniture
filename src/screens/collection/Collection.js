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
    return (
        <div class="collection mt-4 mb-4">
            <div class="container">
                <div class="raw d-flex">
                    <div class="col-4">
                        <div class="collection-left">
                            <div class="collection-left-search">
                                <div class="input-group">
                                    <input type="text" class="form-control" />
                                    <span class="input-group-text"><i class="fa-solid fa-magnifying-glass text-primary"></i></span>
                                </div>
                                <div class="btn-group">
                                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                                        Collection
                                    </button>
                                    <ul class="dropdown-menu w-100 text-center">
                                        <li><a class="dropdown-item dropdown-link " href="#!">Spring collection</a></li>
                                        <li><a class="dropdown-item dropdown-link" href="#!">Summer collection</a></li>
                                        <li><a class="dropdown-item dropdown-link" href="#!">Autumn collection</a></li>
                                        <li><a class="dropdown-item dropdown-link" href="#!">Winter collection</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-8">
                        <div class="collection-right">
                            <div class="collection-right-title">
                                <div>
                                    <h1>Collection</h1>
                                    <span>Showing 1-16 of 76</span>
                                </div>
                                <div class="btn-group">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                                        Initial sort
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item dropdown-link" href="#!">By popularity</a></li>
                                        <li><a class="dropdown-item dropdown-link" href="#!">By rating</a></li>
                                        <li><a class="dropdown-item dropdown-link" href="#!">By novelty</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="collection-right-images">
                                <div class="row row-cols-1 row-cols-md-3 g-3">
                                    {winterCollection.map(item => (
                                        <div class="col">
                                            <div class="card card-collection h-100 ">
                                                <img src={item.name} class="card-img-top" alt="news1" />
                                                <div class="card-body">
                                                    <h6 class="card-title news-title">{item.type}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div class="btn-toolbar mt-4 d-flex justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-primary collection-next-btn active">1</button>
                                    <button type="button" class="btn btn-primary collection-next-btn">2</button>
                                    <button type="button" class="btn btn-primary collection-next-btn">3</button>
                                    <button type="button" class="btn btn-primary collection-next-btn">4</button>
                                </div>
                                <div class="btn-group" role="group" aria-label="Third group">
                                    <button type="button" class="btn btn-info collection-next-btn"><i class="fa-solid fa-arrow-right"></i></button>
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