import axios from 'axios';
import {API_URL} from 'config/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getReviewDistributionsRequest = async () => {
  return await axios.get(`${API_URL}/review-distribution`);
};

export const storeUserName = async value => {
  try {
    await AsyncStorage.setItem('username', value);
  } catch (e) {
    return null;
  }
};

export const getUserName = async () => {
  try {
    const value = await AsyncStorage.getItem('username');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};
