import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
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
      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      padding: '16px 0',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    footer: {
      background: '#1e40af',
      color: 'white',
      padding: '16px 0',
      textAlign: 'center',
    },
    footerText: {
      margin: 0,
      fontSize: '14px',
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
      filter: 'brightness(0) invert(1)',
      transition: 'transform 0.2s',
      cursor: 'pointer',
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <img
            src="/api/placeholder/56/56"
            alt="TPA Logo"
            style={styles.logo}
            className="hover:scale-105"
          />
        </div>
      </header>

      <CurrentBidCard bid={currentBid} />

      <div className="flex-1 max-w-7xl mx-auto px-6 pb-8">
        <NavigationTabs />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
