import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
const s = require('../stylesheet.js');

export function PrimaryInput(props) {
    return (
        <View style={s.formComponent}>
            <Text style={s.formComponentHeader}>Email</Text>
            <TextInput
                style={s.formComponentInput}
                placeholder = "Enter your email address"
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}
