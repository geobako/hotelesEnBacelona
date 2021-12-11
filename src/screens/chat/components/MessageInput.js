import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import useSockets from 'sockets/useSocket';

const MessageInput = ({jobId, id}) => {
  const isSending = false;

  const ws = useSockets();

  const [value, setValue] = useState('');
  const onChange = text => {
    if (isSending) {
      return;
    }
    setValue(text);
  };

  useEffect(() => {
    if (!isSending) {
      setValue('');
    }
  }, [isSending]);

  const onMessage = () => {
    if (ws) {
      ws.send('hello chicos');
    }
    // dispatch(addChecklistComment({jobId, id, mentions: [], text: value}));
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
        <View style={styles.iconContainer}>
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
  opacity: {
    opacity: 0.5,
  },
  input: {
    paddingVertical: 10,
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: '#354069',
  },
  iconContainer: {
    padding: 8,
    paddingRight: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MessageInput;
