import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'native-base';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.props.text}
        </Text>
        <Button onPress={() => this.props.navigator.pop()}><Text>Go back to homepage</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});

export default About;
