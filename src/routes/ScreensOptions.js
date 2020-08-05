import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from '../assets/style';

export const HomeStackOptions = {
  title: 'Instagram',
  headerTitleStyle: styles.headerTitle,
  headerStyle: {
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
  headerRight: () => (
    <TouchableOpacity
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff">
      <View>
        <Icon
          name="paper-plane-outline"
          type="ionicon"
          size={32}
          style={{marginRight: 12}}
        />
      </View>
    </TouchableOpacity>
  ),
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff">
      <View>
        <Icon
          name="camera-outline"
          type="ionicon"
          size={36}
          style={{marginLeft: 12}}
        />
      </View>
    </TouchableOpacity>
  ),
};
