import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native'
import { TouchableRipple } from 'react-native-paper';
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";

import { useForm, Controller } from "react-hook-form";
import { cssCoreApp, cssStyles, statusBar, cssLogin } from '../../style'

import { AuthContext } from "../../../AppOKE";

const MMKV = new MMKVStorage.Loader().initialize();
export default function cekOtp(props) {

    const { signIn } = useContext(AuthContext);
    const OTP = 12345

    const { getValues, setValue, setError, control, handleSubmit, formState: { isValid, errors } } = useForm();
    const onSubmit = data => {
        console.log('data', data)
        cekOtp(data.OTP)
    };

    // console.log('isValid', isValid);
    // console.log('errors', errors);
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

                    <Controller
                        control={control}
                        rules={{
                            required: { value: true, message: "Input 5 digit OTP" },
                            pattern: { value: /^[0-9]{5}$/i, message: "OTP tidak Valid" },
                            maxLength: { value: 5, message: "Maksimal 5 digit" }
                        }}
                        render={({
                            field: { onChange, onBlur, value, name, ref },
                            fieldState: { invalid, isTouched, isDirty, error },
                        }) => (
                            <TextInput
                                style={cssLogin.wrapper4}
                                placeholder='00000'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                keyboardType='number-pad'
                                maxLength={5}
                            />
                        )}
                        name="OTP"
                    />

                </View>
            </View>
            <View style={{ display: 'flex', alignItems: 'center', margin: 5, padding: 3 }}>
                <TouchableRipple style={{ alignItems: 'center', margin: 5, padding: 3 }} onPress={handleSubmit(onSubmit)}>
                    <>
                        {!errors.OTP && <Text style={cssStyles.H2} >Lanjut</Text>}
                        {errors.OTP && <Text style={cssStyles.H2}>{errors.OTP.message}</Text>}
                    </>
                </TouchableRipple>
            </View>
        </View >

    )


    function cekOtp(otp) {
        console.log('cek OTP', otp);

        if (otp == OTP) {
            console.log("goto login")
            console.log("otp", otp)
            console.log("props.route.params", props.route.params.methodOTP)
            signIn({ type: 'OTP' });
        } else {
            setValue('OTP', null, { shouldValidate: false })
            setError("OTP", {
                type: "manual",
                message: "OTP Tidak sesuai",
            });
        }
    }

}


