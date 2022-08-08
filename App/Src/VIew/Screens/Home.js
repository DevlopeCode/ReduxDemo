import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gloabalstyle} from '../Styles/GlobalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {GetAllProduct, GetProductDetails} from '../../../Shared/Redux/action';

import {useEffect} from 'react';
import {useState} from 'react';
const Home = ({navigation}) => {
  const [product, setproduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProduct());
  }, []);

  const {productList,getdetals,user} = useSelector(state => ({
    productList: state?.getallproduct || [],
    getdetals:state?.productdetails||{},
    user:state?.setuser
  }));



  const BuyNowAction = (id)=>{
dispatch(GetProductDetails(id));
navigation.navigate('Details')
  }

  const Renderlist = ({item}) => {
    return (
      <View
        style={{
          height: 100,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{height: 80, width: 80, borderRadius: 10}}>
          <Image
            source={{uri: item.image}}
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
          />
        </View>
        <View style={{flex:1,alignItems:'flex-start'}}>
          <Text numberOfLines={1} style={{textTransform: 'capitalize'}}>
            {item.title}
          </Text>
          <Text>price: {item.price}</Text>
          <Button title='Buy Now' onPress={()=>BuyNowAction(item.id)}/>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex:1}}>
      <Text>{JSON.stringify(user)}</Text>
      <FlatList data={productList} renderItem={Renderlist} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
