import React from "react";
import { Helmet } from "react-helmet";

import Employment from "./combine/Employment";

const Experience = () => {
  return (
    <div name="experience" className="w-full min-h-screen">
      <Helmet>
        <title>Experience - Samuel</title>
      </Helmet>

      <Employment />
    </div>
  );
};

export default Experience;