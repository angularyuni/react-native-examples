import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './components/Home';
import About from './components/About';

export default class Routing extends Component {
    
  constructor() {
    super()
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator) {
    if(route.name === 'homePage') {
      return <Home navigator={navigator} />
    } else if(route.name === 'aboutPage') {
      return <About navigator={navigator} text={route.text} />
    }
  }

  render() {
    return (
     <Navigator
        initialRoute = {{name: 'homePage'}}
        renderScene = {this.renderScene}
     />
    );
  }
}


AppRegistry.registerComponent('Routing', () => Routing);
