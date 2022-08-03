import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";

export default function RoutesWeb() {
  return (
    <Routes>
      <Route path="/" component={Login} />
    </Routes>
  );
}
