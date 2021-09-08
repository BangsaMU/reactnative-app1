import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native'
import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import { debounce } from "lodash";

import { cssCoreApp, cssStyles, statusBar, cssLogin } from '../../style'

import { AuthContext } from "../../../AppOKE";

const MMKV = new MMKVStorage.Loader().initialize();
export default function cekOtp(props) {


    let username = 'samu';
    let password = '1234'
    const { signIn } = useContext(AuthContext);


    const OTP = 12345
    const [user, setUser] = useMMKVStorage("user", MMKV);
    const [userToken, setUserToken] = useMMKVStorage("userToken", MMKV);

    const navigation = useNavigation();
    const [displaySosmed, setDisplaySosmed] = useState('none');
    const [otp, setotp] = useState('');
    const [actionButton, setActionButton] = useState('none');
    const [actionButtonLabel, setActionButtonLabel] = useState('');

    const onChangeText = (Iotp) => {
        let newIotp = '';
        let numbers = '0123456789';

        console.log('Iotp', Iotp);
        console.log('newIotp', newIotp);
        console.log('!isNaN(Iotp)', !isNaN(Iotp));
        if (!isNaN(Iotp) == false) {
            console.log(1);
            setotp(otp)
            Iotp = otp
        } else {
            console.log(2);
            setotp(Iotp)
        }



        if (Iotp.length == 5) {
            setActionButton('flex')
            setActionButtonLabel('Continue')
        } else {
            setActionButton('none')
            setActionButtonLabel('OTP Tidak sesuai')
        }


        // if (Iotp.substr(1, 1) != '8') {
        //     setActionButton('flex')
        //     setActionButtonLabel('Silahkan input no yang sesuai.')
        // }

    }


    return (
        <View style={cssCoreApp.pageLogin}>


            <StatusBar barStyle={statusBar.barStyle} translucent backgroundColor={statusBar.backgroundColor} />
            <View style={cssLogin.view1}>
                <Text style={cssLogin.wrapper1}>Cek OTP</Text>
                <Text style={cssLogin.wrapper2} >{props.route.params.methodOTP} ke {props.route.params.noHp} </Text>
                <Text style={cssLogin.wrapper3} >Input kode OTP yang telah diterima</Text>
                <View style={{
                    width: 80,
                    height: 50,
                    backgroundColor: 'white',
                    marginTop: 10,
                }}>
                    <TextInput style={{
                        maxWidth: 90,
                        fontSize: 25,
                        color: '#959595'
                    }}

                        maxLength={5}
                        placeholder='00000'
                        onChangeText={onChangeText}
                        keyboardType='number-pad'
                        value={otp}
                    // onFocus={() => setActionButton('flex')}
                    // onBlur={() => setActionButton('none')}
                    />
                </View>
            </View>
            <View style={{ display: actionButton, alignItems: 'center', margin: 5, padding: 3 }}>
                <TouchableRipple style={{ alignItems: 'center', margin: 5, padding: 3 }} onPress={() => cekOtp(otp)}>
                    <Text style={cssStyles.H2} >{actionButtonLabel}</Text>
                </TouchableRipple>
            </View>
        </View >


    )


    function cekOtp(otp) {

        if (otp == OTP) {
            let username = 'samu';
            let password = '1234'
            // let token = Math.round((new Date()).getTime() / 1000);
            // console.log('token', token)
            // setUserToken(token.toString())
            console.log("goto login")
            console.log("otp", otp)
            console.log("props.route.params", props.route.params.methodOTP)
            signIn({ username, password });
            // navigation.navigate('Home')
        } else {
            // setActionButton('none')
            setotp('')
            setActionButtonLabel('OTP Tidak sesuai')
        }
    }

}


