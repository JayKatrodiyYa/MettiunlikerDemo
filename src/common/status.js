import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import first from '../assets/img/profile.png';
import second from '../assets/img/2.png';
import third from '../assets/img/3.png';
import fourth from '../assets/img/4.png';
import fifth from '../assets/img/5.png';
import sixth from '../assets/img/6.png';
import { ms, s, vs } from 'react-native-size-matters';
import { Colors } from '../styles/colors';

const DATA = [
    {
        id: '1',
        title: 'My Status',
        image: first,
    },
    {
        id: '2',
        title: 'Adil',
        image: second,
    },
    {
        id: '3',
        title: 'Marina',
        image: third,
    },
    {
        id: '4',
        title: 'Dean',
        image: fourth,
    },
    {
        id: '5',
        title: 'Max',
        image: fifth,
    },
    {
        id: '6',
        title: 'Angle',
        image: sixth,
    },
];

const ContactScreen = () => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.item}
            >
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ paddingTop: vs(20), }}>
                <FlatList
                    data={DATA}
                    style={{ width: '110%' }}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingLeft: s(20), paddingRight: s(30) }}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        marginRight: ms(20),
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
        color: Colors.White,
        width: s(50)
    },
    image: {
        width: ms(50),
        height: ms(50),
        borderRadius: ms(50) / 2,
        resizeMode: 'contain',
    },
});

export default ContactScreen;
