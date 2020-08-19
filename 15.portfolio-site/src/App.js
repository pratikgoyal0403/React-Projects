import React from "react";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from './pages/projects/projects';
import { BrowserRouter as Router, Route } from "react-router-dom";
import classes from "./app.module.css";

const App = () => {
  return (
    <Router>
      <div className={classes.wrapper}>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} /> 
        <Route path="/projects" component={Projects} /> 
      </div>
    </Router>
  );
};

export default App;
