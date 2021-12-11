/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import MessageInput from './components/MessageInput';
import {selectMessages} from 'store/reviews/selectors';
import {useSelector} from 'react-redux';

const Messages = ({route}) => {
  const dispatch = useDispatch();

  const messages = useSelector(selectMessages);

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={styles.messageList}>
          {messages.map((el, i) => (
            <Text key={i.toString()}>{el}</Text>
          ))}
        </View>
        <MessageInput />
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  messageList: {
    flex: 1,
  },
});

export default Messages;
