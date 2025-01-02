import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CricketAuctionPage from "./pages/CricketAuctionPage";
import FootballAuctionPage from "./pages/FootballAuctionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cricket-auction" element={<CricketAuctionPage />} />
        <Route path="/football-auction" element={<FootballAuctionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
