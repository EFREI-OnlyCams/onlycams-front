import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate} from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <div>
      <nav> 
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo Left">OnylyCams</Link>
        </div> 
      </nav>
      <Routes>
		<Route path="/login" element={<Login/>} />
		<Route path="*" element={<PageNotFound/>} />

		<Route path="/" element={<Navigate to="/login" />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
