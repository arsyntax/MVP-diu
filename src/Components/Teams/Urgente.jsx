import React from 'react';
import "./Teams.css";
import leon from "../../assets/leon.png";
import NAV from "./NavbarTeam.jsx";

const Layout = () => {
  return (
    <div className="Page">
      <div className="Name">
        <img src={leon} className="logoteam" alt="Logo" />
        <h1>KingsSoftware</h1>
      </div>
      <NAV />
      <div className="info">
        <p>Los niveles de 'compromiso' están muy bajos:</p>
        <b className="urgente">19%</b>
        <p>Se recomienda tomar medidas prontamente.</p>
      </div>
    </div>
  );
};

export default Layout;
