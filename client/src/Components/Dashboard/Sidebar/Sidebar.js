import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";

const Sidebar = ({ heading }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Image-upload </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title={heading} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <CloudUploadIcon /> Upload
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <ListIcon /> Upload List
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
