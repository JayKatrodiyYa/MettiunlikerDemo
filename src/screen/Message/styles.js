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
        marginHorizontal: s(15),
        marginVertical: vs(10),
        borderBottomWidth: 1,
        borderBottomColor: '#EEFAF8',
    },

    backImg: {
        width: s(15),
        height: vs(10),
        resizeMode: 'contain',
    },
    item: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 15,
        color: Colors.Black,
        marginHorizontal: s(10),
        fontFamily: Font.CarosSoftBold,
    },
    profileName: {
        fontFamily: Font.CarosSoftBold,
        color: Colors.Black,
    },
    description: {
        marginHorizontal: s(15),
        fontSize: 10,
    },
    profileImg: {
        marginHorizontal: s(10),
    },
    today: {
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.White,
        borderRadius: 5,
        marginBottom: vs(20),
    },
    rmessage: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        backgroundColor: Colors.Green,
        padding: ms(10),
        marginHorizontal: s(10),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        color: Colors.White,
    },
    ymessage: {
        alignSelf: 'flex-start',
        backgroundColor: "#F1F8FA",
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        color: Colors.Black,
        marginHorizontal: s(10),
        marginVertical: vs(5),
    },
    time: {
        alignSelf: 'flex-end',
        fontSize: 12,
        marginRight: s(20),
        marginBottom: vs(20),
    },
    textinput: {
        marginVertical: vs(13),
        marginHorizontal: s(15),
    },
    input: {
        borderRadius: 15,
        backgroundColor: '#F3F6F6',
        width: '65%',
        padding: 2,
    },
    docImg: {
        marginRight: s(5)
    },
    voice: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        backgroundColor: Colors.Green,
        padding: ms(10),
        marginRight: s(10),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
        alignItems: 'center',
    },
    voice1: {
        flexDirection: 'row',
        padding: ms(10),
        marginHorizontal: s(10),
        marginVertical: vs(5),
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        alignItems: 'center',
        backgroundColor: '#F2F7FB',
    },
})