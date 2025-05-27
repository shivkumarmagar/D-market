import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact'; // Assuming Contact component is defined
import React from 'react';
import SellerPage from './components/SellerPage';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* Assuming Contact component is defined */}

          {/* Reusing Login component for Register */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Reusing Login component for Register */}
          <Route path="/seller" element={<SellerPage />} /> {/* Reusing Login component for Seller */}


          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
