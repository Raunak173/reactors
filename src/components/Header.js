/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import yt from "../assets/youtube.png";
import search from "../assets/search.png";
import { useNavigate } from "react-router-dom";

const Header = ({ sQuery, setSQuery }) => {
  const navigate = useNavigate();
  return (
    <div className="h-[56px] flex bg-black items-center px-7 justify-between">
      <div className="flex items-center">
        <img src={yt} className="w-[30px]" />
        <span className="text-white ml-3">Reactube</span>
      </div>
      <div className="flex gap-x-5">
        <button className="text-white" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="text-white" onClick={() => navigate("/trend")}>
          Trending
        </button>
        <button className="text-white">Creators</button>
      </div>
      <img src={search} className="absolute right-72 h-[20px]" />
      <input
        className="h-[30xp] bg-white w-[300px] py-1 rounded-xl pl-12"
        value={sQuery}
        onChange={(e) => setSQuery(e.target.value)}
      />
    </div>
  );
};

export default Header;
