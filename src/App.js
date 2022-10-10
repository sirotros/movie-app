import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { getTopRatedMovies, getPopularMovies } from "./redux/movies";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/ErrorPage";
function App() {
  const dispatch = useDispatch();
  const getMovies = () => {
    dispatch(getTopRatedMovies());
    dispatch(getPopularMovies());
  };
  const languageLocalStorage = localStorage.getItem("lang");
  const defaultLocal = languageLocalStorage
    ? languageLocalStorage
    : navigator.language;
  const [language, setLanguage] = useState(defaultLocal);

  useEffect(() => {
    localStorage.setItem("lang", defaultLocal);
    getMovies();
  }, [language]);
  return (
    <div>
      <Header setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
