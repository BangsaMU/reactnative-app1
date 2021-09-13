import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function index() {

    useEffect(() => {
        console.log('Open Splash')
    }, []);
    
    if (typeof (HermesInternal) === "undefined") {
        console.log("Hermes is not enabled");
    } else {
        console.log("Hermes is enabled");
    }

    return (
        <View>
            <Text>Splash </Text>
        </View>
    )
}
