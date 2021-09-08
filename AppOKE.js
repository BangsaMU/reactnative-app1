import React, { useEffect, useState, useContext } from 'react';
import { Text, View, Image, Dimensions, StyleSheet, StatusBar, ScrollView } from 'react-native';

import Routes from './source/config/routes'
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";

const { heigh, width } = Dimensions.get('window')

const MMKV = new MMKVStorage.Loader().initialize();
let allInstances = MMKV.getAllMMKVInstanceIDs();
let intializedInstances = MMKV.getCurrentMMKVInstanceIDs();
console.log('allInstances', allInstances);
console.log('intializedInstances', intializedInstances);

export const AuthContext = React.createContext();

const Home = (navigation) => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {

      const unixTime = Math.floor(Date.now() / 1000);
      const unixTime2 = Math.round((new Date()).getTime() / 1000);
      console.log(prevState, '<== state ==>', action)
      switch (action.type) {
        case 'RESTORE_TOKEN':
          {
            console.log(unixTime, 'Action ==>', action.type)
            return {
              ...prevState,
              userToken: action.userToken,
              isLoading: false,
            }
          };
        case 'SIGN_IN':
          {
            console.log(unixTime, 'Action ==>', action.type, unixTime2, action.userToken)
            return {
              ...prevState,
              isSignout: false,
              userToken: action.userToken,
            }
          };
        case 'SIGN_OUT':
          {
            console.log(unixTime, 'Action ==>', action.type)
            return {
              ...prevState,
              isSignout: true,
              userToken: null,
            }
          };
      }
    }
    ,
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {

      try {
        // await MMKV.setStringAsync("string", "string1");
        // let string = await MMKV.getStringAsync("string");
        // console.log('load string', string);
        let object = await MMKV.getMapAsync("myobject");
        console.log('load object AppOKE', object);
        let userToken = object == null ? null : object.userToken;
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');

        // After restoring token, we may need to validate it in production apps

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.

        console.log('AppOKE useEffect userToken:', userToken);
        dispatch({ type: 'RESTORE_TOKEN', userToken: userToken });

      } catch (e) {
        let userToken = null;
        console.err('gagal restore token', e)
        // Restoring token failed
        dispatch({ type: 'RESTORE_TOKEN', userToken: userToken });
      }


      // dispatch({ type: 'RESTORE_TOKEN', userToken: userToken });
    };
    // let object = await MMKV.getMapAsync("myobject");
    // console.log('load object', object);
    // userToken = object.token
    bootstrapAsync();
  }, []);



  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        let token = null;
        let object = await MMKV.getMapAsync("myobject");
        if (object == null) {
          object = { username: "samu", password: "1234" };
        }
        
        let prevState = object;
        console.log('load object user', object);
        console.log('signIn', data);

        if (data.username == object.username && data.password == object.password) {

          console.log('Login OKE', data);
          let token = Math.round((new Date()).getTime() / 1000);
          // let myObject = { userToken: token.toString(), username: "samu", password: "1234" };

          let myObject = {
            ...prevState,
            userToken: token.toString(),
          };

          console.log('Update ', myObject);
          await MMKV.setMapAsync("myobject", myObject);

          dispatch({ type: 'SIGN_IN', userToken: token });

        } else {
          console.warn("Auth salah", data)
          dispatch({ type: 'SIGN_IN', userToken: token });

        }
      },
      signOut: async (data) => {

        let token = null;
        let object = await MMKV.getMapAsync("myobject");
        let prevState = object;
        console.log('load object user', object);
        // console.log('signOut', data);

        // let myobject = await MMKV.getMapAsync("myobject");
        // let prevState = myobject;

        // WITH CALLBACK
        // let myObject = { userToken: null, username: "samu", password: "1234" };
        let myObject = {
          ...prevState,
          userToken: token,
        };

        console.log('Update ', myObject);
        await MMKV.setMapAsync("myobject", myObject);


        let object2 = await MMKV.getMapAsync("myobject");
        console.log('load object user signOut', object2);

        dispatch({ type: 'SIGN_OUT' })

      },
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        let myobject = await MMKV.getMapAsync("myobject");
        let prevState = myobject;

        let mytoken = Math.round((new Date()).getTime() / 1000);
        // let myObject = { userToken: token.toString(), username: "samu", password: "1234" };

        let object = {
          ...prevState,
          userToken: mytoken,
          username: data.username,
          password: data.password
        };

        await MMKV.setMapAsync("myobject", object);

        dispatch({ type: 'SIGN_IN', userToken: mytoken });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <Routes state={state} dispatch={dispatch} />
    </AuthContext.Provider>
  );
}


export default Home;