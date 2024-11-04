function LeaderBoard() {
    const leaderboardData = [ /* Example data */ ];
  
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{entry.name}</td>
                <td className="py-2 px-4 border-b">{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default LeaderBoard;
  