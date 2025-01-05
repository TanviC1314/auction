import React from "react";

const TeamsPage = () => {
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
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          background-color: #f9f9f9;
          margin-bottom: 20px;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

        .team-name {
          text-align: center;
          font-size: 26px;
          color: #2c3e50;
          margin-bottom: 15px;
          font-weight: bold;
        }

        .team-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          background-color: #eaf2f8;
          border-radius: 5px;
          margin-bottom: 15px;
        }

        .team-info p {
          margin: 0;
          font-size: 14px;
          color: #34495e;
        }

        .team-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        .team-table th,
        .team-table td {
          text-align: left;
          padding: 12px;
          border: 1px solid #ddd;
          font-size: 14px;
        }

        .team-table th {
          background-color: #2c3e50;
          color: white;
          font-weight: bold;
        }

        .team-table tbody tr:nth-child(odd) {
          background-color: #f4f6f7;
        }

        .team-table tbody tr:hover {
          background-color: #d5dbdb;
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
            text-align: left;
          }

          .team-info p {
            margin-bottom: 5px;
          }
        }
      `}</style>

      <div className="team-card">
        <h2 className="team-name">Gangsters</h2>
        <div className="team-info">
          <p><strong>Total Points:</strong> 1.00 CR</p>
          <p><strong>Points Used:</strong> 94.90 LAC</p>
          <p><strong>Balance Points:</strong> 5.10 LAC</p>
          <p><strong>Players Bought:</strong> 18/18</p>
        </div>
        <table className="team-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Role</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aniket Kawade</td>
              <td>Batter</td>
              <td>M3C</td>
              <td>6.00 LAC</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ojas Hamir Mehta</td>
              <td>All Rounder</td>
              <td>M3C</td>
              <td>6.00 LAC</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Dhun Somaiya</td>
              <td>Batter</td>
              <td>M3C</td>
              <td>6.00 LAC</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Kunal Bhavsar</td>
              <td>All Rounder</td>
              <td>M3C</td>
              <td>6.00 LAC</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Karan Singh Walia</td>
              <td>All Rounder / Wk</td>
              <td>M3C</td>
              <td>6.00 LAC</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="team-card">
        <h2 className="team-name">Pink Panthers</h2>
        <div className="team-info">
          <p><strong>Total Points:</strong> 1.00 CR</p>
          <p><strong>Points Used:</strong> 71.45 LAC</p>
          <p><strong>Balance Points:</strong> 28.55 LAC</p>
          <p><strong>Players Bought:</strong> 18/18</p>
        </div>
        <table className="team-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player Name</th>
              <th>Role</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vineet Dujodwala</td>
              <td>All Rounder</td>
              <td>M3C</td>
              <td>6.00 LAC</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sohil Shah</td>
              <td>All Rounder</td>
              <td>M3C</td>
              <td>6.00 LAC</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Prithvi Kothari</td>
              <td>All Rounder</td>
              <td>M3C</td>
              <td>6.00 LAC</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Vijay Singh</td>
              <td>Batter / Wk</td>
              <td>M3C</td>
              <td>6.00 LAC</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Himanshu Waingankar</td>
              <td>Batter</td>
              <td>M3C</td>
              <td>6.00 LAC</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamsPage;
