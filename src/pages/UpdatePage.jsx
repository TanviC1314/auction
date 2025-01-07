import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Play } from "lucide-react";

const UpdatePage = () => {
  const [playerData, setPlayerData] = useState();
  const [loading, setLoading] = useState(true);
  
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const playerId = queryParams.get('PlayerId');
    
    if (playerId) {
      axios.get(`https://server.sarvotar.io/items/Players/${playerId}`)
        .then((response) => {
          setPlayerData(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching player data:", error);
          setLoading(false);
        });
    }
  }, [location]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!playerData) {
    return <div>No player data found.</div>;
  }

  return (
    <div className="w-full h-[100vh]">
      <img className="w-full h-full object-fit" src={`PlayerCards/${playerData.name}.png`} alt={playerData.name} />
    </div>
  );
};


export default UpdatePage;