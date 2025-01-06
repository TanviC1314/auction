import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TeamsPage from "./pages/TeamsPage";
import UpdatesPage from "./pages/UpdatePage"; // Ensure this is correct
import SoldPlayersPage from "./pages/SoldPlayersPage";
import UnsoldPlayersPage from "./pages/UnsoldPlayersPage";
import YetToAuctionPage from "./pages/YetToAuctionPage";

const App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 300000); // Refresh every 5 minutes (300,000 ms)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TeamsPage />} />
          <Route path="/sold-players" element={<SoldPlayersPage />} />
          <Route path="/unsold-players" element={<UnsoldPlayersPage />} />
          <Route path="/yet-to-auction" element={<YetToAuctionPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
