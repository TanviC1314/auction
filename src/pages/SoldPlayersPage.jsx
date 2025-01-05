import React, { useState, useEffect } from "react";
import axios from "axios";

const SoldPlayersPage = () => {
  const [soldPlayers, setSoldPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSoldPlayers = async () => {
      try {
        const response = await axios.get("https://sarvotar.io/items/Players");
        const players = Array.isArray(response.data) ? response.data : response.data.data;

        // Ensure players is an array before filtering
        if (Array.isArray(players)) {
          const sold = players.filter((player) => player.auction_station === "sold");
          setSoldPlayers(sold);
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

    fetchSoldPlayers();
  }, []);

  if (loading) {
    return <p>Loading sold players...</p>;
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
      `}</style>

      <div className="players-card">
        <h2 className="players-title">Sold Players ({soldPlayers.length})</h2>
        <table className="players-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Role</th>
              <th>Team</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {soldPlayers.map((player, index) => (
              <tr key={player.id || index}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.role}</td>
                <td>{player.team}</td>
                <td>{player.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldPlayersPage;
