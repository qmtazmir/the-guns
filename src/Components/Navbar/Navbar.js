import React from "react";
import "./Navbar.css";

const Navbar = ({ openModal }) => {
  return (
    <nav className="navbar">
      <h1>বিসমিল্লাহীর রহমানির রহীম</h1>
      <h1>The Guns bucket</h1>
      <button onClick={openModal}>Open Modal</button>
    </nav>
  );
};

export default Navbar;
