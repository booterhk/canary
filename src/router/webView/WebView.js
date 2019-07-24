import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class MyWeb extends Component {
  javascriptToInject = () => {
    return `window.postMessage = function(v) {window.ReactNativeWebView.postMessage(v)};`
  }
  render() {
    return (
      <WebView
        source={{ uri: 'http://localhost:8000/MovePatrol' }}
        style={{ marginTop: 44 }}
        javascriptToInject={this.javascriptToInject}
        onNavigationStateChange={e => console.log(e)}
        onMessage={e => console.log(e)}
      />
    );
  }
}