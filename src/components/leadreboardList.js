/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line no-unused-vars

import React from 'react';
import LeaderboardItem from './leaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">LEADERBOARD USERS</h1>

      {leaderboards.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
      ))}
    </div>
  );
}
export default LeaderboardList;
