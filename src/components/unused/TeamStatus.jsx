export default function TeamStats({ team }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex flex-col items-center mb-8">
        <img
          src={team.logo || "/placeholder.svg"}
          alt={team.name}
          className="h-32 w-32 object-contain mb-4"
        />
        <h2 className="text-3xl font-bold text-gray-800">{team.name}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{team.totalPoints}</div>
          <div className="text-sm text-gray-600">Total Points</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{team.pointsUsed}</div>
          <div className="text-sm text-gray-600">Points Used</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">{team.balancePoints}</div>
          <div className="text-sm text-gray-600">Balance Points</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{team.playersBought}/18</div>
          <div className="text-sm text-gray-600">Players Bought</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 font-semibold text-gray-600">#</th>
              <th className="py-3 px-4 font-semibold text-gray-600">Player</th>
              <th className="py-3 px-4 font-semibold text-gray-600">Role</th>
              <th className="py-3 px-4 font-semibold text-gray-600">Team</th>
              <th className="py-3 px-4 font-semibold text-gray-600 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {team.players.map((player, index) => (
              <tr key={player.name} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-medium">{player.name}</td>
                <td className="py-3 px-4">{player.role}</td>
                <td className="py-3 px-4">{player.team}</td>
                <td className="py-3 px-4 text-right">
                  {player.amount}
                  {player.retained && (
                    <span className="ml-2 text-blue-600 text-sm font-semibold">R</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

