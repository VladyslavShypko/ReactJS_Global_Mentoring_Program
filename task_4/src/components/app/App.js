import React, { Component } from "react";
import MainPage from "../pages/mainPage";
import Footer from '../shared/footer';
import Logo from '../shared/logo';
import ErrorBoundary from '../errorBoundary';

export default class App extends Component { 

state = {
  changeStyle: false
}

changeStyleForFooter = () => {
  this.setState((state) => {
    return {changeStyle: !state.changeStyle}
  })
}

  render() {
    return (
      <>
        <ErrorBoundary>
          <Logo />
          <MainPage changeStyleForFooter={this.changeStyleForFooter}/>
          <Footer changeStyle={this.state.changeStyle}/>
        </ErrorBoundary>
      </>
    );
  }
}
