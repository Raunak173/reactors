/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Skeleton from "react-loading-skeleton";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  //   timestamp,
  channelImage,
  isLoading,
}) => {
  return (
    <div className="w-[276px] h-[247px] bg-black">
      {isLoading ? "Loading...": <img src={image} />}
      
    </div>
  );
};

export default VideoCard;
