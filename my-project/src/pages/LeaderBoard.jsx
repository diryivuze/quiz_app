import React from 'react';

const LeaderBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Leaderboard</h1>
      {/* Sample Data */}
      <ul className="mt-4">
        <li>1. User A - 10 Points</li>
        <li>2. User B - 8 Points</li>
        <li>3. User C - 7 Points</li>
      </ul>
    </div>
  );
};

export default LeaderBoard;
