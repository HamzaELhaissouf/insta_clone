import React from 'react';
import {View, ScrollView} from 'react-native';
import {stories} from '../Data';
import Story from './Story';
const Header = () => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={{width: `${100 * 10}%`}}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      decelerationRate="fast"
      pagingEnabled>
      {stories.map((story) => (
        <Story story={story} key={story.id} />
      ))}
    </ScrollView>
  );
};

export default Header;
