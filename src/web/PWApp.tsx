import React = require('react');
import { withTranslation } from 'react-i18next';

import Router from './routes';

function PWApp({ t }) {
    return (
        <div className="App">
            <header className="App-header">{t('Welcome to React')}</header>
            <Router />
        </div>
    );
}

export default withTranslation()(PWApp);
