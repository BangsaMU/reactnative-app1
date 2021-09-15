import React, { useEffect, useReducer } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, ImageBackgroundComponent } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";

import IconHome from '../../assets/icon/nav-home.jpg'
import IconHomeActive from '../../assets/icon/nav-home-active.jpg'
import IconActivity from '../../assets/icon/nav-activity.jpg'
import IconActivityActive from '../../assets/icon/nav-activity-active.jpg'
import IconInbox from '../../assets/icon/nav-inbox.jpg'
import IconInboxActive from '../../assets/icon/nav-inbox-active.jpg'
import IconPayment from '../../assets/icon/nav-payment.jpg'
import IconPaymentActive from '../../assets/icon/nav-payment-active.jpg'
import IconAccount from '../../assets/icon/nav-account.jpg'
import IconAccountActive from '../../assets/icon/nav-account-active.jpg'

// import { AuthContext, state, dispatch } from "../../../AppOKE";
import { Home, Activity, Inbox, Payment, Account, Food, Login, CekOtp, Auth, Splash as SplashScreen, FormLogin } from '../../page' //kalo ada banyak pagenya pakek ini

const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MMKV = new MMKVStorage.Loader().initialize();
// const userToken = false;

const HomeStack = (props) => {
    const state = props.state;
    const dispatch = () => props.dispatch;

    /*
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
    */

    console.log('get props HomeStack state', state)
    console.log('get props HomeStack dispatch', dispatch)
    // const [user, setUser] = useMMKVStorage("user", MMKV);
    // const [userToken, setuserToken] = useMMKVStorage("userToken", MMKV);
    // const state = props.state;
    // const [state, dispatch] = React.useReducer(
    //     (prevState, action) => {
    //         switch (action.type) {
    //             case 'RESTORE_TOKEN':
    //                 return {
    //                     ...prevState,
    //                     userToken: action.token,
    //                     isLoading: false,
    //                 };
    //             case 'SIGN_IN':
    //                 return {
    //                     ...prevState,
    //                     isSignout: false,
    //                     userToken: action.token,
    //                 };
    //             case 'SIGN_OUT':
    //                 return {
    //                     ...prevState,
    //                     isSignout: true,
    //                     userToken: null,
    //                 };
    //         }
    //     },
    //     {
    //         isLoading: true,
    //         isSignout: false,
    //         userToken: null,
    //     }
    // );

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        console.log('roters -->')

        const bootstrapAsync = async () => {

            try {
                // await MMKV.setStringAsync("string", "string1");
                // let string = await MMKV.getStringAsync("string");
                // console.log('load string', string);
                let object = await MMKV.getMapAsync("myobject");
                console.log('load object ROUTES', object);
                let userToken = object !=null ? object.userToken : null;
                // Restore token stored in `SecureStore` or any other encrypted storage
                // userToken = await SecureStore.getItemAsync('userToken');

                // After restoring token, we may need to validate it in production apps

                // This will switch to the App screen or Auth screen and this loading
                // screen will be unmounted and thrown away.

                // console.log('cek token', userToken)
                // console.log('cek user', user)
                // console.log('cek state', state)
                // dispatch({ type: 'RESTORE_TOKEN', token: userToken });

                console.log('ROUTES useEffect userToken:', userToken);
                dispatch({ type: 'RESTORE_TOKEN', userToken: userToken });

            } catch (e) {
                let userToken = null;
                console.err('gagal restore token', e)
                // Restoring token failed
                dispatch({ type: 'RESTORE_TOKEN', userToken: userToken });
            }


            // dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };
        // let object = await MMKV.getMapAsync("myobject");
        // console.log('load object', object);
        // userToken = object.token
        bootstrapAsync();
    }, []);

    return (
        <Stack.Navigator
        // initialRouteName='Auth'
        >

            {state.isLoading ? (
                <Stack.Screen name="Splash" component={SplashScreen}
                    options={{
                        title: null,
                        headerShown: false
                    }}
                />
            ) : state.userToken == null ? (
                <>
                    {/* < Stack.Screen name="Auth" component={Auth}
                        options={{
                            title: null,
                            headerShown: false
                        }}
                    /> */}

                    <Stack.Screen name="Login" component={FormLogin}
                        options={{
                            title: null,
                            headerShown: false
                        }}
                    />

                    <Stack.Screen name="CekOtp" component={CekOtp}
                        options={{
                            title: 'Ganti no HP',
                            headerShown: true
                        }} />

                </>
            ) : (
                <>
                    <Stack.Screen name="Home" component={ButtonTabs}
                        options={{
                            title: null,
                            // headerShadowVisible: false,
                            // headerTransparent: true,
                            headerShown: false
                        }}
                    />

                    <Stack.Screen name="Food" component={Food} />
                </>
            )}

        </Stack.Navigator>

    )
}

