import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


import Component2 from './screens/DietScreen';

class ProgressScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Progress Screen</Text>
      </View>
    );
  }
}

class DietScreen extends React.Component {
  render() {
    return (
      <View >
        <Component2 />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Home ScreenBies</Text>
      </View>
    );
  }
}

class WorkoutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Workcrefdjkghufdhg;uhfdsugheriughu;eren</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Profile Screen Were  working on it you slut</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Progress: { screen: ProgressScreen },
  Diet: { screen: DietScreen },
  Home: { screen: HomeScreen },
  Workout: { screen: WorkoutScreen },
  Profile: { screen: ProfileScreen },
});

export default createAppContainer(TabNavigator);
