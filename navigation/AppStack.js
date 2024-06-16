import * as React from 'react';
import PlashScreen from '../src/screens/plash_screen';
import HomeScreen from '../src/screens/home_screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IC_Detect, IC_Game, IC_Home} from '../src/assets/icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CUSTOM_COLORS from '../src/constants/color';
import scale from '../src/constants/responsive';
import DetectScreen from '../src/screens/detect_screen';
import GameScreen from '../src/screens/game_screen';
import {View} from 'react-native';
import ResultScreen from '../src/screens/result_hgr_screen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: CUSTOM_COLORS.primary,
          height: scale(75, 'h'),
          borderTopLeftRadius: scale(15, 'w'),
          borderTopRightRadius: scale(15, 'w'),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {/* <IC_Home
                fill={focused ? CUSTOM_COLORS.primary : CUSTOM_COLORS.lightGray}
                fill2={
                  focused ? CUSTOM_COLORS.primary : 'transparent'
                }></IC_Home> */}
              <IC_Home />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DetectStack"
        component={DetectStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {/* <IC_Detect
                fill={focused ? CUSTOM_COLORS.primary : CUSTOM_COLORS.lightGray}
                fill2={
                  focused ? CUSTOM_COLORS.primary : 'transparent'
                }></IC_Detect> */}
              <IC_Detect />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Game"
        component={GameScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {/* <IC_Game
                fill={focused ? CUSTOM_COLORS.primary : CUSTOM_COLORS.lightGray}
                fill2={
                  focused ? CUSTOM_COLORS.primary : 'transparent'
                }></IC_Game> */}
              <IC_Game />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const DetectStack = () => {
  return (
    <Stack.Navigator initialRouteName="Detect">
      <Stack.Screen
        name="Detect"
        component={DetectScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const GameStack = () => {
  return (
    <Stack.Navigator initialRouteName="Game">
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Stack = createNativeStackNavigator();
export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="PlashScreen"
      options={{headerShown: false}}>
      <Stack.Screen
        name="PlashScreen"
        component={PlashScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
}
