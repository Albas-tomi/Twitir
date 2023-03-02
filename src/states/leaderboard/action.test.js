/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncReceiveLeaderboards } from '../shared/action';
import { receiveLeaderboardsActionCreator } from './action';
import api from '../../utils/api';

// Skenario test##
// asyncReceiveLeaderboards thunk
// *  - should dispatch action correctly when data fetching success
// *  - should dispatch action and call alert correctly when data fetching failed
const fakeLeaderboards = [
  {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',

  },
];

// eslint-disable-next-line no-unused-vars
const fakeErrorResponse = new Error('ups, ada kesalahan');

describe('asyncReceiveLeaderboards thunk', () => {
  beforeEach(() => {
    // backup
    api._getLeaderboard = api.getLeaderboard;
  });
  afterEach(() => {
    // restore
    api.getLeaderboard = api._getLeaderboard;

    // delete
    delete api._getLeaderboard;
  });
  it('should dispatch action correctly when data leaderboard  fetching success', async () => {
    api.getLeaderboard = () => Promise.resolve(fakeLeaderboards);

    // eslint-disable-next-line no-undef
    const dispatch = jest.fn();

    await asyncReceiveLeaderboards()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboards));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getLeaderboard = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();

    window.alert = jest.fn();

    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
