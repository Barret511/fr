import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';

export default class Workoutscreen extends Component{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the workout Screen</Text>
      </View>
    );
  }
}
export default Workoutscreen;
//AppRegistry.registerComponent('Workoutscreen', () => Workoutscreen);