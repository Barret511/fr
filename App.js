import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {Ionicons} from "@expo/vector-icons"; // this is a library for icons refer to const getTabBarIcon to see the icons listed 



import Dietscreen from './screens/DietScreen';  
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // this is another library for icons look at progress screen class

class ProgressScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Progress Screen</Text>
        <MaterialCommunityIcons name="dumbbell" size ={50} color="black"/> 
      </View>
      
    );
  }
}

class DietScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Dietscreen />
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
/*
const TabNavigator = createBottomTabNavigator({
  Progress: { screen: ProgressScreen },
  Diet: { screen: DietScreen },
  Home: { screen: HomeScreen },
  Workout: { screen: WorkoutScreen },
  Profile: { screen: ProfileScreen },
}); 


export default createAppContainer(TabNavigator);*/

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}  // this part is for the notification badge ^

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = "ios-add"; //where to choose icon
    // We want to add badges to home tab icon
   // i was trying a bunch of different icons to see if they would pop up on the corners but it didn't work
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Workout') {
    iconName = "ios-add-circle";
    // iconName = <MaterialCommunityIcons name="dumbbell" size ={45} color="black"/>
  }
  else if (routeName === 'Diet') {
    iconName = "ios-airplane";
    // iconName = <MaterialCommunityIcons name="dumbbell" size ={45} color="black"/>
  }
  else if (routeName === 'progress') {
    iconName = "ios-alert";
    // iconName = <MaterialCommunityIcons name="dumbbell" size ={45} color="black"/>
  }
  else if (routeName === 'profile') {
    iconName = "ios-apps";
    // iconName = <MaterialCommunityIcons name="dumbbell" size ={45} color="black"/>
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={20} color={tintColor} />;
}; // This const is where you add the icons ^

export default createAppContainer(
  createBottomTabNavigator(
    {
  Progress: { screen: ProgressScreen },
  Diet: { screen: DietScreen },
  Home: { screen: HomeScreen },
  Workout: { screen: WorkoutScreen },
  Profile: { screen: ProfileScreen },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'gray', //changes the color of the icon
      },
    }
  )
);