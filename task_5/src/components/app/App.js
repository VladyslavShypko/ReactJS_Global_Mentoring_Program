import React, {useState, useCallback} from "react";
import MainPage from "../pages/mainPage";
import Footer from '../shared/footer';
import Logo from '../shared/logo';
import ErrorBoundary from '../errorBoundary';

function App() {

    const [changeStyle, handleChangeStyle] = useState(false);

    const changeStyleForFooter = useCallback(() => {
        handleChangeStyle(changeStyle => !changeStyle);
    }, [changeStyle]);
    return (
        <>
            <ErrorBoundary>
                <Logo/>
                <MainPage changeStyleForFooter={changeStyleForFooter}/>
                <Footer changeStyle={changeStyle}/>
            </ErrorBoundary>
        </>
    );
}

export default App;
