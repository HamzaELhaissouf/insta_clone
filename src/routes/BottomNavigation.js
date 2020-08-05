import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, Avatar} from 'react-native-elements';
import {Home, Search, Activity, Profile} from '../screens';
import colors from '../assets/colors';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => (
  <Tab.Navigator
    initialRouteName="Search"
    tabBarOptions={{
      keyboardHidesTabBar: true,
      activeTintColor: colors.grey3,
      inactiveTintColor: '#000',
      showLabel: false,
      showIcon: true,
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused, tintcolor}) => (
          <Icon type="ionicon" name={focused ? 'home' : 'home-outline'} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({focused, tintcolor}) => (
          <Icon type="ionicon" name={focused ? 'search' : 'search-outline'} />
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={Home}
      options={{
        tabBarIcon: ({focused, tintcolor}) => (
          <Icon
            type="ionicon"
            size={42}
            name="add-circle-outline"
            onPress={() => alert('hey')}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Activity"
      component={Activity}
      options={{
        tabBarIcon: ({focused, tintcolor}) => (
          <Icon type="ionicon" name={focused ? 'heart' : 'heart-outline'} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({focused, tintcolor}) => (
          <Avatar
            source={{
              uri:
                'https://instagram.fcmn2-2.fna.fbcdn.net/v/t51.2885-19/s150x150/116123504_3284404664930976_8872934042652598123_n.jpg?_nc_ht=instagram.fcmn2-2.fna.fbcdn.net&_nc_ohc=Ijr9kUvwN34AX-34G4b&oh=054b42b49f121b7983b4e88493e1659d&oe=5F5201E5',
            }}
            containerStyle={focused ? {borderWidth: 1, padding: 2} : null}
            rounded
            size={32}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomNavigation;
