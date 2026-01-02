import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Structure
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Startup from './pages/Startup';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Routes>
      {/* Wrap all pages inside the Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/startup" element={<Startup />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;