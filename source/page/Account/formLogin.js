import React, { useState, useCallback } from 'react'
import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native'
import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import { debounce } from "lodash";

import { cssCoreApp, cssStyles, statusBar, cssLogin } from '../../style'

export default function formLogin(props) {
    const MMKV = new MMKVStorage.Loader().initialize();
    const [user, setUser] = useMMKVStorage("user", MMKV);

    const navigation = useNavigation();
    const [displaySosmed, setDisplaySosmed] = useState('none');
    const [noHp, setNoHp] = useState(user ? user : '');
    const [actionButton, setActionButton] = useState(user ? 'flex' : 'none');
    const [actionButtonLabel, setActionButtonLabel] = useState(user ? 'Continue' : '');

    const onChangeText = (InoHp) => {
        let newInoHp = '';
        let numbers = '0123456789';

        // for (var i = 0; i < InoHp.length; i++) {
        //     if (numbers.indexOf(InoHp[i]) > -1) {
        //         newInoHp = newInoHp + InoHp[i];
        //     }
        //     else {
        //         // your call back function
        //         InoHp = ''
        //         setNoHp('')
        //         alert("please enter numbers only");
        //     }
        // }
        console.log('InoHp', InoHp);
        console.log('newInoHp', newInoHp);
        console.log('!isNaN(InoHp)', !isNaN(InoHp));
        if (!isNaN(InoHp) == false) {
            console.log(1);
            setNoHp(noHp)
            InoHp = noHp
        } else {
            console.log(2);
            setNoHp(InoHp)
        }



        if (InoHp.length > 9 && InoHp.length <= 13 && InoHp.substr(1, 1) == '8') {
            setActionButton('flex')
            setActionButtonLabel('Continue')
        } else {
            // setActionButton('none')
            setActionButtonLabel('')
        }


        if (InoHp.substr(1, 1) != '8') {
            setActionButton('flex')
            setActionButtonLabel('Silahkan input no yang sesuai.')
        }

    }

 

    return (
        <View style={cssCoreApp.pageLogin}>


            <StatusBar barStyle={statusBar.barStyle} translucent backgroundColor={statusBar.backgroundColor} />
            <View style={cssLogin.view1}>
                <Text style={cssLogin.wrapper1}>Garab</Text>
                <Text style={cssLogin.wrapper2} >Welcome {user} </Text>
                <Text style={cssLogin.wrapper3} >Enter your mobile number to continue</Text>
                <View style={cssLogin.view2}>
                    <TextInput style={cssLogin.wrapper4}
                        maxLength={13}
                        placeholder='081519518186'
                        onChangeText={onChangeText}
                        keyboardType='number-pad'
                        value={noHp ? noHp : user}
                        onFocus={onChangeText}
                    // onBlur={() => setActionButton('none')}
                    />
                </View>
            </View>
            <View style={{ display: actionButton, alignItems: 'center', margin: 5, padding: 3 }}>
                <TouchableRipple style={{ alignItems: 'center', margin: 5, padding: 3 }} onPress={() => kirimOtp(noHp)}>
                    <Text style={cssStyles.H2} >{actionButtonLabel}</Text>
                </TouchableRipple>
            </View>
        </View >


    )


    function kirimOtp(noHp) {
        setUser(noHp);
        console.log("goto CekOtp")
        navigation.navigate('CekOtp', { noHp: noHp, methodOTP: 'SMS' })
        console.log("noHp", noHp)
    }

}


