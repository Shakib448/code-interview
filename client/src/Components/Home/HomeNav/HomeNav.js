import React, { useContext, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userInformationData } from "../../../App";
import "./HomeNav.sass";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

const HomeNav = () => {
  const [userData, setUserData, isAdmin, setAdmin] = useContext(
    userInformationData
  );

  useEffect(() => {
    const handleAdmin = async () => {
      try {
        const res = await AxiosConfig.post("/isAdmin", {
          data: userData.email,
        });
        setAdmin(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleAdmin();
  }, [userData.email, isAdmin]);

  return (
    <>
      <Navbar
        className="homeNav__font"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Code Task
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {isAdmin ? (
                <Nav.Link as={Link} to="/edited-image-list">
                  Admin
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link as={Link} to="/upload-result">
                    Result
                  </Nav.Link>
                  <Nav.Link onClick={() => setUserData({})}>Log Out</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HomeNav;
