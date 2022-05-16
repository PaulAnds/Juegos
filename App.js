import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import NewsScreen from './NewsScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name ="Home" component= {HomeScreen} />
        <Drawer.Screen name ="News" component= {NewsScreen} />
        <Drawer.Screen name ="Settings" component= {SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

