import React, { useState, useEffect } from "react";
import axios from "axios";

const SoldPlayersPage = () => {
  const [soldPlayers, setSoldPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSoldPlayersAndTeams = async () => {
      try {
        const response = await axios.get(
          "https://server.sarvotar.io/items/Players?limit=100000&sort=-id"
        );
        const players = response.data.data;

        // Fetch teams data separately if needed
        const teamResponse = await axios.get("https://server.sarvotar.io/items/Teams");
        const teamsData = teamResponse.data.data;

        // Map team IDs to team names
        const teamMap = teamsData.reduce((map, team) => {
          map[team.id] = team.name;
          return map;
        }, {});

        // Ensure players is an array before filtering
        const sold = players.filter(
          (player) => player.auction_status.toLowerCase() === "sold" || player.team !== null
        );

        // Add team names to players
        const soldWithTeamNames = sold.map((player) => ({
          ...player,
          teamName: player.team ? teamMap[player.team] : "No Team", // If no team, set a default value
        }));

        setSoldPlayers(soldWithTeamNames);
        setTeams(teamsData);
      } catch (err) {
        setError("Failed to fetch players data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSoldPlayersAndTeams();
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

  .players-table td {
    vertical-align: middle !important;
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
        <h2 className="players-title">Sold Players ({soldPlayers.length})</h2>
        <table className="players-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Photo</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {soldPlayers.map((player, index) => (
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
                <td>{player.teamName}</td>
                <td>{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoldPlayersPage;
