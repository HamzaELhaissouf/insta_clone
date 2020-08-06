import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import colors from '../../assets/colors';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Video from 'react-native-video';

const Post = ({post}) => {
  const navigation = useNavigation();
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
        {post.type === 'picture' ? (
          <Image
            style={{width: 500, height: 500}}
            source={{uri: post.image_url}}
          />
        ) : (
          <Video
            width="100%"
            resizeMode={'cover'}
            style={{
              width: '100%',
              height: 200,
            }}
            source={{uri: post.video_url}}
          />
        )}
      </View>
      {/* post hero end */}
      {/* {post actions start} */}
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff">
          <Icon
            name="heart-outline"
            type="ionicon"
            size={36}
            style={{marginLeft: 12}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff">
          <Icon
            name="chatbubble-outline"
            type="ionicon"
            size={32}
            style={{marginLeft: 12}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff">
          <Icon
            name="paper-plane-outline"
            type="ionicon"
            size={32}
            style={{marginLeft: 12}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff">
          <Icon
            name="bookmark-outline"
            type="ionicon"
            size={32}
            containerStyle={styles.bookmark}
          />
        </TouchableOpacity>
      </View>
      {/* {post actions end} */}
      {/* {post infos start} */}
      <View style={styles.infos}>
        <Text style={styles.likes}>{`${post.likes} likes`}</Text>
        <Text>
          <Text style={styles.likes}>{`${post.user_name}`}</Text>
          {` ${post.description}`}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
          <Text style={styles.comments}>View all 16 comments</Text>
        </TouchableOpacity>
      </View>
      {/* {post infos end} */}
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    textAlign: 'center',
  },
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
    width: '100%',
    height: 'auto',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 2,
    position: 'relative',
  },
  bookmark: {
    marginLeft: '63%',
  },
  infos: {
    paddingHorizontal: 18,
    justifyContent: 'space-between',
  },
  likes: {
    fontWeight: 'bold',
  },
  comments: {
    marginVertical: 3,
    color: colors.darkGrey,
  },
});

export default Post;
