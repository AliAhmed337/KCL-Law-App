import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PrimaryButton} from "../PrimaryButton";

const s = StyleSheet.create({
    formComponent: {
        marginTop: 30
    }
});

export function FormComponentButton(props) {
    return (
        <View style={s.formComponent}>
            <PrimaryButton onPress={props.onPress}>{props.children}</PrimaryButton>
        </View>
    );
}
