import {Alert} from 'react-native';

// eslint-disable-next-line no-shadow
const ErrorMiddleware = store => next => action => {
  if (action.type && action.type.endsWith('ERROR')) {
    Alert.alert('Oups', 'Seems  like something is wrong', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  return next(action);
};

export default ErrorMiddleware;
