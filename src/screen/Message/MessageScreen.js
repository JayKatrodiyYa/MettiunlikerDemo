import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Modal } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../common/Images';
import { commonStyle } from '../../styles/commonStyle';
import Popup from '../../common/Popup';
import { Colors } from '../../styles/colors';

const MessageScreen = () => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.headerView, commonStyle.rowSpace]}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image source={images.backBlackArrow} style={styles.backImg} />
                </TouchableOpacity>
                <View style={styles.item}>
                    <Image source={images.profile} />
                    <TouchableOpacity>
                        <View>
                            <Text style={styles.title} >Jhon Abraham</Text>
                            <Text style={styles.description} >Active now</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image source={images.call} style={{ marginLeft: 40 , tintColor: Colors.Black }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images.videoCall} style={{ marginLeft: 20 }} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.today}>Today</Text>
                    <Text style={styles.rmessage}>Hello! Jhon abraham</Text>
                    <Text style={styles.time} >09:25 AM</Text>
                </View>
                <View style={styles.item}>
                    <Image source={images.profile} style={styles.profileImg} />
                    <View>
                        <Text style={styles.profileName} >Jhon Abraham</Text>
                        <Text style={styles.ymessage} >Hello ! Nazrul How are you?</Text>
                        <Text style={styles.time} >09:25 AM</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.rmessage}>You did your job well!</Text>
                    <Text style={styles.time} >09:25 AM</Text>
                </View>
                <View style={styles.item}>
                    <Image source={images.profile} style={styles.profileImg} />
                    <View>
                        <Text style={styles.profileName} >Jhon Abraham</Text>
                        <Text style={styles.ymessage} >Have a great working week!!</Text>
                        <Text style={styles.ymessage} >Hope you like it</Text>
                        <Text style={styles.time} >09:25 AM</Text>
                    </View>
                </View>
                <View>
                    <View style={styles.voice}>
                        <Image source={images.play} style={{ marginHorizontal: 5 }} />
                        <Image source={images.voice} style={{ marginHorizontal: 5 }} />
                        <Image source={images.time} style={{ marginHorizontal: 5 }} />
                    </View>
                    <Text style={styles.time} >09:25 AM</Text>
                </View>
                <View style={styles.item}>
                    <Image source={images.profile} style={styles.profileImg} />
                    <View>
                        <Text style={styles.profileName} >Jhon Abraham</Text>
                        <Text style={styles.ymessage} >Look at my work man!!</Text>
                        <Text style={styles.time} >09:25 AM</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image source={images.profile} style={styles.profileImg} />
                    <View>
                        <Text style={styles.profileName} >Jhon Abraham</Text>
                        <View style={styles.voice1}>
                            <Image source={images.image1} style={{ marginHorizontal: 5 }} />
                            <Image source={images.image2} style={{ marginHorizontal: 5 }} />
                        </View>
                        <Text style={styles.time} >09:25 AM</Text>
                    </View>
                </View>
            </ScrollView>
            <KeyboardAvoidingView style={[styles.textinput, commonStyle.rowSpace]}>
                <TouchableOpacity onPress={toggleModal}>
                    <Image source={images.attachment} />
                </TouchableOpacity>
                <View style={[styles.input, commonStyle.rowSpace]}>
                    <TextInput placeholder="Write your message" />
                    <TouchableOpacity>
                        <Image source={images.document} style={styles.docImg} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image source={images.blackCamera} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={images.mic} />
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <Modal visible={isModalVisible}
                onBackdropPress={toggleModal}
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(!isModalVisible);
                }}
            >
                <Popup onClick={toggleModal} />
            </Modal>
        </View>
    )
}

export default MessageScreen;