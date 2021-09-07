import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import { useNavigation } from '@react-navigation/native'

export default function auth() {
    const navigation = useNavigation();
    const MMKV = new MMKVStorage.Loader().initialize();
    const [userToken, setUserToken] = useMMKVStorage("userToken", MMKV);
    // setUserToken('');

    console.log('Halaman Auth dengan token:', userToken)
    useEffect(() => {
        console.log('cek auth token', userToken)
        if (userToken) {
            console.log('goto Home')
            navigation.navigate('Home')
        } else {
            navigation.navigate('Login')
        }
    }, []);
 
    return (
        <View>
            <Text>Cek Auth</Text>
        </View>
    )
}
