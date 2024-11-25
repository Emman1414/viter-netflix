import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./components/pages/backend/movies/movies";
import Settings from "./components/pages/backend/settings/Settings";
import { StoreProvider } from "./components/store/storeContext";
import HomePage2 from "./components/pages/frontend/Homepage/HomePage2";


const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<HomePage2/>} />
          <Route path="/admin/movies" element={<Movies />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
