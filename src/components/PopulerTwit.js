/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

function PopularTwit({ categoriesList, changeCategoryHandler }) {
  return (
    <div className=" hidden text-center  border-solid border-l-2 border-gray-100  md:flex flex-col items-center w-1/2 mt-28  ">
      <div className=" flex flex-col gap-4 p-4 w-[80%] my-4 bg-gray-200 rounded-md ">
        <h1 className=" my-4 font-extrabold text-xl">Popular</h1>
        {categoriesList.map((category) => (
          <a
            key={category}
            onClick={() => {
              changeCategoryHandler(category);
            }}
            href="/#"
            className=" p-2 duration-700 hover:bg-slate-400 focus:bg-slate-500 border-slate-700 border-solid border-[1px] rounded-xl"
          >
            #
            {category}
          </a>
        ))}
      </div>
    </div>
  );
}

PopularTwit.propTypes = {
  categoriesList: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
  changeCategoryHandler: PropTypes.func.isRequired,
};
export default PopularTwit;
