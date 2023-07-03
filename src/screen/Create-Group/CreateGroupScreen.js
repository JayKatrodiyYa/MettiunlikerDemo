import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { images } from '../../common/Images';
import { commonStyle } from '../../styles/commonStyle';
import { Font } from '../../common/Fonts';
import { vs } from 'react-native-size-matters';

const CreateGroupScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerView} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImage} source={images.backBlackArrow} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerText}>Create Group</Text>
                </View>
                <View />
            </View>
            <Text style={[commonStyle.m_20, { fontFamily: Font.CarosSoft }]}>Group Description</Text>
            <Text style={styles.titleTxt}>Make a Group  call with friend's</Text>
            <View style={{flexDirection: 'row', marginVertical: vs(15)}}>
                <View style={styles.GroupTeamView}>
                    <Text style={{ fontSize: 15 }}>Group work</Text>
                </View>
                <View style={styles.GroupTeamView}>
                    <Text>Team  relationship</Text>
                </View>
            </View>
            <Text style={[commonStyle.m_20, { fontFamily: Font.CarosSoft , marginVertical: vs(10)}]}>Group Admin</Text>
        </View>
    )
}

export default CreateGroupScreen