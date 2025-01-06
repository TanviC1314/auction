import React from 'react';
import { Outlet } from 'react-router-dom';
import CurrentBidCard from './CurrentBidCard';
import NavigationTabs from './NavigationTabs';
import Footer from './Footer';

const Layout = () => {
  const currentBid = {
    playerName: "Vinod Kumar",
    currentAmount: "8.50 LAC",
    basePrice: "6.00 LAC",
    role: "All Rounder",
    team: "M3C",
    imageUrl: "/api/placeholder/120/120",
    highestBidder: "Pink Panthers",
    timeLeft: "30",
  };

  const styles = {
    header: {
      background: '#fff',
      color: '#1e3a8a',
      padding: '16px 0',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    headerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      height: '56px',
      cursor: 'pointer',
      transition: 'transform 0.3s',
    },
    logoHover: {
      transform: 'scale(1.1)',
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      margin: 0,
    },
    content: {
      flex: 1,
      // maxWidth: '1200px',
      margin: '0 auto',
      padding: '16px',
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <img
            src="GGF.png" // Ensure this logo has a transparent background
            alt="GGF Logo"
            style={styles.logo}
            onMouseOver={(e) => (e.target.style.transform = styles.logoHover.transform)}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          />
          <h1 style={styles.title}>Maa Ambe Cup - Season 5</h1>
          <img
            src="MaaAmbeCupLogo.jpg" // Ensure this logo has a transparent background
            alt="Maa Ambe Cup Logo"
            style={styles.logo}
            onMouseOver={(e) => (e.target.style.transform = styles.logoHover.transform)}
            onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </div>
      </header>

      {/* Current Bid Card */}
      <CurrentBidCard bid={currentBid} />

      {/* Main Content */}
      <div style={styles.content}>
        <NavigationTabs />
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
