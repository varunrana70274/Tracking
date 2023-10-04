/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
