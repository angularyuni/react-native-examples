import React, {
    StyleSheet
} from 'react-native';

export const Style = StyleSheet.create({
    Contents : {
        flex : 1,
    },
    contentContainerStyle: {
        padding:10,
        //justifyContent : "center",
        //alignItems: "center",
        borderWidth: 1
    },
    textInfo : {
        fontSize : 20,
        color: "#555"
    },
    Box : {
        padding: 20,
        borderWidth: 1,
        borderColor: "#bbb",
        flex: 1
    },
    textInput : {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#bbb",
        height: 44,
        paddingHorizontal: 10,
        color : "#999",

    }
})

