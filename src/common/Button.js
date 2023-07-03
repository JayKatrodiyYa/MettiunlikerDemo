import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { Font } from './Fonts';
import { ms, s, vs } from 'react-native-size-matters';
import { Colors } from '../styles/colors';
import { images } from './Images';
import { commonStyle } from '../styles/commonStyle';

export const ButtonW = ({ onClick, title, disabled }) => {
    return (
        <View style={styles.signupBtn}>
            <TouchableOpacity style={styles.bottomView} onPress={onClick} disabled={disabled}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export const ButtonG = ({ onClick, title, }) => {
    return (
        <View style={styles.bottomGreenBtnView}>
            <TouchableOpacity style={styles.bottomView} onPress={onClick} >
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export const ImgButton = ({ onClick, title, disabled }) => {
    return (
        <View style={styles.signupBtn}>
            <TouchableOpacity style={[styles.ImgButtonView, commonStyle.rowCenter]} onPress={onClick} disabled={disabled}>
                <Image source={images.cart} style={{
                    height: ms(22),
                    width: ms(22),
                    resizeMode: 'contain',
                    marginHorizontal: 10
                }} />
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    signupBtn: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'flex-end',
    },
    bottomView: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: ms(50),
        width: ms(320),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: vs(10),
        marginHorizontal: s(20)
    },
    title: {
        fontSize: 15,
        color: 'black',
        fontFamily: Font.PoppinsBold
    },
    ImgButtonView: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: ms(50),
        width: ms(320),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: vs(18),
        marginHorizontal: s(20)
    },
    bottomGreenBtnView: {
        backgroundColor: Colors.Green,
        borderRadius: 15,
        height: ms(50),
        width: ms(320),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: vs(10),
        marginHorizontal: s(20)
    },
})