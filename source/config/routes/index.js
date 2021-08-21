import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'


// import Home from '../../page/Home'
import {Home,Activity} from '../../page'

const MaterialBottom = createMaterialBottomTabNavigator();


export default function index(props) {
    return (
        <NavigationContainer>
            <MaterialBottom.Navigator>
                <MaterialBottom.Screen name='Home' component={Home}></MaterialBottom.Screen>
                <MaterialBottom.Screen name='Activity' component={Activity}></MaterialBottom.Screen>
            </MaterialBottom.Navigator>
        </NavigationContainer>
    )
}
