import React, { useState, useEffect } from "react";
import axios from "axios";

const UnsoldPlayersPage = () => {
  const [unsoldPlayers, setUnsoldPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUnsoldPlayers = async () => {
      try {
        const response = await axios.get("https://server.sarvotar.io/items/Players?limit=100000");
        const players = response.data.data;

        // Filter unsold players based on auction_status
        if (Array.isArray(players)) {
            const unsold = players.filter((player) => player.auction_status.toLowerCase() === "unsold");
          setUnsoldPlayers(unsold);
        } else {
          throw new Error("Invalid players data format");
        }
      } catch (err) {
        setError("Failed to fetch players data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUnsoldPlayers();
  }, []);

  if (loading) {
    return <p>Loading unsold players...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="players-page">
      <style>{`
        .players-page {
          display: flex;
          justify-content: center;
          padding: 20px;
        }

        .players-card {
          width: 100%;
          max-width: 800px;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          background-color: #fff;
        }

        .players-title {
          text-align: center;
          font-size: 24px;
          color: #333;
          margin-bottom: 20px;
        }

        .players-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        .players-table th,
        .players-table td {
          text-align: left;
          padding: 10px;
          border: 1px solid #ddd;
          font-size: 14px;
        }

        .players-table th {
          background-color: #f9f9f9;
          font-weight: bold;
        }

        .players-table tbody tr:nth-child(odd) {
          background-color: #f9f9f9;
        }

        .player-photo {
          height: 80px;
          width: 80px;
          object-fit: contain;
          margin: 0 auto;
          display: block;
        }
      `}</style>

      <div className="players-card">
        <h2 className="players-title">Unsold Players ({unsoldPlayers.length})</h2>
        <table className="players-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Photo</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {unsoldPlayers.map((player, index) => (
              <tr key={player.id || index}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>
                  <img
                    className="player-photo"
                    src={`https://server.sarvotar.io/assets/${player.photo}`}
                    alt={player.name}
                  />
                </td>
                <td>{player.points || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnsoldPlayersPage;
