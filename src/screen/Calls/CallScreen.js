import React, { useRef, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator, SectionList } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../common/Images';
import { commonStyle } from '../../styles/commonStyle';
import { vs } from 'react-native-size-matters';
import { Colors } from '../../styles/colors';
import axios from 'axios';
import ActionSheet from 'react-native-actionsheet';

const image = [
    require('../../assets/img/incomingCall.png'),
    require('../../assets/img/outgoingCall.png'),
    require('../../assets/img/missCall.png')
];

const ContactScreen = () => {
    const navigation = useNavigation();

    const [uri, setUri] = useState('');
    const actionRef = useRef();
    const flatListRef = useRef();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://dummyjson.com/users');
            setUsers(response.data.users);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    function getRandomImageIndex() {
        return Math.floor(Math.random() * image.length);
    }
    const randomIndex = getRandomImageIndex();
    const randomImage = image[randomIndex];

    const renderItem = ({ item }) => {
        return (
            <View style={{ marginVertical: vs(5) }}>
                <TouchableOpacity
                    style={[commonStyle.rowSpace, commonStyle.m_20]}
                    onPress={() => navigation.navigate("MessageScreen")}
                >
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View>
                            <Text style={styles.title}>
                                {item.firstName} {item.lastName}
                            </Text>
                            <View style={styles.description}>
                                <Image source={randomImage} style={styles.rendomImgs} />
                                <Text>Today, 07:30 AM </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.CallImgView}>
                        <Image source={images.call} style={styles.CallImg} />
                        <Image source={images.videoCall} style={styles.VideoImg} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    const clickOnFunction = () => {
        actionRef.current.show()
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerView} >
                <TouchableOpacity
                    style={styles.userAddView}
                    onPress={() => navigation.navigate("SearchScreen")}
                >
                    <Image style={styles.SerachImage} source={images.Search} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerText}>Calls</Text>
                </View>
                <TouchableOpacity onPress={clickOnFunction} style={styles.userAddView}>
                    <Image source={uri ? { uri } : images.UserAdd} style={styles.profileImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.mScreen}>
                <View style={{ marginTop: vs(2) }} />
                {loading ? (
                    <ActivityIndicator color="black" style={{ flex: 1, alignSelf: 'center' }} />
                ) :
                    <View>
                        <View style={styles.ContactListView}>
                            <Text style={styles.ContactListTxt}>Recent</Text>
                        </View>
                        <FlatList
                            ref={flatListRef}
                            data={users}
                            renderItem={({ item }) => renderItem({ item })}
                            keyExtractor={item => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 100 }}
                        />
                    </View>
                }
            </View>
            <ActionSheet
                ref={actionRef}
                options={['Create new Contact', 'Add to existing Contact', 'Cancel']}
                cancelButtonIndex={2}
                onPress={(index) => {
                    if (index == 0) {
                        navigation.navigate('AddUser')
                    }
                    if (index == 1) {
                        navigation.navigate('UserUpdate')
                    }

                }}
            />
        </View>
    )
}

export default ContactScreen;