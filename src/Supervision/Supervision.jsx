import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import {Home} from './Home';
import {Login} from './Login';
import {SupervisionContext} from './Supervision.context';

export const Supervision = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const contextValue = {
        token: token,
        setToken: data => {
            localStorage.setItem('token', data);
            setToken(data);
        }
    };

    return (
        <SupervisionContext.Provider value={contextValue}>
            <Router>
                <Switch>
                    <Route path="/home">
                        {token ?
                            <Home/> :
                            <Redirect to={{pathname: '/'}}/>
                        }
                    </Route>

                    <Route path="/">
                        <Login/>
                    </Route>
                </Switch>
            </Router>
        </SupervisionContext.Provider>
    );
};
