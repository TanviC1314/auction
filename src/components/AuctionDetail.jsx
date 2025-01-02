import React, { useState } from 'react';
import { Share } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../components/Dialog';
import { ScrollArea } from '../components/ScrollArea';
import AuctionDetail from '../components/AuctionDetail';
import '../styles/CricketAuctionPage.css';

const CricketAuctionPage = () => {
  const [activeTab, setActiveTab] = useState("Teams");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const gangsters = {
    name: "Gangsters",
    logo: "/gangsters-logo.png",
    totalPoints: "1.00 CR",
    pointsUsed: "94.90 LAC",
    balancePoints: "5.10 LAC",
    playersBought: "18/18",
    players: [
      { name: "Aniket Kawade", role: "Batter", team: "M3C", amount: "6.00 Lac", retained: true },
      { name: "Ojas Hamir Mehta", role: "All Rounder", team: "M3C", amount: "6.00 Lac", retained: true },
      { name: "Dhun Somaiya", role: "Batter", team: "M3C", amount: "6.00 Lac", retained: true },
      { name: "Kunal Bhavsar", role: "All Rounder", team: "M3C", amount: "6.00 Lac", retained: true },
      { name: "Karan Singh Walia", role: "All Rounder / Wk", team: "M3C", amount: "6.00 Lac", retained: true },
    ],
  };

  const pinkPanthers = {
    name: "Pink Panthers",
    logo: "/pink-panthers-logo.png",
    totalPoints: "1.00 CR",
    pointsUsed: "71.45 LAC",
    balancePoints: "28.55 LAC",
    playersBought: "18/18",
    players: [
      { name: "Vineet Dujodwala", role: "All Rounder", team: "M3C", amount: "6.00 Lac", retained: true },
      { name: "Sohil Shah", role: "All Rounder", team: "M3C", amount: "6.00 Lac", retained: true },
      { name: "Prithvi Kothari", role: "All Rounder", team: "M3C", amount: "6.00 Lac", retained: true },
      { name: "Vijay Singh", role: "Batter / Wk", team: "M3C", amount: "6.00 Lac", retained: true },
      { name: "Himanshu Waingankar", role: "Batter", team: "M3C", amount: "6.00 Lac", retained: true },
    ],
  };

  const auctionDetail = {
    title: "M3C BIG BASH 2024",
    date: "28 Nov 2024",
    description: "Auction for the M3C Big Bash 2024",
    image: "/vinod-lund.jpg",
    subtitle: "(All Rounder)",
    amount: "5.00 Lac",
    status: "SOLD",
    teamLogo: "/gangsters-logo.png",
    team: "Gangsters"
  };

  const Header = () => (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <img src="/tpa-logo.png" alt="TPA Logo" className="h-8" />
          <nav className="hidden md:flex space-x-6">
            {["Home", "About us", "How It Works", "Features", "Auctions", "Blog", "Pricing", "Contact Us"].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-900">
                {item}
              </a>
            ))}
          </nav>
          <button className="text-gray-600 hover:text-gray-900">Login</button>
        </div>
      </div>
    </header>
  );

  const AuctionStatus = () => (
    <div className="bg-red-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">
              Auction Completed
            </span>
            <span className="text-gray-700">
              Auction is over.
              <a href="#" className="text-green-600 hover:underline ml-1">
                Check this article
              </a>
              {' '}for auction summary.
            </span>
          </div>
          <div className="text-gray-500 text-sm">
            Auto Refresh is on. Please do not refresh the page
          </div>
        </div>
      </div>
    </div>
  );

  const TabNavigation = () => {
    const tabs = ["Teams", "Updates", "Sold Players", "Unsold Players", "Yet to auction Players"];
    const teamFilters = ["GANG", "PINK", "PHNTM", "VW", "TITAN"];

    return (
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center space-x-4 py-4">
            {tabs.map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>
          {activeTab === "Teams" && (
            <div className="flex flex-wrap gap-2 justify-center py-4">
              {teamFilters.map((filter) => (
                <span
                  key={filter}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                >
                  {filter}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const TeamCard = ({ team }) => (
    <Card className="m-4 shadow-lg">
      <CardHeader>
        <CardTitle>{team.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-6">
          <img
            src={team.logo}
            alt={team.name}
            className="h-24 w-24 object-contain mb-4"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{team.totalPoints}</div>
            <div className="text-sm text-gray-500">Total Points</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{team.pointsUsed}</div>
            <div className="text-sm text-gray-500">Points Used</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{team.balancePoints}</div>
            <div className="text-sm text-gray-500">Balance Points</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{team.playersBought}</div>
            <div className="text-sm text-gray-500">Players bought</div>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">#</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Player</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Role</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">Team</th>
              <th className="px-4 py-2 text-right text-xs font-medium text-gray-500">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {team.players.map((player, index) => (
              <tr key={player.name} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-500">{index + 1}</td>
                <td className="px-4 py-2 text-sm font-medium text-gray-900">{player.name}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{player.role}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{player.team}</td>
                <td className="px-4 py-2 text-sm text-gray-900 text-right">
                  {player.amount}
                  {player.retained && (
                    <span className="ml-1 text-blue-600 text-xs">R</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AuctionStatus />
      <AuctionDetail auction={auctionDetail} />
      <TabNavigation />
      <div className="container mx-auto px-4 py-8">
        {activeTab === "Teams" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TeamCard team={gangsters} />
            <TeamCard team={pinkPanthers} />
          </div>
        )}
        {activeTab === "Updates" && (
          <Card className="m-4 shadow-lg">
            <CardHeader>
              <CardTitle>Latest Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">No new updates available.</p>
            </CardContent>
          </Card>
        )}
        {activeTab === "Sold Players" && (
          <Card className="m-4 shadow-lg">
            <CardHeader>
              <CardTitle>Sold Players</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">All sold players will be listed here.</p>
            </CardContent>
          </Card>
        )}
        {activeTab === "Unsold Players" && (
          <Card className="m-4 shadow-lg">
            <CardHeader>
              <CardTitle>Unsold Players</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">No unsold players at the moment.</p>
            </CardContent>
          </Card>
        )}
        {activeTab === "Yet to auction Players" && (
          <Card className="m-4 shadow-lg">
            <CardHeader>
              <CardTitle>Yet to Auction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Players yet to be auctioned will appear here.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CricketAuctionPage;