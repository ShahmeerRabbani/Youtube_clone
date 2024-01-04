import React from "react";
import './App.css';
import './style.css';
import './mobile.css';
import './sidebarStyle.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, SubscriptionLayout } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/Subscribe" element={<SubscriptionLayout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
