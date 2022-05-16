import React from 'react';
import { NavigaitonContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import NewsScreen from './NewsScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigaitonContainer>
      <Tab.Navigator>
        <Tab.Screen name ="Home" component= {HomeScreen} />
        <Tab.Screen name ="News" component= {NewsScreen} />
        <Tab.Screen name ="Settings" component= {SettingsScreen} />
      </Tab.Navigator>
    </NavigaitonContainer>
  );
}

