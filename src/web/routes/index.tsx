const React = require('react');
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../components/Home';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
