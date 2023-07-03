import { View, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import Mytextinput from './Mytextinput';
import Mybutton from './Mybutton';
import { s } from 'react-native-size-matters';

const UserUpdate = ({ route }) => {

    const { item } = route?.params || {};
    let [userName, setUserName] = useState(item?.name || '');
    let [age, setAge] = useState(item?.age || '');
    let [userAbout, setUserAbout] = useState(item?.about || '');

    const handleRegistration = () => {
        if (userName?.length > 0 && age?.length > 0 && userAbout?.length > 0) {
            firestore()
                .collection('users')
                .doc(item.docId)
                .update({
                    name: userName,
                    age: age,
                    about: userAbout,
                })
                .then(() => {
                    console.log('User updated!');
                });
        }
    };

    return (
        <View
            style={{
                backgroundColor: 'white',
                flex: 1,
                // paddingHorizontal: 35
            }}>
            <KeyboardAvoidingView
                behavior="height"
                style={{ flex: 1, marginHorizontal: s(10), }}>
                <Mytextinput
                    placeholder="Enter Name"
                    onChangeText={
                        (userName) => setUserName(userName)
                    }
                    style={{ padding: 10 }}
                    value={userName}
                />
                <Mytextinput
                    placeholder="Enter Age"
                    onChangeText={
                        (age) => setAge(age)
                    }
                    maxLength={10}
                    keyboardType="numeric"
                    style={{ padding: 10 }}
                    value={age}
                />
                <Mytextinput
                    placeholder="Enter About us"
                    onChangeText={
                        (userAbout) => setUserAbout(userAbout)
                    }
                    maxLength={225}
                    numberOfLines={5}
                    multiline={true}
                    style={{ textAlignVertical: 'top', padding: 10 }}
                    value={userAbout}
                />
                <Mybutton
                    title="Submit"
                    customClick={handleRegistration}
                />
            </KeyboardAvoidingView>
        </View>
    );
};
export default UserUpdate;