/* eslint-disable no-alert */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  TOGGLE_UP_VOTE_DETAIL: 'TOGGLE_UP_VOTE_DETAIL',
  TOGGLE_DOWN_VOTE_DETAIL: 'TOGGLE_DOWN_VOTE_DETAIL',
  TOGGLE_NEUTRALIZE_UP_VOTE_DETAIL: 'TOGGLE_NEUTRALIZE_UP_VOTE_DETAIL',
  TOGGLE_NEUTRALIZE_DOWN_VOTE_DETAIL: 'TOGGLE_NEUTRALIZE_DOWN_VOTE_DETAIL',
  RECEIVE_THREAD_COMMENT: 'RECEIVE_THREAD_COMMENT',
  VOTE_UP_THREAD_COMMENT: 'VOTE_UP_THREAD_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function addThreadCommentActionCreator(comment) {
  return {
    type: ActionType.RECEIVE_THREAD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpVoteDetailActionCreator({ userId, threadId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_DETAIL,
    payload: {
      userId,
      threadId,
    },
  };
}
function toggleDownVoteDetailActionCreator({ userId, threadId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_DETAIL,
    payload: {
      userId,
      threadId,
    },
  };
}

function toggleNeutralizeUpVoteDetailActionCreator({ userId, threadId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_UP_VOTE_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}
function toggleNeutralizeDownVoteDetailActionCreator({ userId, threadId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_DOWN_VOTE_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.getDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleUpVoteDetailActionCreator({ threadId, userId: authUser.id }),
    );

    try {
      await api.toggleUpVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleUpVoteDetailActionCreator({ threadId, userId: authUser.id }),
      );
    }
  };
}

function asyncToggleDownVoteDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownVoteDetailActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.toggleDownVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleDownVoteDetailActionCreator({ threadId, userId: authUser.id }),
      );
    }
  };
}

function asyncToggleNeutralizeUpVoteDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralizeUpVoteDetailActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeUpVoteDetailActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncToggleNeutralizeDownVoteDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(toggleNeutralizeDownVoteDetailActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeDownVoteDetailActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

function asyncAddThreadComment({ content, id }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ content, id });
      dispatch(addThreadCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  asyncAddThreadComment,
  asyncToggleNeutralizeDownVoteDetail,
  asyncToggleNeutralizeUpVoteDetail,
  asyncToggleDownVoteDetail,
  asyncToggleUpVoteDetail,
  asyncReceiveThreadDetail,
  toggleNeutralizeUpVoteDetailActionCreator,
  toggleNeutralizeDownVoteDetailActionCreator,
  toggleDownVoteDetailActionCreator,
  toggleUpVoteDetailActionCreator,
  addThreadCommentActionCreator,
  clearThreadDetailActionCreator,
  receiveThreadDetailActionCreator,
};
