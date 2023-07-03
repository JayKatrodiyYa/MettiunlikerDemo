import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../common/Images';
import axios from 'axios';

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

const ProductScreen = () => {
    const navigation = useNavigation();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleNavigation = (item) => {
        navigation.navigate('ProductDetails',
            { id: item.id }
        );
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://dummyjson.com/products');
            setUsers(response.data.products);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };
    const renderItem = ({ item }) => {
        return (
            <View style={styles.productView}>
                <View style={styles.item}>
                    <Image source={{ uri: item.thumbnail }} style={styles.image} />
                    <TouchableOpacity style={{}}
                        onPress={() => handleNavigation(item)}
                    >
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                        <Text style={styles.description} >$ {item.price}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator color="white" style={styles.indicator} />
            ) :
                <View style={styles.PackageView}>
                    <FlatList
                        data={users}
                        renderItem={renderItem}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            }
        </View>
    )
}
export default ProductScreen;



