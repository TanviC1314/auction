import React from 'react';

const YetToAuctionPage = () => {
  const yetToAuctionPlayers = [
    { name: "Suresh Raina", role: "All Rounder", basePrice: "6.00 LAC" },
    { name: "Yuvraj Singh", role: "Batter", basePrice: "5.50 LAC" },
  ];

  const styles = {
    container: {
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      overflow: 'hidden',
    },
    header: {
      padding: '24px',
      borderBottom: '1px solid #e5e7eb',
    },
    title: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1e40af',
    },
    content: {
      padding: '24px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
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
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Yet to Auction Players ({yetToAuctionPlayers.length})</h2>
      </div>
      <div style={styles.content}>
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
};

export default YetToAuctionPage;