import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Gloabalstyle} from '../VIew/Styles/GlobalStyles';
import { Dimensions } from 'react-native';

const InputBox = ({title,onChangeText,value,secureTextEntry=false,keyboardType}) => {
  return (
    <View style={Gloabalstyle.TextinputStyle.normal}>
      <Text >{title}</Text>
      <TextInput
        style={{height:44,borderWidth:1,width:Dimensions.get('window').width/1.2}}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
export default InputBox;

const styles = StyleSheet.create({});
