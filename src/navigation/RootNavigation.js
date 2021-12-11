/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import useSockets from 'sockets/useSocket';
import {setUserName} from 'store/reviews/actions';
import {useDispatch} from 'react-redux';
import {getUserName} from 'services/review-distributions';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const dispatch = useDispatch();
  useSockets();

  useEffect(() => {
    checkForUserName();
  }, []);

  const checkForUserName = async () => {
    const userName = await getUserName();
    if (userName) {
      dispatch(setUserName(userName));
    }
  };

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
