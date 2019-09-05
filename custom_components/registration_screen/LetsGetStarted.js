import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const s = StyleSheet.create({
    welcomeShield: {
        height:65,
        width: 65,
        resizeMode: 'contain',
        marginBottom: 10
    },
    letsGetStarted: {
        fontSize: 32,
        marginBottom: 10,
        fontWeight: '600'
    },
    welcomeText: {
        fontSize: 17,
        fontWeight: '500'
    }
});

export function LetsGetStarted(props) {
    return (
        <View>
            <Image style={s.welcomeShield} source={require("../../assets/images/shield.png")}/>
            <View>
                <Text style={s.letsGetStarted}>Let's get started</Text>
                <Text style={s.welcomeText}>Log in, or sign up, to discover KCL Law Society</Text>
            </View>
        </View>
    );
}