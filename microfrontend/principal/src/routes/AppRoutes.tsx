import React from "react";
import { Routes, Route } from "react-router-dom";
import { Menu } from "../pages/Menu";



export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
    </Routes>
  );
}