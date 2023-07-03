import { StyleSheet } from "react-native";
import { ms, s, vs } from "react-native-size-matters";
import { Colors } from "../../styles/colors";
import { Font } from "../../common/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listView: {
        marginHorizontal: s(20),
        borderRadius: 10,
        marginVertical: vs(8),
        backgroundColor: Colors.White,
        elevation: 7,
        height: vs(70),
        paddingHorizontal: s(10),
    },

    ProfileImg: {
        width: ms(50),
        height: ms(50),
        borderRadius: ms(50) / 2,
        resizeMode: 'contain',
    },
    nameTxt: {
        fontSize: 15,
        color: Colors.Black,
        fontFamily: Font.CarosSoftBold,
    },
    ageTxt: {
        fontSize: 12,
    },
    addData: {
        height: ms(25),
        width: ms(25),
        resizeMode: 'contain',
        tintColor: Colors.Grey,
    },
    addDataView: {
        marginHorizontal: s(5)
    }
})