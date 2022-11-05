import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./screen/Trending";
import Home from "./screen/Home";

const App = () => {
  const [sQuery, setSQuery] = useState("");
  return (
    <>
      <BrowserRouter>
        <Header sQuery={sQuery} setSQuery={setSQuery} />
        <Routes>
          <Route
            path="/"
            element={<Home sQuery={sQuery} setSQuery={setSQuery} />}
          />
          <Route path="/trend" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
