/* eslint-disable react/prop-types */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import PropTypes from 'prop-types';
import DetailReply from './DetailReply';
import { postedAt } from '../utils';

function DetailTwit({
  id,
  title,
  body,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  authUser,
  like,
  dislike,
  neutralLike,
  neutralDislike,
}) {
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      like(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
      like(id);
    } else if (isThreadLiked) {
      neutralLike(id);
    }
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      dislike(id);
    } else if (isThreadLiked) {
      neutralLike(id);
      dislike(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
    }
  };
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="md:ml-[240px] md:w-1/2 ml-[80px] mt-[110px] block   p-2">
      {/* TwitCard */}
      <div className="w-full min-h-[50px] border-b-2">
        <div className="flex w-[95%] ml-3 align-middle my-3">
          <img src={owner.avatar} alt="profile" className="rounded-full w-12 h-12 md:h-[2.5rem] md:w-[2.5rem]" />
          <h2 className="ml-3 font-bold text-lg text-blue-600 cursor-pointer">
            {title}
          </h2>
          <p className="ml-3 text-xs my-2">{postedAt(createdAt)}</p>
        </div>
        <p className="ml-3 w-[70%] md:w-[90%] p-2">
          {body}
          {' '}
        </p>
        <div className="containerTwit  mt-3 flex gap-1 p-3 w-[90%]">
          <div className="flex">
            <div className="flex justify-center items-center text-center">
              <p className="action__list">
                <button type="button" onClick={onLikeClick} className=" flex flex-col rounded-full hover:bg-cyan-600 w-6 h-6 items-center justify-center">
                  {isThreadLiked ? (
                    <AiFillLike style={{ color: 'blue' }} />
                  ) : (
                    <AiFillLike />
                  )}
                </button>
                {isThreadLiked ? (
                  <span style={{ color: 'blue' }}>{upVotesBy.length}</span>
                ) : (
                  <span>{upVotesBy.length}</span>
                )}
              </p>
            </div>

            <div className="flex justify-center items-center text-center">
              <p className="action__list">
                <button type="button" onClick={onDislikeClick} className="rounded-full flex flex-col hover:bg-red-600 items-center justify-center w-6 h-6 ">
                  {isThreadDisliked ? (
                    <AiFillDislike style={{ color: 'red' }} />
                  ) : (
                    <AiFillDislike />
                  )}
                </button>
                {isThreadDisliked ? (
                  <span style={{ color: 'red' }}>{downVotesBy.length}</span>
                ) : (
                  <span>{downVotesBy.length}</span>
                )}
              </p>
            </div>
          </div>
          <div className="last update ml-1">
            <span className="font-semibold">
              @
              {owner.name}
            </span>
          </div>
        </div>
      </div>
      {/* Last Twit Card */}
      <DetailReply id={id} />
    </div>
  );
}
DetailTwit.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.objectOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,

}

export default DetailTwit;
