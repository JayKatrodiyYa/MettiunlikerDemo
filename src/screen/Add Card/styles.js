import { StyleSheet } from "react-native";
import { s, vs, ms } from 'react-native-size-matters';
import { Colors } from "../../styles/colors";
import { Font } from "../../common/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: s(20),
        marginVertical: vs(25),
    },
    BackImage: {
        height: ms(15),
        width: ms(15),
        resizeMode: 'contain',
    },
    header: {
        justifyContent: 'center',
        marginHorizontal: s(20),
    },
    headerText: {
        color: Colors.Green,
        fontFamily: Font.CarosSoftBold,
        fontSize: 34,
        marginVertical: vs(10),

    },
    inputView: {
        marginVertical: vs(20),
        marginHorizontal: s(20),
    },
    inputTxt: {
        color: Colors.Black,
        fontFamily: Font.CarosSoftBold
    },
    inputData: {
        width: s(300),
        height: vs(40),
        borderBottomWidth: 1,
        borderBottomColor: Colors.Black,
        marginBottom: 15,
        color: Colors.Black,
    },
    ExpireInput: {
        width: s(140),
        height: vs(40),
        borderBottomWidth: 1,
        borderBottomColor: Colors.Black,
        marginBottom: 15,
        color: Colors.Black,
    },
    scanerVeiw: {
        marginHorizontal: s(20),
        height: vs(40),
        width: s(110),
        backgroundColor: Colors.Green,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 12,
    },
    ScanerImg: {
        height: vs(15),
        width: s(15),
        resizeMode: 'contain'
    },
    ScanerTxt: {
        color: Colors.White,
        fontFamily: Font.CarosSoftBold
    },
    bottonTextView: {
        fontSize: 9,
        fontFamily: Font.CarosSoftBold,
        marginHorizontal: s(20)
    },
    bottonView: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: vs(20),
    },
    button: {
        backgroundColor: Colors.Green,
        borderRadius: 15,
        height: ms(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: s(20),
    },
    expireView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: s(20),
        marginVertical: vs(20),
    },
    cardView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: vs(15),
    },
    cardImg: {
        resizeMode: 'contain',
        height: vs(40),
        width: s(50),
    },
    buttonTxt: {
        fontSize: 15,
        color: Colors.White,
        fontFamily: Font.PoppinsBold
    },
});