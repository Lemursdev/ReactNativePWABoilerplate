const React = require('react');
import { NativeRouter, Route } from 'react-router-native';

import Home from '../components/Home';

const Router = () => (
    <NativeRouter>
        <Route exact path="/" component={Home} />
    </NativeRouter>
);

export default Router;
