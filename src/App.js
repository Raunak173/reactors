import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./screen/Trending";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/trend" element={<Trending />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
