import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import {CreateBottomTabNavigator, createBottomTabNavigator} from 'react-navigation';
 
import Progressscreen from './screens/DietScreen'; 
import Dietscreen from './screens/DietScreen'; 
import Homescreen from './screens/HomeScreen'; 
import Workoutscreen from './screens/DietScreen'; 
import Profilescreen from './screens/DietScreen'; 


class App extends React.Component {
    render() {
        return (
            <View style= {StyleSheet.container}>
            <Text>This may be a better way to navigate the tab bar!</Text>
            </View>
        );
    }
}

export default createBottomTabNavigator({

Progress:{
screen: Progressscreen
},
Diet:{
screen: Dietscreen
},
Home:{
    screen: Homescreen
},
Workout:{
    screen: Workoutscreen
},
Profile:{
    screen: Profilescreen
},

})