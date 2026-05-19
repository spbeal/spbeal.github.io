import { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import CS360PNG from '../../assets/CS360/resources/lab2.png';
import DownloadsPic from '../../assets/2023-2024/Cleandownloads.png';
import DiscoverWeekly from '../../assets/2023-2024/discoverweekly.png';
import StockPic from '../../assets/2023-2024/stockmarket.jpg';
import PlatformerPic from '../../assets/2023-2024/2D_Platformer_QjdAii7a0L.png';
import crafty3DPic from '../../assets/2023-2024/crafty3D.jpg';
import sketchkeypic from '../../assets/projects/gallery.jpg';
import newWorldPic from '../../assets/projects/newworld.png';
import bccompilerpic from '../../assets/projects/bccompilerpic.png';
import barterbuddypic from '../../assets/projects/barterbuy-dark.png';
import cssurvivorpic from '../../assets/projects/cssurvivor.png';
import surgevpic from '../../assets/projects/surgev.png';
import linuxshellpic from '../../assets/projects/linuxshell.png';
import cs395pic from '../../assets/projects/cs395.png';
import focpic from '../../assets/projects/Nature-Photo.jpg';
import SemanticWeb from '../../assets/secondport.png';
import Coinbase from '../../assets/projects/coinbase.png';


import styled from "styled-components";

const projectNotes = {
  surgev: {
    title: "SurgeV Notes",
    date: "February 28, 2025",
    content: (
      <>
        <p>
          SurgeV gave me room to work on more than just a storefront. It was a good product
          exercise in landing-page clarity, checkout flow, and the small decisions that make an
          ecommerce site feel trustworthy.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Built the storefront in Next.js with a focused product and brand experience</li>
          <li>Integrated Stripe payments to keep checkout simple and direct</li>
          <li>Used Vercel deployments to ship quickly and iterate on the site</li>
          <li>Worked closely with the business behind the product while the brand was still evolving</li>
        </ul>
      </>
    )
  },
  "coinbase-trading-bot": {
    title: "Coinbase Trading Bot Notes",
    date: "2025",
    content: (
      <>
        <p>
          This project has been part engineering sandbox and part research notebook. The main
          goal has been building workflows that are measurable, automated, and disciplined to create consistent outcomes & profit.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Integrated Coinbase, Alpaca, and Binance APIs & websockets for data and execution workflows</li>
          <li>Worked with AWS EC2 and Lambda for deployment experiments</li>
          <li>Used Python, Pandas, scikit-learn and other tools to evaluate strategy ideas (including AI)</li>
          <li>Built backtesting and live-trading flows with risk management in mind</li>
        </ul>
      </>
    )
  }
};

const Projects = () => {
  const [activeNoteKey, setActiveNoteKey] = useState(null);
  const activeNote = useMemo(() => (activeNoteKey ? projectNotes[activeNoteKey] : null), [activeNoteKey]);

  return (
    <div name="projects" className="w-full min-h-screen page-shell">
      <Helmet>
        <title>Projects - Samuel</title>
      </Helmet>

      <div className="page-container items-center justify-center leading-8 pt-32 pb-32">
        <div className="pb-10 text-center p-6">
          <span className="section-eyebrow">Selected Work</span>
          <h1 className="section-title">Projects I have shipped, explored, or learned from</h1>
          <p className="section-copy mx-auto max-w-3xl">
            A mix of production work, side projects, coursework, and hackathon builds.
            The common thread is that each one taught me something worth keeping.
          </p>
        </div>

        <div className="min-w-[300px] grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {/* Project Card */}
          <StyledContainer>
            <StyledBackground $image={newWorldPic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                NewWorld Trading
              </h2>
              <p className="text-xl text-white">2026</p>
              <div className="min-w-[300px] mt-4 space-x-4">
                <a href="https://newworld.trading">
                  <StyledButton>Website</StyledButton>
                </a>
              </div>
            </StyledContent>
          </StyledContainer>

          {/* Project Card */}
          <StyledContainer>
            <StyledBackground $image={Coinbase} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                Coinbase Trading Bot
              </h2>
              <p className="text-xl text-white">2025</p>
              <div className="min-w-[300px] mt-4 space-x-4">
                <a href="https://sambeal.dev/stocks-and-crypto-utils/">
                  <StyledButton>Demo</StyledButton>
                </a>
                <StyledButton type="button" onClick={() => setActiveNoteKey("coinbase-trading-bot")}>
                  Notes
                </StyledButton>
              </div>
            </StyledContent>
          </StyledContainer>

          {/* Project Card */}
          <StyledContainer>
            <StyledBackground $image={surgevpic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                SurgeV
              </h2>
              <p className="text-xl text-white">2025</p>
              <div className="min-w-[300px] mt-4 space-x-4">
                <a href="https://surgev.store/">
                  <StyledButton>Website</StyledButton>
                </a>
                <StyledButton type="button" onClick={() => setActiveNoteKey("surgev")}>
                  Notes
                </StyledButton>
              </div>
            </StyledContent>
          </StyledContainer>
               {/* Project Card */}
               <StyledContainer>
            <StyledBackground $image={sketchkeypic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                Sketchkey
              </h2>
              <p className="text-xl text-white">2025</p>
              <div className="min-w-[300px] mt-4 space-x-4">
                <a href="https://devpost.com/software/sketchkey">
                  <StyledButton>Hackathon</StyledButton>
                </a>
                <a href="https://github.com/andreas-04/sketchkey">
                  <StyledButton>Code</StyledButton>
                </a>
              </div>
            </StyledContent>
          </StyledContainer>
       
        {/* Project Card */}
          <StyledContainer>
            <StyledBackground $image={crafty3DPic} />
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
            <StyledBackground $image={DiscoverWeekly} />
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
            <StyledBackground $image={StockPic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                Trading Bot
              </h2>
              <p className="text-xl text-white">2023</p>
              <div className="min-w-[300px] mt-4 space-x-4">
                <a href="https://github.com/spbeal/Alpaca-Trading-Bot">
                  <StyledButton>Code</StyledButton>
                </a>
              </div>
            </StyledContent>
          </StyledContainer>

          {/* Project Card */}
          <StyledContainer>
            <StyledBackground $image={PlatformerPic} />
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
            <StyledBackground $image={DownloadsPic} />
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

        <div className="pb-8 pt-16 text-center">
          <p className="text-4xl font-extrabold inline border-b-4 border-pink-600 pb-2">
            Other Projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">

          {/* Project Card */}
          <StyledContainer>
            <StyledBackground $image={focpic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-xl font-bold text-white tracking-wider">
                Friends Of The Clearwater 
              </h2>
              <p className="text-xl text-white">2025</p>
              <div className="min-w-[300px] mt-4 space-x-4">
                <a href="https://www.friendsoftheclearwater.org/">
                  <StyledButton>Website</StyledButton>
                </a>
                <a href="https://github.com/spbeal/StripeFOC">
                  <StyledButton>Stripe Plugin</StyledButton>
                </a>
              </div>
            </StyledContent>
          </StyledContainer>

      {/* Project Card */}
      <StyledContainer>
            <StyledBackground $image={bccompilerpic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                bC-compiler
              </h2>
              <p className="text-xl text-white">2025</p>
              <div className="min-w-[300px] mt-4 space-x-4">
                <a href="https://github.com/spbeal/bC-compiler">
                  <StyledButton>Code</StyledButton>
                </a>
              </div>
            </StyledContent>
          </StyledContainer>

      {/* Project Card */}
      <StyledContainer>
            <StyledBackground $image={cs395pic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                CS395 Algorithms
              </h2>
              <p className="text-xl text-white">2025</p>
              <div className="min-w-[300px] mt-4 space-x-4">
                <a href="https://github.com/spbeal/cs395">
                  <StyledButton>Code</StyledButton>
                </a>
              </div>
            </StyledContent>
          </StyledContainer>

        {/* Project Card */}
        <StyledContainer>
            <StyledBackground $image={barterbuddypic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                BarterBuddy
              </h2>
              <p className="text-xl text-white">Fall 2024</p>
              <div className="min-w-[300px] mt-4 space-x-4">
              <a href="https://github.com/ashep04/CS360_Barter_App/blob/main/Project_Report_Fall_2024_CS360_Group_13.pdf">
                  <StyledButton>Visuals</StyledButton>
                </a>
                <a href="https://github.com/ashep04/CS360_Barter_App">
                  <StyledButton>Code</StyledButton>
                </a>
              </div>
            </StyledContent>
          </StyledContainer>
        {/* Project Card */}
        <StyledContainer>
            <StyledBackground $image={cssurvivorpic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="text-2xl font-bold text-white tracking-wider">
                CS-Survivor
              </h2>
              <p className="text-xl text-white">Fall 2024</p>
              <div className="min-w-[300px] mt-4 space-x-4">
                <a href="https://github.com/spbeal/CS-Survivor">
                  <StyledButton>Code</StyledButton>
                </a>
              </div>
            </StyledContent>
          </StyledContainer>

          <StyledContainer>
            <StyledBackground $image={linuxshellpic} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="min-w-[300px] text-2xl font-bold text-white tracking-wider">
                linux-shell-cs240
              </h2>
              <p className="text-xl text-white">Spring 2024</p>
              <a href="https://github.com/spbeal/linux-shell-cs240">
                <StyledButton>Code</StyledButton>
              </a>
            </StyledContent>
          </StyledContainer>

          {/* Archive Project Card */}
          <StyledContainer>
            <StyledBackground $image={CS360PNG} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="min-w-[300px] text-2xl font-bold text-white tracking-wider">
                CS360 Labs
              </h2>
              <p className="text-xl text-white">Fall 2024</p>
              <a href="/CS360/index.html">
                <StyledButton>Link</StyledButton>
              </a>
            </StyledContent>
          </StyledContainer>

          {/* Archive Project Card */}
          <StyledContainer>
            <StyledBackground $image={SemanticWeb} />
            <StyledOverlay />
            <StyledContent>
              <h2 className="min-w-[300px] text-2xl font-bold text-white tracking-wider">
                Semantic Web
              </h2>
              <p className="text-xl text-white">Fall 2025</p>
              <a href="/SemanticWeb/index.html">
                <StyledButton>Link</StyledButton>
              </a>
            </StyledContent>
          </StyledContainer>

        </div>

        {activeNote ? (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 px-4 py-10 backdrop-blur-sm">
            <div className="surface-card relative w-full max-w-2xl rounded-[30px] p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setActiveNoteKey(null)}
                className="absolute right-5 top-5 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-sm font-semibold text-slate-600 hover:text-pink-600"
              >
                Close
              </button>

              <div className="pr-16">
                <span className="section-eyebrow">Project Note</span>
                <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">{activeNote.title}</h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-pink-600">{activeNote.date}</p>
              </div>

              <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
                {activeNote.content}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

// Styled Components
const StyledContainer = styled.div`
  position: relative;
  max-width: 400px;
  min-height: 280px;
  border-radius: 22px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  border: 1px solid rgba(255, 255, 255, 0.55);
  box-shadow: 0 24px 55px rgba(30, 41, 59, 0.18);
  transition: transform 0.28s ease, box-shadow 0.28s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 30px 65px rgba(30, 41, 59, 0.26);
  }
`;

const StyledBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-position: center;
  transform: scale(1.02);
  transition: transform 0.35s ease, opacity 0.35s ease;

  ${StyledContainer}:hover & {
    opacity: 0.92;
    transform: scale(1.08);
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.15) 0%, rgba(15, 23, 42, 0.72) 82%);
  transition: background 0.3s ease-in-out;

  ${StyledContainer}:hover & {
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.12) 0%, rgba(15, 23, 42, 0.84) 88%);
  }
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 10;
  margin-top: auto;
  width: 100%;
  padding: 1.4rem;
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  margin-top: 12px;
  padding: 10px 16px;
  font-size: 15px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.18);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.34);
  border-radius: 999px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: background 0.25s ease, transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.28);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-1px);
  }
`;

export default Projects;
