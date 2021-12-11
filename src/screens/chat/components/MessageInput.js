import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import useSockets from 'sockets/useSocket';

const MessageInput = () => {
  const ws = useSockets();

  const [value, setValue] = useState('');
  const onChange = text => {
    setValue(text);
  };

  const onMessage = () => {
    if (ws) {
      ws.send(value);
      setValue('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        value={value}
        allowFontScaling={false}
        placeholder="Add message"
        style={styles.input}
      />
      <TouchableOpacity activeOpacity={0.7} onPress={onMessage}>
        <View style={styles.btnContainer}>
          <Text>Send</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
    paddingLeft: 36,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },

  input: {
    paddingVertical: 10,
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: '#354069',
  },
  btnContainer: {
    padding: 8,
    paddingRight: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MessageInput;
