import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {StackNavigator} from './StackNavigator';
import {Tab3Screen} from '../screens/Tab3Screen';
import {colores, styles} from '../themes/appTheme';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from './TopTapNavigator';
import {Tab1Screen} from '../screens/Tab1Screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

const ButtonTabAndroid = createMaterialBottomTabNavigator();
const ButtonTabIOS = createBottomTabNavigator();
export const Tabs = () => {
  return Platform.OS === 'ios' ? (
    <TabsIOS></TabsIOS>
  ) : (
    <TabsAndroid></TabsAndroid>
  );
};

const TabsAndroid = () => {
  return (
    <ButtonTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      // activeColor="yellow"

      inactiveColor="white"
      sceneAnimationType="shifting"
      // labeled={false}
      // shifting={true}
      screenOptions={({route}) => ({
        // tabBarBadge: '2',
        // tabBarAccessibilityLabel: 'as',
        // tabBarColor: 'red',

        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'barbell-outline';
              break;
            case 'Tab2Screen':
              iconName = 'bowling-ball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bug-outline';
              break;

            default:
              break;
          }
          return <Icon name={iconName} size={20} color={color}></Icon>;
        },
      })}>
      <ButtonTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <ButtonTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <ButtonTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </ButtonTabAndroid.Navigator>
  );
};

const TabsIOS = () => {
  return (
    <ButtonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        // headerShown: false,

        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        // tabBarLabel: '20',
        tabBarLabelStyle: {
          fontSize: 10,
        },
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;

            default:
              break;
          }
          return (
            <Text style={{color}}>
              <Icon name="airplane-outline" size={80} color={color}></Icon>
            </Text>
          );
        },
      })}>
      <ButtonTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <ButtonTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <ButtonTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </ButtonTabIOS.Navigator>
  );
};
