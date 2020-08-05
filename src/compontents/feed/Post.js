import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import colors from '../../assets/colors';

const Post = ({post}) => {
  return (
    <View style={styles.post}>
      {/* post header start  */}
      <View style={styles.postHeader}>
        <View style={styles.postInfo}>
          <Avatar
            onPress={() => alert('hello')}
            containerStyle={styles.storyAvatar}
            rounded
            size={54}
            source={{
              uri: post.user_avatar,
            }}
          />
          <View>
            <Text style={styles.userName}>{post.user_name}</Text>
            <Text>{post.country + ',' + post.city}</Text>
          </View>
        </View>
        <Icon type="ionicon" name="ellipsis-horizontal" />
      </View>
      {/* post header end  */}
      {/* post hero start */}
      <View style={styles.postHero}>
        <Image
          style={{width: 500, height: 500}}
          source={{uri: post.image_url}}
        />
      </View>
      {/* post hero end */}
    </View>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 6,
  },
  storyAvatar: {
    borderWidth: 3,

    padding: 2,
    borderColor: colors.grey,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postHero: {
    width: 'auto',
    height: 'auto',
  },
});

export default Post;
