/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  channelImage,
  vid,
  channelId,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col justify-between w-[276px] min-h-[300px] bg-black rounded-xl"
      style={{ maxHeight: "300px" }}
    >
      <a
        href={`https://www.youtube.com/watch?v=${vid}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={image} className="rounded-t-xl" />
      </a>
      <h1
        className="text-white px-2 mt-3 line-clamp-2"
        style={{ maxHeight: "100px" }}
      >
        {title}
      </h1>
      <div className="flex-end p-2 rounded-b-xl mt-2 flex justify-center items-center pb-3">
        <button
          onClick={() =>
            navigate(`/creator/${vid}`, {
              state: {
                image: image,
                vid: vid,
                title: title,
                channel: channel,
                channelImage: channelImage,
                views: views,
                channelId: channelId,
              },
            })
          }
        >
          <img src={avatar} />
        </button>
        <span className="text-white text-left w-full ml-1 truncate px-1">
          {channel}
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
