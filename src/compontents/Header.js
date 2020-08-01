import React from 'react';
import {View, ScrollView} from 'react-native';
import {stories} from '../Data';
import Story from './Story';
const Header = () => {
  return (
    <ScrollView>
      {stories.map((story) => (
        <Story story={story} key={story.id} />
      ))}
    </ScrollView>
  );
};

export default Header;
