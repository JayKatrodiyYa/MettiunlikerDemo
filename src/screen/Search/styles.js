import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";
import { ms, s, vs } from "react-native-size-matters";
import { Font } from "../../common/Fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        marginVertical: vs(8),
        // marginHorizontal: 16,
        flexDirection: 'row',
    },
    image: {
        width: ms(40),
        height: ms(40),
        borderRadius: ms(40) / 2,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 15,
        color: Colors.Black,
        marginHorizontal: s(10),
        fontFamily: Font.CarosSoftBold,
    },
    description: {
        marginHorizontal: s(10),
        fontSize: 10,
    },
    });