import React from "react";
import Footer from '../shared/footer';
import Logo from '../shared/logo';
import ErrorBoundary from '../errorBoundary';

function App({children}) {
    return (
        <>
            <ErrorBoundary>
                <Logo/>
                {children}
                <Footer/>
            </ErrorBoundary>
        </>
    );
}

export default App;
