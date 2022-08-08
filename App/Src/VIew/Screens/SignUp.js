import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { Gloabalstyle } from '../Styles/GlobalStyles'
import InputBox from '../../Component/InputBox'
import { useState } from 'react'
import { getItem, setItem } from '../../../Shared/Utility/Asynkstore'
const SignUp = ({navigation}) => {
const [Username, setUsername] = useState('');
const [Password, setPassword] = useState('');
const [Name, setName] = useState('');
const [MobileNo, setMobileNo] = useState('');



const setData = () =>{
   const userdata = {
    username:Username,
    password:Password,
    name:Name,
    mobile:MobileNo
   };
   setItem("UserProfile",JSON.stringify(userdata));
   navigation.navigate("Login")
}
  return (
    <SafeAreaView style={Gloabalstyle.LAYOUT.SafeArea}>
      <InputBox title="username" onChangeText={(text)=>setUsername(text)}/>
      <InputBox title="password" onChangeText={(text)=>setPassword(text)}/>
      <InputBox title="name" onChangeText={(text)=>setName(text)}/>
      <InputBox title="mobile" onChangeText={(text)=>setMobileNo(text)}/>
     <Button title='SignUP' onPress={()=>setData()}/>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})