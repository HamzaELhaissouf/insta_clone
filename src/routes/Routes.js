import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import Comments from '../screens/Comments';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Comments"
          component={Comments}
          options={{
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
