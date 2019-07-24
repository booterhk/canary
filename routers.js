import { createStackNavigator, createAppContainer } from 'react-navigation'
import {HomeScreen, Map, WebView} from './src/router'
import React from 'react'

const AppNavigator = createStackNavigator({ 
  HomeScreen,
  Map,
  WebView
},{
  initialRouteName: "WebView",
  mode: 'modal',
  headerMode: 'none',
})
const AppContainer = createAppContainer(AppNavigator);
export default class Router extends React.Component {
  render() {
    return <AppContainer />;
  }
}