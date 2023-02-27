/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from 'react-router-dom';
import { asyncAddThreadComment } from '../states/threadsetail/action';

function DetailReply() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  // eslint-disable-next-line no-shadow
  const onReplyThread = ({ id, content }) => {
    dispatch(asyncAddThreadComment({ id, content }));
  };

  const handleBodyChange = ({ target }) => {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  };
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="comment my-3 flex flex-col gap-2">
      <span className="font-bold text-base">Beri Komentar</span>
      <label className="text-sm">
        {content.length}
        /320
      </label>
      <input value={content} onChange={handleBodyChange} className="rounded-md h-20 border-solid border-gray-300 border-2 p-2" type="text" placeholder="Tulis balasanmu" />
      <button
        onClick={(e) => {
          e.preventDefault();
          onReplyThread({ id, content });
        }}
        className="bg-blue-400 rounded-md p-1 hover:bg-blue-600 duration-700"
        type="submit"
      >
        Kirim

      </button>
    </div>
  );
}

export default DetailReply;
