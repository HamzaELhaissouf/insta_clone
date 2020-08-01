import React from 'react';
import {Avatar} from 'react-native-elements';

const Story = ({story}) => {
  return (
    <Avatar
      rounded
      size="medium"
      source={{
        uri: story.user_avatar,
      }}
    />
  );
};

export default Story;
