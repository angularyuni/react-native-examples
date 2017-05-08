import React, {
    StyleSheet
} from 'react-native';

export const Style = StyleSheet.create({
    Contents : {
        flex : 1,
        padding:10
    },
    PickerWrap : {
        backgroundColor: "#8adbff",
        justifyContent: "center",
        alignItems:"center",
        flex:1
    },
    Picker : {
        width: 300,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: "#fff",
        flex:1
    }
})