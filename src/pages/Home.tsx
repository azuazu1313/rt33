import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import AboutPreview from '../components/AboutPreview';
import Services from '../components/Services';
import BookingProcess from '../components/BookingProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Sitemap from '../components/Sitemap';
import TrustBadges from '../components/TrustBadges';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Benefits />
      <TrustBadges />
      <AboutPreview />
      <Services />
      <BookingProcess />
      <Testimonials />
      <CallToAction />
      <Sitemap />
    </div>
  );
}

export default Home;