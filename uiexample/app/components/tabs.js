import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class TabButton extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
         <Image source={this.props.imageSource} style={{width:25, height: 25}} />
        <Text style={{marginTop: 5, color: '#A0A0A0'}}>{this.props.name}</Text>
      </View>
    );
  }
}
export default class Tabs extends Component {
  render() {
    return (
      <View style={styles.tabs}>
          <TabButton name="home" imageSource={require('./../img/house.png')} />
        
          <TabButton name="chat" imageSource={require('./../img/chatting.png')} />
          <TabButton name="meeting" imageSource={require('./../img/meeting.png')} />
          <TabButton name="more" imageSource={require('./../img/more.png')} />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: '#A0A0A0',
  },
});