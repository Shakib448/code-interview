import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ListIcon from "@material-ui/icons/List";
import { Link } from "react-router-dom";
import "./DashboardNav.sass";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import FilterListIcon from "@material-ui/icons/FilterList";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { userInformationData } from "../../../App";

const Sidebar = ({ heading }) => {
  const [userData, setUserData] = useContext(userInformationData);

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
                <NavDropdown.Item as={Link} to="/add-admin">
                  <PersonAddIcon /> Add Admin
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/admin-upload-task">
                  <FilterListIcon /> Upload list
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => setUserData({})}>
                  <ExitToAppIcon /> Log out
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
