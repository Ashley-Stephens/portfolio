import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Footer from "../components/footer/Footer";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import "./Main.scss";

const Main = () => {
   return (
      <>
         <Header />
         <Greeting />
         <Skills />
         <StackProgress />
         <Education />
         <WorkExperience />
         <Projects />
         <StartupProject />
         <Profile />
         <Footer />
         <ScrollToTopButton />
      </>
   );
};

export default Main;
