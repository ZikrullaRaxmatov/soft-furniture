import { Route, Routes } from 'react-router-dom';
import Header from './screens/header/Header';
import Home from './screens/home/Home';
import './App.css';
import Footer from './screens/footer/Footer';
import Collection from './screens/collection/Collection';
import AboutUs from './screens/about/AboutUs';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
