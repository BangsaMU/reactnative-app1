import React from 'react'
import { View, Text } from 'react-native'

import DeviceInfo from 'react-native-device-info';
const brand = DeviceInfo.getBrand();
const appName = DeviceInfo.getApplicationName();
const deviceId = DeviceInfo.getDeviceId();
let uniqueId = DeviceInfo.getUniqueId();
const type = DeviceInfo.getDeviceType();

export default function index() {
    console.log('DeviceInfo', brand, appName, deviceId, uniqueId, type)
    return (
        <View>
            <Text>Activity {brand} </Text>
        </View>
    )
}
