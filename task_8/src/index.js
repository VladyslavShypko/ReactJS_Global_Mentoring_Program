import React from "react";
import ReactDOM from "react-dom";
import {compose, createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {rootReducer} from './redux/rootReducer';
import App from "./components/app";
import './index.scss';
import MainPage from "./components/pages/mainPage";
import PageNotFound from "./components/pages/pageNotFound";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
));

const app = (
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/film/:id' component={MainPage}/>
                    <Route exact path='/search' component={MainPage}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </App>
        </Router>
    </Provider>
)

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
