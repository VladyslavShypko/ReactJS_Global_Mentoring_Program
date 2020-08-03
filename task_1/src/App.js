import React, { PureComponent } from "react";

//React.CreateElement
const elem = React.createElement;

//React.Component
class ClassReact extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

//React.Component
class ClassPure extends PureComponent {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// Functional component
const FuncComp = ({ message }) => <h1>{message}</h1>;

// Functional component
const App = () => (
  <div className="App">
    <ClassReact message={"Hello world"} />
    <ClassPure message={"Hello world"} />
    {elem("h1", null, "Hello world")}
    <FuncComp message={"Hello world"} />
  </div>
);

export default App;
