import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const s = StyleSheet.create({
    formComponent: {
        marginTop: 30
    },
    formComponentHeader: {
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 5
    },
    formComponentInput: {
        height: 30,
        borderColor: '#757575',
        borderWidth: 0,
        borderBottomWidth: 2
    },
});

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
