import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './HomeScreen';
import StoreScreen from './StoreScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Homes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} options={{
         headerStyle: {
          backgroundColor: '#790e8b',
        }, 
        headerTintColor: '#fff',
        }}/>
      <Drawer.Screen name="Store" component={StoreScreen} options={{
          headerStyle: {
            backgroundColor: '#790e8b',
          }, 
          headerTintColor: '#fff',
          }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>
        <Stack.Screen 
          name="Home"
          component={Homes}
          options={{ headerShown: false }}
          />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "title",headerStyle: {
            backgroundColor: '#790e8b',
          }, 
          headerTintColor: '#fff',
           }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

