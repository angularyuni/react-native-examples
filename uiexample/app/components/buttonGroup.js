import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <View style={{flex: 1, height: 100, borderTopWidth: 0.5, borderRightWidth: 0.5, borderColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
        
        <Image source={this.props.imageSource} style={{width:30, height: 30}} />
        <Text style={{marginTop: 5}}>{this.props.name}</Text>
      </View>
    );
  }
}

export default class ButtonGroup extends Component {
  render() {
    return (
      <View style={styles.buttonGroup}>
        <View style={{flex: 1, flexDirection: 'row', borderLeftWidth: 0.5, borderColor: 'gray'}}>
          <Button name="account" imageSource={require('./../img/account.png')} />
          <Button name="friends" imageSource={require('./../img/friend.png')} />
          <Button name="schedule" imageSource={require('./../img/schedule.png')} />
          <Button name="school" imageSource={require('./../img/school.png')} />
        </View>
        <View style={{flex: 1, flexDirection: 'row', borderLeftWidth: 0.5, borderBottomWidth: 0.5, borderColor: 'gray'}}>
          <Button name="message" imageSource={require('./../img/message.png')} />
          <Button name="notifications" imageSource={require('./../img/notifications.png')} />
          <Button name="help" imageSource={require('./../img/help.png')} />
          <Button name="setting" imageSource={require('./../img/setting.png')} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonGroup: {
    height: 200,
    backgroundColor: 'white',
  },

});