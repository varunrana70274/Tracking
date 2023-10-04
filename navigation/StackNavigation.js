/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from '../components/Screen/BottomTabNavigator';
import Login from '../components/Screen/Login';

export default function StackNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomNavigation" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
