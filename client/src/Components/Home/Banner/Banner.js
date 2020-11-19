import React, { useContext } from "react";
import "./Banner.sass";
import ReactTypingEffect from "react-typing-effect";
import { userInformationData } from "../../../App";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  const [userData, setUserData] = useContext(userInformationData);
  return (
    <section className="banner">
      {userData.isSignIn ? (
        <>
          <h1>Welcome {userData.name}</h1>
          <h2>
            <ReactTypingEffect
              speed={100}
              text={["I hope the requirements is done!"]}
            />
          </h2>
        </>
      ) : (
        <Button
          as={Link}
          to="/google-login"
          className="banner__signIn"
          variant="outline-dark"
        >
          Sign In
        </Button>
      )}
    </section>
  );
};

export default Banner;
