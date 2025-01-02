import React from "react";
import { Link } from "react-router-dom";

const AuctionList = ({ auctions }) => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Active Auctions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions.map((auction, index) => (
            <Link to={auction.link} key={index} className="block">
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{auction.name}</h3>
                <p className="text-gray-600">{auction.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-blue-600 font-medium">View Details</span>
                  <span className="text-gray-500 text-sm">{auction.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionList;

