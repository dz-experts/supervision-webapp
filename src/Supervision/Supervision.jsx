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
    const [data, setData] = useState({loading: true});
    const [mapsConfigs, setMapsConfigs] = useState({});
    const [entries, setEntries] = useState([]);
    const [twoLayout, setTwoLayout] = useState(false);

    const contextValue = {
        token: token,
        setToken: newData => {
            localStorage.setItem('token', newData);
            setToken(newData);
        },
        data: data,
        setData: newData => setData(newData),
        entries: entries,
        setEntries: newEntries => setEntries(newEntries),
        mapsConfigs: mapsConfigs,
        setMapsConfigs: newMapsConfigs => setMapsConfigs(newMapsConfigs),
        twoLayout: twoLayout,
        setTwoLayout: value => setTwoLayout(value)
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
