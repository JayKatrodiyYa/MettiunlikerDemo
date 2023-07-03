import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Mytextinput from '../UserUpdate/Mytextinput';
import Mybutton from '../UserUpdate/Mybutton';
import { s } from 'react-native-size-matters';

const AddUser = () => {

    let [userName, setUserName] = useState('');
    let [age, setAge] = useState('');
    let [userAbout, setUserAbout] = useState('');

    const handleRegistration = () => {
        if (userName?.length > 0 && age?.length > 0 && userAbout?.length > 0) {
            firestore()
                .collection('users')
                .add({
                    name: userName,
                    age: age,
                    about: userAbout,
                })
        } else {
            alert('Please fill all the details');
        }
    };

    return (
        <View
            style={{
                backgroundColor: 'white',
                flex: 1,
            }}>
            <KeyboardAvoidingView
                behavior="height"
                style={{ flex: 1, marginHorizontal: s(20), }}>
                <Mytextinput
                    placeholder="Enter Name"
                    onChangeText={
                        (userName) => setUserName(userName)
                    }
                    style={{ padding: 10 }}
                />
                <Mytextinput
                    placeholder="Enter Age"
                    onChangeText={
                        (age) => setAge(age)
                    }
                    maxLength={10}
                    keyboardType="numeric"
                    style={{ padding: 10 }}
                />
                <Mytextinput
                    placeholder="Enter About us"
                    onChangeText={
                        (userAbout) => setUserAbout(userAbout)
                    }
                    maxLength={225}
                    numberOfLines={2}
                    multiline={true}
                    style={{ padding: 10 }}
                />
                <Mybutton
                    title="Submit"
                    customClick={handleRegistration}
                />
            </KeyboardAvoidingView>
        </View>
    );
};
export default AddUser;