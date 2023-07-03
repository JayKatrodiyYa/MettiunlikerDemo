import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles'
import { images } from '../../common/Images'
import { Colors } from '../../styles/colors';

const PaymentMethodScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigation = useNavigation();

  const paymentMethods = [
    {
      id: 1,
      name: '**********4444',
      Image: images.Master,
      date: 'Expires 09/25',
    },
    {
      id: 2,
      name: '**********3343',
      Image: images.Visa,
      date: 'Expires 09/25',
      tintColor: Colors.Blue,
    },
    {
      id: 3,
      name: 'Petra-stark@gmail.com',
      Image: images.PayPal,
      fontsize: 14,
    },
  ];

  const handleMethodSelection = (method) => {
    setSelectedMethod(method);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backView} >
          <Image style={styles.BackImage} source={images.CloseBlack} />
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.headerTxt}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payments methods</Text>
        <Text style={styles.description}>choose desired payment type. We offer easy ways for payments on our app</Text>
      </View >
      {paymentMethods.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={[
            styles.paymentMethod,
            selectedMethod === method ? styles.selectedMethod : null,
          ]}
          onPress={() => navigation.navigate('AddCard')}
        >
          <Image style={[styles.methodImage, { tintColor: method.tintColor }]} source={method.Image} />
          <View >
            <Text style={[styles.methodName, { fontSize: method.fontsize, }]}>{method.name}</Text>
            <Text style={styles.methodDate}>{method.date}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <Text style={styles.midTitle}>CURRENT METHOD</Text>
      <View style={styles.dataTxt}>
        <View style={styles.cashView} >
          <Image style={styles.cashImage} source={images.CashPayment} />
        </View>
        <TouchableOpacity>
          <View>
            <Text style={styles.methodName}>Cash payment</Text>
            <Text style={styles.methodDate}>Default method</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImgView} >
          <Image style={styles.bottomImg} source={images.BottomArrow} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentMethodScreen;
