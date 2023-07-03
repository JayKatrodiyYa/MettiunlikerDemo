import { StyleSheet } from "react-native";
// import { Font } from '../../common/Fonts';
import { s, vs, ms } from 'react-native-size-matters';
import { Font } from "../../common/Fonts";
import { Colors } from "../../styles/colors";
import { color } from "react-native-elements/dist/helpers";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#20a090',
  },
  headerTitle: {
    fontSize: 18,
    color: Colors.White,
    textAlign: 'center',
    fontFamily: Font.CarosSoftBold,
  },
  description: {
    fontFamily: Font.CarosSoft,
    fontSize: 15,
    marginHorizontal: s(20),
    marginVertical: vs(20),
    color: Colors.White,
    textAlign: 'center',

  },
  profileTabsContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackImg: {
    marginLeft: s(20),
    marginVertical: vs(20),
    resizeMode: 'contain'
  },
  mainInputView: {
    marginVertical: vs(23),
    marginHorizontal: s(20)
  },
  mail: {
    color: 'white',
    fontSize: 15,
    fontFamily: Font.CarosSoft
  },
  input: {
    height: ms(40),
    width: ms(300),
    color: 'white',
  },
  inputView: {
    height: ms(40),
    width: ms(325),
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: vs(15),
  },
  invalidInput: {
    borderColor: 'red', 
    borderBottomWidth: 1
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: ms(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: s(20),
  },
  bottonView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: vs(20),
  },
  hidePassword: {
    height: ms(18),
    width: ms(18),
    tintColor: Colors.White,
    resizeMode: 'contain'
  },
  passwordView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: vs(15),
    alignItems: 'center',
  },
})