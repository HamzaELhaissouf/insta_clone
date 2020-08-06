import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import moment from 'moment';

const Comment = ({comment}) => {
  return (
    <View>
      <View style={styles.comment}>
        <Avatar
          containerStyle={styles.avatar}
          rounded
          size={35}
          source={{uri: comment.user_avatar}}
        />
        <View style={styles.body}>
          <Text>
            <Text style={styles.userName}>{comment.user_name}</Text>

            {` ${comment.body}`}
          </Text>
        </View>
        <View style={styles.action}>
          <Icon
            type="ionicon"
            name="heart-outline"
            size={18}
            onPress={() => alert('liked')}
          />
        </View>
      </View>
      <View style={styles.info}>
        <Text style={{fontWeight: 'bold'}}>{`${moment(
          moment(comment.created_at).format('YYYYMMDD'),
          'YYYYMMDD',
        ).fromNow()} `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    padding: 6,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    maxWidth: '100%',
    overflow: 'scroll',
  },
  avatar: {
    marginRight: 6,
  },
  userName: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  body: {
    marginLeft: 6,
    lineHeight: 18,
    alignItems: 'center',
    maxWidth: '77%',
    alignSelf: 'center',
    overflow: 'scroll',
  },
  action: {
    textAlign: 'center',
    marginLeft: 12,
  },
  info: {
    width: '50%',
    fontWeight: 'bold',
    marginLeft: '15%',
    marginBottom: 20,
  },
});
export default Comment;
