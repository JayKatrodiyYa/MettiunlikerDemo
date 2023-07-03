import { StyleSheet } from "react-native";
import { s, vs, ms } from 'react-native-size-matters';
import { Colors } from "../../styles/colors";
import { Font } from "../../common/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Green,
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
    color: Colors.White,
    fontFamily: Font.CarosSoft,
    fontSize: 20,
    textAlign: 'center',
    marginRight: s(30),
    justifyContent: 'center',
    alignContent: 'center',
  },
  mScreen: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: vs(25),
    width: "100%",
    height: "100%"
  },
  item: {
    marginVertical: vs(8),
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 17,
    color: Colors.Black,
    marginHorizontal: s(10),
    fontFamily: Font.CarosSoftBold,
  },
  description: {
    marginHorizontal: s(10),
    fontSize: 12,
  },
  image: {
    width: ms(50),
    height: ms(50),
    resizeMode: 'contain',
  },
  QRImg: {
    width: ms(25),
    height: ms(25),
    resizeMode: 'contain',
  },
  settingImgView: {
    height: ms(45),
    width: ms(45),
    borderRadius: ms(60),
    borderWidth: 2,
    borderColor: '#F2F8F7',
    backgroundColor: '#F2F8F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImg: {
    width: ms(20),
    height: ms(20),
    resizeMode: 'contain',
    tintColor: Colors.Grey
  },
});