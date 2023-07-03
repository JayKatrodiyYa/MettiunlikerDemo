import { StyleSheet } from "react-native";
import { s, vs, ms } from 'react-native-size-matters';
import { Colors } from "../../styles/colors";
import { Font } from "../../common/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Green,
    },
    item: {
        alignItems: 'center',
        margin: 10

    },
    title: {
        fontSize: 17,
        color: Colors.Black,
        textAlign: 'center',
        fontFamily: Font.CarosSoftBold,
        marginHorizontal: s(15),
        marginTop: vs(8),
        
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        fontFamily: Font.CarosSoftBold,
    },
    image: {
        width: s(130),
        height: vs(120),
        borderRadius: ms(10),
        resizeMode: 'contain',
        // margin: 10,
    },
    productView: {
        height: vs(200),
        width: '42%',
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: Colors.White,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: vs(10),
        marginHorizontal: s(10),
        elevation: 10,
        borderColor: Colors.White,
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    }
});