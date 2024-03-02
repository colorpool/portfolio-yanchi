import './index.css';
import styled, {ThemeProvider} from "styled-components"
import {darkTheme} from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/sections/Footer";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";
import ProjectDetails from "./components/Dialog/ProjectDetails";
import {AnimatePresence} from "framer-motion";
import {useState} from "react";
import Certification from "./components/sections/Certification";

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(38.73deg,
  rgba(0, 204, 150, 0.15) 0%,
  rgba(201, 32, 184, 0) 50%),
  linear-gradient(141.27deg,
  rgba(0, 70, 209, 0) 50%,
  rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;


function App() {
  const [openModal, setOpenModal] = useState({state: false, project: null});
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar/>
        <Body>
          {/*<StarCanvas/>*/}
          <AnimatePresence>
            <div>
              <Hero/>
              <Wrapper>
                <Skills/>
                <Experience/>
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal}/>
              <Wrapper>
                <Education/>
                <Certification/>
                <Contact/>
              </Wrapper>
              <Footer/>

              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}

            </div>
          </AnimatePresence>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
