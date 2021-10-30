import React, { ReactElement } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Post } from '../pages/Post';

const Stack = createStackNavigator();

const HomeNavigator = (): ReactElement => {
  return (
    <Stack.Navigator initialRouteName="HomeNavigator">
      <Stack.Screen
        name="HomeNavigator"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Post"
        component={Post}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
