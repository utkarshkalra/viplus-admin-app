import React from "react";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { signout } from "../../actions";

import logo from "../../images/viplus.svg";

import { NavLink } from "react-router-dom";
import "./style.css";

const Layout = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };
  return (
    <>
      {auth.authenticate || <Header />}

      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="brand-name">
              <img src={logo} alt="viplus logo" />
              Viplus
            </Col>
          </Row>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink exact to={`/`}>
                    Home
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to={`/page`}>Page</NavLink>
                </li> */}
                <li>
                  <NavLink to={`/category`}>Category</NavLink>
                </li>
                <li>
                  <NavLink to={`/products`}>Products</NavLink>
                </li>
                <li>
                  <NavLink to={`/orders`}>Orders</NavLink>
                </li>
              </ul>
              <span className="signout-link nav-link" onClick={logout}>
                Signout
              </span>
            </Col>
            <Col md={10} style={{ marginLeft: "auto", paddingTop: "60px" }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
};

export default Layout;
