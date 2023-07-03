import { StyleSheet } from "react-native";
import { s, vs, ms } from 'react-native-size-matters';
import { Font } from "../../common/Fonts";
import { Colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Green,
  },
  headerTitle: {
    fontSize: 16,
    color: Colors.White,
    textAlign: 'center',
    fontFamily: Font.CarosSoftBold,
    marginTop: vs(20),
  },
  subText: {
    fontFamily: Font.CarosSoft,
    fontSize: 14,
    color: Colors.White,
    textAlign: 'center',
    marginVertical: vs(10),
    marginHorizontal: s(20)
  },
  profileTabsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImg: {
    marginHorizontal: s(20),
    marginVertical: vs(30),
  },
  tabImage: {
    height: ms(30),
    width: ms(30),
    resizeMode: 'contain',
  },
  tabImageContainer: {
    marginHorizontal: s(10),
    marginVertical: vs(20),
    height: ms(55),
    width: ms(55),
    borderRadius: ms(60),
    borderWidth: 2,
    borderColor: Colors.LightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(20),
    marginVertical: vs(15),
  },
  devider: {
    width: '40%',
    height: 0.5,
    backgroundColor: Colors.White,
  },
  login: {
    marginVertical: vs(20),
    marginHorizontal: s(20),
  },
  mail: {
    color: Colors.White,
  },
  input: {
    width: s(300),
    height: vs(40),
    borderBottomWidth: 1,
    borderBottomColor: Colors.White,
    marginBottom: 15,
    color: Colors.White,
  },
  logInBtn: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: ms(50),
    width: ms(320),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logInView: {
    marginTop: vs(60),
  },
  forgotView: {
    marginTop: vs(10),
  },
  hidePassword: {
    height: ms(18),
    width: ms(18),
    tintColor: Colors.White,
    resizeMode: 'contain'
  },
  input1: {
    height: ms(40),
    width: ms(300),
    color: 'white',
  },
  passwordShow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: vs(15),
    alignItems: 'center',
  },
  bottonView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: vs(20),
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: ms(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: s(20),
  },
})