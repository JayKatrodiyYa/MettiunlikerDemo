import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, LogBox, StatusBar, FlatList, Pressable } from 'react-native';
import { styles } from './styles';
import Message from '../../common/Messagescard';
import { images } from '../../common/Images';
import { commonStyle } from '../../styles/commonStyle';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import { ms, s, vs } from 'react-native-size-matters';

const DATA = [
  {
    id: '1',
    title: 'My Status',
    image: images.profile,
  },
  {
    id: '2',
    title: 'Adil',
    image: images.Pimage2,
  },
  {
    id: '3',
    title: 'Marina',
    image: images.Pimage3,
  },
  {
    id: '4',
    title: 'Dean',
    image: images.Pimage4,
  },
  {
    id: '5',
    title: 'Max',
    image: images.Pimage5,
  },
  {
    id: '6',
    title: 'Angle',
    image: images.Pimage6,
  },
];

const HomeScreen = ({ navigation }) => {
  const [uri, setUri] = useState('');
  const actionRef = useRef();

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [])

  const clickOnFunction = () => {
    actionRef.current.show()
  }

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
    });
  }

  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setUri(image.path);
    });
  }

  const deleteImage = () => {
    setUri('')
  };

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
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='#20A090' />
      <View style={[commonStyle.rowSpace, commonStyle.m_20, { marginTop: vs(20) }]}>
        <TouchableOpacity
          style={styles.SerachView}
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <Image style={styles.SerachImage} source={images.Search} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Home</Text>
        <TouchableOpacity onPress={clickOnFunction} >
          <Image source={uri ? { uri } : images.profile} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
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
      <ActionSheet
        ref={actionRef}
        title={'Which one do you like ?'}
        options={['Click Photo', 'Choose Photo', 'Delete Photo', 'Cancel']}
        cancelButtonIndex={3}
        destructiveButtonIndex={2}
        onPress={(index) => {
          if (index == 0) {
            openCamera()
          }
          if (index == 1) {
            openGallery()
          }
          if (index == 2) {
            deleteImage()
          }
        }}
      />
      <View style={styles.mScreen}>
        <Message />
      </View>
      <Pressable style={styles.bottonView} onPress={() => navigation.navigate("Create-Group")}>
        <Image source={images.CreateGroup} style={styles.CreateGroupImg}/>
      </Pressable>
    </View>
  )

}

export default HomeScreen;