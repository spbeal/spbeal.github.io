import React from "react";
import { Helmet } from "react-helmet";
//import WorkImg from '../../assets/projects/workImg.jpeg'
//import realEstate from '../../assets/projects/realestate.jpg'
//import goatFile from '../../assets/goats.jpeg'
import CS360PNG from '../../assets/CS360/resources/lab2.png'
//import MazeOutput from '../../assets/Visual studio maze6.png'
// import DownloadsPic from '../../assets/2-folder-png-image-515033194.png'
import DownloadsPic from '../../assets/2023-2024/Cleandownloads.png'
import DiscoverWeekly from '../../assets/2023-2024/discoverweekly.png'
import StockPic from '../../assets/2023-2024/stockmarket.jpg'
import PlatformerPic from '../../assets/2023-2024/2D_Platformer_QjdAii7a0L.png'
import crafty3DPic from '../../assets/2023-2024/crafty3D.jpg'
import styled from "styled-components";

const Projects = () => {
  return (
    <div name='projects' className='w-full min-h-screen '>
      <Helmet>
        <title>Projects - Samuel</title>
      </Helmet>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-start w-full overflow-auto'>
            <div className='pb-8 pt-24'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>My Projects</p>
            </div>
            {/* Container */}
            <div className='text-center grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Project */}
                <StyledContainer className = "content-div shadow-lg shadow-[#040c16]">
                    <StyledBackground image={crafty3DPic} className=""/>
                    <StyledOverlay />

                    <StyledContent>
                        <h2 className='text-2xl font-bold text-white tracking-wider'>
                                            Crafty3D
                        </h2>
                        <div className="grid "> 
                        <a href="https://devpost.com/software/crafty3d">
                            <StyledButton className="">Hackathon</StyledButton>
                        </a>
                        <a href="https://github.com/spbeal/spotify-flask">
                            <StyledButton className="">Code</StyledButton>
                        </a>
                        </div>
                    </StyledContent>
                </StyledContainer>
                
                
                {/* Project */}
                <StyledContainer className = "content-div shadow-lg shadow-[#040c16]">
                    <StyledBackground image={DiscoverWeekly} className=""/>
                    <StyledOverlay />

                    <StyledContent>
                        {/* <h2>Clean Downloads</h2> */}
                        <h2 className='text-2xl font-bold text-white tracking-wider'>
                                            Spotify Utilities
                        </h2>
                        <a href="https://github.com/spbeal/spotify-flask">
                        <StyledButton className="">Code</StyledButton>
                        </a>
                    </StyledContent>
                </StyledContainer>

                {/* Project */}
                <StyledContainer className = "content-div shadow-lg shadow-[#040c16]">
                    <StyledBackground image={StockPic} className=""/>
                    <StyledOverlay />

                    <StyledContent>
                        {/* <h2>Clean Downloads</h2> */}
                        <h2 className='text-2xl font-bold text-white tracking-wider'>
                                            Trading Bot
                        </h2>
                        <a href="https://github.com/spbeal/Alpaca-Trading-Bot">
                        <StyledButton className="">Code</StyledButton>
                        </a>
                    </StyledContent>
                </StyledContainer>

                {/* Project */}
                <StyledContainer className = "content-div shadow-lg shadow-[#040c16]">
                    <StyledBackground image={PlatformerPic} className=""/>
                    <StyledOverlay />

                    <StyledContent>
                        {/* <h2>Clean Downloads</h2> */}
                        <h2 className='text-2xl font-bold text-white tracking-wider'>
                                            2D Platformer
                        </h2>
                        <a href="https://github.com/spbeal/2D-Platformer-Raylib">
                        <StyledButton className="">Code</StyledButton>
                        </a>
                    </StyledContent>
                </StyledContainer>

                                {/* Project */}
                <StyledContainer className = "content-div shadow-lg shadow-[#040c16]">
                    <StyledBackground image={DownloadsPic} />
                    <StyledOverlay />

                    <StyledContent>
                        {/* <h2>Clean Downloads</h2> */}
                        <h2 className='text-2xl font-bold text-white tracking-wider'>
                                            Clean Downloads
                        </h2>
                        <a href="https://github.com/spbeal/CleanDownloads">
                        <StyledButton className="">Code</StyledButton>
                        </a>
                    </StyledContent>
                </StyledContainer>

        </div>
                <div className='pb-8 pt-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Archive</p>
               </div>
               {/* Container */}
               <div className='text-center grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-8'>
                    {/* Project */}
                    <StyledContainer className = "content-div shadow-lg shadow-[#040c16]">
                        <StyledBackground image={CS360PNG} />
                        <StyledOverlay />

                        <StyledContent>
                            <h2 className='text-2xl font-bold text-white tracking-wider'>
                                                CS360
                            </h2>
                            <a href="/CS360/index.html">
                                <StyledButton className="">Link</StyledButton>
                            </a>
                        </StyledContent>
                    </StyledContainer>
            </div>

        </div>
    
    </div>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const StyledBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: opacity 0.3s ease-in-out;
  
  ${StyledContainer}:hover & {
    opacity: 0.8; /* Only lowers opacity on hover */
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0); /* Transparent by default */
  transition: background 0.3s ease-in-out;
  
  ${StyledContainer}:hover & {
    background: rgba(0, 0, 0, 0.5); /* Dark overlay on hover */
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

  margin-top: 10px;
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
