import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';
import { images } from '../../common/Images';
import { IS_LOGIN } from '../../utils/constant';
import { sendData } from '../../utils/storage';
import { Font } from '../../common/Fonts';

const SignInScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordHide, setPasswordHide] = useState(true);

    const hideandShowPassword = () => {
        setPasswordHide(!passwordHide)
    };

    const navigateOnHomeScreen = () => {
        sendData(IS_LOGIN, "true");
        navigation.navigate("tab")
    };

    const condition = !email.length || !password.length
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={20} style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={images.backArrow} style={styles.backImg} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Log in to Mettiunlike</Text>
                <Text style={styles.subText}>Welcome back! Sign in using your social account or email to continue us</Text>
                <View style={styles.profileTabsContainer}>
                    <TouchableOpacity style={styles.tabImageContainer}>
                        <Image style={styles.tabImage} source={images.Facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabImageContainer}>
                        <Image style={styles.tabImage} source={images.Google} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabImageContainer}>
                        <Image style={styles.tabImage} source={images.Apple} />
                    </TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <View style={styles.devider} />
                    <Text style={{ fontSize: 15, color: 'white' }}>
                        OR
                    </Text>
                    <View style={styles.devider} />
                </View>
                <View style={styles.login}>
                    <Text style={styles.mail}>Your Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setEmail(text)}
                        value={email} />
                    <Text style={styles.mail}>Password</Text>
                    <View style={styles.passwordShow}>
                        <TextInput
                            style={styles.input1}
                            secureTextEntry={passwordHide}
                            value={password}
                            onChangeText={text => setPassword(text)} />
                        <TouchableOpacity onPress={hideandShowPassword}>
                            <Image source={passwordHide ? images.Hide : images.Show} style={styles.hidePassword} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottonView}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={navigateOnHomeScreen}
                        disabled={condition}
                    >
                        <Text style={{ fontSize: 15, color: 'black', fontFamily: Font.PoppinsBold }}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.forgotView}>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: '#B9C1BE' }}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignInScreen;