import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../../routes/homepage/index.jsx';
import './app.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App;