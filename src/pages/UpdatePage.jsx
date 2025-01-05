import React from 'react';

const UpdatePage = () => {
  const updates = [
    { player: "Vinod Lund", action: "SOLD TO", team: "Gangsters", price: "5.00 Kitty", timeAgo: "1 month ago" },
    { player: "Niraj Bajaj", action: "SOLD TO", team: "Gangsters", price: "5.00 Kitty", timeAgo: "1 month ago" },
    { player: "Samit Shukla", action: "SOLD TO", team: "Mumbai Titans", price: "50,000", timeAgo: "1 month ago" },
    { player: "Huzefa Saifee", action: "SOLD TO", team: "Pink Panthers", price: "50,000", timeAgo: "1 month ago" },
  ];

  const styles = {
    container: {
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      maxWidth: '800px',
      margin: '20px auto',
    },
    header: {
      padding: '16px 24px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: '#f3f4f6',
    },
    title: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#1e40af',
    },
    content: {
      padding: '16px 24px',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #e5e7eb',
    },
    player: {
      flex: '2',
      fontSize: '16px',
      fontWeight: '600',
      color: '#374151',
    },
    action: {
      flex: '1',
      fontSize: '14px',
      color: '#10b981',
      fontWeight: '500',
      textTransform: 'uppercase',
    },
    team: {
      flex: '2',
      fontSize: '16px',
      color: '#1e40af',
    },
    price: {
      flex: '1',
      fontSize: '14px',
      fontWeight: '600',
      color: '#6b7280',
    },
    timeAgo: {
      flex: '1',
      textAlign: 'right',
      fontSize: '12px',
      color: '#9ca3af',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Recent Updates</h2>
      </div>
      <div style={styles.content}>
        {updates.map((update, index) => (
          <div key={index} style={styles.row}>
            <span style={styles.player}>{update.player}</span>
            <span style={styles.action}>{update.action}</span>
            <span style={styles.team}>{update.team}</span>
            <span style={styles.price}>({update.price})</span>
            <span style={styles.timeAgo}>{update.timeAgo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatePage;
