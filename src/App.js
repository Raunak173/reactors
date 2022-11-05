import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./screen/Trending";
import Home from "./screen/Home";
import SearchPage from "./pages/SearchPage";

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
          <Route path='/search/:searchQuery' element={<SearchPage sQuery={sQuery} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
