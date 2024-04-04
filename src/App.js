import { Route, Routes } from 'react-router-dom';
import Header from './screens/header/Header';
import Home from './screens/home/Home';
import './App.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
