import { Route, Routes } from 'react-router-dom';
import Header from './screens/header/Header';
import Home from './screens/home/Home';
import './App.css';
import Footer from './screens/footer/Footer';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
