import React, { useEffect } from 'react';
import '../home/Home.css'
import home from './img/111-copy.png'
import group from './img/Group-995.svg'
import delivery from './img/delivery_1095359.svg'
import guarantee from './img/guarantee_952398.svg'
import wallet from './img/Wallet_745515.svg'
import Winter from './Winter';

function Home() {

    return (
        <div class="home">
            <div class="container-suit">
                <div class="home-items ">
                    <img src={home} alt='home' />
                    <div class="context">
                        <h3>Ferghana</h3>
                        <h2>Natural</h2>
                        <h1>Products</h1>
                    </div>
                </div>
                <div class="home-support mt-3">
                    <div class="raw d-sm-flex border border-danger">
                        <div class="col col-sm-6 ">
                            <div class="col-12 col-md-6 w-100 text-center">
                                <img src={delivery} alt='delivery' />
                                <div class='home-support-context'>
                                    <h4>Free shipping</h4>
                                    <p>Free shipping on all orders</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 w-100 text-center">
                                <img src={guarantee} alt='guarantee' />
                                <div>
                                    <h4>Return Guarantee</h4>
                                    <p>30 day money back</p>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-6">
                            <div class="col-12 col-md-6 w-100 text-center">
                                <img src={group} alt='group' />
                                <div>
                                    <h4>Online support 24/7</h4>
                                    <p>Technical support 24/7</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 w-100 text-center">
                                <img src={wallet} alt='wallet' />
                                <div>
                                    <h4>Secure payment</h4>
                                    <p>All payment methods accepted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Winter />
        </div>
    );
}

export default Home;