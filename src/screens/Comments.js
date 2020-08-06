import React from 'react';
import {View, Text, ListView, FlatList, StyleSheet} from 'react-native';
import {commnets} from '../Data';
import Comment from '../compontents/feed/Comment';

const Comments = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.feed}
      keyExtractor={(item) => item.id.toString()}
      data={commnets}
      renderItem={({item}) => (
        <Comment key={item.id} keyExtractor comment={item} />
      )}
      ListFooterComponent={<View style={styles.footer} />}
    />
  );
};
const styles = StyleSheet.create({
  feed: {
    height: 'auto',
    padding: 6,
  },
  footer: {
    width: 15,
  },
});
export default Comments;
