export const sampleData = {
    teams: {
      gangsters: {
        name: "Gangsters",
        logo: "/api/placeholder/128/128",
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
      },
      pinkPanthers: {
        name: "Pink Panthers",
        logo: "/api/placeholder/128/128",
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
      },
    },
    updates: [
      { message: "Vinod Lund SOLD TO Gangsters (5.00 Lac)", time: "1 month ago" },
      { message: "Niraj Bajaj SOLD TO Gangsters (5.00 Lac)", time: "1 month ago" },
      { message: "Samit Shukla SOLD TO Mumbai Titans (50000)", time: "1 month ago" },
      { message: "Huzefa Saifee SOLD TO Pink Panthers (50000)", time: "1 month ago" },
      { message: "Bhavesh Vora SOLD TO Pink Panthers (50000)", time: "1 month ago" },
    ],
    soldPlayers: [
      { name: "Vinod Kumar", role: "All Rounder", team: "Pink Panthers", amount: "8.50 LAC" },
      { name: "Rajesh Sharma", role: "Batter", team: "Gangsters", amount: "7.00 LAC" },
    ],
    unsoldPlayers: [
      { name: "Amit Verma", role: "Bowler", basePrice: "5.00 LAC" },
      { name: "Rohit Singh", role: "Batter", basePrice: "4.50 LAC" },
    ],
    yetToAuctionPlayers: [
      { name: "Suresh Raina", role: "All Rounder", basePrice: "6.00 LAC" },
      { name: "Yuvraj Singh", role: "Batter", basePrice: "5.50 LAC" },
    ],
    currentBid: {
      playerName: "Vinod Kumar",
      currentAmount: "8.50 LAC",
      basePrice: "6.00 LAC",
      role: "All Rounder",
      team: "M3C",
      imageUrl: "/api/placeholder/120/120",
      highestBidder: "Pink Panthers",
      timeLeft: "30"
    }
  };