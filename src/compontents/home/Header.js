import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff">
        <Icon
          name="camera-outline"
          type="ionicon"
          size={36}
          style={{marginLeft: 12}}
        />
      </TouchableOpacity>
      <Text style={styles.logo}>Instagram</Text>

      <TouchableOpacity
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff">
        <Icon
          name="paper-plane-outline"
          type="ionicon"
          size={32}
          style={{marginRight: 12}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontSize: 26,
    fontWeight: '300',
  },
});
export default Header;
