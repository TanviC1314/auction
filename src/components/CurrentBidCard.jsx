import React from 'react';

const CurrentBidCard = ({ bid }) => {
  const styles = {
    cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30vh',
    },
    card: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: '16px',
      alignItems: 'center',
      width: '70%',
      maxWidth: '800px',
      margin: '0 auto',
    },
    playerImage: {
      width: '120px',
      height: '120px',
      borderRadius: '16px',
      objectFit: 'cover',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    playerInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    playerName: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1e40af',
    },
    playerAge: {
      fontSize: '18px',
      color: '#6b7280',
    },
    playerDetails: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#6b7280',
    },
    highestBidder: {
      background: '#e0f2fe',
      color: '#1e40af',
      padding: '8px 12px',
      borderRadius: '9999px',
      fontSize: '14px',
      fontWeight: '600',
      display: 'inline-block',
    },
    bidInfo: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    currentAmount: {
      fontSize: '32px',
      fontWeight: '800',
      color: '#10b981',
    },
    basePrice: {
      color: '#6b7280',
      fontSize: '14px',
    },
    timeLeft: {
      background: '#ef4444',
      color: 'white',
      padding: '8px 12px',
      borderRadius: '9999px',
      fontSize: '14px',
      fontWeight: '600',
      marginTop: '8px',
    },
  };

  return (
    <div style={styles.cardContainer}>
      <div style={styles.card}>
        <img src={bid.imageUrl} alt={bid.playerName} style={styles.playerImage} />
        
        <div style={styles.playerInfo}>
          <div style={styles.playerName}>{bid.playerName}</div>
          <div style={styles.playerAge}>Age: {bid.age}</div>
          <div style={styles.playerDetails}>
            {bid.role} • {bid.team}
          </div>
        </div>
        
        <div style={styles.bidInfo}>
          <div style={styles.currentAmount}>{bid.currentAmount}</div>
          <div style={styles.basePrice}>Base Price: {bid.basePrice}</div>
          <div style={styles.timeLeft}>{bid.timeLeft}s remaining</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBidCard;
