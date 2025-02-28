import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Banner />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;