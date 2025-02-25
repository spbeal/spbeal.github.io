import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import SamBlob from "../../assets/2023-2024/blobimageofme.png";

import HomeMain from "./combine/HomeMain";
import HomeExt from "./combine/HomeExt";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

{
  /* #42BD97  #0a192f*/
}

const Home = () => {
  return (
    <div className="">
    <div name="home" className="bg-universal dark:bg-universal-dark w-full min-h-screen">
      <Helmet>
        <title>Home - Samuel</title>
      </Helmet>
      {/* Container */}
      {/* <div className="w-full mx-auto px-8 flex flex-col items-center justify-center min-h-screen text-xl leading-8">
        <div className="hidden sm:block pt-24 pb-96">
        </div> */}

        {/* Mobile */}
        {/* <div className="sm:hidden pt-16">
        </div>
      </div> */}

    <HomeMain></HomeMain>
    <HomeExt></HomeExt>
    </div>
    </div>
  );
};

export default Home;
