import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../common/Images';
import { commonStyle } from '../../styles/commonStyle';
import { vs } from 'react-native-size-matters';
import { Colors } from '../../styles/colors';
import { FlatList } from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'Account',
        image: images.Account,
        decription: 'Privacy, security, change number'
    },
    {
        id: '2',
        title: 'Chat',
        image: images.Chat,
        decription: 'Chat history,theme,wallpapers',
    },
    {
        id: '3',
        title: 'Notifications',
        image: images.Notifications,
        decription: 'Messages, group and others'
    },
    {
        id: '4',
        title: 'Help',
        image: images.Help,
        decription: 'Help center,contact us, privacy policy',
    },
    {
        id: '5',
        title: 'Storage and data',
        image: images.Storage,
        decription: 'Network usage, stogare usage'
    },
    {
        id: '6',
        title: 'Invite a friend',
        image: images.Invite,
        // decription: 'How are you today?'
    },
];


const SettingScreen = () => {
    const navigation = useNavigation();

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => index === 5 ? navigation.navigate('Contact') : null}
                style={[commonStyle.rowSpace, commonStyle.m_20, { marginVertical: vs(2) }]} >
                <View style={styles.item}>
                    <View style={styles.settingImgView}>
                        <Image source={item.image} style={styles.iconImg} />
                    </View>
                    <View>
                        <Text style={styles.title} >{item.title}</Text>
                        <Text style={styles.description} >{item.decription}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerView} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImage} source={images.backArrow} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerText}>Settings</Text>
                </View>
                <View />
            </View>
            <View style={styles.mScreen}>
                <View style={[{ marginVertical: vs(15) }, commonStyle.rowSpace, commonStyle.m_20]}>
                    <View style={styles.item}>
                        <Image source={images.profile} style={styles.image} />
                        {/* <View> */}
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Text style={styles.title} >Nazrul Islam</Text>
                            <Text style={styles.description} >Never give up 💪</Text>
                        </TouchableOpacity>
                        {/* </View> */}
                    </View>
                    <TouchableOpacity>
                        <Image source={images.QRScaner} style={styles.QRImg} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    height: 0.7,
                    backgroundColor: Colors.LightGrey,
                }} />
                <View style={[{ marginTop: vs(20) }]}>
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    )
}

export default SettingScreen;