export default function AuctionStatus() {
    return (
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                Auction Completed
              </span>
              <span>
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
    )
  }
  
  