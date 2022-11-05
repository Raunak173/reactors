/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  //   timestamp,
  channelImage,
}) => {
  return (
    <div className="w-[276px] h-[247px] bg-black">
      <img src={image} />
    </div>
  );
};

export default VideoCard;