const ButtonTabs = () => {
    return (
        <MaterialBottom.Navigator
            shifting={false}
            initialRouteName='Home'
            activeColor='#09AB54'
            inactiveColor='#676767'
            barStyle={{ backgroundColor: 'white', borderWidth: .3, borderColor: 'lightgrey' }}
        >
            <MaterialBottom.Screen name='Landing' component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color }) => (

                        <View style={styles.wrapperBottomMenu}>
                            {
                                focused ?
                                    <Image source={IconHomeActive} style={styles.iconBottomMenu} />
                                    :
                                    <Image source={IconHome} style={styles.iconBottomMenu} />
                            }
                        </View>
                    )
                }}
            ></MaterialBottom.Screen>
            <MaterialBottom.Screen name='Activity' component={Activity}
                options={{
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({ focused, color }) => (

                        <View style={styles.wrapperBottomMenu}>
                            {
                                focused ?
                                    <Image source={IconActivityActive} style={styles.iconBottomMenu} />
                                    :
                                    <Image source={IconActivity} style={styles.iconBottomMenu} />
                            }
                        </View>
                    )
                }}
            ></MaterialBottom.Screen>
            <MaterialBottom.Screen name='Inbox' component={Inbox}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: ({ focused, color }) => (

                        <View style={styles.wrapperBottomMenu}>
                            {
                                focused ?
                                    <Image source={IconInboxActive} style={styles.iconBottomMenu} />
                                    :
                                    <Image source={IconInbox} style={styles.iconBottomMenu} />
                            }
                        </View>
                    ),
                    tabBarBadge: 9
                }}
            ></MaterialBottom.Screen>
            <MaterialBottom.Screen name='Payment' component={Payment}
                options={{
                    tabBarLabel: 'Payment',
                    tabBarIcon: ({ focused, color }) => (

                        <View style={styles.wrapperBottomMenu}>
                            {
                                focused ?
                                    <Image source={IconPaymentActive} style={styles.iconBottomMenu} />
                                    :
                                    <Image source={IconPayment} style={styles.iconBottomMenu} />
                            }
                        </View>
                    )
                }}></MaterialBottom.Screen>
            <MaterialBottom.Screen name='Account' component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ focused, color }) => (

                        <View style={styles.wrapperBottomMenu}>
                            {
                                focused ?
                                    <Image source={IconAccountActive} style={styles.iconBottomMenu} />
                                    :
                                    <Image source={IconAccount} style={styles.iconBottomMenu} />
                            }
                        </View>
                    )
                }}></MaterialBottom.Screen>
        </MaterialBottom.Navigator>

    )
}

const styles = StyleSheet.create({
    wrapperBottomMenu: {
        marginTop: -4
    },
    iconBottomMenu: {
        width: 30,
        height: 30
    }
})

export default function index(props) {
    console.log('get props routes', props)
    return (
        // <AuthContext.Provider value={authContext}>
        <NavigationContainer>
            <HomeStack state={props.state} dispatch={props.dispatch} />
        </NavigationContainer >
        // </AuthContext.Provider>
    )
}
