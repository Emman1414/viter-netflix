import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Movies from "./components/pages/backend/movies/movies";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/movies" element={<Movies/>} />
      </Routes>
    </Router>
  );
};

export default App;
