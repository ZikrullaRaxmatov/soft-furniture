import { Route, Routes } from 'react-router-dom';
import Header from './screens/header/Header';
import Home from './screens/home/Home';
import './App.css';
import Footer from './screens/footer/Footer';
import Collection from './screens/collection/Collection';
import AboutUs from './screens/about/AboutUs';
import Contact from './screens/contact/Contact';
import CollectionItem from './screens/collection/CollectionItem';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<CollectionItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
