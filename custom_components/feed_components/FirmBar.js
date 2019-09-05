import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const s = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#EEEEEE",
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        margin:0,
        marginBottom: 20
    },
    profileIcon: {
        flex:0,
        height:40,
        width: 40,
        borderRadius: 5,
        resizeMode: 'contain',
    },
    textContainer: {flex:1, flexDirection: 'column', justifyContent: 'center', marginLeft: 15},
    title: {
        fontSize: 20
    },
    subtitle: {
        color: "#757575",
        fontSize: 12
    },
    bodyContent: {
        padding:10, paddingBottom: 12
    }
});

export function FirmBar(props) {
    return (
        <View style={{padding:15, flexDirection:'row', borderTopWidth:1, borderColor: "#e0e0e0"}}>
            <Image style={s.profileIcon} source={require("../../assets/images/kclls_profile.jpg")}/>
            <View style={s.textContainer}>
                <Text style={s.title}>KCL Law Society</Text>
                <Text style={s.subtitle}>Yesterday</Text>
            </View>
        </View>
    );
}