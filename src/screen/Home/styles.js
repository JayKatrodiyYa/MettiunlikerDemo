import { StyleSheet } from "react-native";
import { s, vs, ms } from 'react-native-size-matters';
import { Colors } from "../../styles/colors";
import { Font } from "../../common/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Green,
  },
  tabContainer: {
    height: ms(80),
    width: ms(80),
    justifyContent: 'center',
  },
  tabImage: {
    height: ms(30),
    width: ms(30),
    resizeMode: 'contain',
  },
  SerachView: {
    height: ms(45),
    width: ms(45),
    borderRadius: ms(60),
    borderWidth: 2,
    borderColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: Colors.White,
    fontFamily: Font.CarosSoftBold,
    fontSize: 20,
  },
  SerachImage: {
    height: ms(20),
    width: ms(20),
    resizeMode: 'contain'
  },
  profileImage: {
    width: ms(45),
    height: ms(45),
    borderRadius: ms(45) / 2,
    resizeMode: 'contain',
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
    marginRight: ms(20),
},
title: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.White,
    width: s(50)
},
image: {
    width: ms(50),
    height: ms(50),
    borderRadius: ms(50) / 2,
    resizeMode: 'contain',
},
bottonView: {
  width: ms(50),
  height: ms(50),
  borderRadius: ms(50) / 2,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.Green,
  position: 'absolute',
  left: 320,
  right: 0,
  bottom: vs(20),
},
CreateGroupImg: {
  height: ms(23),
    width: ms(23),
    resizeMode: 'contain',
    tintColor: Colors.White
},
});