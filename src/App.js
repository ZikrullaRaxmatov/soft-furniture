import { Route, Routes } from 'react-router-dom';
import Header from './screens/header/Header';
import Home from './screens/home/Home';
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
