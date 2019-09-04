import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
const s = require('../stylesheet.js');

export function PrimaryInput(props) {
    return (
        <View style={s.formComponent}>
            <Text style={s.formComponentHeader}>{props.label}</Text>
            <TextInput
                style={s.formComponentInput}
                placeholder = {"Please enter your " + props.label}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}
