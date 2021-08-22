import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, ImageBackgroundComponent } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

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


import { Home, Activity, Inbox, Payment, Account, Food } from '../../page' //kalo ada banyak pagenya pakek ini

const MaterialBottom = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={ButtonTabs}
                options={{
                    title: null,
                    // headerShadowVisible: false,
                    // headerTransparent: true,
                    headerShown:false
                }}
            />
            <Stack.Screen name="Food" component={Food} />
            {/* <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
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
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer >
    )
}
