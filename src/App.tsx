import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate, useParams} from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import Home from './pages/home';
import AppareilPhotoList from './pages/appareil-photo-list';
import ProductDetails from './pages/product-details';
import { Product } from './utils/product-type';

/*
function App() {
  return (
    <Router>
      <div style = {{backgroundImage : '../images/caroussel-2.jpg'}}>
      <nav> 
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo Left">OnlyCams</Link>
        </div> 
      </nav>
      <Routes>
		<Route path="/login" element={<Login/>} />
		<Route path="/home" element={<Home/>}/>
		<Route path="*" element={<PageNotFound/>} />
		<Route path="/appareil-photo" element={<AppareilPhotoList/>} />
		<Route path="/product/:productId" element={<ProductDetails />} />

		<Route path="/" element={<Navigate to="/home"/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
*/
import './css/styles.css'; // Assuming your CSS file path is correct

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div id = "navbar" className="nav-wrapper">
            {/* Cameras and Enceintes (Middle links) */}
            <ul id="nav-middle" className="left middle" >
              <li><Link to="/cameras">Cameras</Link></li>
              <li><Link to="/enceintes">Enceintes</Link></li>
            </ul>
            {/* Logo (Home link) */}
            <ul id="nav-middle" className="left middle">

            <Link to="/" className="brand-logo center">
              <img src="/images/LogoOnlyCams.png" alt="Logo" className="logo-img" />
            </Link>
            </ul>

            {/* Account link (Right link) */}
            <ul id="nav-right" className="right">
              <li><Link to="/login">Account</Link></li>
              <li><Link to ="/Basket">My Basket</Link></li>
            </ul>
          </div>
        </nav>
        {/* Define routes */}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<PageNotFound/>} />
          <Route path="/appareil-photo" element={<AppareilPhotoList/>} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/" element={<Navigate to="/home"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;