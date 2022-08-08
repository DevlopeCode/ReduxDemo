import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './StackNav';
import {store} from '../../Shared/Redux/store';
const Navigator = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
