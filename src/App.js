import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Submit from './components/Submit';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';
import backgroundImage from './images/background.png';

function App() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Router>
        <Header />
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '20px 0'
        }}>
          <div style={{
            maxWidth: '1200px',
            width: '100%',
            backgroundColor: 'white',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            padding: '20px'
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/submit" element={<Submit />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;