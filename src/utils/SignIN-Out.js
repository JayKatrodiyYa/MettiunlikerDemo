import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


export const revokeAccess = async () => {
    try {
        await GoogleSignin.revokeAccess();
        // Google Account disconnected from your app.
        // Perform clean-up actions, such as deleting data associated with the disconnected account.
    } catch (error) {
        console.error(error);
    }
};


export default function SignIN() {

    useEffect(() => {
        signIn();
        GoogleSignin.configure({
            scopes: ['email'],
            webClientId: '927926048553-p8mk5sorjtt06d7kcmn25fr0cav51hr0.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    return (
        <View />
    )
}