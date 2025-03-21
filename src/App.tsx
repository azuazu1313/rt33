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
import RiderSignup from './pages/RiderSignup';
import Blogs from './pages/Blogs';
import BlogsDestinations from './pages/BlogsDestinations';
import BookingFlow from './pages/BookingFlow';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/destinations" element={<BlogsDestinations />} />
        <Route path="/blogs/:city" element={<BlogPost />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rider-signup" element={<RiderSignup />} />
        
        {/* Consolidated Booking Flow Route */}
        <Route path="/transfer/:from/:to/:type/:date/:passengers/form" element={<BookingFlow />} />
        <Route path="/transfer/:from/:to/:type/:date/:returnDate/:passengers/form" element={<BookingFlow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;