import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
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
