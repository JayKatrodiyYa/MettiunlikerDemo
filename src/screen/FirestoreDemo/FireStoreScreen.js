import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { styles } from './styles';
import { images } from '../../common/Images';
import { commonStyle } from '../../styles/commonStyle';
import { s } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

export default function FireStoreScreen({ }) {
    const navigation = useNavigation()
    const [data, setData] = useState([]);

    const usersCollection = firestore().collection('users');

    useEffect(() => {
        return usersCollection.onSnapshot((docSnap) => {
            const newData = [];
            docSnap.forEach(item => {
                const newObj = {
                    docId: item.id,
                    ...item.data()
                }
                newData.push(newObj);
            })
            console.log('newData---', newData);
            setData(newData);
        });
    }, []);

    const handleNavigation = (item) => {
        navigation.navigate('UserList', {
            item: item
        });
    }

    const DeleteData = (item) => {
        firestore()
            .collection('users')
            .doc(item.docId)
            .delete()
            .then(() => {
                console.log('User Deleted!');
            });
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {data.map((item, i) => (
                    <View key={i.toString()} style={[styles.listView, commonStyle.rowSpace]}>
                        <View style={commonStyle.rowCenter}>
                            <Image source={images.profile} style={styles.ProfileImg} />
                            <View style={{ paddingLeft: s(10) }}>
                                <Text key={item.id} style={styles.nameTxt}>{item.name}</Text>
                                <Text key={item.id} style={styles.ageTxt}>{item.age}</Text>
                                <Text key={item.id} style={styles.ageTxt}>{item.about}</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity style={styles.addDataView} onPress={() => DeleteData(item)}>
                                <Image source={images.Delete} style={styles.addData} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addDataView} onPress={() => handleNavigation(item)}>
                                <Image source={images.Edit} style={styles.addData} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}