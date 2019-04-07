import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Diet Screen</Text>
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
        <Text>This is the Profile Screen Were finally working on it you slut</Text>
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
