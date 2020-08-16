import React from "react";
import MainPage from "../pages/mainPage";
import Footer from '../shared/footer';
import ErrorBoundary from '../errorBoundary';

import './App.scss';

const App = () => (
  <div className="app">
  <ErrorBoundary>
    <MainPage />
    <Footer />
  </ErrorBoundary>
  </div>
);

export default App;
