import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import BlogPost from './pages/BlogPost';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Login from './pages/Login';
import Contact from './pages/Contact';
import RiderLogin from './pages/RiderLogin';
import DriverLogin from './pages/DriverLogin';
import RiderSignup from './pages/RiderSignup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blogs/:city" element={<BlogPost />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rider-login" element={<RiderLogin />} />
        <Route path="/driver-login" element={<DriverLogin />} />
        <Route path="/rider-signup" element={<RiderSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;