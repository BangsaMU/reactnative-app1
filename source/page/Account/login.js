import React from 'react'
import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native'

import { cssCoreApp, cssStyles } from '../../style'

export default function login() {
    return (
        <View style={cssCoreApp.pageLogin}>
            <StatusBar style={cssCoreApp.headerApp} />
            <Text style={cssStyles.greetingText}>Slamat Pagi Home route2</Text>
            <Text >Login</Text>
        </View>
    )
}
