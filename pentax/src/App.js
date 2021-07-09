import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
// import Antd from "./Components/Antd/Ant";

import Box1 from "./Components/Box1";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />

            <Route path="/project">
              <Project />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Route>
       

          <Route path="/add">
            <Box1 />
          </Route>
        </Switch>
        {/* <Antd /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
