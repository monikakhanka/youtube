import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const handleSideBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="col-span-1 flex ml-2 cursor-pointer">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu"
          className="w-8"
          onClick={() => handleSideBar()}
        />

        <img
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube logo"
          className="w-24"
        />
      </div>
      <div className="col-span-11 my-4 ml-44">
        <input
          className="border border-gray-300 w-1/2 h-9 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-300 w-16 h-9 bg-gray-100 hover:bg-gray-300 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="user icon"
          className="w-9 my-4"
        />
      </div>
    </div>
  );
};

export default Head;
