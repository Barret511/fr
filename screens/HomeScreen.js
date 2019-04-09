import React, { Component } from 'react';
import {AppRegistry, Text, View, StyleSheet, SafeAreaView } from 'react-native';

export default class Homescreen extends Component{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the HomeScreen</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Homescreen', () => Homescreen);