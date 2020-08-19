import React from "react";
import "./app.css";
import Section from "./components/section/Section";
import topics from './topics.json';
import modules from './modules.json';
import subjects from './subjects.json';

const App = () => {
  return (
    <>
      <Section items={topics} heading="suggested topics"/>
      <Section items={modules} heading="modules"/>
      <Section items={subjects} heading="flash cards"/>
    </>
  );
};

export default App;
