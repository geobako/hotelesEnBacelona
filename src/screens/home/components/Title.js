/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {questionEnums} from 'utils/helpers';

const Title = ({index, type}) => {
  return (
    <Text style={styles.title}>
      QUESTION TYPE {index + 1}: {questionEnums[type] || '-'}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});

export default Title;
