import React from 'react';
import winter from './img/111-2.png'
import win15 from './collection/diz-64-scaled-370x278.jpg'
import win16 from './collection/diz-65-scaled-370x278.jpg'
import win17 from './collection/diz-66-scaled-370x278.jpg'
import win18 from './collection/diz-67-scaled-370x278.jpg'
import win19 from './collection/diz-68-scaled-370x278.jpg'
import win20 from './collection/diz-69-1-scaled-370x278.jpg'
import win21 from './collection/diz-70-scaled-370x278.jpg'
import win22 from './collection/diz-71-scaled-370x278.jpg'
import win23 from './collection/diz-72-scaled-370x278.jpg'
import win24 from './collection/diz-73-scaled-370x278.jpg'
import { Link } from 'react-router-dom';

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

function Summer() {
    return (
        <div className="winter">
            <div className="container">
                <div className="winter-items">
                    <img src={winter} alt='winter' className="d-none d-lg-block" />
                    <div className='summer-bg winter-context '>
                        <div className="raw d-lg-flex ">
                            <div className='col-12 col-lg-4 winter-left'>
                                <h1>100%</h1>
                                <p>Material qualitiy</p>
                            </div>
                            <div className='col-4'>
                            </div>
                            <div className='col-12 col-lg-4 winter-right'>
                                <h2>"Ferghana natural products"</h2>
                                <p>has been a company that produces cotton fabrics for use all over the world for many years</p>
                                <button className="summer-btn btn">Collection</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="winter-collection mt-2 mt-md-3 mt-lg-5">
                    <div className="raw w-100 text-center ">
                        <div className="col ">
                            <h1 className="fw-bold ">Summer collection</h1>
                            <p className="fw-light fst-italic text-muted  ">Ferghana Natural Product</p>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-3 mt-2">
                        {winterCollection.map(item => (
                            <Link to={`/product/${item.id}`} className='card-link' >
                                <div className="col" key={item.id}>
                                    <div className="card-summer card h-100">
                                        <img src={item.name} className="card-img-top" alt={item.id} />
                                        <div className="card-body">
                                            <p className="card-title winter-title">{item.type}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summer;