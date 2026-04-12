import React from "react";
import Navbar from "./pages/Navbar";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
