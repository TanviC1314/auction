import React, { useState } from 'react';
import { Share } from 'lucide-react';

const HomePage = () => {
   const [activeTab, setActiveTab] = useState("Teams");
  
    // Sample highlight data for current auction
    const currentBid = {
      playerName: "Vinod Kumar",
      currentAmount: "8.50 LAC",
      basePrice: "6.00 LAC",
      role: "All Rounder",
      team: "M3C",
      imageUrl: "/api/placeholder/120/120",
      highestBidder: "Pink Panthers",
      timeLeft: "30"
    };
  
    // Rest of the team data remains the same
    const gangsters = {
      name: "Gangsters",
      logo: "/api/placeholder/128/128",
      totalPoints: "1.00 CR",
      pointsUsed: "94.90 LAC",
      balancePoints: "5.10 LAC",
      playersBought: "18/18",
      players: [
        { name: "Aniket Kawade", role: "Batter", team: "M3C", amount: "6.00 Lac", retained: true },
        { name: "Ojas Hamir Mehta", role: "All Rounder", team: "M3C", amount: "6.00 Lac", retained: true },
        { name: "Dhun Somaiya", role: "Batter", team: "M3C", amount: "6.00 Lac", retained: true },
        { name: "Kunal Bhavsar", role: "All Rounder", team: "M3C", amount: "6.00 Lac", retained: true },
        { name: "Karan Singh Walia", role: "All Rounder / Wk", team: "M3C", amount: "6.00 Lac", retained: true },
      ],
    };
  
    const pinkPanthers = {
      name: "Pink Panthers",
      logo: "/api/placeholder/128/128",
      totalPoints: "1.00 CR",
      pointsUsed: "71.45 LAC",
      balancePoints: "28.55 LAC",
      playersBought: "18/18",
      players: [
        { name: "Vineet Dujodwala", role: "All Rounder", team: "M3C", amount: "6.00 Lac", retained: true },
        { name: "Sohil Shah", role: "All Rounder", team: "M3C", amount: "6.00 Lac", retained: true },
        { name: "Prithvi Kothari", role: "All Rounder", team: "M3C", amount: "6.00 Lac", retained: true },
        { name: "Vijay Singh", role: "Batter / Wk", team: "M3C", amount: "6.00 Lac", retained: true },
        { name: "Himanshu Waingankar", role: "Batter", team: "M3C", amount: "6.00 Lac", retained: true },
      ],
    };
  
    const updates = [
      { message: "Vinod Lund SOLD TO Gangsters (5.00 Lac)", time: "1 month ago" },
      { message: "Niraj Bajaj SOLD TO Gangsters (5.00 Lac)", time: "1 month ago" },
      { message: "Samit Shukla SOLD TO Mumbai Titans (50000)", time: "1 month ago" },
      { message: "Huzefa Saifee SOLD TO Pink Panthers (50000)", time: "1 month ago" },
      { message: "Bhavesh Vora SOLD TO Pink Panthers (50000)", time: "1 month ago" },
    ];
  
    const soldPlayers = [
      { name: "Vinod Kumar", role: "All Rounder", team: "Pink Panthers", amount: "8.50 LAC" },
      { name: "Rajesh Sharma", role: "Batter", team: "Gangsters", amount: "7.00 LAC" },
    ];
  
    const unsoldPlayers = [
      { name: "Amit Verma", role: "Bowler", basePrice: "5.00 LAC" },
      { name: "Rohit Singh", role: "Batter", basePrice: "4.50 LAC" },
    ];
  
    const yetToAuctionPlayers = [
      { name: "Suresh Raina", role: "All Rounder", basePrice: "6.00 LAC" },
      { name: "Yuvraj Singh", role: "Batter", basePrice: "5.50 LAC" },
    ];
  
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
        marginTop: '32px',
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
      currentBidCard: {
        background: 'linear-gradient(135deg, #fff 0%, #f3f4f6 100%)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        maxWidth: '1400px',
        margin: '-48px auto 32px',
        position: 'relative',
        display: 'grid',
        marginTop: '30px',
        gridTemplateColumns: 'auto 1fr auto',
        gap: '32px',
        alignItems: 'center',
      },
      playerImage: {
        width: '120px',
        height: '120px',
        borderRadius: '12px',
        objectFit: 'cover',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      },
      bidInfo: {
        display: 'grid',
        gap: '8px',
      },
      playerName: {
        fontSize: '28px',
        fontWeight: '700',
        color: '#1e40af',
        marginBottom: '4px',
      },
      playerRole: {
        color: '#6b7280',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      },
      currentBid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      },
      bidAmount: {
        fontSize: '32px',
        fontWeight: '800',
        color: '#059669',
        marginBottom: '4px',
      },
      basePrice: {
        color: '#6b7280',
        fontSize: '14px',
      },
      timer: {
        background: '#ef4444',
        color: 'white',
        padding: '4px 12px',
        borderRadius: '999px',
        fontSize: '14px',
        fontWeight: '600',
        marginTop: '8px',
      },
      highestBidder: {
        background: '#dbeafe',
        color: '#1e40af',
        padding: '4px 12px',
        borderRadius: '999px',
        fontSize: '14px',
        fontWeight: '600',
      },
      tabContainer: {
        background: 'white',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '24px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
      tabButton: {
        padding: '12px 24px',
        borderRadius: '9999px',
        border: 'none',
        cursor: 'pointer',
        marginRight: '16px',
        fontSize: '16px',
        transition: 'all 0.2s',
        marginBottom: '8px',
      },
      activeTab: {
        background: '#2563eb',
        color: 'white',
        transform: 'scale(1.05)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      },
      inactiveTab: {
        background: '#f3f4f6',
        color: '#4b5563',
      },
      teamCard: {
        background: 'linear-gradient(135deg, #f3f4f6 0%, #fff 100%)',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        overflow: 'hidden',
      },
      cardHeader: {
        padding: '24px',
        borderBottom: '1px solid #e5e7eb',
        background: 'linear-gradient(135deg, #f3f4f6 0%, #fff 100%)',
      },
      cardTitle: {
        fontSize: '24px',
        fontWeight: '700',
        color: '#1e40af',
        margin: 0,
      },
      cardContent: {
        padding: '24px',
      },
      teamLogo: {
        width: '128px',
        height: '128px',
        objectFit: 'contain',
        margin: '24px auto',
        display: 'block',
      },
      statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '32px',
      },
      statBox: {
        background: '#f3f4f6',
        padding: '16px',
        borderRadius: '12px',
        textAlign: 'center',
      },
      statValue: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#1e40af',
      },
      statLabel: {
        fontSize: '14px',
        color: '#6b7280',
        marginTop: '4px',
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '16px',
      },
      tableHeader: {
        background: '#f3f4f6',
        padding: '12px 16px',
        textAlign: 'left',
        fontSize: '14px',
        fontWeight: '600',
        color: '#4b5563',
      },
      tableCell: {
        padding: '12px 16px',
        borderBottom: '1px solid #e5e7eb',
        fontSize: '14px',
        color: '#4b5563',
      },
      updateItem: {
        padding: '12px 16px',
        borderBottom: '1px solid #e5e7eb',
        fontSize: '14px',
        color: '#4b5563',
        display: 'flex',
        justifyContent: 'space-between',
      },
      updateTime: {
        color: '#9ca3af',
        fontSize: '12px',
      },
      '@media (max-width: 768px)': {
        currentBidCard: {
          gridTemplateColumns: '1fr',
          textAlign: 'center',
        },
        playerImage: {
          margin: '0 auto 16px',
        },
        currentBid: {
          alignItems: 'center',
        },
        tabButton: {
          marginRight: '8px',
          marginBottom: '8px',
        },
        statsGrid: {
          gridTemplateColumns: '1fr 1fr',
        },
        teamGrid: {
          gridTemplateColumns: '1fr',
        },
      },
      '@media (max-width: 480px)': {
        playerName: {
          fontSize: '24px',
        },
        bidAmount: {
          fontSize: '28px',
        },
        tabButton: {
          padding: '8px 16px',
          fontSize: '14px',
        },
        statsGrid: {
          gridTemplateColumns: '1fr',
        },
      },
    };
  
    const Header = () => (
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <img src="/api/placeholder/56/56" alt="TPA Logo" style={styles.logo} onClick={() => console.log('Navigate to home')} />
        </div>
      </header>
    );
  
    const Footer = () => (
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2023 Cricket Auction. All rights reserved.</p>
      </footer>
    );
  
    const CurrentBidCard = ({ bid }) => (
      <div style={styles.currentBidCard}>
        <img src={bid.imageUrl} alt={bid.playerName} style={styles.playerImage} />
        
        <div style={styles.bidInfo}>
          <div style={styles.playerName}>{bid.playerName}</div>
          <div style={styles.playerRole}>
            {bid.role} • {bid.team}
          </div>
          <div style={styles.highestBidder}>
            Highest Bidder: {bid.highestBidder}
          </div>
        </div>
        
        <div style={styles.currentBid}>
          <div style={styles.bidAmount}>{bid.currentAmount}</div>
          <div style={styles.basePrice}>Base Price: {bid.basePrice}</div>
          <div style={styles.timer}>{bid.timeLeft}s remaining</div>
        </div>
      </div>
    );
  
    const TeamCard = ({ team }) => (
      <div style={styles.teamCard}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>{team.name}</h2>
        </div>
        <div style={styles.cardContent}>
          <img src={team.logo} alt={team.name} style={styles.teamLogo} />
          
          <div style={styles.statsGrid}>
            <div style={styles.statBox}>
              <div style={styles.statValue}>{team.totalPoints}</div>
              <div style={styles.statLabel}>Total Points</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statValue}>{team.pointsUsed}</div>
              <div style={styles.statLabel}>Points Used</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statValue}>{team.balancePoints}</div>
              <div style={styles.statLabel}>Balance Points</div>
            </div>
            <div style={styles.statBox}>
              <div style={styles.statValue}>{team.playersBought}</div>
              <div style={styles.statLabel}>Players bought</div>
            </div>
          </div>
  
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>#</th>
                <th style={styles.tableHeader}>Player</th>
                <th style={styles.tableHeader}>Role</th>
                <th style={styles.tableHeader}>Team</th>
                <th style={styles.tableHeader}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {team.players.map((player, index) => (
                <tr key={player.name} style={{ background: index % 2 === 0 ? '#f9fafb' : 'white' }}>
                  <td style={styles.tableCell}>{index + 1}</td>
                  <td style={styles.tableCell}>{player.name}</td>
                  <td style={styles.tableCell}>{player.role}</td>
                  <td style={styles.tableCell}>{player.team}</td>
                  <td style={styles.tableCell}>
                    {player.amount}
                    {player.retained && (
                      <span style={{ color: '#2563eb', marginLeft: '4px', fontSize: '12px', fontWeight: '700' }}>R</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  
    const Updates = () => (
      <div style={styles.teamCard}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>Latest Updates</h2>
        </div>
        <div style={styles.cardContent}>
          {updates.map((update, index) => (
            <div key={index} style={styles.updateItem}>
              <span>{update.message}</span>
              <span style={styles.updateTime}>{update.time}</span>
            </div>
          ))}
        </div>
      </div>
    );
  
    const SoldPlayers = () => (
      <div style={styles.teamCard}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>Sold Players ({soldPlayers.length})</h2>
        </div>
        <div style={styles.cardContent}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>#</th>
                <th style={styles.tableHeader}>Player</th>
                <th style={styles.tableHeader}>Role</th>
                <th style={styles.tableHeader}>Team</th>
                <th style={styles.tableHeader}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {soldPlayers.map((player, index) => (
                <tr key={player.name} style={{ background: index % 2 === 0 ? '#f9fafb' : 'white' }}>
                  <td style={styles.tableCell}>{index + 1}</td>
                  <td style={styles.tableCell}>{player.name}</td>
                  <td style={styles.tableCell}>{player.role}</td>
                  <td style={styles.tableCell}>{player.team}</td>
                  <td style={styles.tableCell}>{player.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  
    const UnsoldPlayers = () => (
      <div style={styles.teamCard}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>Unsold Players ({unsoldPlayers.length})</h2>
        </div>
        <div style={styles.cardContent}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>#</th>
                <th style={styles.tableHeader}>Player</th>
                <th style={styles.tableHeader}>Role</th>
                <th style={styles.tableHeader}>Base Price</th>
              </tr>
            </thead>
            <tbody>
              {unsoldPlayers.map((player, index) => (
                <tr key={player.name} style={{ background: index % 2 === 0 ? '#f9fafb' : 'white' }}>
                  <td style={styles.tableCell}>{index + 1}</td>
                  <td style={styles.tableCell}>{player.name}</td>
                  <td style={styles.tableCell}>{player.role}</td>
                  <td style={styles.tableCell}>{player.basePrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  
    const YetToAuctionPlayers = () => (
      <div style={styles.teamCard}>
        <div style={styles.cardHeader}>
          <h2 style={styles.cardTitle}>Yet to Auction Players ({yetToAuctionPlayers.length})</h2>
        </div>
        <div style={styles.cardContent}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>#</th>
                <th style={styles.tableHeader}>Player</th>
                <th style={styles.tableHeader}>Role</th>
                <th style={styles.tableHeader}>Base Price</th>
              </tr>
            </thead>
            <tbody>
              {yetToAuctionPlayers.map((player, index) => (
                <tr key={player.name} style={{ background: index % 2 === 0 ? '#f9fafb' : 'white' }}>
                  <td style={styles.tableCell}>{index + 1}</td>
                  <td style={styles.tableCell}>{player.name}</td>
                  <td style={styles.tableCell}>{player.role}</td>
                  <td style={styles.tableCell}>{player.basePrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  
    return (
      <div style={{ minHeight: '100vh', background: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <CurrentBidCard bid={currentBid} />
        
        <div style={{ flex: 1, maxWidth: '1400px', margin: '0 auto', padding: '0 24px 32px' }}>
          <div style={styles.tabContainer}>
            {["Teams", "Updates", "Sold Players", "Unsold Players", "Yet to auction Players"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === tab ? styles.activeTab : styles.inactiveTab),
                }}
              >
                {tab}
              </button>
            ))}
          </div>
  
          {activeTab === "Teams" && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', ...styles.teamGrid }}>
              <TeamCard team={gangsters} />
              <TeamCard team={pinkPanthers} />
            </div>
          )}
          
          {activeTab === "Updates" && <Updates />}
          {activeTab === "Sold Players" && <SoldPlayers />}
          {activeTab === "Unsold Players" && <UnsoldPlayers />}
          {activeTab === "Yet to auction Players" && <YetToAuctionPlayers />}
        </div>
        <Footer />
      </div>
    );
  };

export default HomePage;
