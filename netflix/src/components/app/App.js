import React from "react";
import MainPage from "../pages/mainPage";
import Footer from '../shared/footer';
import ErrorBoundary from '../errorBoundary';

const App = () => (
  <>
  <ErrorBoundary>
    <MainPage />
    <Footer />
  </ErrorBoundary>
  </>
);

export default App;
