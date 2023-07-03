import { StyleSheet } from "react-native";
import { s, vs, ms } from 'react-native-size-matters';
import { Colors } from "../../styles/colors";
import { Font } from "../../common/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Green
    },
    title: {
        marginTop: vs(5),
        fontSize: 20,
        color: Colors.Black,
        fontFamily: Font.CarosSoftBold,
    },
    description: {
        fontSize: 15,
        fontFamily: Font.CarosSoftBold,
    },
    image: {
        width: '100%',
        height: vs(300),
        resizeMode: 'contain',
    },
    backImg: {
        width: s(15),
        height: vs(10),
        resizeMode: 'contain',
    },
    cartImg: {
        height: vs(25),
        width: s(25),
        resizeMode: 'contain'
    },
    headerView: {
        marginHorizontal: s(15),
        marginVertical: vs(15),
    },
    priceTxt: {
        color: Colors.Green,
        fontSize: 25,
        fontFamily: Font.CarosSoftBold
    },
    item: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: Colors.White,
    },
    indicatorContainer: {
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center',
        flexDirection: 'row',
    },
      dot: {
       height: ms(9),
       width: ms(9),
       borderRadius: ms(8) / 2,
       backgroundColor: Colors.Grey,
       marginLeft: s(5),
      },
      activeDot: {
        backgroundColor: Colors.Green,
      },
});