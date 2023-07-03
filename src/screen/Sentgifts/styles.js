import { StyleSheet } from "react-native";
import { s, vs, ms } from 'react-native-size-matters';
import { Colors } from "../../styles/colors";
import { Font } from "../../common/Fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Green,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: s(15),
    marginTop: vs(10)
  },
  BackImage: {
    height: ms(15),
    width: ms(15),
    resizeMode: 'contain',
  },
  backView: {
    height: ms(35),
    width: ms(35),
    borderRadius: ms(25),
    borderWidth: 22,
    borderColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: Colors.White,
    fontFamily: Font.CarosSoftBold,
    fontSize: 20,
    textAlign: 'center',
  },
  coinView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: 30,
    padding: 5,
    width: s(80),
    justifyContent: 'space-between',
  },
  headerCoins: {
    fontSize: 30,
    marginEnd: 8,
    color: '#123B70',
    fontFamily: Font.CarosSoftBold
  },
  VIPText: {
    fontSize: 20,
    color: Colors.White,
    fontFamily: Font.PoppinsMedium,
    marginVertical: vs(20),
  },
  PackageView: {
    marginHorizontal: s(15),
  },
  PackageCard: {
    backgroundColor: Colors.White,
    width: s(310),
    height: vs(130),
    borderRadius: 10,
  },
  CardContent: {
    marginHorizontal: s(25), 
    marginTop: vs(15)
  },
  textView: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.Green,
    width: s(250),
    justifyContent: 'center',
    height: vs(30),
    borderRadius: 20,
    alignItems: 'center',
    marginTop: vs(10),
  },
  titleView: {
    color: Colors.Blue, 
    fontSize: 17, 
    fontFamily: Font.PoppinsMedium
  },
  description: {
    color: Colors.Blue, 
    fontSize: 12, 
    fontFamily: Font.PoppinsMedium
  },
  priceBtn: {
    fontSize: 12, 
    fontFamily: Font.PoppinsMedium,
    color: Colors.White
  },
});