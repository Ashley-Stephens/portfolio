import React, { useEffect } from "react";
import "./App.scss";
import Main from "./containers/Main";
import Resume from "./containers/resume/Resume";
import AboutPage from "./containers/about/AboutPage";
import ContactPage from "./containers/contact/ContactPage";
import ProjectsPage from "./containers/projectsPage/ProjectsPage";
import ProjectCaseStudyPage from "./containers/project/ProjectCaseStudyPage";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import { StyleProvider } from "./contexts/StyleContext";

function ScrollToHashBase({ location }) {
   useEffect(() => {
      if (!location.hash) return;
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
   }, [location.pathname, location.hash]);

   return null;
}
const ScrollToHash = withRouter(ScrollToHashBase);

function App() {
   const isDark = true;          // ALWAYS DARK
   const changeTheme = () => { }; // NO TOGGLING

   return (
      <div className="dark-mode">
         <StyleProvider value={{ isDark, changeTheme }}>
            <Router>
               <ScrollToHash />
               <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/resume" component={Resume} />
                  <Route exact path="/contact" component={ContactPage} />
                  <Route exact path="/about" component={AboutPage} />
                  <Route exact path="/projects" component={ProjectsPage} />
                  <Route exact path="/projects/:slug" component={ProjectCaseStudyPage} />
               </Switch>
            </Router>
         </StyleProvider>
      </div>
   );
}

export default App;
