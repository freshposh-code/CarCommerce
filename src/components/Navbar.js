import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Navbar.css";
// import Dropdown from "./Dropdown";
import { close, menu } from "../Assets";
import { CarRental } from "@mui/icons-material";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <div className="fixed">
        <nav className="navbar">
          <Link to="/" className="nav-bar">
            <div>
              <h2>Posh Cars</h2>
            </div>
            <div>
              <CarRental
                style={{ fontSize: "30px", color: "white", margin: "4px" }}
                className="cars"
              />
            </div>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <img src={click ? close : menu} alt="menu" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
            >
              <Link
                to="/car-Listing"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Car Listing
              </Link>
              {/* {dropdown && <Dropdown />} */}
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
