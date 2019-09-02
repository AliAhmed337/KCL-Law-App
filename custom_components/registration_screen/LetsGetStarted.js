import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const s = require('../../stylesheet.js');

export function LetsGetStarted(props) {
    return (
        <View>
            <Image style={s.welcomeShield} source={require("../../assets/images/shield.png")}/>
            <Text style={s.letsGetStarted}>Let's get started</Text>
            <Text style={s.welcomeText}>Log in, or sign up, to discover KCL Law Society</Text>
        </View>
    );
}
