/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/threads/action';

function TwitInput() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [title, setText] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  const onAddThread = (e) => {
    e.preventDefault();
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  const handleTextChange = ({ target }) => {
    if (target.value.length <= 50) {
      setText(target.value);
    }
  };
  const handleCategoryChange = ({ target }) => {
    if (target.value.length <= 50) {
      setCategory(target.value);
    }
  };
  const handleBodyChange = ({ target }) => {
    if (target.value.length <= 320) {
      setBody(target.value);
    }
  };
  return (
    <div className="twitInput flex flex-col gap-1 shadow-sm p-3 border-slate-500 border-b-[1px]  ">
      <span className="font-bold text-lg">Buat Diskusi Baru</span>
      <div className="flex flex-col gap-2">
        <input value={title} onChange={handleTextChange} className="h-10 rounded-md p-2 border-slate-700 border-solid border-[1px] focus:border-blue-600 focus:outline-none" type="text" placeholder="Judul diskusi" />
        <input value={category} onChange={handleCategoryChange} className="h-10 rounded-md p-2 border-slate-700 border-solid border-[1px] focus:border-blue-600 focus:outline-none" type="text" placeholder="Kategori" />
        <label className="text-sm">
          {body.length}
          /320
        </label>
        <input value={body} onChange={handleBodyChange} className="h-20 rounded-md p-2 border-slate-700 border-solid border-[1px] focus:border-blue-600 focus:outline-none" type="text" />
        <button data-cy="submit" onClick={onAddThread} className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 duration-700 text-center w-1/4 " type="submit">Buat</button>
      </div>
    </div>
  );
}

export default TwitInput;
