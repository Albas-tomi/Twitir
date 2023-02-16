/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailTwit from '../components/DetailTwit';
import Header from '../components/Header';
import {
  asyncReceiveThreadDetail, asyncToggleDownVoteDetail, asyncToggleUpVoteDetail, asyncToggleNeutralizeDownVoteDetail, asyncToggleNeutralizeUpVoteDetail,
} from '../states/threadsetail/action';
import Comment from '../components/Comment';

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onLikeDetail = (threadId) => {
    dispatch(asyncToggleUpVoteDetail(threadId));
  };
  const onDislikeDetail = (threadId) => {
    dispatch(asyncToggleDownVoteDetail(threadId));
  };
  const onNeutralizeLikeDetail = (threadId) => {
    dispatch(asyncToggleNeutralizeUpVoteDetail(threadId));
  };
  const onNeutralizeDisLikeDetail = (threadId) => {
    dispatch(asyncToggleNeutralizeDownVoteDetail(threadId));
  };

  if (!threadDetail) {
    return null;
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="flex flex-row  w-full">
      <div className="flex flex-col w-full overflow-x-hidden">
        <Header />
        <DetailTwit
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...threadDetail}
          authUser={authUser.id}
          like={onLikeDetail}
          dislike={onDislikeDetail}
          neutralLike={onNeutralizeLikeDetail}
          neutralDislike={onNeutralizeDisLikeDetail}
        />
        <div className="md:ml-[240px] md:w-1/2 ml-[80px] block   p-2">
          <Comment key={threadDetail.id} {...threadDetail} />
        </div>
      </div>

    </div>
  );
}

export default DetailPage;
