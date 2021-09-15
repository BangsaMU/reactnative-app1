import React, { useState, useCallback } from 'react'
import { View, Text, StatusBar, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";
import { debounce } from "lodash";

import { useForm, Controller } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";


import { cssCoreApp, cssStyles, statusBar, cssLogin } from '../../style'


export default function FormLogin(props) {




    const MMKV = new MMKVStorage.Loader().initialize();
    const [user, setUser] = useMMKVStorage("user", MMKV);
    console.log('user', user);

    const navigation = useNavigation();
    const [displaySosmed, setDisplaySosmed] = useState('none');
    const [noHp, setNoHp] = useState(user ? user : '');
    const [actionButton, setActionButton] = useState(user ? 'flex' : 'none');





    const { getValues, setValue, control, handleSubmit, formState: { isValid, errors } } = useForm();
    const onSubmit = data => {
        console.log('data', data)
        kirimOtp(data.noHp)
    };


    const onChangeTextQ = (InoHp) => {
        console.log('cek error', errors)
        if (!isNaN(InoHp) == false) {
            let preVal = getValues("noHp")
            setValue('noHp', preVal, { shouldValidate: false })
        } else {
            setValue('noHp', InoHp, { shouldValidate: true })
        }
    }

    // console.log('isValid', isValid);
    // console.log('errors', errors);
    return (
        <>
            <View style={cssCoreApp.pageLogin}>


                <StatusBar barStyle={statusBar.barStyle} translucent backgroundColor={statusBar.backgroundColor} />
                <View style={cssLogin.view1}>
                    <Text style={cssLogin.wrapper1}>Garab</Text>
                    <Text style={cssLogin.wrapper2} >Welcome {user} </Text>
                    <Text style={cssLogin.wrapper3} >{user ? 'Edit to change if not your number' : 'Enter your mobile number to continue'}</Text>

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: { value: /^(0)8[1-9][0-9]{6,11}$/i, message: "Format nomor tidak sesuai" },
                            minLength: { value: 9, message: "Minimal 9 digit" },
                            maxLength: { value: 13, message: "Maksimal 13 digit" }
                        }}
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                            <TextInput
                                style={cssLogin.wrapper4}
                                placeholder='081519518186'
                                onBlur={onBlur}
                                onChangeText={value => onChangeTextQ(value)}
                                value={value}
                                keyboardType='number-pad'
                                maxLength={13}
                            />
                        )}
                        name="noHp"
                        defaultValue={noHp ? noHp : user}
                    />

                </View>

                <View style={{ display: 'flex', alignItems: 'center', margin: 5, padding: 3 }}>
                    <TouchableRipple style={{ alignItems: 'center', margin: 5, padding: 3 }} onPress={handleSubmit(onSubmit)}>
                        <>
                            {!errors.noHp && <Text style={cssStyles.H2} >Lanjut</Text>}
                            {errors.noHp && <Text style={cssStyles.H2}>{errors.noHp.message}</Text>}

                            {/* <ErrorMessage
                                errors={errors}
                                name="noHp"
                                render={({ message }) => {
                                    console.log("message:", message);
                                    return <Text style={cssStyles.H2} > {message} </Text>
                                }
                                }
                            /> */}
                        </>
                    </TouchableRipple>
                </View>

            </View>

        </>
    );

    function kirimOtp(noHp) {
        setUser(noHp);
        console.log("goto CekOtp")
        navigation.navigate('CekOtp', { noHp: noHp, methodOTP: 'SMS' })
        console.log("noHp", noHp)
    }


}



const styles = StyleSheet.create({
    label: {
        color: 'red',
        margin: 20,
        marginLeft: 0,
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: '#ec5990',
        borderRadius: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 0,
        padding: 8,
        backgroundColor: '#0e101c',
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: .5,
        borderColor: '#333333',
        height: 40,
        padding: 10,
        borderRadius: 4,
    },
});