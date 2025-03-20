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
import Step1Vehicle from './pages/booking/Step1Vehicle';
import Step2Details from './pages/booking/Step2Details';
import Step3Payment from './pages/booking/Step3Payment';

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
        
        {/* Booking Flow Routes */}
        <Route path="/transfer/:from/:to/:type/:date/form" element={<Step1Vehicle />} />
        <Route path="/transfer/:from/:to/:type/:date/details" element={<Step2Details />} />
        <Route path="/transfer/:from/:to/:type/:date/payment" element={<Step3Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;