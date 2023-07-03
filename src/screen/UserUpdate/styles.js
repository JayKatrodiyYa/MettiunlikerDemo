import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { ms, s, vs } from "react-native-size-matters";
import { Font } from "../../common/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Green,
    },
    signupBtn: {
        position: 'absolute',
        bottom: 15,
        left: 0,
        right: 0,
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
})