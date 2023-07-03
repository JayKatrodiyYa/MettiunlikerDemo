import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { s, vs, ms } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { images } from '../common/Images'
import { Font } from './Fonts';
import { Colors } from '../styles/colors';

const MyPopup = ({ onClick }) => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onClick} style={{ marginRight: s(80) }}>
                    <Image source={images.close} />
                </TouchableOpacity>
                <Text style={styles.hText} >Share Content</Text>
            </View>
            <View style={styles.item}>
                <View style={styles.tabContainer}>
                    <View style={styles.tabImageContainer}>
                        <Image style={styles.tabImage} source={images.camera} />
                    </View>
                </View>
                <TouchableOpacity >
                    <View>
                        <Text style={styles.title} >Camera</Text>
                        <Text style={styles.description} >Click a Photo</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <View style={styles.tabContainer}>
                    <View style={styles.tabImageContainer}>
                        <Image style={styles.tabImage} source={images.Document} />
                    </View>
                </View>
                <TouchableOpacity >
                    <View>
                        <Text style={styles.title} >Documents</Text>
                        <Text style={styles.description} >Share your files</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <View style={styles.tabContainer}>
                    <View style={styles.tabImageContainer}>
                        <Image style={styles.tabImage} source={images.CreatePoll} />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Gift")}
                >
                    <View>
                        <Text style={styles.title} >Create a poll</Text>
                        <Text style={styles.description} >Create a poll for any querry</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <View style={styles.tabContainer}>
                    <View style={styles.tabImageContainer}>
                        <Image style={styles.tabImage} source={images.Media} />
                    </View>
                </View>
                <TouchableOpacity >
                    <View>
                        <Text style={styles.title} >Media</Text>
                        <Text style={styles.description} >Share photos and videos</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <View style={styles.tabContainer}>
                    <View style={styles.tabImageContainer}>
                        <Image style={styles.tabImage} source={images.Contact} />
                    </View>
                </View>
                <TouchableOpacity >
                    <View>
                        <Text style={styles.title} >Contact</Text>
                        <Text style={styles.description} >Share your contacts</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <View style={styles.tabContainer}>
                    <View style={styles.tabImageContainer}>
                        <Image source={images.Location} style={styles.tabImage} />
                    </View>
                </View>
                <TouchableOpacity >
                    <View>
                        <Text style={styles.title} >Location</Text>
                        <Text style={styles.description} >Share your location</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 35,
        flex: 1,
        backgroundColor: Colors.Green,
        marginTop: vs(165),
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginLeft: s(10)
    },
    title: {
        fontSize: 15,
        color: Colors.White,
        fontFamily: Font.CarosSoftBold,
    },
    item: {
        padding: ms(7),
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.Grey,
    },
    description: {
        marginHorizontal: s(10),
        fontSize: 12,
        color: Colors.Grey
    },

    hText: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontFamily: Font.PoppinsBold,

    },
    tabContainer: {
        height: ms(60),
        width: ms(50),
        justifyContent: 'center',
    },
    tabImageContainer: {
        height: '55%',
        width: '55%',
        borderRadius: 200,
        borderWidth: 22,
        borderColor: Colors.White,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabImage: {
        height: vs(20),
        width: s(20),
        resizeMode: 'contain'
    }
});

export default MyPopup;