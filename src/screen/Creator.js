import React from "react";
import { useLocation } from "react-router-dom";
import NFTCont from "../components/NFTCont";

const Creator = () => {
  const location = useLocation();
  return (
    <div>
      {/* <h1>{location.state.title}</h1> */}
      <div className="h-[300px] bg-gray-900 flex items-center">
        <div className="w-[50%]"></div>
        <NFTCont />
      </div>
    </div>
  );
};

export default Creator;
