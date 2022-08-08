import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../VIew/Screens';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen component={SCREENS.Login} name="Login" />
      <Stack.Screen component={SCREENS.SignUp} name="SignUp" />
      <Stack.Screen component={SCREENS.Home} name="Home" />
      <Stack.Screen component={SCREENS.Details} name="Details" />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
