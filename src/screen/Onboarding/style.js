import { StyleSheet } from "react-native";
import { Font } from '../../common/Fonts';
import { s, ms, vs } from 'react-native-size-matters';
import { Colors } from '../../styles/colors';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Green,
  },
  logo: {
    width: ms(55),
    height: ms(55),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: vs(15)
  },
  text: {
    fontFamily: Font.CarosSoft,
    fontSize: 64,
    color: Colors.White,
  },
  text1: {
    fontFamily: Font.CarosSoft,
    fontSize: 14,
    color: Colors.White,
    marginVertical: vs(10)
  },
  profileTabsContainer: {
    justifyContent: 'center',
  },
  tabImage: {
    height: ms(32),
    width: ms(32),
    resizeMode: 'contain'
  },
  tabImageContainer: {
    marginHorizontal: s(10),
    marginVertical: vs(15),
    height: ms(60),
    width: ms(60),
    borderRadius: ms(60),
    borderWidth: 2,
    borderColor: Colors.LightGrey,
  },
  lineView: {
    marginHorizontal: s(20),
    marginVertical: vs(10)
  },
  devider: {
    width: '40%',
    height: 0.5,
    backgroundColor: Colors.White,
  },
  signUpBtn: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
  },
})