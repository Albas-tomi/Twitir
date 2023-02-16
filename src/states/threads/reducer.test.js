/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
// * - fungsi threadsReducers
//  * - harus mengembalikan keadaan awal ketika diberikan oleh tindakan yang tidak diketahui
//  * - harus mengembalikan utas saat diberikan oleh tindakan RECEIVE_THREADS
//  * - harus mengembalikan utas dengan utas baru saat diberikan oleh tindakan ADD_THREAD
//  * - harus mengembalikan utas dengan toggle upVotesBy utas saat diberikan oleh
//  * Tindakan TOGGLE_UP_VOTE_THREAD
//  * - harus mengembalikan utas dengan toggle downVotesBy utas saat diberikan oleh
//  * Tindakan TOGGLE_DOWN_VOTE_THREAD
//  * - harus mengembalikan utas dengan utas upVotesBy saat diberikan oleh
//  * Tindakan TOGGLE_NEUTRAL_UP_VOTE_THREAD
//  * - harus mengembalikan utas dengan utas downVotesBy saat diberikan oleh
//  * Tindakan TOGGLE_NEUTRAL_DOWN_VOTE_THREAD
import threadsReducer from './reducer';

describe('threadsReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('harus kembalikan utas saat mendapat tindakan RECIEVE_THREADS', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
          {
            id: 'thread-2',
            title: 'Thread Kedua',
            body: 'Ini adalah thread kedua',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };
    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });
  it('harus mengembalikan utas dengan utas baru saat diberikan oleh tindakan ADD_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-1',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };
    // action
    const nextState = threadsReducer(initialState, action);
    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('harus mengembalikan utas dengan toggle upVotesBy utas saat diberikan oleh Tindakan TOGGLE_UP_VOTE', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'TOGGLE_UP_VOTE',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    //   action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('harus mengembalikan utas dengan toggle downVotesBy utas saat diberikan oleh Tindakan TOGGLE_DOWN_VOTE', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'TOGGLE_DOWN_VOTE',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    //   action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
  it('harus mengembalikan utas dengan toggle neutralize up vote juka diberikan tindakan TOGGLE_NEUTRALIZE_UP_VOTE', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: ['user-1'],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'TOGGLE_NEUTRALIZE_UP_VOTE',
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });
  it('harus mengembalikan utas dengan toggle neutralize down vote juka diberikan tindakan TOGGLE_NEUTRALIZE_DOWN_VOTE', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: ['user-1'],
        totalComments: 0,
      },
    ];
    const action = {
      type: 'TOGGLE_NEUTRALIZE_DOWN_VOTE',
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
