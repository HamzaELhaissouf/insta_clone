import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import colors from '../../assets/colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <Input
        textAlign="center"
        textAlignVertical="center"
        inputStyle={styles.search}
        placeholder="Search"
        inputContainerStyle={styles.inputContainer}
        Icon={<Icon name="search" type="inonicon" size={24} color="black" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    width: '100%',
  },
  search: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.grey,
    elevation: 0,
    borderRadius: 12,
    paddingVertical: 1,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
});
export default Header;
