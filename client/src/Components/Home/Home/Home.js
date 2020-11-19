import React from "react";
import Banner from "../Banner/Banner";
import HomeNav from "../HomeNav/HomeNav";
import ImageTask from "../ImageTask/ImageTask";

const Home = () => {
  return (
    <>
      <HomeNav />
      <main style={{ backgroundColor: "#F1FBF9" }}>
        <Banner />
        <ImageTask />
      </main>
    </>
  );
};

export default Home;
