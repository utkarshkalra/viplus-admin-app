import React from "react";
import { Navbar, Nav, NavDropdown, Container, NavItem } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions";
import "./style.header.css";

import logo from "../../images/viplus.svg";

const Header = (props) => {
  return (
    <nav className="header-nav">
      <Link to="/" className="navbar-image">
        <img src={logo} alt="viplus logo" /> Viplus Admin Dashboard
      </Link>
    </nav>
  );
};

export default Header;
