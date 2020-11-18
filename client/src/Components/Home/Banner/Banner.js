import React from "react";
import "./Banner.sass";
import ReactTypingEffect from "react-typing-effect";

const Banner = () => {
  return (
    <section className="banner">
      <h1>Welcome Student</h1>
      <h2>
        <ReactTypingEffect
          speed={100}
          text={["I hope the requirements is done!"]}
        />
      </h2>
    </section>
  );
};

export default Banner;
