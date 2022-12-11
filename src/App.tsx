import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import TrainingList from "./components/TrainingList";
import CustomerList from "./components/CustomerList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/trainings" element={<TrainingList />} />
      </Route>
      <Route path="*" element={<h1>Oops! Page not found...</h1>} />
    </Routes>
  );
}

export default App;
