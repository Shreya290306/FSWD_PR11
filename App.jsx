import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BlogList from "./BlogList";
import BlogDetails from "./BlogDetails";
import Navbar from "./Navbar";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
