import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';
const VideoResult = ({video}) => {
  console.log(video);
  return (
    <View>
      <Video style={styles.video} source={{uri: video}} />
    </View>
  );
};

const styles = new StyleSheet.create({
  video: {
    height: 100,
    width: 100,
  },
});

export default VideoResult;
