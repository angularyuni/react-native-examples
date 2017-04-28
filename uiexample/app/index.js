
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import User from './components/user';
import ButtonGroup from './components/buttonGroup';
import Tabs from './components/tabs';

class NavBar extends Component {
  render() {
    return (
      <View style={styles.navBar}>
         <Text style={styles.navBarText}>View Profile</Text>
      </View>
    );
  }
}

export class App extends Component {
  render() {
    return (
       <View style={styles.container}>
        <NavBar />
        <User />
        <View style={{height: 40}}></View>
        <ButtonGroup />
        <View style={{flex: 1}}></View>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    flexDirection: 'column',
  },
  navBar: {
    height: 60,
    backgroundColor: '#FF6E40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarText: {
    fontSize: 20,
    color: 'white',
  },
});

