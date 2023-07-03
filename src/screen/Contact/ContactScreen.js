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
    const renderItem = ({ item }) => {
        return (
            <View >
                <TouchableOpacity
                    style={[commonStyle.rowSpace, commonStyle.m_20]}
                    onPress={() => navigation.navigate("MessageScreen")}
                >
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View>
                            <Text style={styles.title} >{item.firstName} {item.lastName}</Text>
                            <Text style={styles.description} >{item.email}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    const clickOnFunction = () => {
        actionRef.current.show()
    }

    const sortedUsers = [...users].sort((a, b) => {
        const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
        const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    const generateSections = (data) => {
        const sections = [];
        let currentSection = { title: '', data: [] };

        data.forEach((item) => {
            const name = `${item.firstName} ${item.lastName}`;
            const firstLetter = name.charAt(0).toUpperCase();

            if (currentSection.title === '' || currentSection.title !== firstLetter) {
                if (currentSection.title !== '') {
                    sections.push(currentSection);
                }
                currentSection = { title: firstLetter, data: [] };
            }
            currentSection.data.push(item);
        });
        if (currentSection.title !== '') {
            sections.push(currentSection);
        }
        return sections;
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerView} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backImage} source={images.backArrow} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerText}>Contact</Text>
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
                            <Text style={styles.ContactListTxt}>My Contact</Text>
                        </View>
                        <SectionList
                            ref={flatListRef}
                            sections={generateSections(sortedUsers)}
                            renderItem={({ item }) => renderItem({ item })}
                            renderSectionHeader={({ section: { title } }) => (
                                <View style={styles.sectionHeader}>
                                    <Text style={styles.sectionHeaderText}>{title}</Text>
                                </View>
                            )}
                            keyExtractor={item => item.id.toString()}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 100 }}
                        />
                    </View>

                }
                <View>
                </View>
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