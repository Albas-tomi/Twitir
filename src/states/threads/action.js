/* eslint-disable no-alert */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  ADD_THREAD: 'ADD_THREAD',
  RECIEVE_THREADS: 'RECEIVE_THREADS',
  TOGGLE_UP_VOTE: 'TOGGLE_UP_VOTE',
  TOGGLE_DOWN_VOTE: 'TOGGLE_DOWN_VOTE',
  TOGGLE_NEUTRALIZE_UP_VOTE: 'TOGGLE_NEUTRALIZE_UP_VOTE',
  TOGGLE_NEUTRALIZE_DOWN_VOTE: 'TOGGLE_NEUTRALIZE_DOWN_VOTE',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECIEVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadsActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}
function toggleUpVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}
function toggleDownVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}
function toggleNeutralizeUpVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_UP_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}
function toggleNeutralizeDownVoteThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRALIZE_DOWN_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category = '' }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadsActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleUpVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}
function asyncToggleDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleDownVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}
function asyncToggleNeutralUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralizeUpVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}
function asyncToggleNeutralDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(toggleNeutralizeDownVoteThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleNeutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(toggleNeutralizeDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadsActionCreator,
  asyncAddThread,
  toggleDownVoteThreadActionCreator,
  toggleNeutralizeDownVoteThreadActionCreator,
  toggleNeutralizeUpVoteThreadActionCreator,
  toggleUpVoteThreadActionCreator,
  asyncToggleDownVoteThread,
  asyncToggleNeutralDownVoteThread,
  asyncToggleUpVoteThread,
  asyncToggleNeutralUpVoteThread,
};
