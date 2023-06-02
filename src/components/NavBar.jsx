// import React from "react";
import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <nav className="navbar">
        <h1>BBL Website</h1>
        <div
          className="navbar-menu"
          style={({ display: "inherit" }, { alignItems: "center" })}
        >
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? "Close" : "Menu"}
          </button>
          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <div className="dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                Modpacks
              </button>
              {isOpen && (
                <ul className="dropdown-menu slide-fade">
                  <li>
                    <a href="#option1" onClick={closeDropdown}>
                      Technopolis
                    </a>
                  </li>
                  <li>
                    <a href="#option2" onClick={closeDropdown}>
                      Technopolis 2
                    </a>
                  </li>
                  <li>
                    <a href="#option3" onClick={closeDropdown}>
                      Seaopolis
                    </a>
                  </li>
                  <li>
                    <a href="#option4" onClick={closeDropdown}>
                      Seaopolis 2
                    </a>
                  </li>
                  <li>
                    <a href="#option5" onClick={closeDropdown}>
                      Caveopolis
                    </a>
                  </li>
                  <li>
                    <a href="#option6" onClick={closeDropdown}>
                      Infernopolis
                    </a>
                  </li>
                  <li>
                    <a href="#option7" onClick={closeDropdown}>
                      Skyopolis 3
                    </a>
                  </li>
                  <li>
                    <a href="#option8" onClick={closeDropdown}>
                      Skyopolis 4
                    </a>
                  </li>
                  <li>
                    <a href="#option9" onClick={closeDropdown}>
                      Skyopolis 5
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <li>
              <a href="#mods" onClick={closeMenu}>
                Mods
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
