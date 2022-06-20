import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import DetailsScreen from './DetailsScreen';
import GuessNumber from './Games/GuessNumber';
import Ionicons from '@expo/vector-icons/Ionicons';
import RockPaperScissors from './Games/RockPaperScissors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Homes() {
  return (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;
          let rn = route.name

          if( rn === "Home")
          iconName = focused ? 'home' : 'home-outline';
          else if(rn === "GameScreen")
          iconName = focused ? 'apps' : 'apps-outline';

          return <Ionicons name={iconName} size={size} color={ color } />
        } })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
         headerStyle: {
          backgroundColor: '#790e8b',
        }, 
        headerTintColor: '#fff',
        
        }}/>
      <Tab.Screen name="GameScreen" component={GameScreen} options={{
          headerStyle: {
            backgroundColor: '#790e8b',
          }, 
          headerTintColor: '#fff',
          }}/>
    </Tab.Navigator>
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
           <Stack.Screen name="GMN" component={GuessNumber} options={{ title: "Games!",headerStyle: {
            backgroundColor: '#790e8b',
          }, 
          headerTintColor: '#fff',
           }}/>
           <Stack.Screen name="RPS" component={RockPaperScissors} options={{ title: "Games!",headerStyle: {
            backgroundColor: '#790e8b',
          }, 
          headerTintColor: '#fff',
           }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

