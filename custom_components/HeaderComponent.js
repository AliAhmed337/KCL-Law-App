import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const s = StyleSheet.create({
    welcomeShield: {
        height:65,
        width: 65,
        resizeMode: 'contain',
        marginBottom: 4
    },
    letsGetStarted: {
        fontSize: 32,
        fontWeight: '600'
    },
    welcomeText: {
        fontSize: 17,
        fontWeight: '500'
    }
});

export function HeaderComponent(props) {
    return (
        <View style={{flexDirection:'row', marginBottom:15}}>
            <View style={{flex:0, width:65}}>
                <Image style={s.welcomeShield} source={require("../assets/images/shield.png")}/>
            </View>
            <View style={{flex:1, marginLeft:15, flexDirection: 'column', justifyContent: 'center'}} >
                { props.pageName &&
                        <View>
                            <Text style={s.welcomeText}>KCL Law Society</Text>
                            <Text style={s.letsGetStarted}>{props.pageName}</Text>
                        </View>
                }
            </View>
        </View>
    );
}
