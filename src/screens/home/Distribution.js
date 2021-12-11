/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import Title from './components/Title';
import Table from './components/Table';

const Distribution = ({data, index, type}) => {
  return (
    <View style={styles.container}>
      <Title index={index} type={type} />
      <Table data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    with: '100%',
    marginBottom: 32,
  },
});

export default Distribution;
