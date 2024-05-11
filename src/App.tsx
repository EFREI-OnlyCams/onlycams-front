import { BrowserRouter as Router, Route, Link, Routes, Navigate} from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import Home from './pages/home';
import AppareilPhotoList from './pages/appareil-photo-list';
import ProductDetails from './pages/product-details';
import CameraList from './pages/camera-list';
import AccountInformation from './pages/account-information';
  
import './css/styles.css'; // Assuming your CSS file path is correct

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div id = "navbar" className = "NavBar">
            {/* Cameras and Enceintes (Middle links) */}
            <ul id="nav-middle" className="left middle" >
              <li><Link to="/cameras">Cameras</Link></li>
              <li><Link to="/appareils-photos">Appareils photos</Link></li>
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
			<Route path="/home" element={<Home/>}/>
			<Route path="/appareils-photos" element={<AppareilPhotoList/>} />
			<Route path="/cameras" element={<CameraList/>} />
			<Route path="/product/:productId" element={<ProductDetails />} />

			<Route path="/login" element={<Login/>} />

			<Route path="/" element={<Navigate to="/home"/>} />
			<Route path="*" element={<PageNotFound/>} />
		</Routes>
      </div>
    </Router>
  );
}

export default App;