import React from 'react';
import '../home/Home.css'
import home from './img/111-copy.png'
import group from './img/Group-995.svg'
import delivery from './img/delivery_1095359.svg'
import guarantee from './img/guarantee_952398.svg'
import wallet from './img/Wallet_745515.svg'

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
                <div class="home-support mt-5 ">
                    <div class='raw border border-danger'>
                        <div class="col-md-3 text-center border border-danger">
                            <img src={delivery} alt='delivery' />
                            <div>
                                <h4>Free shipping</h4>
                                <p>Free shipping on all orders</p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <img src={guarantee} alt='guarantee' />
                            <div>
                                <h4>Return Guarantee</h4>
                                <p>30 day money back</p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <img src={group} alt='group' />
                            <div>
                                <h4>Online support 24/7</h4>
                                <p>Technical support 24/7</p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center">
                            <img src={wallet} alt='wallet' />
                            <div>
                                <h4>Secure payment</h4>
                                <p>All payment methods accepted</p>
                            </div>
                        </div>
                    </div>
                    {/* <div class="raw">

                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Home;