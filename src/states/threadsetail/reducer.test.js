/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
// * - fungsi threadsReducers
//  * - harus mengembalikan keadaan awal ketika diberikan oleh tindakan yang tidak diketahui
//  * - harus mengembalikan detail utas saat diberikan oleh tindakan RECEIVE_THREAD_DETAIL
//  * - harus mengembalikan nol saat diberikan oleh tindakan CLEAR_THREAD_DETAIL
//  * - harus mengembalikan utas dengan utas komentar saat diberikan oleh
//  * ADD_COMMENT tindakan
//  * - harus mengembalikan utas dengan toggle upVotesBy utas saat diberikan oleh
//  * Tindakan TOGGLE_UP_VOTE_THREAD_DETAIL
//  * - harus mengembalikan utas dengan toggle downVotesBy utas saat diberikan oleh
//  * Tindakan TOGGLE_DOWN_VOTE_THREAD_DETAIL
//  * - harus mengembalikan utas dengan utas upVotesBy saat diberikan oleh
//  * Tindakan TOGGLE_NEUTRAL_UP_VOTE_THREAD_DETAIL
//  * - harus mengembalikan utas dengan utas downVotesBy saat diberikan oleh
//  * Tindakan TOGGLE_NEUTRAL_DOWN_VOTE_THREAD_DETAIL

import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('harus mengembalikan keadaan awal ketika diberikan oleh tindakan yang tidak diketahui', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN  ' };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });
  it('harus mengembalikan detail utas saat diberikan oleh tindakan RECEIVE_THREAD_DETAIL', () => {
    // arrange
    const initialState = {};
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });
  it('harus mengembalikan detail utas saat diberikan oleh tindakan CLEAR_THREAD_DETAIL', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      user: 'user-1',
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: 'CLEAR_THREAD_DETAIL',
      payload: null,
    };

    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual(action.payload);
  });
  // it('harus mengembalikan utas dengan utas komentar saat diberikan oleh RECEIVE_THREAD_COMMENT tindakan', () => {
  //   // arrange
  //   const initialState = {
  //     id: 'comment-1',
  //     content: 'Ini adalah komentar pertama',
  //     createdAt: '2021-06-21T07:00:00.000Z',
  //     upVotesBy: [],
  //     downVotesBy: [],
  //     owner: {
  //       id: 'users-1',
  //       name: 'John Doe',
  //       email: 'john@example.com',
  //     },
  //   };
  //   const action = {
  //     type: 'RECEIVE_THREAD_COMMENT',
  //     payload: {
  //       comment: 'Comment',
  //     },
  //   };
  //   // action
  //   const nextState = threadDetailReducer(initialState, action);
  //   // assert
  //   expect(nextState).toEqual([
  //     action.payload,
  //   ]);
  // });
  it(' harus mengembalikan utas dengan toggle upVotesBy utas saat diberikan oleh Tindakan TOGGLE_UP_VOTE_THREAD_DETAIL', () => {
    // arrange
    const initialState = {
      id: 'threads-1',
      title: 'Title 1',
      body: 'Body 1',
      category: 'Category 1',
      user: 'user-1',
      upVotesBy: [],
      downVotesBy: [],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'TOGGLE_UP_VOTE_DETAIL',
      payload: {
        id: 'thread-id',
        userId: 'user-1',
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual(
      {
        ...initialState,
        upVotesBy: [action.payload.userId],
      },
    );
  });
  it(' harus mengembalikan utas dengan toggle downVotesBy utas saat diberikan oleh Tindakan TOGGLE_UP_VOTE_THREAD_DETAIL', () => {
    // arrange
    const initialState = {
      id: 'threads-1',
      title: 'Title 1',
      body: 'Body 1',
      category: 'Category 1',
      user: 'user-1',
      upVotesBy: [],
      downVotesBy: [],
      created: '2022-01-22T10:06:55.588Z',
    };
    const action = {
      type: 'TOGGLE_DOWN_VOTE_DETAIL',
      payload: {
        id: 'thread-id',
        userId: 'user-1',
      },
    };
    // action
    const nextState = threadDetailReducer(initialState, action);
    // assert
    expect(nextState).toEqual(
      {
        ...initialState,
        downVotesBy: [action.payload.userId],
      },
    );
  });
//   it(' harus mengembalikan utas dengan toggle neutralizeUpVotesBy utas saat diberikan oleh Tindakan TOGGLE_UP_VOTE_THREAD_DETAIL', () => {
//     // arrange
//     const initialState = {
//       id: 'thread-1',
//       title: 'Thread Pertama',
//       body: 'Ini adalah thread pertama',
//       category: 'General',
//       createdAt: '2021-06-21T07:00:00.000Z',
//       ownerId: 'users-1',
//       upVotesBy: ['user-1'],
//       downVotesBy: [],
//       totalComments: 0,
//     };
//     const action = {
//       type: 'TOGGLE_NEUTRALIZE_UP_VOTE_DETAIL',
//       payload: {
//         userId: 'user-1',
//       },
//     };
//     // action
//     const nextState = threadDetailReducer(initialState, action);
//     // assert
//     expect(nextState).toEqual(
//       {
//         ...initialState[0],
//         upVotesBy: [action.payload.userId],
//       },
//     );
//   });
});
