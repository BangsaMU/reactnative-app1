import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native'
import { AuthContext } from "../../../App2";

export default function SignInScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useContext(AuthContext);

    return (
        <View>
            <Text>Dari Page</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign in ku" onPress={() => signIn({ username, password })} />
        </View>
    );
}