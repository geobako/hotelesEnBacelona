/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserName} from 'store/reviews/actions';
import {storeUserName} from 'services/review-distributions';

const UserNameScreen = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const onTextChange = t => setValue(t);

  const onConnect = async () => {
    if (value) {
      dispatch(setUserName(value));
      await storeUserName(value);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onTextChange}
        style={styles.input}
        placeholder="username"
      />

      <Button title="Connect" onPress={onConnect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    height: 32,
    borderColor: 'gray',
    marginBottom: 24,
  },
});

export default UserNameScreen;
