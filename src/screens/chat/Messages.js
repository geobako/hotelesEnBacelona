/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {platform} from 'config/constants';
import MessageInput from './components/MessageInput';
import {selectMessages} from 'store/reviews/selectors';
import {useSelector} from 'react-redux';

const Messages = ({route}) => {
  const dispatch = useDispatch();

  const messages = useSelector(selectMessages);

  const renderItem = ({item}) => {
    return <Text>{item}</Text>;
  };

  const Tag = platform === 'android' ? View : KeyboardAvoidingView;

  return (
    <View style={styles.screen}>
      <Tag
        keyboardVerticalOffset={platform === 'android' ? 0 : 130}
        behavior="padding"
        style={styles.screen}>
        <View style={styles.messageList}>
          <FlatList
            contentContainerStyle={styles.messageList}
            data={messages}
            keyExtractor={(item, i) => i.toString()}
            renderItem={renderItem}
          />
        </View>
        <MessageInput />
      </Tag>
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
