import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import { CreatePost } from '../pages/CreatePost';
import { Main } from '../pages/Main';

const Tab = createMaterialBottomTabNavigator();

export const Routes: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Main"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}
  >
    <Tab.Screen
      name="Home"
      component={Main}
      options={{
        tabBarIcon: ({ color }) => <Icon name="home" color={color} size={12} />,
      }}
    />
    <Tab.Screen name="Create" component={CreatePost} />
  </Tab.Navigator>
);
