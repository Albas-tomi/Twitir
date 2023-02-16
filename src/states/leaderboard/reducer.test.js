/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// *  - should return the initial state when given by unknown action
// *  - should return the thread detail when given by RECEIVE_LEADERBOARDS action
import leaderboardsReducer from './reducer';

describe('leadreboardReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });
  it('should return the thread detail when given by RECEIVE_LEADERBOARDS action', () => {
    // arrange
    const initialState = {};
    const action = {
      type: 'RECEIVE_LEADERBOARDS',
      payload: {
        leaderboards:
            {
              user: {
                id: 'users-1',
                name: 'John Doe',
                email: 'john@example.com',
                avatar: 'https://generated-image-url.jpg',
              },
              score: 10,
            },
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
