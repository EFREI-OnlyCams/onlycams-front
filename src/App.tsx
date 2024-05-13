import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';
import Home from './pages/home';
import AppareilPhotoList from './pages/appareil-photo-list';
import ProductDetails from './pages/product-details';
import CameraList from './pages/camera-list';
import About from './pages/aboutus'; // Import the About component
import AccountInformation from './pages/account-information';
import './css/styles.css'; // Assuming your CSS file path is correct
import AuthenticationService from './services/authentication-service';
import Cart from './pages/cart';
import Registration from './pages/registration';
import Order from './pages/order';
import OrderStatus from './pages/order-status';

function App() {

	const [isAuthenticated, setIsAuthenticated] = useState(AuthenticationService.isAuthenticated());

	// Ca permet de réafficher les informations de l'utilisateur connecté
	const handleLogin = () => {
		setIsAuthenticated(true); 
	};

	const handleLogout = async () => {
		await AuthenticationService.logout();
		setIsAuthenticated(false);
	};

	return (
		<Router>
		<div>
			<nav>
			<div id="navbar" className="NavBar">
				{/* Cameras and Enceintes (Middle links) */}
				<ul id="nav-middle" className="left middle">
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
				<li><Link to="/my-cart">My cart</Link></li>
				{isAuthenticated ? ( 
					<>
						<li><Link to="/account">Informations</Link></li>
						<li><Link to="/home" onClick={handleLogout}>Logout</Link></li>
					</>
				) : (
					<>
						<li><Link to="/login">Sign in</Link></li>
						<li><Link to="registration">Sign up</Link></li>
					</>
				)}
				</ul>
			</div>
			</nav>
			
			<main>
				{/* Define routes */}
				<Routes>
				<Route path="/login" element={<Login onLogin={handleLogin} />} />
				<Route path="registration" element={<Registration />} />
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<PageNotFound />} />
				<Route path="/appareils-photos" element={<AppareilPhotoList />} />
				<Route path="/cameras" element={<CameraList />} />
				<Route path="/product/:productId" element={<ProductDetails />} />

				<Route path="/account" element={
					isAuthenticated ? <AccountInformation /> : <Navigate to="/login"/>
				} />
				<Route path="/my-cart" element={
				 isAuthenticated ? <Cart/> : <Navigate to="/login"/>}
				/>
				<Route path="/order" element={
				 isAuthenticated ? <Order/> : <Navigate to="/login"/>}
				/>
				<Route path="/order-status" element={
				 isAuthenticated ? <OrderStatus/> : <Navigate to="/login"/>}
				/>

				<Route path="/about" element={<About />} /> {/* Add this line */}
				<Route path="/" element={<Navigate to="/home" />} />
				</Routes>
			</main>

			{/* Footer */}
			<footer className="site-footer">
			<div className="footer-content">
				<p>&copy; 2024 OnlyCams. All rights reserved.</p>
				<nav>
				<ul>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<li><Link to="/privacy">Privacy Policy</Link></li>
				</ul>
				</nav>
			</div>
			</footer>
		</div>
		</Router>
	);
}

export default App;
