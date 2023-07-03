import AsyncStorage from "@react-native-async-storage/async-storage";

export const readData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (error) {
        return error;
    }
}

export const sendData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (err) {
    }
}