/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import React from 'react';

function LeaderboardItem({ user, score }) {
  return (
    <div>
      <div className="md:ml-[240px] ml-[80px] w-full p-2">
        <div className="flex item-user my-5 w-full ">
          <img className="rounded-full w-20" src={user.avatar} alt={user.name} />
          <div className="mx-5 w-44 h-20">
            <p className="w-full ">{user.name}</p>
            <p className="w-1/2 ">{user.email}</p>
          </div>
        </div>
        <div className="item-score w-9 items-center ml-44">
          <p className="text-xl font-extrabold">{score}</p>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardItem;
