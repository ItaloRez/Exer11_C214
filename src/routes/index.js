import React from "react";
import { Routes, Route } from "react-router-dom";

import Create from "../pages/Create";
import Update from "../pages/Update";
import Delete from "../pages/Delete";
import ListUsers from "../pages/ListUsers";
import ListByEmail from "../pages/ListByEmail";

export default function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Create />} />
      <Route exact path="/update" element={<Update />} />
      <Route exact path="/delete" element={<Delete />} />
      <Route exact path="/users" element={<ListUsers />} />
      <Route exact path="/email" element={<ListByEmail />} />
    </Routes>
  );
}
