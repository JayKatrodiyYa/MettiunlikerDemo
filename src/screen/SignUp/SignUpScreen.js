import React, { useState } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { Font } from '../../common/Fonts';
import { images } from '../../common/Images';
import { IS_LOGIN } from '../../utils/constant';
import { sendData } from '../../utils/storage';

const SignUpScreen = () => {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordHide1, setPasswordHide1] = useState(true);
    const [passwordHide2, setPasswordHide2] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const hideandShowPassword = () => {
        setPasswordHide1(!passwordHide1)
    };
    const hideandShowConfirmPassword = () => {
        setPasswordHide2(!passwordHide2)
    };

    const navigateOnHomeScreen = () => {
        if (password !== confirmPassword) {
            setIsPasswordValid(false)
            return
        } else {
            setIsPasswordValid(true)
        }
        sendData(IS_LOGIN, "true");
        navigation.navigate("tab")
    }
    const condition = !name.length || !email.length || !password.length || !confirmPassword.length
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor='#20a090' />
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image source={images.backArrow} style={styles.BackImg} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Sign up with Email</Text>
            <Text style={styles.description}>Get chatting with friends and family today by signing up for our chat app!</Text>
            <View style={styles.mainInputView}>
                <Text style={styles.mail}>Your Name</Text>
                <TextInput
                    style={styles.inputView}
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <Text style={styles.mail} >Your Email</Text>
                <TextInput
                    style={styles.inputView}
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <Text style={styles.mail}>Password</Text>
                <View style={styles.passwordView}>
                    <TextInput
                        style={[styles.input,]}
                        secureTextEntry={passwordHide1}
                        value={password}
                        onChangeText={text => setPassword(text)} />
                    <TouchableOpacity onPress={hideandShowPassword}>
                        <Image source={passwordHide1 ? images.Hide : images.Show} style={styles.hidePassword} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.mail}>Confirm Password</Text>
                <View style={styles.passwordView}>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={passwordHide2}
                        value={confirmPassword}
                        onChangeText={(text) => setConfirmPassword(text)} />
                    <TouchableOpacity onPress={hideandShowConfirmPassword}>
                        <Image source={passwordHide2 ? images.Hide : images.Show} style={styles.hidePassword} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'red' }}>{isPasswordValid ? '' : '--Password is not Invalid--'}</Text>
            </View>
            <View style={styles.bottonView}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={navigateOnHomeScreen}
                    disabled={condition}
                >
                    <Text style={{ fontSize: 15, color: 'black', fontFamily: Font.PoppinsBold }}>Create an account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUpScreen;
