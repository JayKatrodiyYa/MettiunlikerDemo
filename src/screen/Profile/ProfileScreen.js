import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { images } from '../../common/Images';
import { s, vs, ms } from 'react-native-size-matters';
import { commonStyle } from '../../styles/commonStyle';
import { useNavigation } from '@react-navigation/native';
import { Font } from '../../common/Fonts';
import { Colors } from '../../styles/colors';


const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerView} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImage} source={images.backArrow} />
                </TouchableOpacity>
                <View />
                <View />
            </View>
            <View style={[commonStyle.m_20]}>
                <View style={styles.item}>
                    <Image source={images.ProfileImg} style={styles.image} />
                    <Text style={styles.title} >Jhon Abraham</Text>
                    <Text style={styles.description} >@jhonabraham</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: vs(15) }}>
                <TouchableOpacity style={styles.settingImgView}>
                    <Image source={images.Chat} style={styles.iconImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingImgView}>
                    <Image source={images.videoCall} style={styles.iconImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingImgView}>
                    <Image source={images.call} style={styles.iconImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingImgView}>
                    <Image source={images.moreDetail} style={styles.iconImg} />
                </TouchableOpacity>
            </View>
            <View style={styles.mScreen}>
                <View style={styles.detailView}>
                    <View style={styles.detailScreen}>
                        <Text style={styles.detailHeadTxt}>Display Name</Text>
                        <Text style={styles.detailTxt}>Jhon Abraham</Text>
                    </View>
                    <View style={styles.detailScreen}>
                        <Text style={styles.detailHeadTxt}>Email Address</Text>
                        <Text style={styles.detailTxt}>jhonabraham20@gmail.com</Text>
                    </View>
                    <View style={styles.detailScreen}>
                        <Text style={styles.detailHeadTxt}>Address</Text>
                        <Text style={styles.detailTxt}>33 street west subidbazar,sylhet</Text>
                    </View>
                    <View style={styles.detailScreen}>
                        <Text style={styles.detailHeadTxt}>Phone Number</Text>
                        <Text style={styles.detailTxt}>(320) 555-0104</Text>
                    </View>
                </View>
                <View style={styles.mediaShareImg}>
                    <View style={[commonStyle.rowSpace, styles.mediaShareTxtView]}>
                        <Text style={styles.detailHeadTxt}>Media Shared</Text>
                        <Text style={styles.mediaShareTxt}>View All</Text>
                    </View>
                    <View style={styles.shareImgView}>
                        <Image source={images.mediaShareImg} style={styles.wediaShareImg} />
                        <Image source={images.mediaShareImg1} style={styles.wediaShareImg}/>
                        <Image source={images.mediaShareImg2} style={styles.wediaShareImg}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileScreen;