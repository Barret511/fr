import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';

export default class Profilescreen extends Component{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Profile Screen</Text>
      </View>
    );
  }
}

//AppRegistry.registerComponent('Profilescreen', () => Profilescreen);
export default Profilescreen;