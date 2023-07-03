import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
import { images } from '../../common/Images';
import { Font } from '../../common/Fonts';
import { s, vs, ms } from 'react-native-size-matters';
import { Colors } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.text}>Sent a Gift</Text>
            </TouchableOpacity>
            <View style={styles.imageView}>
                <Image source={images.Gift} style={styles.Image} />
                <TouchableOpacity onPress={() => navigation.navigate('SentGift')}>
                    <Text style={styles.Continuetext}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Green,
    },
    Image: {
        // position: 'relative',

    },
    text: {
        color: Colors.White,
        fontSize: 20,
        fontFamily: Font.PoppinsBold,
        textAlign: 'center',
        marginTop: vs(30)
    },
    Continuetext: {
        color: Colors.White,
        fontSize: 30,
        fontFamily: Font.PoppinsMedium,
        textAlign: 'center',
        marginTop: vs(30)
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 20
    },
});

export default SplashScreen; 
