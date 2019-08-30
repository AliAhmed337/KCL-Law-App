import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Constants from "expo-constants";

const s = StyleSheet.create({
    primaryButton: {
        marginTop: 5,
        backgroundColor: '#143D69',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        color: 'white',
        fontSize: 18,
        fontWeight: 600,
        overflow: 'hidden',
        padding: 10,
        textAlign:'center',
    },
});

export function PrimaryButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text style={s.primaryButton}>Continue</Text>
        </TouchableOpacity>
    );
}
