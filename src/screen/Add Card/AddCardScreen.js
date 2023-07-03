import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from './styles';
import { images } from '../../common/Images';
import { useNavigation } from '@react-navigation/native';

const AddCardScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image style={styles.BackImage} source={images.backBlackArrow} />
                </TouchableOpacity>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Add credit card</Text>
            </View >
            <View style={styles.inputView}>
                <Text style={styles.inputTxt}>Name</Text>
                <TextInput style={styles.inputData} placeholder='Enter Card Name' />
                <Text style={styles.inputTxt}>Credit card number</Text>
                <TextInput style={styles.inputData} secureTextEntry={true} placeholder='Enter Card Number' />
            </View>
            <View style={styles.scanerVeiw}>
                <Image source={images.Scaner} style={styles.ScanerImg} />
                <Text style={styles.ScanerTxt}>Scan card</Text>
            </View>
            <View style={styles.expireView}>
                <View>
                    <Text style={styles.inputTxt}>Expire</Text>
                    <TextInput
                        style={styles.ExpireInput}
                        placeholder='Enter Date'
                        keyboardType="numeric"
                    />
                </View>
                <View>
                    <Text style={styles.inputTxt}>CVV</Text>
                    <TextInput
                        style={styles.ExpireInput}
                        placeholder='Enter CVV'
                        keyboardType="numeric"
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <View style={styles.bottonView}>
                <Text style={styles.bottonTextView}>
                    Debit cards are accepted at some locations and for some categories.
                </Text>
                <View style={styles.cardView}>
                    <Image source={images.VisaCard} style={styles.cardImg} />
                    <Image source={images.AmericanExpress} style={styles.cardImg} />
                    <Image source={images.DiscoverCard} style={styles.cardImg} />
                    <Image source={images.MasterCard} style={styles.cardImg} />
                </View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonTxt}>ADD PAYMENT METHOD</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default AddCardScreen;