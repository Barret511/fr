import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';

export default class Component2 extends Component{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the Diet Screen</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component2', () => Component2);