import { BrowserRouter as Router, Route, Link, Routes, Navigate} from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import Home from './pages/home';
import AppareilPhotoList from './pages/appareil-photo-list';
import ProductDetails from './pages/product-details';
import CameraList from './pages/camera-list';
import  PrivateRoute from './PrivateRoute';
import AccountInformation from './pages/account-information';

const App : React.FC = () => {
  return (
    <Router>
      <div>
      <nav> 
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo Left">OnlyCams</Link>
        </div> 
      </nav>
      <Routes>
		<Route path="/login" element={<Login/>} />
		<Route path="/home" element={<Home/>}/>
		<Route path="*" element={<PageNotFound/>} />
		<Route path="/appareils-photos" element={<AppareilPhotoList/>} />
		<Route path="/cameras" element={<CameraList/>} />
		<Route path="/product/:productId" element={<ProductDetails />} />
		<Route path="/" element={<Navigate to="/home"/>} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
