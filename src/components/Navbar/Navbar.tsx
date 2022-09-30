import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-inner">
        <Link to="/">
          <h2>RESTAURANT</h2>
        </Link>

        <Link to="favorites">
          <FontAwesomeIcon icon={faHeart} className="nav-heart" />
        </Link>
      </div>
      <hr />
    </div>
  );
};
