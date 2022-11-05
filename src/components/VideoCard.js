/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const VideoCard = ({ image, title, channel, views, channelImage, vid }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${vid}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="w-[276px] min-h-[300px] bg-black">
        <img src={image} />
        <h1 className="text-white px-2 mt-4">{title}</h1>
        <div className="p-2 bg-red-600 mt-2 flex justify-center items-center">
          <p className="text-white">{channel}</p>
        </div>
      </div>
    </a>
  );
};

export default VideoCard;
