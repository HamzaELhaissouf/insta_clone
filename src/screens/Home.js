import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StoriesHeader from '../compontents/home/StoriesHeader';
import Feed from '../compontents/feed/Feed';
import Header from '../compontents/home/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <StoriesHeader />
      <Feed />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
