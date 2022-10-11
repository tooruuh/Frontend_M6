import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/Dashboard/index";

const Application: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Application;
