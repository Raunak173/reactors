import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./screen/Trending";
import Home from "./screen/Home";
import SearchPage from "./pages/SearchPage";
import { Provider } from "react-redux";
import { store } from "./store";
import Creator from "./screen/Creator";
import Channel from "./screen/Channel";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trend" element={<Trending />} />
          <Route path="/search/:searchQuery" element={<SearchPage />} />
          <Route path="/creator/:id" element={<Creator />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
