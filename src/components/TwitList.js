/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';
import TwiteItem from './TwitItem';

function TwitList({
  threads, like, dislike, neutralLike, neutralDislike,
}) {
  return (
    <div className="">
      {threads.map((thread) => (
        <TwiteItem
          key={thread.id}
          {...thread}
          like={like}
          dislike={dislike}
          neutralLike={neutralLike}
          neutralDislike={neutralDislike}
        />
      ))}
    </div>
  );
}
TwitList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
};

export default TwitList;
