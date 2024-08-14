// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EntrepreneurDetails from './pages/EntrepreneurDetails';
import InvestorDetails from './pages/InvestorDetails';
import SearchResults from './pages/SearchResults';
import './App.css'
import Signup from './pages/Signup';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/entrepreneur/:id" element={<EntrepreneurDetails />} />
        <Route path="/investor/:id" element={<InvestorDetails />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
