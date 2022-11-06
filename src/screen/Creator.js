import React from "react";
import { useLocation } from "react-router-dom";

const Creator = () => {
  const location = useLocation();
  return (
    <div>
      <h1>{location.state.title}</h1>
    </div>
  );
};

export default Creator;
