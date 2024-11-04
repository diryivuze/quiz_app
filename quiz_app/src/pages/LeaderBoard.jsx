import React from 'react';

const LeaderBoard = () => {
  return (
    <div className="container mx-auto text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
      {/* Placeholder for leaderboard data */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold">Top Scores</h2>
        <ul>
          <li>1. User A - 100</li>
          <li>2. User B - 90</li>
          <li>3. User C - 80</li>
        </ul>
      </div>
    </div>
  );
};

export default LeaderBoard;
