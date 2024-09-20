import logo from './logo.svg';
import './App.css';
import LandingPage from './foodiey/pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import ProductMenu from './foodiey/components/ProductMenu';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element = { <LandingPage/>} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu/>} />
      </Routes>
    </div>
  );
}

export default App;
