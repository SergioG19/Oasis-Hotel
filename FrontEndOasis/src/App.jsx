import React from 'react';
import './index.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import HistorySection from './components/HistorySection';
import ServicesSection from './components/ServicesSection';
import MembershipSection from './components/MembershipSection';
import BlogSection  from './components/BlogSection';
import BeachesSection from './components/BeachesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <HistorySection />
      <ServicesSection />
      <MembershipSection />
      <BlogSection />
      <BeachesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;