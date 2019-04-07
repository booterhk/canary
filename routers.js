import { createStackNavigator, createAppContainer } from 'react-navigation'
import {HomeScreen, Map} from './src/router'
import React from 'react'

const AppNavigator = createStackNavigator({ 
  HomeScreen,
  Map
},{
  initialRouteName: "HomeScreen",
  mode: 'card',
  headerMode: 'none',
})
const AppContainer = createAppContainer(AppNavigator);
export default class Router extends React.Component {
  render() {
    return <AppContainer />;
  }
}