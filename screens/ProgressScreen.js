import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';

export default class Progressscreen extends Component{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Progress Screen</Text>
      </View>
    );
  }
}

//AppRegistry.registerComponent('Progressscreen', () => Progressscreen);
export default Progressscreen;