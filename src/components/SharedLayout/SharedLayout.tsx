import React from "react";
import "./SharedLayout.scss";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export const SharedLayout = () => {
  return (
    <div className="shared-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
