import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';

export default class Dietscreen extends Component{
  render() {
    return (
      <View>
        <Text>This is the Diet Screen</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Dietscreen', () => Dietscreen);

// Make sure this class is different from the class in app.js 
// what i did was used Dietscreen 