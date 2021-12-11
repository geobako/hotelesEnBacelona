/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Row from './Row';

const Table = ({data}) => {
  return (
    <View style={styles.container}>
      <Row leftText="Response Value" rightText="Frequecy" />
      {Object.keys(data).map(el => (
        <Row leftText={el} key={el} rightText={data[el]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'lightgray',
  },

  title: {
    fontWeight: 'bold',
  },
});

export default Table;
