import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../styles/colors';
import { ms, s, vs } from 'react-native-size-matters';
import { Font } from './Fonts';
import { commonStyle } from '../styles/commonStyle';
import { images } from './Images';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { fetchUsers, setLoading } from '../redux/action/userActions';

const MessagesCard = () => {
  const navigation = useNavigation();
  const flatListRef = useRef();
  const dispatch = useDispatch();
  const users = useSelector(state => state?.users?.users);
  const fetching = useSelector(state => state?.loading);

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  const deleteItem = (id) => {
    // Dispatch an action to delete the item from the Redux store
    // For example: dispatch(deleteUser(id));
  };

  const renderItem = ({ item }) => {
    const renderRightActions = (progress, dragX) => {
      const trans = dragX.interpolate({
        inputRange: [0, 100, 100],
        outputRange: [-10, -20, -80],
      });
      return (
        <TouchableOpacity onPress={() => deleteItem(item.id)}>
          <Animated.View style={[styles.deleteTextContainer, { transform: [{ translateX: trans }] }]}>
            <Image source={images.Delete} style={styles.deleteImg} />
          </Animated.View>
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('MessageScreen')}>
          <View style={styles.container}>
            <View style={[commonStyle.rowSpace, commonStyle.m_20]}>
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View>
                  <Text style={styles.title}>
                    {item.firstName} {item.lastName}
                  </Text>
                  <Text style={styles.description}>{item.email}</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 10 }}>{item.birthDate}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Swipeable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: vs(2) }} />
      {fetching ? (
        <ActivityIndicator color="black" style={{ flex: 1, alignSelf: 'center' }} />
      ) : (
        <GestureHandlerRootView style={styles.container}>
          <FlatList
            ref={flatListRef}
            data={users}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 210 }}
          />
        </GestureHandlerRootView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: vs(8),
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 17,
    color: Colors.Black,
    marginHorizontal: s(10),
    fontFamily: Font.CarosSoftBold,
  },
  description: {
    marginHorizontal: s(10),
    fontSize: 12,
  },
  image: {
    width: ms(50),
    height: ms(50),
    borderRadius: ms(50) / 2,
    resizeMode: 'contain',
  },
  deleteTextContainer: {
    marginVertical: vs(8),
    width: ms(45),
    height: ms(45),
    borderRadius: ms(50) / 2,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: s(15),
  },
  deleteText: {
    color: 'white',
    fontFamily: Font.CarosSoftBold,
    fontSize: 16,
    paddingVertical: 10,
  },
  deleteImg: {
    width: ms(20),
    height: ms(20),
    borderRadius: ms(20) / 2,
    resizeMode: 'contain',
  },
});

export default MessagesCard;
