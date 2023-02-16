/* eslint-disable import/order */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { postedAt } from '../utils';
import PropTypes from 'prop-types';

function Comment(threadDetail) {
  return (
    <>
      {threadDetail.comments.map((comment) => (
        <div key={comment.id} className="flex flex-col border-b-2 ">
          <div className="flex justify-between">
            <div className="flex flex-row gap-3 my-3 items-center">
              <img
                className="rounded-full w-[40px]"
                src={comment.owner.avatar}
                alt="profile"
              />
              <span className="font-semibold">{comment.owner.name}</span>
            </div>
            <p className="ml-3 text-xs my-2">{postedAt(comment.createdAt)}</p>
          </div>
          <p className="ml-3 w-[70%] md:w-[90%] items-baseline  p-2">
            {comment.content}
          </p>
        </div>
      ))}
    </>
  );
}
Comment.prototypes = {
  threadDetail: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Comment;
