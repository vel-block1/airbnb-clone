import React from "react";
import "./Navbar.css";
import airLogo from "../assets/airbnb 1.svg";

export default function Navbar() {
  return (
    <header className="header">
      <img src={airLogo} alt="AirBnb Logo" />
    </header>
  );
}
