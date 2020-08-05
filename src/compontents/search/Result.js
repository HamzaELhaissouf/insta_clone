import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import colors from '../../assets/colors';
import {randomPosts} from '../../Data';
import VideoResult from './VideoResult';

const Result = () => {
  return (
    <View>
      <View style={styles.feed}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.result}
          keyExtractor={(item) => item.id.toString()}
          data={randomPosts}
          renderItem={({item}) =>
            item.type === 'image' ? null : (
              <VideoResult video={item.video_url} />
            )
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  feed: {
    padding: 6,
    backgroundColor: colors.white,
    height: '100%',
  },
  result: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
export default Result;
