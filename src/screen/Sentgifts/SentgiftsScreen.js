import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Modal, Alert } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../common/Images';
import { ms, s, vs } from 'react-native-size-matters';
import CoinsCard from '../../common/CoinsCard';
import GooglePay from '../../common/GooglePay';

const DATA = [
  {
    id: '1',
    quality: 150,
    title: 'Standard',
    image: images.Coins1,
    price: "$4.33"
  },
  {
    id: '2',
    quality: 650,
    title: '15% off',
    image: images.Coins2,
    price: "$3333"
  },
  {
    id: '3',
    quality: 1050,
    title: '20% off',
    image: images.Coins3,
    price: "$2222"
  },
  {
    id: '4',
    quality: 3333,
    title: '20% off',
    image: images.Coins4,
    price: "$2222"
  },
  {
    id: '5',
    quality: 555,
    title: '40% off',
    image: images.Coins5,
    price: "$1433"
  },
  {
    id: '6',
    quality: 999,
    title: '50% off',
    image: images.Coins6,
    price: "$2433"
  },
  {
    id: '7',
    quality: 555,
    title: '40% off',
    image: images.Coins5,
    price: "$1433"
  },
  {
    id: '8',
    quality: 999,
    title: '50% off',
    image: images.Coins6,
    price: "$2433"
  },
];
const header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Text style={styles.VIPText}>VIP Package</Text>
      <View style={styles.PackageCard}>
        <View style={styles.CardContent}>
          <View style={styles.textView}>
            <Text style={styles.titleView}>VIP+</Text>
            <Image source={images.sCoin} style={{ height: ms(19), width: ms(19) }} />
            <Text style={{ color: '#EAE70A', fontSize: 17 }}>3000</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.description}>get</Text>
            <Image source={images.sCoin} style={{ height: ms(15), width: ms(15) }} />
            <Text style={{ color: '#EAE70A', fontSize: 12 }}>3000 coins</Text>
          </View>
          <Text style={styles.description}>Every month</Text>
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <Text style={styles.priceBtn} >$ 33,444 / Month $ 56.66</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          animationType="slide"
          transparent={true}
        >
          <GooglePay onClick={toggleModal} onPressOut={() => setModalVisible(false)} />
        </Modal>
      </View>
      <Text style={styles.VIPText}>Coins</Text>
    </View>
  )
}

const SendGiftScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backView} >
          <Image style={styles.BackImage} source={images.BlueBack} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Store</Text>
        <TouchableOpacity style={styles.coinView}>
          <Image source={images.sCoin} />
          <Text style={styles.headerCoins}>0</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.PackageView}>
        <FlatList
          data={DATA}
          ListHeaderComponent={header}
          renderItem={({ item }) => <CoinsCard item={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: vs(50) }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  )
}
export default SendGiftScreen;