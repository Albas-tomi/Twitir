/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/shared/action';
import LeaderboardList from '../components/leadreboardList';

function LeaderBoard() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);
  const leaderboardListItem = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));
  return (
    <div className="overflow-x-hidden">
      <LeaderboardList leaderboards={leaderboardListItem} />
    </div>
  );
}
export default LeaderBoard;
