import React, {
    StyleSheet
} from 'react-native';

export const Style = StyleSheet.create({
    Contents : {
        flex : 1,
        padding:10,
        backgroundColor: '#eee'
    },
    Item : {
           borderWidth: 1,
           backgroundColor: '#fff',
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    },
    Btn: {},
    BtnText: {
        paddingLeft: 20,
        marginTop: 4,
        marginBottom: 4,
        fontSize: 12
    }
})