/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Row = ({leftText, rightText}) => {
  return (
    <View style={styles.innerView}>
      <View style={[styles.halfRow, styles.rightBorder]}>
        <Text>{leftText && leftText !== 'null' ? leftText : 'N / A'}</Text>
      </View>
      <View style={styles.halfRow}>
        <Text>{rightText || rightText === 0 ? rightText : '-'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },

  halfRow: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: 'lightgray',
    marginRight: 8,
  },
});

export default Row;
