import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PrimaryButton} from "../PrimaryButton";
const s = require('../../stylesheet.js');

export function FormComponentButton(props) {
    return (
        <View style={s.formComponent}>
            <PrimaryButton onPress={props.onPress}>{props.children}</PrimaryButton>
        </View>
    );
}
