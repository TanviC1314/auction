import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);
  const [selectedPlayerImage, setSelectedPlayerImage] = useState("");
  const [selectedOwnerImage, setSelectedOwnerImage] = useState("");

  // Fetch teams and players data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const teamResponse = await axios.get(
          `https://server.sarvotar.io/items/Teams?limit=100000`
        );
        const fetchedTeams = teamResponse.data.data;
        setTeams(fetchedTeams);

        const playersData = {};
        for (const team of fetchedTeams) {
          const teamPlayersResponse = await axios.get(
            `https://server.sarvotar.io/items/Players?filter[team][_eq]=${team.id}&limit=100000`
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

  const calculateTeamStats = (teamPlayers) => {
    const totalPoints = 300000;
    const requiredPlayers = 12;
    const basePoint = 1000;

    if (!Array.isArray(teamPlayers) || teamPlayers.length === 0) {
      return {
        totalPoints: totalPoints,
        pointsUsed: 0,
        balancedPoints: totalPoints,
        playersBought: 0,
        maxBidAllowed: totalPoints - (requiredPlayers - 1) * basePoint,
      };
    }

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
      totalPoints,
      pointsUsed,
      balancedPoints,
      playersBought,
      maxBidAllowed,
    };
  };

  const openPlayerModal = (image) => {
    setSelectedPlayerImage(image);
    setIsPlayerModalOpen(true);
  };

  const closePlayerModal = () => {
    setIsPlayerModalOpen(false);
    setSelectedPlayerImage("");
  };

  const openOwnerModal = (image) => {
    setSelectedOwnerImage(image);
    setIsOwnerModalOpen(true);
  };

  const closeOwnerModal = () => {
    setIsOwnerModalOpen(false);
    setSelectedOwnerImage("");
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
          position: relative;
        }

        .team-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .team-logo {
          height: 100px;
          object-fit: contain;
          cursor: pointer;
        }

        .team-owner-photo {
          height: 100px;
          width: 100px;
          object-fit: contain;
          border-radius: 10%;
          cursor: pointer;
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

        .player-image {
          display: block;
          margin: 0 auto 10px;
          height: 80px;
          width: auto;
          object-fit: contain;
          cursor: pointer;
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

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: white;
          padding: 2px;
          max-width: 90%;
          max-height: 80%;
        }

        .modal img {
          width: 100%;
          max-width: 600px;
          height: auto;
          object-fit: contain;
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
        const { totalPoints, pointsUsed, balancedPoints, playersBought, maxBidAllowed } =
          calculateTeamStats(teamPlayers);

        return (
          <div className="team-card" key={team.id}>
            <div className="team-header">
              <img
                className="team-logo"
                src={`https://server.sarvotar.io/assets/${team.team_logo}`}
                alt={`${team.name} Logo`}
              />
              <img
                className="team-owner-photo"
                src={`https://server.sarvotar.io/assets/${team.owner_photo}`}
                alt={`Owner of ${team.name}`}
                onClick={() => openOwnerModal(`https://server.sarvotar.io/assets/${team.owner_photo}`)}
              />
            </div>
            <h2 className="team-name">{team.name}</h2>
            <h4 className="text-center mb-2 text-xs sm:text-base">
              <strong>Owner:</strong> {team.owner_name}
            </h4>
            <div className="team-info">
              <table>
                <tr>
                  <td className="team-info-cell">
                    <p>
                      <strong>Total Points:</strong> {totalPoints}
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
                          src={`https://server.sarvotar.io/assets/${player.photo}`}
                          alt={player.name}
                          onClick={() =>
                            openPlayerModal(`https://server.sarvotar.io/assets/${player.photo}`)
                          }
                        />
                      </td>
                      <td>{player.name}</td>
                      <td>{player.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No players found for this team.</p>
            )}
          </div>
        );
      })}

      {isOwnerModalOpen && (
        <div className="modal" onClick={closeOwnerModal}>
          <div className="modal-content">
            <img src={selectedOwnerImage} alt="Owner" style={{maxHeight:'70vh', maxWidth:'70vw'}}/>
          </div>
        </div>
      )}

      {isPlayerModalOpen && (
        <div className="modal" onClick={closePlayerModal}>
          <div className="modal-content">
            <img src={selectedPlayerImage} alt="Player" style={{maxHeight:'70vh', maxWidth:'70vw'}} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsPage;
