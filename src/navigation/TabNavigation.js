import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home/HomeScreen';
import AddUser from '../screen/Add-User/AddUser';
import CallScreen from '../screen/Calls/CallScreen';
import SettingScreen from '../screen/Setting/SettingScreen';
import ProductScreen from '../screen/Product/ProductScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../styles/colors';


const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: 'black',
                tabBarActiveTintColor: Colors.Green,
            }} >
            <Tab.Screen name="Calls" component={CallScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon size={28} name='video-call' color={color} />
                    )
                }} />
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ tintColor, focused, color }) => (
                    <MaterialIcons size={28} name={focused ? 'message-reply-text' : 'message-reply-text-outline'} color={color} />
                )
            }} />
            <Tab.Screen name='FireStore' component={ProductScreen} options={{
                tabBarIcon: ({ tintColor, focused, color }) => (
                    <Icon size={28} name='restore' color={color} />
                )
            }} />
            <Tab.Screen name="SettingScreen" component={SettingScreen} options={{
                tabBarIcon: ({ tintColor, focused, color }) => (
                    <Icon size={28} name={focused ? 'person' : 'person-outline'} color={color} />
                )
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabImg: {
        height: 24,
        width: 24,
        resizeMode: 'contain'
    },
})