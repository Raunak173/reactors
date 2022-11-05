/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Skeleton from "react-loading-skeleton";
import avatar from "../assets/avatar.png"

const VideoCard = ({ image, title, channel, views, channelImage, vid }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${vid}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex flex-col justify-between w-[276px] min-h-[300px] bg-black rounded-xl" style={{maxHeight:"300px"}}>
        <img src={image} className="rounded-t-xl"/>
        <h1 className="text-white px-2 mt-3 line-clamp-2" style={{maxHeight:"100px"}}>{title}</h1>
        <div className="flex-end p-2 rounded-b-xl mt-2 flex justify-center items-center pb-3">
        <img src={avatar} width="17%"/>
          <span className="text-white text-left w-full ml-1 truncate px-1">{channel}</span>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
