/**
 * Although specified in the React Native documentation, declaring a different entryPoint does not work.
 * forwarding the component through this file seems like an acceptable solution, to keep project structure consist.
 *
 * The react PWA entrypoint is defined in the config/web/webpack.${env}.config.js file
 */
import NativeAppRoot from './src/native/index.js';
export default NativeAppRoot;
