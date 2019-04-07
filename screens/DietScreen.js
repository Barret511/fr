import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';

export default class DietScreen extends Component{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the Diet Screen</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('DietScreen', () => DietScreen);