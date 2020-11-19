import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";
import { Link } from "react-router-dom";
import "./DashboardNav.sass";

const Sidebar = ({ heading }) => {
  return (
    <>
      <Navbar
        className="dashboard__nav"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Code Task{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title={heading} id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/image-upload">
                  <CloudUploadIcon /> Upload
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/edited-image-list">
                  <ListIcon /> Edited List
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
