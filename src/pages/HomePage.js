/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import PopularTwit from '../components/PopulerTwit';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import TwitInput from '../components/TwitInput';
import TwitList from '../components/TwitList';
import { setCategoryActionCreator } from '../states/category/action';
import {
  asyncToggleDownVoteThread, asyncToggleNeutralDownVoteThread, asyncToggleNeutralUpVoteThread, asyncToggleUpVoteThread,
} from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
    category = '',
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onLike = (id) => {
    dispatch(asyncToggleUpVoteThread(id));
  };
  const onDislike = (id) => {
    dispatch(asyncToggleDownVoteThread(id));
  };
  const onNeutralLike = (id) => {
    dispatch(asyncToggleNeutralUpVoteThread(id));
  };
  const onNeutralDislike = (id) => {
    dispatch(asyncToggleNeutralDownVoteThread(id));
  };

  const filteredThreadList = threads.filter(
    (thread) => thread.category === category || category === '',
  );

  const threadList = filteredThreadList.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  // Menampilkan data category yang di cclik
  const filterAllCategory = (threads) => {
    const categories = new Set();

    // eslint-disable-next-line array-callback-return
    threads.map((thread) => {
      categories.add(thread.category);
    });

    return [...categories];
  };

  const categoriList = filterAllCategory(threads);

  const changeCategoryHandler = (categories) => {
    dispatch(setCategoryActionCreator(categories));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row  w-full">
        <div className="flex flex-col w-full overflow-x-hidden">
          <Header />
          <div className="flex flex-row">
            <div className="md:ml-[240px] ml-[80px] mt-[110px] block w-full p-2">
              <TwitInput threads={threadList} />
              <TwitList
                threads={threadList}
                like={onLike}
                dislike={onDislike}
                neutralLike={onNeutralLike}
                neutralDislike={onNeutralDislike}
              />
            </div>
            <PopularTwit categoriesList={categoriList} changeCategoryHandler={changeCategoryHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
