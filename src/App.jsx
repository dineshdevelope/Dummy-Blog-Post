import React from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import PostPage from "./components/PostPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
