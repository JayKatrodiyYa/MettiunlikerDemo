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
    midTitle: {
        fontSize: 14,
        color: Colors.Blue,
        fontFamily: Font.PoppinsMedium,
        marginVertical: vs(20),
        marginHorizontal: s(20),
    },
    BackImage: {
        height: ms(20),
        width: ms(20),
        resizeMode: 'contain',
    },
    header: {
        justifyContent: 'center',
        marginHorizontal: s(20),

    },
    headerText: {
        color: Colors.Green,
        fontFamily: Font.PoppinsMedium,
        fontSize: 34,
    },
    description: {
        color: Colors.Black,
        fontFamily: Font.PoppinsMedium,
        fontSize: 13,
        marginBottom: vs(5),
    },
    headerTxt: {
        fontSize: 20,
        color: '#123B70',
        fontFamily: Font.PoppinsMedium,
    },
    paymentMethod: {
        marginVertical: vs(8),
        marginHorizontal: s(20),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.White,
        elevation: 7,
        height: vs(70),
    },
    selectedMethod: {
        backgroundColor: Colors.Green,
    },
    methodName: {
        fontSize: 16,
        color: Colors.Black,
        fontFamily: Font.PoppinsMedium,
    },
    methodImage: {
        width: ms(65),
        height: ms(45),
        resizeMode: 'contain',
        marginHorizontal: s(30)
    },
    confirmButton: {
        backgroundColor: Colors.Green,
        borderRadius: 15,
        marginVertical: vs(15),
        marginHorizontal: s(20),
        height: ms(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: Font.PoppinsMedium
    },
    methodDate: {
        fontSize: 12
    },
    dataTxt: {
        marginVertical: vs(8),
        marginHorizontal: s(20),
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.White,
        elevation: 7,
        height: vs(70),
        justifyContent: 'space-around',
    },
    cashView: {
        height: ms(10),
        width: ms(50),
        borderRadius: ms(2),
        borderWidth: 16,
        borderColor: '#FFAB01',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: s(15),
    },
    BackImage: {
        height: ms(15),
        width: ms(15),
        resizeMode: 'contain',
    },
    cashImage: {
        height: ms(30),
        width: ms(30),
        resizeMode: 'contain',
    },
    bottomImgView: {
        height: ms(15),
        width: ms(15),
        borderRadius: ms(7),
        borderWidth: 12,
        borderColor: Colors.Blue,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: s(15),
    },
    bottomImg: {
        height: ms(10),
        width: ms(10),
        resizeMode: 'contain',
    },
});