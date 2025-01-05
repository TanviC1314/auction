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
          background-color: #f9fafb;
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
        }

        .bid-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .player-image {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

          .player-image {
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

          .player-image {
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
              className="player-image"
            />
            <div className="player-info">
              <div className="player-name">{bid.playerName}</div>
              <div className="player-details">Age: {bid.age}</div>
              <div className="player-details">
                {bid.role} • {bid.team}
              </div>
            </div>
          </div>
          <div className="price-info">
            <div className="current-amount">{bid.currentAmount.replace("LAC", "Kitty")}</div>
            <div className="base-price">Base Price: {bid.basePrice.replace("LAC", "Kitty")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CurrentBid = () => {
  const [currentBid, setCurrentBid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auctionStatus, setAuctionStatus] = useState("");

  useEffect(() => {
    const fetchCurrentBid = async () => {
      try {
        const response = await axios.get("https://sarvotar.io/items/Players");
        const players = Array.isArray(response.data) ? response.data : response.data.data;

        if (Array.isArray(players)) {
          // Check if auction is ongoing
          const ongoingAuctionPlayers = players.filter(
            (player) => player.auction_station === "ongoing auction"
          );

          if (ongoingAuctionPlayers.length > 0) {
            const highestBid = ongoingAuctionPlayers.reduce((prev, curr) =>
              parseFloat(curr.current_bid || 0) > parseFloat(prev.current_bid || 0) ? curr : prev
            );

            setCurrentBid({
              playerName: highestBid.name,
              imageUrl: `https://sarvotar.io/assets/${highestBid.player_logo}`,
              age: highestBid.age || "N/A",
              role: highestBid.role || "N/A",
              team: highestBid.team || "N/A",
              currentAmount: highestBid.current_bid || "0 Kitty",
              basePrice: highestBid.base_price || "N/A",
            });
            setAuctionStatus("ongoing");
          } else {
            setAuctionStatus("no ongoing auction");
          }
        } else {
          throw new Error("Invalid data format");
        }
      } catch (err) {
        setError("Failed to fetch current bid data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentBid();
  }, []);

  if (loading) {
    return <p>Loading current bid...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (auctionStatus === "no ongoing auction") {
    return <p>No ongoing auction at the moment.</p>;
  }

  if (!currentBid) {
    return <p>No bid data available.</p>;
  }

  return <CurrentBidCard bid={currentBid} />;
};

export default CurrentBid;
