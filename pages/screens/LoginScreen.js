import React from 'react';
import { Text, View } from 'react-native'
import { GoogleSigninButton } from '@react-native-community/google-signin';

export default function LoginScreen(props) {
    return (
        <View>
            <Text>Login Page입니다</Text>
            <GoogleSigninButton onPress={props.onGoogleButtonPress}/>
        </View>
    )
}