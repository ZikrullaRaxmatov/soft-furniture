import { Route, Routes } from 'react-router-dom';
import Header from './screens/Header';
import './App.css';
import Home from './screens/Home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
