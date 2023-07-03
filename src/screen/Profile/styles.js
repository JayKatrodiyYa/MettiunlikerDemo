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
    marginTop: vs(20),
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
    // marginTop: vs(150),
    width: "100%",
    height: "100%"
  },
  item: {
    marginVertical: vs(8),
    alignItems: 'center',
    // flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: Colors.White,
    marginHorizontal: s(10),
    fontFamily: Font.CarosSoftBold,
  },
  description: {
    marginHorizontal: s(10),
    fontSize: 12,
    color: Colors.LightGrey,

  },
  image: {
    width: ms(100),
    height: ms(100),
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
    backgroundColor: Colors.Green,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: s(10)
  },
  iconImg: {
    width: ms(20),
    height: ms(20),
    resizeMode: 'contain',
    tintColor: Colors.White
  },
  detailScreen: {
    marginVertical: vs(10),
    marginHorizontal: s(15), 
  },
  detailTxt: {
    fontSize: 18,
    marginHorizontal: s(5),
    color: Colors.Black,
    fontFamily: Font.CarosSoftBold
  },
  detailView: {
    marginTop: vs(10),
  },
  mediaShareImg: {
    marginHorizontal: s(15)
  },
  mediaShareTxtView: {
    marginVertical: vs(10)
  },
  mediaShareTxt: {
    fontSize: 15, 
    color: Colors.Green, 
    fontFamily: Font.CarosSoftBold
  },
  detailHeadTxt: {
    fontSize: 15, 
    fontFamily: Font.CarosSoftBold
  },
  wediaShareImg: {
    width: ms(80),
    height: ms(80),
  },
  shareImgView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});