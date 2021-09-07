import React, { useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import { useNavigation } from '@react-navigation/native'
// import { AuthContext } from "../../Contex";
import { AuthContext } from "../../../App2";

export default function index() {
    const { signOut } = React.useContext(AuthContext);
    // const navigation = useNavigation();
    // const MMKV = new MMKVStorage.Loader().initialize();
    // const [userToken, setUserToken] = useMMKVStorage("userToken", MMKV);

    useEffect(() => {

        console.log('Open Page Account')

        // if (userToken) {
        //     console.log('cek auth token', userToken)
        //     console.log('Hapus token')
        //     setUserToken();
        //     console.log('goto Login')
        //     navigation.navigate('Login')

        // } else {
        //     console.log('cek auth token', userToken)
        // }

    }, []);


    return (
        <View>
            <Text>Account</Text>
            <Button title="Sign out" onPress={signOut} />
        </View>
    )
}
