import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {posts} from '../../Data';
import Post from './Post';
import colors from '../../assets/colors';

const Feed = () => {
  return (
    <View style={styles.feed}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: 'auto', marginBottom: 25}}
        keyExtractor={(item) => item.id.toString()}
        data={posts}
        renderItem={({item}) => <Post key={item.id} keyExtractor post={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  feed: {
    padding: 6,
    backgroundColor: colors.white,
    height: '100%',
  },
});
export default Feed;
