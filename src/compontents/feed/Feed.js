import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {posts} from '../../Data';
import Post from './Post';

const Feed = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.feed}
      keyExtractor={(item) => item.id.toString()}
      data={posts}
      renderItem={({item}) => <Post key={item.id} keyExtractor post={item} />}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};
const styles = StyleSheet.create({
  feed: {
    height: 'auto',
    padding: 5,
  },
  footer: {
    width: 15,
  },
});
export default Feed;
