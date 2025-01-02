import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Auction Platform</h1>
      <div style={{ marginTop: "20px" }}>
        <Link to="/cricket-auction" style={linkStyle}>
          <div style={cardStyle}>Cricket Auction</div>
        </Link>
        <Link to="/football-auction" style={linkStyle}>
          <div style={cardStyle}>Football Auction</div>
        </Link>
      </div>
    </div>
  );
};

const cardStyle = {
  padding: "20px",
  margin: "20px auto",
  border: "1px solid #ccc",
  borderRadius: "8px",
  width: "300px",
  textAlign: "center",
  cursor: "pointer",
  backgroundColor: "#f9f9f9",
};

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

export default HomePage;
