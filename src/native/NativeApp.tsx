const React = require('react');
import '../i18n'; // anonymous import

import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { Header, Colors } from 'react-native/Libraries/NewAppScreen';

import Router from './routes';

declare const global: { HermesInternal: null | {} };

const NativeApp = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Header />
                    <Router />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = {
    scrollView: {
        backgroundColor: Colors.lighter,
    },
};

export default NativeApp;
