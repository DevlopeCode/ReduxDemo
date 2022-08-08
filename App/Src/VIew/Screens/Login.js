import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { Gloabalstyle } from '../Styles/GlobalStyles'
import InputBox from '../../Component/InputBox'
import { useState } from 'react'
import { useEffect } from 'react'
import { getItem } from '../../../Shared/Utility/Asynkstore'
import { useDispatch } from 'react-redux'
import { CreateUser } from '../../../Shared/Redux/action'
const Login = ({navigation}) => {
  const dispatch = useDispatch()
const [UserData, setUserData] = useState({});
const [usename, setusename] = useState('');
const [password, setpassword] = useState('');
const checkdata = async() =>{
  const data =await  getItem('UserProfile');
  setUserData(JSON.parse(data))
}

useEffect(() => {
checkdata()
}, [])

const LoginUser = () =>{

  if (usename===UserData.username) {
     if (UserData.password===password) {
       dispatch(CreateUser(UserData))
    navigation.navigate("Home");
     } else {
      Alert.alert("invalid Password")
     }
  } else {
    console.log(UserData.username , usename)
    Alert.alert("invalid username"  );
  }
}

  return (
    <SafeAreaView style={Gloabalstyle.LAYOUT.SafeArea}>
      <InputBox title="username" onChangeText={(text)=>setusename(text)} />
      <InputBox title="password" onChangeText={(text)=>setpassword(text)}/>
    
      <Button title='Login' onPress={()=>LoginUser()} />
      <Button title='SignUp' onPress={()=>navigation.navigate("SignUp")} />
    </SafeAreaView>
  )
}

export default Login 

const styles = StyleSheet.create({})