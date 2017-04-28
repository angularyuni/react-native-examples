import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class User extends Component {
  render() {
    return (
      <View style={styles.user}>
        <View style={{height: 150, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{width: 100}}>
            <View style={{width: 100, height: 100}}>
              <Image source={require('./../img/avatar.png')} style={{width: 100, height: 100}}/>
            </View>
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <Text style={{fontSize: 22}}>James Smith</Text>
            <Text style={{color: 'gray', fontSize: 12, marginTop: 10}}>York University</Text>
            <Text style={{color: 'gray', fontSize: 12}}>Toronto, Canada</Text>
            
          </View>
        </View>
        <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth:0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./../img/list.png')} style={{width: 30, height: 25}}/>
            <Text style={{marginLeft: 5}}>post</Text>
          </View>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./../img/chat.png')} style={{width: 30, height: 25}}/>
            <Text style={{marginLeft: 5}}>comment</Text>
          </View>
          <View style={{flex: 1, height: 50, flexDirection: 'row', borderWidth: 0.5, borderLeftWidth: 0, borderRightWidth:0, borderColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./../img/star.png')} style={{width: 30, height: 30}}/>
            <Text style={{marginLeft: 5}}>follow</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  user: {
    height: 200,
    backgroundColor: 'white',
  },

});