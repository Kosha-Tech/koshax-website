import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KoshaLayers from './components/KoshaLayers';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ProductDemo from './components/ProductDemo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <KoshaLayers />
      <Features />
      <Testimonials />
      {/* <ProductDemo /> */}
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
