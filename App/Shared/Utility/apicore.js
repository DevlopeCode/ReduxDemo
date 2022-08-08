import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { Alert } from 'react-native';

const isNetAvailable = async () => {
  let isNetConnected = false;
  await NetInfo.fetch().then(state => {
    try {
      if (state.isConnected) {
        isNetConnected = true;
      } else {
        Alert.alert('Check COnnection');
      }
    } catch (err) {}
  });
  return isNetConnected;
};
const API = {
  GET: async (url, params) => {
    const check = await isNetAvailable();
    return (await check) == true
      ? axios
          .get(url, params, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(res => res)
          .catch(res => console.log(res))
      : console.log('PLese Check your internet Connection');
  },
  GETToken: async (url, params, token) => {
    const check = await isNetAvailable();
    return (await check) == true
      ? axios
          .post(url, params, {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer  ${token ? token : params}`,
            },
          })
          .then(res => res)
          .catch(error =>    {console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)})
      : console.log('PLese Check your internet Connection');
  },
};

export default API;