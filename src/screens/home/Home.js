import '../home/Home.css'
import home from './img/111-copy.png'
import group from './img/Group-995.svg'
import delivery from './img/delivery_1095359.svg'
import guarantee from './img/guarantee_952398.svg'
import wallet from './img/Wallet_745515.svg'
import Winter from './Winter';
import Autumn from './Autumn'
import Summer from './Summer'
import News from './News'

function Home() {

    return (
        <div className="home">
            <div className="container-suit">
                <div className="home-items ">
                    <img src={home} alt='home' />
                    <div className="context">
                        <h3>Ferghana</h3>
                        <h2>Natural</h2>
                        <h1>Products</h1>
                    </div>
                </div>
                <div className="raw home-support">
                    <div className="col-12 col-md-3  home-support-item">
                        <img src={delivery} alt='delivery' />
                        <div className='home-support-context'>
                            <h4>Free shipping</h4>
                            <p>Free shipping on all orders</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3  home-support-item">
                        <img src={guarantee} alt='guarantee' />
                        <div className='home-support-context'>
                            <h4>Return Guarantee</h4>
                            <p>30 day money back</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3  home-support-item">
                        <img src={group} alt='group' />
                        <div className='home-support-context'>
                            <h4>Online support 24/7</h4>
                            <p>Technical support 24/7</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-3  home-support-item">
                        <img src={wallet} alt='wallet' />
                        <div className='home-support-context'>
                            <h4>Secure payment</h4>
                            <p>All payment methods accepted</p>
                        </div>
                    </div>
                </div>
            </div>
            <Winter />
            <Autumn />
            <Summer />
            <News />
        </div>
    );
}

export default Home;