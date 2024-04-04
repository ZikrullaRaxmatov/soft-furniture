import React from 'react';
import winter from './img/111.png'
import win15 from './collection/diz-15-scaled-370x278.jpg'
import win16 from './collection/diz-16-scaled-370x278.jpg'
import win17 from './collection/diz-17-scaled-370x278.jpg'
import win18 from './collection/diz-18-scaled-370x278.jpg'
import win19 from './collection/diz-19-scaled-370x278.jpg'
import win20 from './collection/diz-20-scaled-370x278.jpg'
import win21 from './collection/diz-21-370x278.jpg'
import win22 from './collection/diz-22-scaled-370x278.jpg'
import win23 from './collection/diz-23-scaled-370x278.jpg'
import win24 from './collection/diz-24-scaled-370x278.jpg'

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

function Winter() {
    return (
        <div class="winter">
            <div class="container">
                <div class="winter-items">
                    <img src={winter} alt='winter' />
                    <div class='winter-context'>
                        <div class="raw d-flex ">
                            <div class='col-4 winter-left'>
                                <h1>100%</h1>
                                <p>Material qualitiy</p>
                            </div>
                            <div class='col-4'>
                            </div>
                            <div class='col-4 winter-right'>
                                <h2>"Ferghana natural products"</h2>
                                <p>has been a company that produces cotton fabrics for use all over the world for many years</p>
                                <button class="btn">Collection</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="winter-collection">
                    <div class="raw w-100 text-center ">
                        <div class="col ">
                            <h1 class="fw-bold ">Winter collection</h1>
                            <p class="fw-light fs-5 fst-italic text-muted  ">Ferghana Natural Product</p>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-5 g-4 mt-4">
                        {winterCollection.map(item => (
                            <div class="col">
                                <div class="card h-100">
                                    <img src={item.name} class="card-img-top" alt={item.id} />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.type}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Winter;