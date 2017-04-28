import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'native-base';

class Home extends Component {
    constructor() {
        super()
        this.navigate = this.navigate.bind(this)
    }

    navigate(name, text) {
        this.props.navigator.push({
            name,
            text
        })
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Homepage
        </Text>
        <Button onPress={()=> this.navigate('aboutPage', "Hello world!!")}><Text>Go to about page</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Home;
