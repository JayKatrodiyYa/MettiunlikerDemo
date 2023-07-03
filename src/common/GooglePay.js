import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { s, vs, ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { images } from '../common/Images'
import { Font } from './Fonts';
import { Colors } from '../styles/colors';

const MyPopup = ({ onClick }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View >
                <TouchableOpacity onPress={onClick} style={styles.mainView}>
                    <Text style={styles.titleView} >Google pay</Text>
                </TouchableOpacity>
                <Text style={styles.content}>Start by adding a payment method</Text>
                <Text style={styles.contentData}>king@gmail.com</Text>
                <Text style={styles.description}>Add a payment method to your Google account
                    to complete your purchase. Your payment
                    information only visible to Google</Text>
            </View>
            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.logInBtn}  onPress={() => navigation.navigate("PaymentMethod")}>
                    <Image source={images.CardPlus} />
                    <Text style={styles.buttonTitle}>Add credit or debit card</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        marginTop: vs(360),
    },
    mainView: {
        // marginVertical: vs(10)
        borderBottomWidth: 1,
    },
    titleView: {
        marginHorizontal: s(20),
        fontSize: 15,
        marginVertical: vs(10),
        fontFamily: Font.PoppinsMedium,
        color: Colors.Blue,
    },
    bottomView: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    },
    logInBtn: {
        backgroundColor: Colors.Green,
        borderRadius: 15,
        height: ms(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: s(20),
        flexDirection: 'row',
    },
    buttonTitle: {
        fontSize: 13,
        color: Colors.White,
        fontFamily: Font.PoppinsMedium,
        marginHorizontal: s(10),
    },
    content: {
        marginHorizontal: s(20),
        fontSize: 15,
        marginTop: vs(15),
        fontFamily: Font.PoppinsMedium,
        color: Colors.Blue,
    },
    contentData: {
        marginHorizontal: s(20),
        fontSize: 12,
        fontFamily: Font.PoppinsMedium,
        color: Colors.Blue,
    },
    description: {
        marginHorizontal: s(20),
        fontSize: 12,
        marginTop: vs(20),
        fontFamily: Font.PoppinsMedium,
        color: Colors.Blue,
    },
});

export default MyPopup;