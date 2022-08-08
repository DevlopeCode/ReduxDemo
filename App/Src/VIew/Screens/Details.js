import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
const Details = () => {
  const {getdetals} = useSelector(state => ({
    getdetals: state?.productdetails,
  }));

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Image
          source={{uri: getdetals.image}}
          style={{height: '100%', width: '100%', resizeMode: 'contain'}}
        />
      </View>
      <View style={{flex: 2}}>
        <Text>Product Name {getdetals.title}</Text>
        <Text>Product Price {getdetals.price}</Text>
        <Text> {getdetals.description}</Text>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
