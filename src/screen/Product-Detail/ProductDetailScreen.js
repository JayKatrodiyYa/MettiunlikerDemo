import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import axios from 'axios';
import { styles } from './styles';
import { commonStyle } from '../../styles/commonStyle';
import { images } from '../../common/Images';
import { useNavigation } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import { s, vs } from 'react-native-size-matters';
import { Colors } from '../../styles/colors';
import { Button, ImgButton } from '../../common/Button';

const ProductDetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { id } = route.params;
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);


    const onPageChange = (event) => {
        const { position } = event.nativeEvent;
        setCurrentPage(position);
    };

    useEffect(() => {
        fetchUsers()
    }, []);

    const headers = {
        "Content-Type": "text/json"
    };

    const fetchUsers = async () => {
        try {
            const response = await axios
                .get(`https://dummyjson.com/products/${id}`, { hello: 'world' }, {
                    headers: {
                        'Content-type': 'multipart/form-date'
                    }
                });
                console.log('response', response.headers);
            setUsers(response.data);
        } catch (error) {
            console.error('error--->', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.item} >
                <View style={[styles.headerView, commonStyle.rowSpace]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image source={images.backBlackArrow} style={styles.backImg} />
                    </TouchableOpacity>
                    <Text style={styles.title} numberOfLines={2}>{users.title}</Text>
                    <TouchableOpacity>
                        <Image source={images.cart} style={styles.cartImg} />
                    </TouchableOpacity>
                </View>
                <PagerView style={{ width: '100%', height: '60%' }}
                    initialPage={0}
                    onPageSelected={onPageChange}
                >
                    {users?.images?.map((item, i) => {
                        return (
                            <Image key={i + 1} source={{ uri: item }} style={styles.image} />
                        )
                    })}
                </PagerView>
                <View style={[commonStyle.rowCenter, { alignSelf: 'center' }]}>
                    {users?.images?.map((_, index) => {
                        return (
                            // <View style={styles.activeIndicator} />
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    currentPage === index && styles.activeDot,
                                ]}
                            />
                        )
                    })}
                </View>
                <View style={{ marginHorizontal: s(15) }}>
                    <Text style={styles.title} numberOfLines={1}>{users.description}</Text>
                    <Text style={styles.priceTxt}>Price : ${users.price}</Text>
                    <Text style={styles.description}>DiscountPercentage : {users.discountPercentage}</Text>
                    <Text style={styles.description}>Rating : {users.rating}</Text>
                    <Text style={styles.description}>Stock : {users.stock}</Text>
                </View>
            </View>
            <ImgButton title='Add to Card' />

        </View>
    );
};

export default ProductDetailScreen;

