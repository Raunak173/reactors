/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NFTCont from "../components/NFTCont";
import axios from "axios";

const Creator = () => {
  const location = useLocation();
  const [data, setData] = useState();
  const getData = () => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${location.state.channelId}&key=AIzaSyDUHTYscvTDbH-fGco4eda3QrBzTYrlfp8`
      )
      .then((res) => setData(res.data?.items[0]))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
    console.log(data);
  }, []);
  return (
    <div>
      {/* <h1>{location.state.title}</h1> */}
      <div className="h-[300px] bg-gray-900 flex items-center">
        <div className="w-[50%] flex items-center">
          <img src={location.state.channelImage} />
          <div>
            <p className="text-white ml-5 text-4xl text-center">
              {location.state.channel}
            </p>
            <p className="text-white text-center">
              {data?.statistics?.viewCount} views
            </p>
            <p className="text-red-800 text-lg ml-5 text-center">
              {data?.statistics?.subscriberCount} subscribers
            </p>
          </div>
        </div>
        <NFTCont />
      </div>
      <p>{data?.snippet?.description}</p>
    </div>
  );
};

export default Creator;
