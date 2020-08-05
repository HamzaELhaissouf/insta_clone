import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../compontents/search/Header';
import Result from '../compontents/search/Result';
import colors from '../assets/colors';

const Search = () => {
  return (
    <View styles={styles.search}>
      <Header />
      <Result />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.white,
  },
});
export default Search;
