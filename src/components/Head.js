import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  /*
  {
    "iphone": ["iphone11","iphone"]
  }
  */

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 api key press is <200ms
    // decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSideBar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg sticky top-0 z-50">
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
        <div>
          <input
            className="border border-gray-300 w-1/2 h-9 rounded-l-full p-4"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-300 w-16 h-9 bg-gray-100 hover:bg-gray-300 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white rounded-lg w-[32.5%] shadow-lg border border-gray-100">
            <ul className="p-4">
              {suggestions.map((s) => (
                <li key={s} className="shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
