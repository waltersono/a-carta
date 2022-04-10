import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
};

export default MainLayout;
