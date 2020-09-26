import React from "react";
import MainPage from "../pages/mainPage";
import Footer from '../shared/footer';
import Logo from '../shared/logo';
import ErrorBoundary from '../errorBoundary';

function App() {
    return (
        <>
            <ErrorBoundary>
                <Logo/>
                <MainPage/>
                <Footer/>
            </ErrorBoundary>
        </>
    );
}

export default App;
