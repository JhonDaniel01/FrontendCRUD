import React from "react";

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <h1 className="text-white">EVENTUS</h1>
        <h3 className="text-white">Sistema de gestion de eventos</h3>
        <a href="#!" className="navbar-brand">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
