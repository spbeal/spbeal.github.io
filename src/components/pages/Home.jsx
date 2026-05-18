import React from "react";
import { Helmet } from "react-helmet";

import HomeMain from "./combine/HomeMain";

const Home = () => {
  return (
    <div name="home">
      <Helmet>
        <title>Home - Samuel</title>
      </Helmet>

      <HomeMain />
    </div>
  );
};

export default Home;
