/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineComment, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function TwiteItem({
  id, title, body, createdAt, totalComments, user, upVotesBy,
  downVotesBy,
  like, dislike, neutralLike, neutralDislike, authUser,

}) {
  const navigate = useNavigate();
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

  const onDetailClick = () => {
    navigate(`/threads/${id}`);
  };

  return (
    <div className="container">
      <div className=" block p-2">
        {/* TwitCard */}
        <div
          className="w-full min-h-[50px] border-b-2 hover:bg-slate-200 duration-700 p-2"
        >
          <div className="flex w-[95%] ml-3 align-middle my-3 flex-row gap-4">
            <p onClick={onDetailClick} className="ml-3 font-bold text-lg text-blue-600 cursor-pointer">
              {title}
            </p>
            <span className="ml-3 text-xs my-2">{postedAt(createdAt)}</span>
          </div>
          <span className="font-bold ml-5">
            @
            {user.name}
          </span>
          <p className="ml-3 w-[70%] md:w-[90%] p-2">{body}</p>
          <div className="mt-3 flex gap-1 p-3 w-[90%]">
            <div className="flex gap-2 w-full">
              <div className="flex gap-2">
                <div className="flex justify-center items-center text-center">
                  <p className="action__list flex">
                    <button type="button" onClick={onLikeClick} className=" flex rounded-full hover:bg-cyan-600 w-6 h-6 items-center justify-center">
                      {isThreadLiked ? (
                        <AiOutlineLike style={{ color: 'blue' }} />
                      ) : (
                        <AiOutlineLike />
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
                  <p className="action__list flex">
                    <button type="button" onClick={onDislikeClick} className="rounded-full flex hover:bg-red-600 items-center justify-center w-6 h-6 ">
                      {isThreadDisliked ? (
                        <AiOutlineDislike style={{ color: 'red' }} />
                      ) : (
                        <AiOutlineDislike />
                      )}
                    </button>
                    {isThreadDisliked ? (
                      <span style={{ color: 'red' }}>{downVotesBy.length}</span>
                    ) : (
                      <span>{downVotesBy.length}</span>
                    )}
                  </p>
                </div>
                <p className="text-lg text-center w-6 h-6 flex ">
                  <AiOutlineComment />
                  {' '}
                  {totalComments}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Last Twit Card */}
      </div>
    </div>
  );
}
TwiteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TwiteItem;
