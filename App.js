import React from 'react';
import {AppRegistry, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { createBottomTabNavigator} from 'react-navigation';
//import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Progressscreen from './screens/DietScreen'; 
import Dietscreen from './screens/DietScreen'; 
import Homescreen from './screens/HomeScreen'; 
import Workoutscreen from './screens/DietScreen'; 
import Profilescreen from './screens/DietScreen'; 




export default createBottomTabNavigator({
Progress:{
screen: Progressscreen, 
navigationOptions:{
  tabBarLabel:'PROGRESS',
  tabBarIcon: ({tintColor}) => (
   // <Icon name="ios-play" color = {tintColor} size={24} />
    <MaterialCommunityIcons name="progress-check" size ={24} color={tintColor}/>
    
  )
}
},
Diet: {
screen: Dietscreen,
navigationOptions:{
  tabBarLabel:'Diet',
  tabBarIcon: ({tintColor}) => (
   // <Icon name="ios-play" color = {tintColor} size={24} />
    <MaterialCommunityIcons name="food" size ={24} color={tintColor}/>
  )
}
},
Home: {
    screen: Homescreen,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon: ({tintColor}) => (
       // <Icon name="ios-play" color = {tintColor} size={24} />
        <MaterialCommunityIcons name="home" size ={24} color={tintColor}/>
      )
    }
},
Workout: {
    screen: Workoutscreen,
    navigationOptions:{
      tabBarLabel:'Workout',
      tabBarIcon: ({tintColor}) => (
       // <Icon name="ios-play" color = {tintColor} size={24} />
        <MaterialCommunityIcons name="dumbbell" size ={24} color={tintColor}/>
      )
    }
},
Profile: {
    screen: Profilescreen,
    navigationOptions:{
      tabBarLabel:'Profile',
      tabBarIcon: ({tintColor}) => (
       // <Icon name="ios-play" color = {tintColor} size={24} />
        <MaterialCommunityIcons name="account-circle" size ={24} color={tintColor}/>
      )
    }
}, {
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
   }
  }
})