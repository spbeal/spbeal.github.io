import React from "react";
import { Helmet } from "react-helmet";

import HomeMain from "./combine/HomeMain";
import HomeExt from "./combine/HomeExt";

const Home = () => {
  return (
    <div className="">
      <div name="home" className="">
        <Helmet>
          <title>Home - Samuel</title>
        </Helmet>

      <HomeMain></HomeMain>
      <HomeExt></HomeExt>
      </div>
    </div>
  );
};

export default Home;
