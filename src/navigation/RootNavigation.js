import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import useSockets from 'sockets/useSocket';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  useSockets();

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={TabNavigator}
        key="mainTabs"
        name="MainTabs"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
