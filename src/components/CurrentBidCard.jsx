import React, { useState, useEffect } from "react";
import axios from "axios";

const CurrentBidCard = ({ bid }) => {
  return (
    <div className="bid-card-container">
      <style>{`
  .bid-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .bid-card {
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;

    /* Border properties with rotating linear gradient */
    border: 4px solid;
    border-image-source: linear-gradient(45deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffea, #2b65ff, #8000ff, #ff0080);
    border-image-slice: 1;
    animation: rotateBorder 5s linear infinite;
  }

  @keyframes rotateBorder {
    0% {
      border-image-source: linear-gradient(45deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffea, #2b65ff, #8000ff, #ff0080);
    }
    100% {
      border-image-source: linear-gradient(405deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffea, #2b65ff, #8000ff, #ff0080);
    }
  }

  .bid-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .player-image-currentbid {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .player-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
  }

  .player-name {
    font-size: 20px;
    font-weight: 700;
    color: #1e40af;
  }

  .player-details {
    font-size: 14px;
    color: #6b7280;
  }

  .price-info {
    text-align: right;
  }

  .current-amount {
    font-size: 28px;
    font-weight: 800;
    color: #10b981;
  }

  .base-price {
    font-size: 16px;
    color: #6b7280;
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    .bid-card {
      padding: 16px;
    }

    .player-image-currentbid {
      width: 60px;
      height: 60px;
      margin-right: 16px;
    }

    .player-name {
      font-size: 18px;
    }

    .current-amount {
      font-size: 24px;
    }

    .base-price {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .bid-card-header {
      flex-direction: column;
      align-items: center;
    }

    .player-image-currentbid {
      margin-bottom: 10px;
    }

    .price-info {
      text-align: center;
    }
  }
`}</style>

      <div className="bid-card">
        <div className="bid-card-header">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={bid.imageUrl}
              alt={bid.playerName}
              className="player-image-currentbid"
            />
            <div className="player-info">
              <div className="player-name">{bid.playerName}</div>
              <div className="player-details">Age: {bid.age}</div>
            </div>
          </div>
          <div className="price-info">
            <div className="current-amount">Base Points: {bid.points}</div>
            {/* <div className="base-price">Base Points: {bid.points}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const CurrentBid = () => {
  const [currentBids, setCurrentBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auctionStatus, setAuctionStatus] = useState("");

  useEffect(() => {
    const fetchCurrentBids = async () => {
      try {
        const response = await axios.get("https://sarvotar.io/items/Players?limit=100000");
        const players = response.data.data;

        // Filter players whose auction_status is "ongoing auction"
        const ongoingAuctionPlayers = players.filter(
          (player) => player.auction_status.toLowerCase() === "ongoing auction"
        );

        if (ongoingAuctionPlayers.length > 0) {
          setCurrentBids(
            ongoingAuctionPlayers.map((player) => ({
              playerName: player.name,
              imageUrl: `https://sarvotar.io/assets/${player.photo}`,
              age: player.age || "N/A",
              currentAmount: player.current_bid || "0 Kitty",
              points: player.points || "N/A",
            }))
          );
          setAuctionStatus("ongoing");
        } else {
          setAuctionStatus("no ongoing auction");
        }
      } catch (err) {
        setError("Failed to fetch current bid data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentBids();
  }, []);

  if (loading) {
    return <p>Loading current bids...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (auctionStatus === "no ongoing auction") {
    return <p style={{background:'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', color:'white', textAlign:'center'}}>No ongoing auction player at the moment.</p>;
  }

  if (!currentBids.length) {
    return <p>No bid data available.</p>;
  }

  return (
    <div style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)"}}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
        marginBottom: '1.5rem'
      }}>
        Ongoing Auction
      </h2>
      {currentBids.map((bid, index) => (
        <CurrentBidCard key={index} bid={bid} />
      ))}
    </div>
  );
};

export default CurrentBid;
