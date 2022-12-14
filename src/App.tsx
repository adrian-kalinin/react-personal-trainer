import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Trainings from "./components/Trainings";
import Customers from "./components/Customers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/customers" element={<Customers />} />
        <Route path="/trainings" element={<Trainings />} />
      </Route>
      <Route path="*" element={<h1>Oops! Page not found...</h1>} />
    </Routes>
  );
}

export default App;
