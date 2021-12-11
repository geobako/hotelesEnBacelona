import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabRoutes} from 'routes/appRoutes';

import {colors} from 'config/constants';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const props = {
    screenOptions: {
      allowFontScaling: false,
      tabBarActiveTintColor: colors.skyBlue,
      tabBarInactiveTintColor: colors.greenGray,
    },
  };

  return (
    <Tab.Navigator screenOptions={props.screenOptions}>
      {tabRoutes.map(route => {
        return (
          <Tab.Screen
            component={route.component}
            key={route.name}
            name={route.name}
            options={route.options}
            sharedElementsConfig={
              route.sharedElementsConfig ? route.sharedElementsConfig : null
            }
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
