import { GoogleSignin } from '@react-native-community/google-signin';
import { useEffect } from 'react';
import { Button } from 'react-native';
import auth from "@react-native-firebase/auth"
import {useNavigation} from "@react-navigation/native"
import React from "react";

GoogleSignin.configure ({
  webClientId: "1046299788032-fbp1imn01jtdm3f5jf5v3be9heil59i2.apps.googleusercontent.com",
});

function Landing () {
  const navigation = useNavigation ()

  const onGoogleButtonPress = async () => {
        const {idToken} = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);
  }
  return <Button title = "구글로그인" onPress = {onGoogleButtonPress}/>
}

export default Landing;