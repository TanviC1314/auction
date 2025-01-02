import React from 'react';
import Header from '../components/Header';
import AuctionItem from '../components/AuctionItem';

const dummyData = [
    { id: 1, name: 'Player A', price: '$1000', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Player B', price: '$1500', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Player C', price: '$2000', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Player D', price: '$2500', image: 'https://via.placeholder.com/150' },
];

const CricketAuctionPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Cricket Auction 2024</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dummyData.map(item => (
                        <AuctionItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CricketAuctionPage;