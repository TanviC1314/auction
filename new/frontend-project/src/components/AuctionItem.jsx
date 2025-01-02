const AuctionItem = ({ item }) => {
    return (
        <div className="border rounded-lg p-4 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-green-600">${item.price}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                    Bid Now
                </button>
            </div>
        </div>
    );
};

export default AuctionItem;