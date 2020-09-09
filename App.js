import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';


function HomeScreen(){
  return(

    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FF8C00'}}>
      <Text style ={{fontWeight:'bold', fontSize:32}}> Home Screen !</Text>
    </View>
  );
}

function SettingsScreen(){
  return(
    <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#37FDFC'}}>
      <Text style ={{fontWeight:'bold', fontSize:32}}> Settings !</Text>
    </View>
  );
}

function UploadScreen(){
  return(
    <View style ={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FFDF00'}}>
      <Text style ={{fontWeight:'bold', fontSize:32}}>Upload Screen ! </Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name ="Home" component={HomeScreen}/>
        <Tab.Screen name ="Settings" component= {SettingsScreen} />
        <Tab.Screen name ="Upload" component={UploadScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
