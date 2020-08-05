import React from 'react';
import {Avatar} from 'react-native-elements';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import colors from '../../assets/colors';

const Story = ({story}) => {
  return (
    <View onclick={() => alert('hello')} style={styles.story}>
      <Avatar
        onPress={() => alert('hello')}
        containerStyle={styles.storyAvatar}
        rounded
        size={72}
        source={{
          uri: story.user_avatar,
        }}
      />
      <Text style={styles.storyOwner}>
        {story.user_name
          ? story.user_name.length > 7
            ? story.user_name.substring(0, 7 - 3) + '...'
            : story.user_name
          : ''}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    margin: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  storyAvatar: {
    borderWidth: 3,
    padding: 2,
    borderColor: colors.pink,
  },
  storyOwner: {},
});

export default Story;
