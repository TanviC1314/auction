import React from "react";
import { useNavigate } from "react-router-dom";

const AuctionDetail = ({ title, description, startTime, endTime }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg px-8 py-10 max-w-3xl mx-auto mt-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex justify-between mb-8">
        <div>
          <span className="text-sm text-gray-500">Start Time</span>
          <p className="font-semibold">{startTime}</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">End Time</span>
          <p className="font-semibold">{endTime}</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => alert("Bidding functionality to be implemented.")}
        >
          Start Bidding
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default AuctionDetail;

