import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceRequestPage from './pages/ServiceRequestPage';
import ThankYouPage from './pages/ThankYouPage';
import LeadDashboard from './pages/LeadDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/request/:category" element={<ServiceRequestPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/leads" element={<LeadDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;