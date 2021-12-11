import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontSize} from 'config/constants';
import {Text} from 'react-native';
import Home from 'screens/home';
import Chat from 'screens/chat';

export const tabRoutes = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarLabel: ({color}) => (
        <Text style={{color, fontSize: fontSize.small}}>Home</Text>
      ),
      tabBarIcon: ({focused, color}) => (
        <Ionicons
          name={focused ? 'ios-person-circle' : 'ios-person-circle-outline'}
          size={26}
          color={color}
        />
      ),
    },
  },
  {
    name: 'Chat',
    component: Chat,
    options: {
      tabBarLabel: ({color}) => (
        <Text style={{color, fontSize: fontSize.small}}>Chat</Text>
      ),
      tabBarIcon: ({focused, color}) => (
        <Ionicons
          name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
          size={26}
          color={color}
        />
      ),
    },
  },
];
