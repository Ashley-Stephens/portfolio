import React, {useEffect} from "react";
import "./App.scss";
import Main from "./containers/Main";
import Resume from "./containers/resume/Resume";
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import ContactPage from "./containers/contact/ContactPage";

import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";

function ScrollToHashBase({location}) {
   useEffect(() => {
      if (!location.hash) return;
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior: "smooth", block: "start"});
   }, [location.pathname, location.hash]);

   return null;
}
const ScrollToHash = withRouter(ScrollToHashBase);

function App() {
   const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
   const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
   const changeTheme = () => setIsDark(!isDark);

   return (
      <div className={isDark ? "dark-mode" : null}>
         <StyleProvider value={{isDark, changeTheme}}>
            <Router>
               <ScrollToHash />
               <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/resume" component={Resume} />
                  <Route exact path="/contact" component={ContactPage} />
               </Switch>
            </Router>
         </StyleProvider>
      </div>
   );
}

export default App;
