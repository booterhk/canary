/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import Router from './routers'
import dva from './src/utils/dva';
import * as models from './src/models'
import {name as appName} from './app.json';

const app = dva({
  models: Object.keys(models).map(key => models[key]),
  onError(e) {
    console.log('onError', e);
  },
});
const App = app.start(<Router />);
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);
