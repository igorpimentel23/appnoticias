import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView, StatusBar } from 'react-native';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CreatePost } from '../pages/CreatePost';
import HomeNavigator from './HomeNavigator';

const Tab = createMaterialBottomTabNavigator();

export const Routes: React.FC = () => (
  <SafeAreaView style={{ paddingTop: StatusBar.currentHeight ?? 0, flex: 1 }}>
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="home"
              size={focused ? scale(21) : scale(15)}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePost}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="plus-circle"
              size={focused ? scale(21) : scale(15)}
              color={color}
            />
          ),
          title: 'Criar',
        }}
      />
    </Tab.Navigator>
  </SafeAreaView>
);
