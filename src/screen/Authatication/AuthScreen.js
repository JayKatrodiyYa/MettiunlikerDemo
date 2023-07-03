import { View, Text, } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { readData } from '../../utils/storage';

const Authatication = () => {
    const navigation = useNavigation();
    const handleLogin = async () => {
        const login = await readData('IS_LOGIN');
        if (login === "true") {
            navigation.navigate('tab')
        } else {
            navigation.navigate('OnboardingScreen')
        }
    }
    useEffect(() => {
        handleLogin();
    }, [])
    return (
        <View />
    )
}
export default Authatication;