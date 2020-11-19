import React, { useContext } from "react";
import { userInformationData } from "../../../App";
import Banner from "../Banner/Banner";
import HomeNav from "../HomeNav/HomeNav";
import ImageTask from "../ImageTask/ImageTask";

const Home = () => {
  const [userData, setUserData] = useContext(userInformationData);
  return (
    <>
      {userData.isSignIn && <HomeNav />}
      <main style={{ backgroundColor: "#F1FBF9" }}>
        <Banner />
        <ImageTask />
      </main>
    </>
  );
};

export default Home;
