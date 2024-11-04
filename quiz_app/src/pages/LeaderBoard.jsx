import { TrophyIcon } from '@heroicons/react/solid';

function LeaderBoard() {
  const leaderboardData = [
    { name: 'Alice', score: 95 },
    { name: 'Bob', score: 85 },
    { name: 'Charlie', score: 75 },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 flex items-center justify-center">
        <TrophyIcon className="h-8 w-8 mr-2 text-yellow-400" /> Leaderboard
      </h2>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="py-3 px-4">Rank</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr
              key={index}
              className={`bg-${index % 2 === 0 ? 'gray-100' : 'white'} text-center`}
            >
              <td className="py-3 px-4 font-semibold">{index + 1}</td>
              <td className="py-3 px-4">{entry.name}</td>
              <td className="py-3 px-4">{entry.score}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
