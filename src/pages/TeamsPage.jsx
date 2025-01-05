import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  var teamPlayers = []

  // Fetch teams and players data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch teams
        // const fetchedTeams = [];
        // for (let i = 1; i <= 9; i++) {
          const teamResponse = await axios.get(`https://sarvotar.io/items/Teams`);
          // const { id, name, owner_name, team_logo } = teamResponse.data;
          const fetchedTeams=teamResponse.data.data        // }
        setTeams(fetchedTeams);

        // Fetch players
        const playersResponse = await axios.get("https://sarvotar.io/admin/content/Players");
        setPlayers(playersResponse.data);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter players by team name
  const getPlayersForTeam = async (teamid) => {
    // if (!Array.isArray(players)) {
    //   return [];
    // }
    const teamPlayersResponse = await axios.get(`https://sarvotar.io/items/Players?filter[team][_eq]=${teamid}`);
    const teamPlayers = teamPlayersResponse.data.data;
    // console.log(teamPlayers);
    teamPlayers[teamid]=teamPlayers;
    return teamPlayers;
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

        @media (max-width: 768px) {
          .teams-page {
            flex-direction: column;
            align-items: center;
          }

          .team-card {
            width: 90%;
          }

          .team-info {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      {teams.map((team,i) => {
        // console.log(team.id);
        teamPlayers = getPlayersForTeam(team.id);
        // console.log(teamPlayers);
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
            <td colSpan="4" ><strong>Owner:</strong> {team.owner_name}</td>
          </tr>
          <tr>
            <td><p><strong>Total Points:</strong> 1.00 CR</p></td>
            <td><p><strong>Points Used:</strong> 94.90 LAC</p></td>
            <td><p><strong>Balance Points:</strong> 5.10 LAC</p></td>
            <td><p><strong>Players Bought:</strong> 18/18</p></td>
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
                <td>{player.price}</td>
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
