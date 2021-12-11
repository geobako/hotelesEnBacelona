/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import UserNameScreen from './UserNameScreen';
import {selectUserName} from 'store/reviews/selectors';
import {useSelector} from 'react-redux';
import Messages from './Messages';

const Chat = () => {
  const username = useSelector(selectUserName);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        {username ? <Messages /> : <UserNameScreen />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
});

export default Chat;
