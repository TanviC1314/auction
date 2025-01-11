import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TeamsPage from "./pages/TeamsPage";
import UpdatesPage from "./pages/UpdatePage"; // Ensure this is correct
import SoldPlayersPage from "./pages/SoldPlayersPage";
import UnsoldPlayersPage from "./pages/UnsoldPlayersPage";
import YetToAuctionPage from "./pages/YetToAuctionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TeamsPage />} />
          <Route path="/sold-players" element={<SoldPlayersPage />} />
          <Route path="/unsold-players" element={<UnsoldPlayersPage />} />
          <Route path="/yet-to-auction" element={<YetToAuctionPage />} />
        </Route>
        <Route path="/player" element={<UpdatesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
