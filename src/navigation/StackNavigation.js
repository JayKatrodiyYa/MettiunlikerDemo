import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screen/SignIn/SignInScreen';
import SignUpScreen from '../screen/SignUp/SignUpScreen';
import TabNavigation from './TabNavigation';
import MessageScreen from '../screen/Message/MessageScreen';
import MyPopup from '../common/Popup';
import GiftScreen from '../screen/Gift/GiftScreen';
import SentGiftScreen from '../screen/Sentgifts/SentgiftsScreen';
import SearchScreen from "../screen/Search/SearchScreen";
import PaymentMethodScreen from "../screen/Payment Method/PaymentMethodScreen"
import Authatication from '../screen/Authatication/AuthScreen';
import AddCardScreen from '../screen/Add Card/AddCardScreen';
import UserUpdate from '../screen/UserUpdate/UserUpdate';
import ProductDetailsScreen from '../screen/Product-Detail/ProductDetailScreen';
import ProfileScreen from '../screen/Profile/ProfileScreen';
import OnboardingScreen from '../screen/Onboarding/OnboardingScreen';
import ContactScreen from '../screen/Contact/ContactScreen';
import CreateGroupScreen from '../screen/Create-Group/CreateGroupScreen';

const Stack = createNativeStackNavigator()

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='AuthScreen'>
      <Stack.Screen name='tab' component={TabNavigation} />
      <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
      <Stack.Screen name='AuthScreen' component={Authatication} />
      <Stack.Screen name='SignInScreen' component={SignInScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      {/* <Stack.Screen name="SettingScreen" component={SettingScreen} /> */}
      <Stack.Screen name="Popup" component={MyPopup} />
      <Stack.Screen name='Gift' component={GiftScreen} />
      <Stack.Screen name='SentGift' component={SentGiftScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
      <Stack.Screen name='PaymentMethod' component={PaymentMethodScreen} />
      <Stack.Screen name='AddCard' component={AddCardScreen} />
      <Stack.Screen name="UserUpdate" component={UserUpdate} />
      <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Contact' component={ContactScreen} />
      <Stack.Screen name='Create-Group' component={CreateGroupScreen} />
    </Stack.Navigator>
  )
}