import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Play } from "lucide-react";

const UpdatePage = () => {
  const [playerData, setPlayerData] = useState();
  const [loading, setLoading] = useState(true);
  const [playerId, setPlayerId] = useState();
  
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setPlayerId(queryParams.get('PlayerId'));
    setLoading(false);
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!playerId) {
    return <div>No player data found.</div>;
  }

  return (
    <div className="w-full h-[100vh]">
      <img className="w-full h-full object-fit" src={`PlayerCards/${playerId}.png`} alt={playerId} />
    </div>
  );
};


export default UpdatePage;