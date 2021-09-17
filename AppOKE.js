import React, { useEffect, useState, useContext } from 'react';
import { Linking, Text, View, Image, Dimensions, StyleSheet, StatusBar, ScrollView } from 'react-native';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

import Routes from './source/config/routes'
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";

const { heigh, width } = Dimensions.get('window')

const MMKV = new MMKVStorage.Loader().initialize();
let allInstances = MMKV.getAllMMKVInstanceIDs();
let intializedInstances = MMKV.getCurrentMMKVInstanceIDs();
console.log('allInstances', allInstances);
console.log('intializedInstances', intializedInstances);

export const AuthContext = React.createContext();

console.log('cek render', 1)

//OneSignal Init Code
OneSignal.setLogLevel(6, 0);
OneSignal.setAppId("6e9ddca2-799e-4f52-aa85-b5e14114954e");
//END OneSignal Init Code

//Prompt for push on iOS
OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log("Prompt response:", response);
});


let externalUserId = '081519518186'; // You will supply the external user id to the OneSignal SDK

// Setting External User Id with Callback Available in SDK Version 3.9.3+
OneSignal.setExternalUserId(externalUserId, (results) => {
  // The results will contain push and email success statuses
  console.log('Results of setting external user id');
  console.log(results);

  // Push can be expected in almost every situation with a success status, but
  // as a pre-caution its good to verify it exists
  if (results.push && results.push.success) {
    console.log('Results of setting external user id push status:');
    console.log(results.push.success);
  }

  // Verify the email is set or check that the results have an email success status
  if (results.email && results.email.success) {
    console.log('Results of setting external user id email status:');
    console.log(results.email.success);
  }

  // Verify the number is set or check that the results have an sms success status
  if (results.sms && results.sms.success) {
    console.log('Results of setting external user id sms status:');
    console.log(results.sms.success);
  }
});



const Home = (props) => {

  console.log('cek render', 2)

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

  useEffect(async () => {
    const { userId } = await OneSignal.getDeviceState();
    console.log('Onesignal_player_ids', userId);
    const notificationObj = {
      contents: { en: "Message Body" },
      include_player_ids: [userId]
    };

    const jsonString = JSON.stringify(notificationObj);

    OneSignal.postNotification(jsonString, (success) => {
      console.log("Success:", success);
    }, (error) => {
      console.log("Error:", error);
    });


    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      notificationOpenedHandler(notification)
      console.log("OneSignal: notification opened:", notification);
    });

    function notificationOpenedHandler(data) {
      // const url = "infomediaku://Food";
      const url = data.notification.launchURL ? data.notification.launchURL : 'infomediaku://Home/Inbox';
      const supportedURL = "https://google.com";
      // Linking.openURL(data.notification.launchURL);
      console.log('notificationOpenedHandler', url)
      Linking.openURL(url);

    }

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
      console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
      let notification = notificationReceivedEvent.getNotification();
      console.log("notification: ", notification);
      const data = notification.additionalData
      console.log("additionalData: ", data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);

      if (notification.priority === 1) {
        const url = notification.launchURL ? notification.launchURL : 'infomediaku://Home/Landing';
        console.log('notificationOpenedHandler', url)
        Linking.openURL(url);
      }

    });

    console.log('cek render', 3)
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
        // type ['OTP', 'AUTH']
        let token = null;
        let object = await MMKV.getMapAsync("myobject");
        if (object == null) {
          object = { username: "samu", password: "1234" };
        }

        let prevState = object;
        console.log('load object user', object);
        console.log('signIn', data);

        if (data.username == object.username && data.password == object.password && data.type == 'AUTH') {

          console.log('AUTH Login OKE', data);
          let token = Math.round((new Date()).getTime() / 1000);
          // let myObject = { userToken: token.toString(), username: "samu", password: "1234" };

          let myObject = {
            ...prevState,
            userToken: token.toString(),
          };

          console.log('Update ', myObject);
          await MMKV.setMapAsync("myobject", myObject);

          dispatch({ type: 'SIGN_IN', userToken: token });

        }
        if (data.type == 'OTP') {

          console.log('OTP Login OKE', data);
          let token = Math.round((new Date()).getTime() / 1000);
          // let myObject = { userToken: token.toString(), username: "samu", password: "1234" };

          let myObject = {
            ...prevState,
            userToken: token.toString(),
          };

          console.log('Update ', myObject);
          await MMKV.setMapAsync("myobject", myObject);

          dispatch({ type: 'SIGN_IN', userToken: token });
        }
        else {
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