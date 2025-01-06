import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch teams and players data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch teams
        const teamResponse = await axios.get(
          `https://sarvotar.io/items/Teams?limit=100000`
        );
        const fetchedTeams = teamResponse.data.data;
        setTeams(fetchedTeams);

        // Fetch players for each team
        const playersData = {};
        for (const team of fetchedTeams) {
          const teamPlayersResponse = await axios.get(
            `https://sarvotar.io/items/Players?filter[team][_eq]=${team.id}&limit=100000`
          );
          playersData[team.id] = teamPlayersResponse.data.data;
        }
        setPlayers(playersData);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to calculate team statistics
  const calculateTeamStats = (teamPlayers) => {
    const totalPoints = 100000;
    const requiredPlayers = 12;
    const basePoint = 1000;

    // Default values if no players exist
    if (!Array.isArray(teamPlayers) || teamPlayers.length === 0) {
      return {
        pointsUsed: 0,
        balancedPoints: totalPoints,
        playersBought: 0,
        maxBidAllowed: totalPoints - (requiredPlayers - 1) * basePoint,
      };
    }

    // Calculate points used and remaining stats
    const pointsUsed = teamPlayers.reduce(
      (sum, player) => sum + (player.points || 0),
      0
    );
    const balancedPoints = totalPoints - pointsUsed;
    const playersBought = teamPlayers.length;

    const maxBidAllowed =
      playersBought < requiredPlayers
        ? balancedPoints - (requiredPlayers - playersBought - 1) * basePoint
        : 0;

    return {
      pointsUsed,
      balancedPoints,
      playersBought,
      maxBidAllowed,
    };
  };

  if (loading) {
    return <p>Loading teams and players...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="teams-page">
      <style>{`
        .teams-page {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          margin: 20px;
        }

        .team-card {
          width: 45%;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          margin-bottom: 20px;
        }

        .team-name {
          text-align: center;
          font-size: 24px;
          color: #333;
          margin-bottom: 10px;
        }

        .team-info {
          display: flex;
          justify-content: space-between;
          background-color: rgb(217, 217, 250);
          padding: 10px;
          border-radius: 8px;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-bottom: 10px;
        }

        .team-info p {
          margin: 0;
          font-size: 14px;
          font-weight: bold;
          color: #555;
          padding: 5px 10px;
        }

        .team-logo,
        .player-image {
          display: block;
          margin: 0 auto 10px;
          height: 80px;
          width: auto;
          object-fit: contain;
        }

        .team-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        .team-table th,
        .team-table td {
          text-align: left;
          padding: 10px;
          border: 1px solid #ddd;
          font-size: 14px;
        }

        .team-table th {
          background-color: #f9f9f9;
          font-weight: bold;
        }

        .team-table tbody tr:nth-child(odd) {
          background-color: #f9f9f9;
        }

        @media (max-width: 1024px) {
          .team-card {
            width: 48%;
          }
        }

        @media (max-width: 768px) {
          .teams-page {
            flex-direction: column;
            align-items: center;
          }

          .team-card {
            width: 90%;
            margin-bottom: 20px;
          }

          .team-info {
            flex-direction: column;
            align-items: flex-start;
          }

          .team-table th,
          .team-table td {
            font-size: 12px;
          }

          .team-logo {
            height: 60px;
          }

          .player-image {
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .team-name {
            font-size: 20px;
          }

          .team-info p {
            font-size: 12px;
          }
        }
          @media (max-width: 768px) {
            .team-info-cell {
              display: block;
              width: 100%;
              margin-bottom: 10px;
            }

            .team-info-cell p {
              margin: 0;
            }
          }

      `}</style>

      {teams.map((team) => {
        const teamPlayers = players[team.id] || [];
        const { pointsUsed, balancedPoints, playersBought, maxBidAllowed } =
          calculateTeamStats(teamPlayers);

        return (
          <div className="team-card" key={team.id}>
            <img
              className="team-logo"
              src={`https://sarvotar.io/assets/${team.team_logo}`}
              alt={`${team.name} Logo`}
            />
            <h2 className="team-name">{team.name}</h2>
            <div className="team-info">
              <table>
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    <strong>Owner:</strong> {team.owner_name}
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td className="team-info-cell">
                    <p>
                      <strong>Total Points:</strong> 100,000
                    </p>
                  </td>
                  <td className="team-info-cell">
                    <p>
                      <strong>Points Used:</strong> {pointsUsed}
                    </p>
                  </td>
                  <td className="team-info-cell">
                    <p>
                      <strong>Balance Points:</strong> {balancedPoints}
                    </p>
                  </td>
                  <td className="team-info-cell">
                    <p>
                      <strong>Players Bought:</strong> {playersBought}/12
                    </p>
                  </td>
                  <td className="team-info-cell">
                    <p>
                      <strong>Max Bid Allowed:</strong> {maxBidAllowed}
                    </p>
                  </td>
                </tr>
              </table>
            </div>
            {teamPlayers.length > 0 ? (
              <table className="team-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Player Image</th>
                    <th>Player Name</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {teamPlayers.map((player, index) => (
                    <tr key={player.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          className="player-image"
                          src={`https://sarvotar.io/assets/${player.photo}`}
                          alt={player.name}
                        />
                      </td>
                      <td>{player.name}</td>
                      <td>{player.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No players available for this team.</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TeamsPage;
