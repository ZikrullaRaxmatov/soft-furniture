import React from 'react';
import './Collection.css'
import img from '../home/img/111.png'

function CollectionItem() {
    return (
        <div class="collectionItem">
            <div class="container">
                <div class="raw collectionItem-items">
                    <div class="col-6 collectionItem-img">
                        <img src={img} alt='...' />
                    </div>
                    <div class="col-6 collectionItem-table">
                        <h1>Image Name</h1>
                        <table class="table table-striped-columns">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionItem;