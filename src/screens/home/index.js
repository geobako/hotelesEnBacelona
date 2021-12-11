/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  View,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  selectDistributionsLoading,
  selectDistributionsData,
} from 'store/reviews/selectors';
import {getReviewDistributions} from 'store/reviews/actions';

import Distribution from './Distribution';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectDistributionsData);
  const loading = useSelector(selectDistributionsLoading);

  useEffect(() => {
    dispatch(getReviewDistributions());
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color="gray" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          {Object.keys(data).map((el, i) => {
            return (
              <Distribution type={el} index={i} key={el} data={data[el]} />
            );
          })}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  loaderContainer: {
    marginTop: 32,
  },
});

export default Home;
