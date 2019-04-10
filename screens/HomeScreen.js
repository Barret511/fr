import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This is the Home Screen</Text>
      </View>
    );
  }
}
