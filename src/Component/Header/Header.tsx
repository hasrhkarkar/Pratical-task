import React, { useState } from "react";
import "./Header.scss";
import logo from "../../headerlogo.svg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // JSON data directly inside the file
  const menuData = [
    { id: 1, title: "Home", link: "#" },
    { id: 2, title: "About Us", link: "#" },
    { id: 3, title: "Activities", link: "#" },
    { id: 4, title: "Our Teachers", link: "#" },
    { id: 5, title: "Facilities", link: "#" }
  ];

  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
            <img src={logo} alt="" />
        </div>

        {/* Navigation Menu (Dynamic from JSON) */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {menuData.map((item) => (
            <a key={item.id} href={item.link}>
              {item.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
