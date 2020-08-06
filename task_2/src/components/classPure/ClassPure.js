import React, { PureComponent } from "react";

export default class ClassPure extends PureComponent {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}
