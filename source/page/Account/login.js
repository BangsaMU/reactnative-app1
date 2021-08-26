import React, { useState } from 'react'
import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native'
import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'

import { cssCoreApp, cssStyles, statusBar, cssLogin } from '../../style'

export default function login(props) {
    const navigation = useNavigation();
    const [displaySosmed, setDisplaySosmed] = useState('none');
    const [noHp, setNoHp] = useState('');
    const [actionButton, setActionButton] = useState('none');
    const [actionButtonLabel, setActionButtonLabel] = useState('');
    const onChangeText = (InoHp) => {
        let newInoHp = '';
        let numbers = '0123456789';

        for (var i = 0; i < InoHp.length; i++) {
            if (numbers.indexOf(InoHp[i]) > -1) {
                newInoHp = newInoHp + InoHp[i];
            }
            else {
                // your call back function
                InoHp = ''
                setNoHp('')
                alert("please enter numbers only");
            }
        }
        setNoHp(newInoHp)
        console.log(InoHp.substr(1, 0))
        if (InoHp.substr(1, 1) != '8') {
            setActionButton('flex')
            setActionButtonLabel('Silahkan input no yang sesuai.')
        }
        if (InoHp.length > 9 && InoHp.length <= 13 && InoHp.substr(1, 1) == '8') {
            setActionButton('flex')
            setActionButtonLabel('Continue')
        } else {
            // setActionButton('none')
            setActionButtonLabel('')
        }
    }
    

    // onChanged(text){
    //     let newText = '';
    //     let numbers = '0123456789';

    //     for (var i = 0; i < text.length; i++) {
    //         if (numbers.indexOf(text[i]) > -1) {
    //             newText = newText + text[i];
    //         }
    //         else {
    //             // your call back function
    //             alert("please enter numbers only");
    //         }
    //     }
    //     this.setState({ myNumber: newText });
    // }

    return (
        <View style={cssCoreApp.pageLogin}>


            <StatusBar barStyle={statusBar.barStyle} translucent backgroundColor={statusBar.backgroundColor} />
            <View style={cssLogin.view1}>
                <Text style={cssLogin.wrapper1}>Garab</Text>
                <Text style={cssLogin.wrapper2} >Welcome</Text>
                <Text style={cssLogin.wrapper3} >Enter your mobile number to continue</Text>
                <View style={cssLogin.view2}>
                    <TextInput style={cssLogin.wrapper4}
                        maxLength={13}
                        placeholder='081519518186'
                        onChangeText={onChangeText}
                        keyboardType='number-pad'
                        value={noHp}
                    // onFocus={() => setActionButton('flex')}
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


    function kirimOtp(props) {
        console.log("goto home")
        navigation.navigate('Home')
        // console.warn("samu" + props)
    }

}


