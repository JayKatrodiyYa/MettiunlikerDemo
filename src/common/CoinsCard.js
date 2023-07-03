import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity,Modal } from 'react-native';
import { images } from '../common/Images';
import { ms, s, vs } from 'react-native-size-matters';
import { Colors } from '../styles/colors';
import { Font } from './Fonts';
import GooglePay from '../common/GooglePay';


const CoinsCard = ({ item }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.qualityText} >{item.quality}</Text>
      <Text style={styles.titleText} >{item.title}</Text>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={{ color: Colors.White, fontSize: 12 }} >{item.price}</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible}
          onBackdropPress={toggleModal}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            setModalVisible(!isModalVisible);
          }}
        >
          <GooglePay onClick={toggleModal} />
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: vs(150),
    width: '47%',
    borderRadius: 15,
    backgroundColor: Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vs(20),
  },
  image: {
    width: s(60),
    height: vs(60),
    resizeMode: 'contain'
  },
  titleText: {
    fontSize: 15,
    color: Colors.Blue,
    fontFamily: Font.PoppinsMedium
  },
  qualityText: {
    fontSize: 15,
    color: Colors.Blue,
    fontFamily: Font.PoppinsMedium
  },
  button: {
    backgroundColor: Colors.Green,
    width: s(100),
    justifyContent: 'center',
    height: vs(30),
    borderRadius: 20,
    alignItems: 'center',
    // marginTop: vs(14),
  },
});

export default CoinsCard;
