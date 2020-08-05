import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {stories} from '../../Data';
import Story from './Story';
import {Avatar, Accessory} from 'react-native-elements';
import colors from '../../assets/colors';
const StoriesHeader = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}>
        <View>
          <Avatar
            onPress={() => alert('hello')}
            containerStyle={styles.storyAvatar}
            source={{
              uri:
                'https://instagram.fcmn2-2.fna.fbcdn.net/v/t51.2885-19/s150x150/116123504_3284404664930976_8872934042652598123_n.jpg?_nc_ht=instagram.fcmn2-2.fna.fbcdn.net&_nc_ohc=Ijr9kUvwN34AX-34G4b&oh=054b42b49f121b7983b4e88493e1659d&oe=5F5201E5',
            }}
            rounded
            size={72}>
            <Accessory
              size={23}
              name="add-outline"
              type="ionicon"
              color="white"
              containerStyle={styles.icon}
            />
          </Avatar>
        </View>
        {stories.map((story) => (
          <Story story={story} key={story.id} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGrey,
    padding: 0,
  },

  user: {
    flex: 1,
  },
  story: {
    margin: 5,
  },
  storyAvatar: {
    marginRight: 12,
    marginBottom: 12,
    marginLeft: 6,
  },
  container: {
    borderColor: colors.grey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  icon: {
    borderRadius: 100,
    backgroundColor: colors.blue,
  },
});

export default StoriesHeader;
