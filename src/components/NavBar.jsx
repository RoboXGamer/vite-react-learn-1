// import React from "react";
import { useState, useEffect, useRef } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownItemsRef = useRef([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (!isOpen) return;

    const { key } = event;

    if (key === "ArrowUp" || key === "ArrowDown") {
      event.preventDefault();

      const currentIndex = dropdownItemsRef.current.findIndex(
        (item) => item === document.activeElement
      );

      if (key === "ArrowUp") {
        const previousIndex =
          currentIndex > 0
            ? currentIndex - 1
            : dropdownItemsRef.current.length - 1;
        dropdownItemsRef.current[previousIndex].focus();
      } else if (key === "ArrowDown") {
        const nextIndex =
          currentIndex < dropdownItemsRef.current.length - 1
            ? currentIndex + 1
            : 0;
        dropdownItemsRef.current[nextIndex].focus();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <h1>BBL Website</h1>
        <div className="navbar-menu">
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
            <div className="dropdown" ref={dropdownRef}>
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                Modpacks
              </button>
              {isOpen && (
                <ul
                  className="dropdown-menu slide-fade"
                  onKeyDown={handleKeyDown}
                >
                  <li>
                    <a
                      href="#option1"
                      onClick={closeDropdown}
                      ref={(el) => (dropdownItemsRef.current[0] = el)}
                    >
                      Technopolis
                    </a>
                  </li>
                  <li>
                    <a
                      href="#option2"
                      onClick={closeDropdown}
                      ref={(el) => (dropdownItemsRef.current[1] = el)}
                    >
                      Technopolis 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#option3"
                      onClick={closeDropdown}
                      ref={(el) => (dropdownItemsRef.current[2] = el)}
                    >
                      Seaopolis
                    </a>
                  </li>
                  <li>
                    <a
                      href="#option4"
                      onClick={closeDropdown}
                      ref={(el) => (dropdownItemsRef.current[3] = el)}
                    >
                      Seaopolis 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#option5"
                      onClick={closeDropdown}
                      ref={(el) => (dropdownItemsRef.current[4] = el)}
                    >
                      Caveopolis
                    </a>
                  </li>
                  <li>
                    <a
                      href="#option6"
                      onClick={closeDropdown}
                      ref={(el) => (dropdownItemsRef.current[5] = el)}
                    >
                      Infernopolis
                    </a>
                  </li>
                  <li>
                    <a
                      href="#option7"
                      onClick={closeDropdown}
                      ref={(el) => (dropdownItemsRef.current[6] = el)}
                    >
                      Skyopolis 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#option8"
                      onClick={closeDropdown}
                      ref={(el) => (dropdownItemsRef.current[7] = el)}
                    >
                      Skyopolis 4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#option9"
                      onClick={closeDropdown}
                      ref={(el) => (dropdownItemsRef.current[8] = el)}
                    >
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
