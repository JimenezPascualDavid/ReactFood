import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import {
    Contact,
    Home,
    ListFood
} from './screens';

function AppRoutes() {
    return (
        <App>
            <Switch>
                <Route
                    exact
                    path="/home"
                    component={Home}
                />
                <Route
                    exact
                    path="/contact"
                    component={Contact}
                />
                <Route
                    exact
                    path="/listfood"
                    component={ListFood}
                />
                <Redirect exact from="/" to="/home" />
                <Redirect from="*" to="/home" />
            </Switch>
        </App>
    )
}

export default AppRoutes;
