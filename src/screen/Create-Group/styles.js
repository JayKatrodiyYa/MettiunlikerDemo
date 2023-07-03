import { StyleSheet } from "react-native";
import { s, vs, ms } from 'react-native-size-matters';
import { Colors } from "../../styles/colors";
import { Font } from "../../common/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImage: {
    height: ms(13),
    width: ms(13),
    resizeMode: 'contain',
  },
  headerView: {
    flexDirection: 'row',
    marginHorizontal: s(20),
    marginVertical: vs(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: Colors.Black,
    fontFamily: Font.CarosSoft,
    fontSize: 20,
    textAlign: 'center',
    marginRight: s(30),
    justifyContent: 'center',
    alignContent: 'center',
  },
  titleTxt: {
      fontSize: 40,
      color: Colors.Black,
    fontFamily: Font.CarosSoft,
    marginHorizontal: s(20),
    marginVertical: vs(15)
  },
  GroupTeamView: {
    marginLeft: s(20),
    backgroundColor: '#E0EBE9',
    padding: s(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    // width: s(100)
  },
});