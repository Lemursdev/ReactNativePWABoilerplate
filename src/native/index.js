/**
 * @format
 */

import { AppRegistry } from 'react-native';
import NativeApp from './NativeApp';
import { name as appName } from '../../app.json';
import '../i18n'; // anonymous import

AppRegistry.registerComponent(appName, () => NativeApp);
