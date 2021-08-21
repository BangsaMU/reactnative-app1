import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import {CreateMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

import Home from '../../page/Home'

const MaterialBottom = CreateMaterialBottomTabNavigator();

export default function index() {
    return (
        <NavigationContainer>
            <createMaterialBottomTabNavigator>
                <MaterialBottom.Screen name='Home'></MaterialBottom.Screen>
            </createMaterialBottomTabNavigator>
        </NavigationContainer>
    )
}
