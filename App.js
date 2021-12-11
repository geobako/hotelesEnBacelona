import React from 'react';

import RootStackNavigator from 'navigation/RootNavigation';
import store from 'store/configureStore';
import {Provider} from 'react-redux';
import {platform} from 'config/constants';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {UIManager} from 'react-native';

if (platform === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
