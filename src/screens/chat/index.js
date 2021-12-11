/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import UserNameScreen from './UserNameScreen';

const Chat = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.container}>
        <UserNameScreen />
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
