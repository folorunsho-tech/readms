import React from "react";
import { Outlet } from "react-router-dom";
import HomeNav from "../components/HomeNav";
const Home = () => {
  return (
    <HomeNav>
      <div className="home">
        <h1>hello</h1>
      </div>
      <Outlet />
    </HomeNav>
  );
};

export default Home;
