import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

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
        marginBottom: 20,
        overflow: "hidden"
    },
    profileIcon: {
        flex:0,
        height:40,
        width: 40,
        borderRadius: 5,
        resizeMode: 'contain',
    },
    textContainer: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
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

export function EventCard(props) {
    return (
        <View style={s.card}>

            <Image
                source={{uri: 'https://www.dominicswaine.com/placeholder.jpg'}}
                style={{aspectRatio: 1.78, backgroundColor:"#0f2c43"}}
                imageResizeMode={"cover"} />

            <View style={{padding:10, flexDirection:'row'}}>
                <View style={{marginLeft:5, marginRight: 5, flex:0, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={s.title}>2</Text>
                    <Text style={{fontSize: 12, color: "#F44336"}}>SEP</Text>
                </View>
                <View style={s.textContainer}>
                    <Text style={s.title}>KCL Law Society</Text>
                    <Text style={s.subtitle}>Yesterday</Text>
                </View>
            </View>


        </View>
    );
}
