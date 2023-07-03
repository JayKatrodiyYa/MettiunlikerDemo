import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

export const commonStyle = StyleSheet.create({
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    m_20: {
        marginHorizontal: s(20)
    }
})