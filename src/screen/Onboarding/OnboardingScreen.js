import React, { useEffect } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { styles } from './style';
import { Font } from '../../common/Fonts';
import { images } from '../../common/Images';
import { ButtonW } from '../../common/Button';
import { commonStyle } from '../../styles/commonStyle';
import { Colors } from '../../styles/colors';
import { IS_LOGIN } from '../../utils/constant';
import { sendData } from '../../utils/storage';

const Bold = ({ children }) => <Text style={{ fontFamily: Font.CarosSoftBold }}>{children}</Text>

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const navigateOnSignup = () => {
    navigation.navigate("SignUpScreen")
  }

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const data = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
      const res = await auth().signInWithCredential(googleCredential);
      const email = res.user.email;
      if (email) {
        navigation.navigate("tab")
        sendData(IS_LOGIN, "true");
      } else {
        navigation.navigate("SignInScreen")
      }
    } catch (error) {
      return;
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: '927926048553-p8mk5sorjtt06d7kcmn25fr0cav51hr0.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const imageStyles = [styles.tabImageContainer, commonStyle.alignCenter]
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='#20a090' />
      <Image source={images.logo} style={styles.logo} />
      <View style={commonStyle.m_20}>
        <Text style={styles.text}>Connect friends <Bold>easily & quickly</Bold> </Text>
        <Text style={styles.text1}>Our chat app is the perfect way to stay connected with friends and family.</Text>
      </View>
      <View style={[styles.profileTabsContainer, commonStyle.rowCenter]}>
        <TouchableOpacity style={imageStyles}>
          <Image style={styles.tabImage} source={images.Facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={imageStyles}
          onPress={signIn}
        >
          <Image style={styles.tabImage} source={images.Google} />
        </TouchableOpacity>
        <TouchableOpacity style={imageStyles}>
          <Image style={styles.tabImage} source={images.Apple} />
        </TouchableOpacity>
      </View>
      <View style={[styles.lineView, commonStyle.rowSpace]}>
        <View style={styles.devider} />
        <Text style={{ fontSize: 15, color: 'white', }}>
          OR
        </Text>
        <View style={styles.devider} />
      </View>
      <View style={styles.signUpBtn}>
        <ButtonW onClick={navigateOnSignup} title={'Sign Up With Email'} />
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")} >
          <Text style={{ textAlign: 'center', fontSize: 15, color: Colors.LightGrey }}>
            Existing account?
            <Text style={{ fontSize: 15, color: 'white', }}> Log in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnboardingScreen;
