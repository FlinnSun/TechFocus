import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SolutionPage from './components/SolutionPage';
import HardwarePage from './components/HardwarePage';

import Footer from './components/Footer';
import DataAnalyticsDetailsPage from './pages/DataAnalyticsDetailsPage';
import DD2Page from './pages/DD2Page';
import DD3Page from './pages/DD3Page';
import DD4Page from './pages/DD4Page';
import DD5Page from './pages/DD5Page';
import SBA8aPage from './pages/SBA8aPage';
import EDSOBPage from './pages/EDSOBPage';

import CareerPage from './pages/CareerPage';
import JobsPage from './pages/JobsPage';
import JobDetailsPage from './pages/JobDetailsPage';

import ContactPage from './pages/ContactPage';

function AppContent() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company" element={<AboutPage />} />
          <Route path="/solution" element={<SolutionPage />} />
          <Route path="/hardware" element={<HardwarePage />} />

          <Route path="/data-analytics-details" element={<DataAnalyticsDetailsPage />} />
          <Route path="/dd2" element={<DD2Page />} />
          <Route path="/dd3" element={<DD3Page />} />
          <Route path="/dd4" element={<DD4Page />} />
          <Route path="/dd5" element={<DD5Page />} />
          <Route path="/sba8a" element={<SBA8aPage />} />
          <Route path="/edsob" element={<EDSOBPage />} />

          <Route path="/careers" element={<CareerPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/job-details" element={<JobDetailsPage />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 