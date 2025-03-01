import React from "react";
import { Helmet } from "react-helmet";
import CS360PNG from '../../assets/CS360/resources/lab2.png';
import DownloadsPic from '../../assets/2023-2024/Cleandownloads.png';
import DiscoverWeekly from '../../assets/2023-2024/discoverweekly.png';
import StockPic from '../../assets/2023-2024/stockmarket.jpg';
import PlatformerPic from '../../assets/2023-2024/2D_Platformer_QjdAii7a0L.png';
import crafty3DPic from '../../assets/2023-2024/crafty3D.jpg';
import styled from "styled-components";

const Projects = () => {
  return (
    <div name="projects" className="w-full min-h-screen ">
      <Helmet>
        <title>Projects - Samuel</title>
      </Helmet>

      <div className="max-w-[1200px] mx-auto px-8 items-center justify-center leading-8 pt-32 pb-32">
        <div className="pb-8 text-center p-6">
          <p className="text-4xl font-extrabold inline border-b-4 border-pink-600">
            My Projects
          </p>
        </div>
        {/* Projects Grid */}
        <div className="min-w-[300px] grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {/* Project Card */}
          <StyledContainer>
            <StyledBackground image={crafty3DPic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                Crafty3D
              </h2>
              <p className="text-xl text-white">2024</p>
              <div className="min-w-[300px] mt-4 space-x-4">
                <a href="https://devpost.com/software/crafty3d">
                  <StyledButton>Hackathon</StyledButton>
                </a>
                <a href="https://github.com/spbeal/spotify-flask">
                  <StyledButton>Code</StyledButton>
                </a>
              </div>
            </StyledContent>
          </StyledContainer>

          {/* Project Card */}
          <StyledContainer>
            <StyledBackground image={DiscoverWeekly} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                Spotify Utilities
              </h2>
              <p className="text-xl text-white">2023</p>
              <a href="https://github.com/spbeal/spotify-flask">
                <StyledButton>Code</StyledButton>
              </a>
            </StyledContent>
          </StyledContainer>

          {/* Project Card */}
          <StyledContainer>
            <StyledBackground image={StockPic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                Trading Bot
              </h2>
              <p className="text-xl text-white">2023</p>
              <a href="https://github.com/spbeal/Alpaca-Trading-Bot">
                <StyledButton>Code</StyledButton>
              </a>
            </StyledContent>
          </StyledContainer>

          {/* Project Card */}
          <StyledContainer>
            <StyledBackground image={PlatformerPic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                2D Platformer
              </h2>
              <p className="text-xl text-white">2023</p>
              <a href="https://github.com/spbeal/2D-Platformer-Raylib">
                <StyledButton>Code</StyledButton>
              </a>
            </StyledContent>
          </StyledContainer>

          {/* Project Card */}
          <StyledContainer>
            <StyledBackground image={DownloadsPic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                Clean Downloads
              </h2>
              <p className="text-xl text-white">2023</p>
              <a href="https://github.com/spbeal/CleanDownloads">
                <StyledButton>Code</StyledButton>
              </a>
            </StyledContent>
          </StyledContainer>
        </div>

        {/* Archive Section */}
        <div className="pb-8 pt-16 text-center">
          <p className="text-4xl font-extrabold inline border-b-4 border-pink-600">
            Archive
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {/* Archive Project Card */}
          <StyledContainer>
            <StyledBackground image={CS360PNG} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="min-w-[300px] text-2xl font-bold text-white tracking-wider">
                CS360
              </h2>
              <p className="text-xl text-white">Fall 2024</p>
              <a href="/CS360/index.html">
                <StyledButton>Link</StyledButton>
              </a>
            </StyledContent>
          </StyledContainer>
        </div>
      </div>
    </div>
  );
};

// Styled Components
const StyledContainer = styled.div`
  position: relative;
  max-width: 400px;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
  }
`;

const StyledBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: opacity 0.3s ease-in-out;

  ${StyledContainer}:hover & {
    opacity: 0.8;
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease-in-out;

  ${StyledContainer}:hover & {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${StyledContainer}:hover & {
    opacity: 1;
  }
`;

const StyledButton = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  background: white;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: #ddd;
  }
`;

export default Projects;
