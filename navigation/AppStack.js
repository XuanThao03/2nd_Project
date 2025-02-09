import * as React from 'react';
import PlashScreen from '../src/screens/plash_screen';
import HomeScreen from '../src/screens/home_screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IC_Detect, IC_Game, IC_Home, IC_InforLine} from '../src/assets/icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CUSTOM_COLORS from '../src/constants/color';
import scale from '../src/constants/responsive';
import {View} from 'react-native';
import ResultScreen from '../src/screens/result_hgr_screen';
import DetectScreen from '../src/screens/detect_screen';
import {HelloWorld} from '../src/screens/test';
import GameScreen from '../src/screens/game_screen';
import IntroduceScreen from '../src/screens/about_screen';
import AboutScreen from '../src/screens/about_screen';

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
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  padding: scale(7, 'w'),
                  backgroundColor: CUSTOM_COLORS.hover,
                  borderRadius: scale(50, 'h'),
                }}>
                <IC_Home />
              </View>
            ) : (
              <View>
                <IC_Home />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="DetectStack"
        component={DetectStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  padding: scale(7, 'w'),
                  backgroundColor: CUSTOM_COLORS.hover,
                  borderRadius: scale(50, 'h'),
                }}>
                <IC_Detect />
              </View>
            ) : (
              <View>
                <IC_Detect />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  padding: scale(7, 'w'),
                  backgroundColor: CUSTOM_COLORS.hover,
                  borderRadius: scale(50, 'h'),
                }}>
                <IC_InforLine />
              </View>
            ) : (
              <View>
                <IC_InforLine />
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
        initialParams={{passedImg: null, passedFile: null}}
      />
      <Stack.Screen
        name="Test"
        component={HelloWorld}
        options={{headerShown: false}}
        initialParams={{passedFile: null, w: 0, h: 0}}
      />
    </Stack.Navigator>
  );
};
const GameStack = () => {
  return (
    <Stack.Navigator initialRouteName="Game">
      <Stack.Screen
        name="Game"
        component={Game}
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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InforScreen"
        component={IntroduceScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
