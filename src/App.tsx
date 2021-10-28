import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar, SafeAreaView } from 'react-native';

import { Routes } from './routes';

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#694fad' }}>
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#694fad"
        translucent
      />

      <View style={{ flex: 1, backgroundColor: '#694fad' }}>
        <Routes />
      </View>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
