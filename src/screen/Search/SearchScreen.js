import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from "./styles";
import first from '../../assets/img/profile.png';
import second from '../../assets/img/2.png';
import third from '../../assets/img/3.png';
import fourth from '../../assets/img/4.png';
import fifth from '../../assets/img/5.png';
import sixth from '../../assets/img/6.png';
import { commonStyle } from "../../styles/commonStyle";

const DATA = [
    {
        id: '1',
        title: 'Alex Linderson',
        image: first,
        decription: 'How are you today?',
        date: '2023-06-01'
    },
    {
        id: '2',
        title: 'Team Align',
        image: second,
        decription: 'Don’t miss to attend the meeting.',
        date: '2023-06-02'
    },
    {
        id: '3',
        title: 'John Ahraham',
        image: third,
        decription: 'Hey! Can you join the meeting?',
        date: '2023-06-10'
    },
    {
        id: '4',
        title: 'Sabila Sayma',
        image: fourth,
        decription: 'How are you today?',
        date: '2023-05-27'
    },
    {
        id: '5',
        title: 'John Borino',
        image: fifth,
        decription: 'Have a good day 🌸',
        date: '2023-06-01'
    },
    {
        id: '6',
        title: 'Angel Dayna',
        image: sixth,
        decription: 'How are you today?',
        date: '2023-06-05'
    },
    {
        id: '7',
        title: 'Sabila Sayma',
        image: fourth,
        decription: 'How are you today?',
        date: '2023-06-10'
    },
    {
        id: '8',
        title: 'Team Align',
        image: second,
        decription: 'Don’t miss to attend the meeting.',
        date: '2023-06-07'
    },
    {
        id: '9',
        title: 'Alex Linderson',
        image: first,
        decription: 'How are you today?',
        date: '2023-05-28'
    },
    {
        id: '10',
        title: 'Angel Dayna',
        image: sixth,
        decription: 'How are you today?',
        date: '2023-06-04'
    },
    {
        id: '11',
        title: 'Sabila Sayma',
        image: fourth,
        decription: 'How are you today?',
        date: '2023-06-08'
    },
    {
        id: '12',
        title: 'Team Align',
        image: second,
        decription: 'Don’t miss to attend the meeting.',
        date: '2023-06-11'
    },
    {
        id: '14',
        title: 'John Ahraham',
        image: third,
        decription: 'Hey! Can you join the meeting?',
        date: '2023-06-09'
    },
];

const Stack = createNativeStackNavigator();

const Item = ({ title }) => {
	return (
		<View style={styles.item}>
			<Text>{title}</Text>
		</View>
	);
};

const renderItem = ({ item }) => {
	return (
		<TouchableOpacity style={[commonStyle.rowSpace, commonStyle.m_20]}
		>
			<View style={styles.item}>
				<Image source={item.image} style={styles.image} />
				<View>
					<Text style={styles.title} >{item.title}</Text>
					<Text style={styles.description} >{item.decription}</Text>
				</View>
			</View>
			<View>
				<Text style={{ fontSize: 10 }}>{item.date}</Text>
			</View>
		</TouchableOpacity>
	);
};

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data: DATA,
			error: null,
			searchValue: "",
		};
		this.arrayholder = DATA;
	}

	searchFunction = (text) => {
		const updatedData = this.arrayholder.filter((item) => {
			const item_data = `${item.title.toUpperCase()})`;
			const text_data = text.toUpperCase();
			return item_data.indexOf(text_data) > -1;
		});
		this.setState({ data: updatedData, searchValue: text });
	};

	render() {
		return (
			<View style={styles.container}>
				<SearchBar
					placeholder="Search Here..."
					lightTheme
					round
					value={this.state.searchValue}
					onChangeText={(text) => this.searchFunction(text)}
					autoCorrect={false}
				/>
				<FlatList
					data={this.state.data}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</View>
		);
	}
}
const App = () => {
	return (
		<Stack.Navigator  >
			<Stack.Screen name="Search" component={Search} />
		</Stack.Navigator>
	);
}


export default App;




