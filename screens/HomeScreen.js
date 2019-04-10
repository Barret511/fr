/*import React, { Component } from 'react';
import {AppRegistry, Text, View, StyleSheet, SafeAreaView, 
  TextInput, Platform, StatusBar } from 'react-native';

  import Icon from 'react-native-vector-icons/Ionicons'

export default class Homescreen extends Component{
  render() {
   return (

    componentWillMount(){
      this.startHeaderHeight = 80
      if(Platform.OS == 'android')
      {
        this.startHeaderHeight = 100 + StatusBar.currentHeight
      }
    } //for android

    <SafeAreaView style={{ flex: 1  }}>
      <View style={{flex: 1}}>
         <View style={{ height: this.startHeaderHeight, backgroundColor: 'white',
         borderBottomWidth:1, borderBottomColor: '#dddddd'}}>
           <View style={{flexDirection: 'row', padding: 10,
             backgroundColor: 'white', marginHorizontal: 20,
             shadowOffset:{width: 0, height: 0 },
             shadowColor:'black',
             shadowOpacity: 0.2,
             elevation: 1, //for android
             marginTop:Platform.OS=='android' ? 30 : null
             }}>
              <Icon name="ios-search" size={20} />
                  <TextInput
                  underlineColorAndroid="transparent" //for android
                  placeholder="Search" 
                  placeholderTextColor="grey"
                  style={{ flex: 1, fontWeight: '700', backgroundColor: 'white'}}
                  />
         </View>
        </View>
      </View>
    </SafeAreaView>
    );
  }
}

AppRegistry.registerComponent('Homescreen', () => Homescreen);
 */
import React, { Component } from 'react';
import {AppRegistry, Text, View } from 'react-native';

export default class Homescreen extends Component{
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This is the Diet Screen</Text>
      </View>
    );
  }
}

export default Homescreen;