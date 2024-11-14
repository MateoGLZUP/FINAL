import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Catalog from './pages/catalog';
import Login from './pages/login';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Sell from './pages/sell';
import Navbar from './components/Navbar';
import Footer2 from './components/Footer2'; // or footer2 if you prefer the other footer

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <Footer2 />
    </Router>
  );
}

export default App;
