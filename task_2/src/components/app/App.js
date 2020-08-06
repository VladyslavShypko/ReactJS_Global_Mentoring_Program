import React from "react";
import FuncComp from "../funcComp";
import ClassPure from "../classPure";
import ClassReact from "../classReact";
import CreateElement from "../createElement";

// Functional component
const App = () => (
  <div className="App">
    <ClassReact message={"Hello World"} />
    <ClassPure message={"Hello World"} />
    <CreateElement message={"Hello World"} />
    <FuncComp message={"Hello World"} />
  </div>
);

export default App;
