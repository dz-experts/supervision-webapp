import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {Home} from './Home';
import {Login} from './Login';

export const Supervision = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>

                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    );
};
