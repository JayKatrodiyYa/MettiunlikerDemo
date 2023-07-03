// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import React, { useState } from 'react'
// import { Colors } from '../../styles/colors'
// import { s, vs } from 'react-native-size-matters'
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { useNavigation } from '@react-navigation/native';

// const Logout = () => {
//   const navigation = useNavigation();

//   const signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await auth().signOut();
//       console.log('Sign out Successfully');
//       navigation.navigate("OnboardingScreen")
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.btnView} onPress={signOut} >
//         <Text>LogOut</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.Green
//   },
//   btnView: {
//     backgroundColor: Colors.White,
//     marginHorizontal: s(10),
//     marginVertical: vs(15),
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: vs(50),
//   },
// })

// export default Logout;


// import React, { useState } from "react";
// import { StyleSheet, View, Text, Button } from "react-native";
// import axios from "axios";
// import { Colors } from "../../styles/colors";
// import { useEffect } from "react";
// import { commonStyle } from "../../styles/commonStyle";

// export default function App() {
// 	const [advice, setAdvice] = useState("");

// 	const getRandomId = (min, max) => {
// 		min = Math.ceil(min);
// 		max = Math.floor(max);
// 		return (Math.floor(Math.random() *
// 			(max - min + 1)) + min).toString();
// 	};

// 	const getAdvice = () => {
// 		axios
// 			.get("http://api.adviceslip.com/advice/" +
// 				getRandomId(1, 200))
// 			.then((response) => {
// 				// console.log('response--->', response.data);
// 				setAdvice(response.data.slip.advice);
// 			});
// 	};

// 	const postDataUsingSimplePostCall = () => {
// 		axios
// 			.post('https://jsonplaceholder.typicode.com/posts', {
// 				title: 'foo',
// 				body: 'bar',
// 				userId: 1,
// 			})
// 			.then(function (response) {
// 				// handle success
// 				alert(JSON.stringify(response.data));
// 				console.log('foo', response.data);
// 			})
// 			.catch(function (error) {
// 				// handle error
// 				alert(error.message);
// 			});
// 	};
// 	// useEffect(() => {
// 	//   getAdvice()
// 	// }, [])

// 	return (
// 		<View style={styles.container}>
// 			<View style={[commonStyle.alignCenter, { margin: 20 }]}>
// 				<Button title="Get Advice"
// 					onPress={getAdvice} color={Colors.Blue} />
// 				<Text style={styles.advice}>{advice}</Text>
// 				<Button title="Post Data"
// 					onPress={postDataUsingSimplePostCall} color={Colors.Blue} />
// 			</View>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		marginVertical: 20
// 	},
// 	advice: {
// 		fontSize: 20,
// 		fontWeight: "bold",
// 		marginHorizontal: 20,
// 		marginVertical: 20,
// 	},
// });


import React, { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity, } from "react-native";
import axios from "axios";
import { Colors } from "../../styles/colors";
import { Font } from "../../common/Fonts";
import { commonStyle } from "../../styles/commonStyle";

const baseUrl = "https://reqres.in";

const todo = {
	id: 10,
	title: 'go to gym',
	body: 'practicing sport is very important',
	userId: 2,
};

export default function App() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onChangeNameHandler = (fullName) => {
		setFullName(fullName);
	};

	const onChangeEmailHandler = (email) => {
		setEmail(email);
	};

	const postMethod = () => {
		const headers = { 'header-name': 'value' };
		const config = { headers, };
		axios
			.post(`${baseUrl}/api/users`, {
				fullName,
				email,
				config
			})
			.then((response) => {
				console.log(response.status);
				console.log(response.data);
			})
			.catch((e) => console.log('something went wrong :(', e));
	};

	const putMethod = () => {
		const headers = { 'header-name': 'value' };
		const config = { headers, };
		axios
			.put('https://jsonplaceholder.typicode.com/posts/10',
				todo,
				config
			)
			.then((response) => {
				console.log(response.status);
				console.log(response.data);
			})
			.catch((e) => console.log('something went wrong :(', e));
	};

	const deleteMethod = () => {
		axios
			.delete('https://jsonplaceholder.typicode.com/posts/10')
			.then((response) => {
				console.log('responce--->', response.status);
			})
			.catch((e) => console.log('something went wrong!', e));
	}

	const onSubmitFormHandler = async (event) => {
		if (!fullName.trim() || !email.trim()) {
			alert("Name or Email is invalid");
			return;
		}
		setIsLoading(true);
		try {
			const response = await axios.delete(`${baseUrl}/api/users/2`, {
				fullName,
				email,
			});
			if (response.status === 204) {
				alert(` You have deleted: ${JSON.stringify(response.data)}`);
				setIsLoading(false);
				setFullName('');
				setEmail('');
			} else {
				throw new Error("Failed to delete resource");
			}
		} catch (error) {
			alert("Failed to delete resource");
			setIsLoading(false);
		}
	};

	return (
		<ScrollView contentContainerStyle={[styles.container, commonStyle.alignCenter]}>
			<View >
				<View style={styles.wrapper}>
					{isLoading ? (
						<Text style={styles.formHeading}> Creating resource </Text>
					) : (
						<Text style={styles.formHeading}>Create new user</Text>
					)}
				</View>
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Full Name"
						placeholderTextColor="#ffffff"
						style={styles.input}
						value={fullName}
						editable={!isLoading}
						onChangeText={onChangeNameHandler}
					/>
				</View>
				<View style={styles.wrapper}>
					<TextInput
						placeholder="Your Email"
						placeholderTextColor="#ffffff"
						style={styles.input}
						value={email}
						editable={!isLoading}
						onChangeText={onChangeEmailHandler}
					/>
				</View>
				<View>
					<TouchableOpacity
						onPress={onSubmitFormHandler}
						disabled={isLoading}
						style={styles.Btn}
					>
						<Text style={styles.btnText}>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.Green,
	},
	formHeading: {
		color: "#ffffff",
		fontSize: 20,
		fontFamily: Font.CarosSoftBold,
	},
	wrapper: {
		marginBottom: 10,
	},
	input: {
		borderWidth: 2,
		borderColor: Colors.White,
		minWidth: 250,
		textAlignVertical: "center",
		paddingLeft: 10,
		borderRadius: 15,
		color: "#ffffff",
	},
	Btn: {
		backgroundColor: Colors.White,
		borderRadius: 15
	},
	btnText: {
		marginVertical: 15,
		textAlign: 'center',
		color: Colors.Black,
		fontFamily: Font.CarosSoftBold
	},
});