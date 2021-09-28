import React from "react";
import { Provider } from "react-redux";
import Store from "./ducks/store";
import Tickets from './pages/tickets';
import MerchOrders from './pages/merchorders';
import Header from './components/Header';
import Live from './pages/live';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import { Route, BrowserRouter as MainRouter, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import "./i18n";
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from "./config/theme"
import Router from './routers/routes'

const App = () => (
    <Provider store={Store}>
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Header />
            <MainRouter>
                <Router />
            </MainRouter>
        </ThemeProvider>
    </Provider>
);
export default App;

// username: dpoojari@gigs.live
// password: xy4cNCDrTcBS5pa
