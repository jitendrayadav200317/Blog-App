import React from "react";
import "@mantine/core/styles.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import HeroSection from "./components/HeroSection.jsx";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<HeroSection />} />
      </Routes>
    </div>
  );
}

export default App;
