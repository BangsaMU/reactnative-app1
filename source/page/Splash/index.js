import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function index() {

    useEffect(() => {
        console.log('Open Splash')
    }, []);

    return (
        <View>
            <Text>Splash</Text>
        </View>
    )
}
