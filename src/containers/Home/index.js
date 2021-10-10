import React from "react";
import Layout from "../../components/Layout";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Layout sidebar>
      <Jumbotron
        style={{ margin: "5rem", background: "#fff" }}
        className="text-center"
      >
        <h1>Welcome to Admin Dashboard of Viplus Website</h1>
        <p>
          This is the admin page for Viplus website. Here the admin can
          add/update/delete the users / products. See all the orders that have
          been placed. Create new products. Remove older products. Create new
          Pages as well.
        </p>
      </Jumbotron>
    </Layout>
  );
};

export default Home;
